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
const currentPath = path.join(__dirname, "test", "jpg");
const newPath = path.join(__dirname, "test/captured", "jpg");

fs.rename(currentPath, newPath, function(err) {
  if (err) {
    throw err 
  } else {
    console.log("png file moved in captured");
  }
});

console.log(__dirname);

// rename 이용
// try {
//   fs.renameSync(currentPath, newPath)
//   console.log("Successfully moved the file!")
// } catch(err) {
//   throw err
// }