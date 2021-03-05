const AWS = require('aws-sdk');

module.exports = {
  upload: async parsedImage => {
    const s3 = new AWS.S3({
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
    });

    const params = {
      Bucket: process.env.S3_BUCKET,
      ContentEncoding: 'base64',
      ContentDisposition: 'inline',
      ContentType: 'image/jpeg',
      Key: `${parsedImage[2].gallery_id}/${Date.now()}.${parsedImage[1]}`,
      Body: parsedImage[0],
    };

    try {
      const s3upload = await s3.upload(params).promise();
      return Object.assign(parsedImage[2], { image_url: s3upload.Location });
    } catch (e) {
      console.error(e);
    }
  },
  delete: async image_urls => {
    const s3 = new AWS.S3({
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
    });

    const params = image_urls.map(image_url => {
      return {
        Bucket: process.env.S3_BUCKET,
        Key: image_url.split('/').slice(2).slice(-2).join('/'),
      };
    });

    try {
      Promise.all(params.map(param => s3.deleteObject(param).promise()));
    } catch (e) {
      console.error(e);
    }
  },
};
