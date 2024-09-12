import { MessageStatus } from "../entities";

export class StatusValidator {
  private validStatuses = [
    String(MessageStatus.ENVIADO),
    String(MessageStatus.RECEBIDO),
    String(MessageStatus.ERRO_DE_ENVIO)
  ];

  validate(status: string): boolean {
    return this.validStatuses.includes(status);
  };
};