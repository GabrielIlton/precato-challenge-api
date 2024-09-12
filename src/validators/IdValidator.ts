export class IdValidator {
  validate(id: string): boolean {
    return !new RegExp(/\D/).test(id);
  };
};
