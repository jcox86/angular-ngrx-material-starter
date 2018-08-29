export class IApiError {
  header: string;
  description: string;

  constructor() {
    this.header = '';
    this.description = '';
  }
}
