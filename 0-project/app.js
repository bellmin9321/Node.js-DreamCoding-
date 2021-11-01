const fs = require('fs');
const path = require('path');

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

// 해당 폴더로 원하는 mp4/mov, png/aae, IMG_XX/IMG_EXX파일 이동시키기
const oldPath = path.join(usingDir, "a.mp4");
const newPath = path.join(videoDir, "a.mp4")

fs.rename(oldPath, newPath, function(err) {
  if(err) {
    throw err
  } else {
    console.log('sucess');
  }
})



// ---------------------------------------------------------
// function mkdir (dirPath) {
//   const isExists = fs.existsSync(dirPath);
//   if (!isExists) {
//     fs.mkdirSync( dirPath, { recursive: true});
//   }
// }

// const png = path.extname('captured.png')
// console.log(png);