class ApiError extends Error {
  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static BadRequestError(message, errors = []) {
    return new ApiError(400, message, errors);
  }
}

module.exports = ApiError;
