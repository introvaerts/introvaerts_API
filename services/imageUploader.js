const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const s3 = new AWS.S3();

const uploadImage = fileName => {
  // Setting up S3 upload parameters
  const params = {
    Bucket: 'elasticbeanstalk-eu-central-1-246629646731',
    ContentEncoding: 'base64',
    ContentDisposition: 'inline',
    ContentType: 'image/jpeg',
    Key: 'server.js', // File name you want to save as in S3
    Body: fileName,
  };

  console.log(params);

  // Uploading files to the bucket
  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(`File uploaded successfully. ${data.Location}`);
    }
  });
};

module.exports = uploadImage;
