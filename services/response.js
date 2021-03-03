const response = {
  signupResponse: (token, message) => {
    return {
      status: "success",
      code: 201,
      message: message,
      token: token
    }
  },
  buildError: (e) => {
    return {
      status: "failed",
      code: e.code,
      message: e.message,
    }
  },
  loginResponse: (token, message) => {
    return {
      status: "success",
      code: 200,
      message: message,
      token: token
    }
  },
  uploadImage: (image, message) => {
    return {
      status: "success",
      code: 201,
      message: message,
      image: image
    }
  }
}

module.exports = response;