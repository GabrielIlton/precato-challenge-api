import { HttpResponseSuccess } from './Http';

export interface Controller<InputDTO = any, OutputDTO = any> {
  handle: (request: InputDTO) => Promise<HttpResponseSuccess<OutputDTO>>
};
