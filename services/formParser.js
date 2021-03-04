const multiparty = require('multiparty');
const fs = require('fs');

const organizeData = unorganizedObject => {
  const organizedObject = {caption: {}};
  const captionKeys = ["title", "media", "year", "dimensions"]
  Object.keys(unorganizedObject).map(key => {
    if(captionKeys.includes(key)) {
      organizedObject.caption[key] = unorganizedObject[key][0];
    } else {
      organizedObject[key] = unorganizedObject[key][0];
    }
  });
  return organizedObject;
};

module.exports = {
  parseImage: async req => {
    const form = new multiparty.Form();

    const parsedImage = await new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) reject(err);
        else {
          const fileExt = files.image[0].originalFilename.split('.')[1];
          const imageFields = organizeData(fields);
          const path = files.image[0].path;
          const buffer = fs.readFileSync(path);
          resolve([buffer, fileExt, imageFields]);
        }
      });
    });
    return parsedImage;
  },
};
