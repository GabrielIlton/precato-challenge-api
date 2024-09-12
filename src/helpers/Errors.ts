export const Errors = {
  missingParamError: (fieldKey: string): string =>
    `${fieldKey[0].toUpperCase() + fieldKey.slice(1)} é obrigatório(a).`,

  notFound: (entity: string): string =>
    `${entity[0].toUpperCase() + entity.slice(1)} não encontrado(a).`,

  invalidField: (fieldKey: string): string =>
    `${fieldKey[0].toUpperCase() + fieldKey.slice(1)} inválido(a).`,

  acceptOnly: (fieldKey: string, correctType: any) =>
    `O campo ${fieldKey} aceita apenas ${correctType} em seus caracteres.`
};
