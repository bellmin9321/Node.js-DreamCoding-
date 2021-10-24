const fs = require('fs');
const path = require('path')

function mkdir (dirPath) {
  const isExists = fs.existsSync(dirPath);
  if (!isExists) {
    fs.mkdirSync( dirPath, { recursive: true});
  }
}

mkdir('./test/captured');
// mkdir('./test/duplicated');
// mkdir('./test/video');

const currentPath = path.join(__dirname, "test", "captured.png");
const newPath = path.join(__dirname, "test/captured", 'captured.png');

fs.rename(currentPath, newPath, function(err) {
  if (err) {
    throw err 
  } else {
    console.log("png file moved in captured");
  }
});


console.log(__dirname);