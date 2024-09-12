import { InputGetMessagesByStatusDTO, OutputGetMessagesByStatusDTO } from "../dtos";

import { GetMessagesByStatusController } from "../controllers";

import { GetMessagesByStatusService } from "../services";

import { MessageRepository } from "../repositories";

import { StatusValidator } from "../validators";

import { Controller } from "../protocols";

import { HttpHelper } from "../helpers";

export const makeGetMessageByStatusController = (): Controller<InputGetMessagesByStatusDTO, OutputGetMessagesByStatusDTO> => {
  const messageRepository = new MessageRepository();
  const getMessagesByStatusService = new GetMessagesByStatusService(messageRepository);
  const statusValidator = new StatusValidator();
  const httpHelper = new HttpHelper<OutputGetMessagesByStatusDTO>();

  return new GetMessagesByStatusController(getMessagesByStatusService, statusValidator, httpHelper);
};
