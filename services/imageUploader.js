const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const uploadImage = async buffers => {
  const params = buffers.map(buffer => {
    return {
      Bucket: process.env.S3_BUCKET,
      ContentEncoding: 'base64',
      ContentDisposition: 'inline',
      ContentType: 'image/jpeg',
      Key: `${[...buffer].slice(0, 3)}`, // File name you want to save as in S3
      Body: buffer,
    };
  });

  try {
    const responses = await Promise.all(
      params.map(param => s3.upload(param).promise())
    );
    return responses.map(response => response.Location);
  } catch (e) {
    console.error(e);
  }
};

module.exports = uploadImage;
