import { InputGetMessagesByStatusDTO, OutputGetMessagesByStatusDTO } from '../dtos';

import { Controller, HttpResponseSuccess } from '../protocols';

import { GetMessagesByStatusService } from '../services';

import { Errors, HttpHelper } from '../helpers';

import { StatusValidator } from '../validators';

import { MessageStatus } from '../entities';

export class GetMessagesByStatusController implements Controller<InputGetMessagesByStatusDTO, OutputGetMessagesByStatusDTO> {
  constructor(
    private readonly getMessagesByStatusService: GetMessagesByStatusService,
    private readonly validateStatus: StatusValidator,
    private readonly httpHelper: HttpHelper
  ) { };

  async handle(request: InputGetMessagesByStatusDTO): Promise<HttpResponseSuccess<OutputGetMessagesByStatusDTO>> {
    let { status = '' } = request;

    status = status.toUpperCase();

    const statusIsValid = this.validateStatus.validate(status);
    if (!statusIsValid) throw this.httpHelper.badRequest(Errors.acceptOnly("Status", `${MessageStatus.RECEBIDO} | ${MessageStatus.ENVIADO} | ${MessageStatus.ERRO_DE_ENVIO}`));

    const messages = await this.getMessagesByStatusService.handle(status);
    
    return this.httpHelper.ok({ messages });
  };
};
