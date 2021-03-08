const response = {
  create: (code, message, data) => {
    return {
      status: 'success',
      code: code,
      message: message,
      data: data
    };
  },
  buildError: e => {
    return {
      status: 'failed',
      code: e.code,
      message: e.message,
    };
  }
};

module.exports = response;
