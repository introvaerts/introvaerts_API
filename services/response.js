const response = {
  signupResponse: (token, message) => {
    return {
      status: 'success',
      code: 201,
      message: message,
      token: token,
    };
  },
  buildError: e => {
    return {
      status: 'failed',
      code: e.code,
      message: e.message,
    };
  },
  galleryResponse: (gallery, message) => {
    return {
      status: 'success',
      code: 200,
      message: message,
      gallery: gallery,
    };
  },
  galleryWithImagesResponse: (gallery, images, message) => {
    return {
      status: 'success',
      code: 200,
      message: message,
      gallery: gallery,
      images: images
    };
  },
  subdomainResponse: (subdomain, galleries, message) => {
    return {
      status: 'success',
      code: 201,
      message: message,
      subdomain: subdomain,
      galleries: galleries
    };
  },
  subdomainUpdate: (subdomain, message) => {
    return {
      status: 'success',
      code: 204,
      message: message,
      subdomain: subdomain,
    };
  },
  loginResponse: (token, message) => {
    return {
      status: 'success',
      code: 200,
      message: message,
      token: token,
    };
  },
  uploadImage: (image, message) => {
    return {
      status: 'success',
      code: 201,
      message: message,
      image: image,
    };
  },
  deleteImage: message => {
    return {
      status: 'success',
      code: 204,
      message: message,
    };
  },
  deleteGallery: message => {
    return {
      status: 'success',
      code: 204,
      message: message,
    };
  }
};

module.exports = response;
