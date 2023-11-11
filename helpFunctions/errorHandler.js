class ErrorHandler {
    sourceError;
    details;
    constructor(sourceError, details) {
      (this.sourceError = sourceError), (this.details = details);
    }
}

module.exports = ErrorHandler