export interface InputGetMessagesByStatusDTO {
  status: string
};

export interface OutputGetMessagesByStatusDTO {
  messages: BaseMessage[]
};

interface BaseMessage {
  id: number
  phone: string
  message: string
  status: string
  createdAt: Date
  updatedAt: Date
};
