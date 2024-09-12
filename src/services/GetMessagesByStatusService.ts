import { MoreThan } from 'typeorm';

import { MessageRepository } from '../repositories';
import { MessageEntity } from '../entities';

export class GetMessagesByStatusService {
  constructor(private messageRepository: MessageRepository) {};

  async handle(status: string): Promise<MessageEntity[]> {
    const last24Hours = new Date();
    last24Hours.setDate(last24Hours.getDate() - 1);

    const select = ['id', 'phone', 'message', 'status', 'createdAt', 'updatedAt'];

    return this.messageRepository.findAll({ status, updatedAt: MoreThan(last24Hours) }, select);
  }
}
