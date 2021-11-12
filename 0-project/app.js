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
// const oldPath = path.join(usingDir, "");
// const newPath = path.join(targetDir, "")

// fs.rename(oldPath, newPath, function(files) {

// })

fs.readdir(folder, (err, files) => {
  files.forEach(file => {
    const spt = file.split('.');
    const length = spt.length
    if (spt[length-1] === 'png' || spt[length-1] === 'jpg') {
      console.log(file);
    } else if (spt[length-1] === 'mp4' || spt[length-1] === 'mov') {
      console.log(file);
    } else if (spt[length-1] === 'aae') {
      console.log(file);
    }
  })
})

function move(file, )


//  해당 확장자 파일들을 분류 후 원하는 폴더로 이동시켜야됨,, 그렇다면 그 확장자에 맞는 파일들을 어떻게 분류할 것이냐..


// const arr = ['mp4', 'mov', 'png', 'jpg', 'IMG_', 'IMG_E'];
// const videoFile = arr[0];
//   console.log(videoFile);

//   const video = path.extname('b.mov') && path.extname('a.mp4')
// console.log(video);




// const videoFile =  arr[ i < 2]
// console.log(videoFile);

// fs.rename(oldPath, newPath, function(err) {
//   if(err) {
  //     throw err
//   } else {
//     console.log('sucess');
//   }
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