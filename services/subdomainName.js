const shortid = require('shortid')

module.exports = (email) => {
  const autoId = shortid.generate().toLowerCase();
  const prefix = email.split("@")[0].replace(/[^a-zA-Z0-9]/g, "");
  return  prefix + "-" + autoId;
}

