const fs = require('fs');
const path = require('path')

// 작업 폴더 설정
const folder = 'pics';
const usingDir = path.join(__dirname, folder);
if (!folder || !fs.existsSync(usingDir)) {
  console.error('작업폴더가 아니야');
  return;
}

// video, duplicated, captured 폴더 생성
const videoDir = path.join(__dirname, 'video');
const duplicatedDir = path.join(__dirname, 'duplicated');
const capturedDir = path.join(__dirname, 'captured');

if(!fs.existsSync(videoDir)) {
  fs.mkdir(videoDir)
  console.log('video dir');
}
// const videoDir = fs.mkdir(path.join(__dirname, 'video'), (e) => {
//   if(!path.existsSync(videoDir)) {
//     !videoDir
//   }
//   console.log('video 폴더 생성');
// })



// ---------------------------------------------------------
// function mkdir (dirPath) {
//   const isExists = fs.existsSync(dirPath);
//   if (!isExists) {
//     fs.mkdirSync( dirPath, { recursive: true});
//   }
// }

// const png = path.extname('captured.png')
// console.log(png);