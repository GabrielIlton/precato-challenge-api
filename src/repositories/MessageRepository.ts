import { MessageEntity } from '../entities';
import { Repository } from './Repository';


export class MessageRepository extends Repository<MessageEntity> {
  constructor() { super(MessageEntity); };
};
