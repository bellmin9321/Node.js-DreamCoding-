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
const videoDir = path.join(usingDir, 'video');
const duplicatedDir = path.join(usingDir, 'duplicated');
const capturedDir = path.join(usingDir, 'captured');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir)
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir)
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir)



// ---------------------------------------------------------
// function mkdir (dirPath) {
//   const isExists = fs.existsSync(dirPath);
//   if (!isExists) {
//     fs.mkdirSync( dirPath, { recursive: true});
//   }
// }

// const png = path.extname('captured.png')
// console.log(png);