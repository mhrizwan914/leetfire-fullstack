export default class api_response {
  constructor(status_code, data, message = "Success") {
    this.status_code = status_code;
    this.data = data;
    this.message = message;
    this.success = status_code < 400;
  }
}
