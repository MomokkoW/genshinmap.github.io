export class ObjectHashError extends Error {
  detail: any;

  constructor(detail: any) {
    super('Unable to hash object, did an input leak?');
    this.name = 'ObjectHashError';
    this.detail = detail;
  }
}
