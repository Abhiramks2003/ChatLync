const fs = require('fs');
const path = require('path');

// Specify the path to the directory you want to get information for
const directoryPath = 'D:/Chatlync/chatlync';

// Get directory size recursively
function getDirectorySize(directoryPath, callback) {
  let totalSize = 0;

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      callback(err, null);
      return;
    }

    let pending = files.length;

    if (pending === 0) {
      callback(null, totalSize);
      return;
    }

    files.forEach(function (file) {
      const filePath = path.join(directoryPath, file);

      fs.stat(filePath, function (err, stats) {
        if (err) {
          callback(err, null);
          return;
        }

        if (stats.isDirectory()) {
          getDirectorySize(filePath, function (err, subdirectorySize) {
            if (err) {
              callback(err, null);
              return;
            }

            totalSize += subdirectorySize;
            pending--;

            if (pending === 0) {
              callback(null, totalSize);
            }
          });
        } else {
          totalSize += stats.size;
          pending--;

          if (pending === 0) {
            callback(null, totalSize);
          }
        }
      });
    });
  });
}

// Get directory information
getDirectorySize(directoryPath, function (err, totalSize) {
  if (err) {
    console.error('Error:', err);
    return;
  }

  // Convert bytes to human-readable format
  function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Display the directory information
  console.log('Directory Path:', directoryPath);
  console.log('Total Size:', formatBytes(totalSize));
});
