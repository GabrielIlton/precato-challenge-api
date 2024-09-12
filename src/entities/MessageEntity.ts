import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum MessageStatus {
  ENVIADO = 'ENVIADO',
  RECEBIDO = 'RECEBIDO',
  ERRO_DE_ENVIO = 'ERRO DE ENVIO'
};

@Entity('sms_messages')
export class MessageEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 15 })
  phone: string;

  @Column({ type: 'varchar', length: 255 })
  message: string;

  @Column({ type: 'varchar', unique: false, nullable: true, enum: MessageStatus, default: '' })
  status: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
};
