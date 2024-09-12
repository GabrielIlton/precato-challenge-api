import { MessageRepository } from '../repositories';

import { Errors, HttpHelper } from '../helpers';

export class UpdateMessageStatusService {
  constructor(
    private messageRepository: MessageRepository,
    private readonly httpHelper: HttpHelper
  ) {};

  async handle(messageId: number, status: string): Promise<void> {
    const message = await this.messageRepository.findOne({ id: messageId });
    if (!message) throw this.httpHelper.badRequest(Errors.notFound('Mensagem'));

    await this.messageRepository.update({ id: messageId }, { status });
  }
}
