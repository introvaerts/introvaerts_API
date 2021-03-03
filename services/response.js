const response = {
  buildResponse: (token, message) => {
    return {
      status: "success",
      code: 200,
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
  galleryResponse: (gallery, message) => {
    return {
      status: "success",
      code: 200,
      message: message,
      gallery: gallery
    }
  }
}

module.exports = response;