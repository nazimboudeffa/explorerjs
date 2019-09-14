const fs = require('fs')

module.exports = {

  listFilesSync : function (folder) {
    var files = fs.readdirSync(folder);
    return files;
  },

  showFileContentSync : function (file) {
    var data = fs.readFileSync(file, 'utf8');
    return data
  }

}
