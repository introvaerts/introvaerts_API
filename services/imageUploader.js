const AWS = require('aws-sdk');

const uploadImage = async parsedImage => {
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
};

module.exports = uploadImage;
