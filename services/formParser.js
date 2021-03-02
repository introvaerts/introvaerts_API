const multiparty = require('multiparty');
const fs = require('fs');

module.exports = {
  parseImage: async (req, res) => {
    const form = new multiparty.Form();

    const bufferArray = await new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) reject(err);
        else {
          const buffers = Object.values(files).map(image => {
            let path = image[0].path;
            const bufferFromFile = fs.readFileSync(path);
            return bufferFromFile;
          });
          resolve(buffers);
        }
      });
    });
    return bufferArray;
  },
};
