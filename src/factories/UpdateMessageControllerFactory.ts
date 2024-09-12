import { InputUpdateMessageDTO, OutputUpdateMessageDTO } from "../dtos";

import { StatusValidator, IdValidator } from "../validators";

import { UpdateMessageController } from "../controllers";

import { UpdateMessageStatusService } from "../services";

import { MessageRepository } from "../repositories";

import { Controller } from "../protocols";

import { HttpHelper } from "../helpers";


export const makeUpdateMessageControllerFactory = (): Controller<InputUpdateMessageDTO, OutputUpdateMessageDTO> => {
  const httpHelper = new HttpHelper<OutputUpdateMessageDTO>();
  const messageRepository = new MessageRepository();
  const updateMessageStatusService = new UpdateMessageStatusService(messageRepository, httpHelper);
  const statusValidator = new StatusValidator();
  const idValidator = new IdValidator();

  return new UpdateMessageController(updateMessageStatusService, statusValidator, idValidator, httpHelper);
};
