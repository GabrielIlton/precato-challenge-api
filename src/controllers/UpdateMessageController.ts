import { InputUpdateMessageDTO, OutputUpdateMessageDTO } from '../dtos';

import { Controller, HttpResponseSuccess } from '../protocols';

import { StatusValidator, IdValidator } from '../validators';

import { UpdateMessageStatusService } from '../services';

import { Errors, HttpHelper } from '../helpers';

import { MessageStatus } from '../entities';

export class UpdateMessageController implements Controller<InputUpdateMessageDTO, OutputUpdateMessageDTO> {
  constructor(
    private readonly updateMessageStatusService: UpdateMessageStatusService,
    private readonly validateStatus: StatusValidator,
    private readonly idValidator: IdValidator,
    private readonly httpHelper: HttpHelper
  ) { };

  async handle(request: InputUpdateMessageDTO): Promise<HttpResponseSuccess<OutputUpdateMessageDTO>> {
    let { status = '' } = request;
    const { id } = request;

    status = status.toUpperCase();
    
    const idIsValid = this.idValidator.validate(id);
    if (!idIsValid) throw this.httpHelper.badRequest(Errors.invalidField("Identificador"));
    
    const statusIsValid = this.validateStatus.validate(status);
    if (!statusIsValid) throw this.httpHelper.badRequest(Errors.acceptOnly("Status", `${MessageStatus.RECEBIDO} | ${MessageStatus.ENVIADO} | ${MessageStatus.ERRO_DE_ENVIO}`));
    
    const messageId = Number(id);
    
    await this.updateMessageStatusService.handle(messageId, status);
    
    return this.httpHelper.ok({ message: 'Status atualizado com sucesso.' });
  };
};
