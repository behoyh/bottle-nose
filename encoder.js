var mime = require('mime-types')

module.exports = {
    encode: function (filename) {
      return  mime.lookup(filename);
    }
};