const path = require('path');
const process = require('process');
const os = require('os');
const fs = require('fs');

// 1. 사용자가 원하는 폴더의 이름을 받아온다
const folder = process.argv[2];
console.log(folder);
const workingDir = path.join(__dirname, '.', folder);
// ==은 같다, !=는 다르다, &&은 and, ||는 or, !은 not
if (!folder || !fs.existsSync(workingDir)) {
  console.error("It's not folder name");
}

// 2. 그 폴더안에 video, captured, duplicated 폴더생성
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

// 해당 경로가 존재하지않으면 원하는 폴더생성, 존재하면 무시
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 3. 폴더안에 있는 파일들 중 mp4|mov, png|aae, IMG_1234(IMG_E1234) 해당 확장자 파일 발견시 원하는 폴더로 이동

fs.promises
  .readdir(workingDir) //
  .then(processFiles)
  .catch(console.log);

  function processFiles(files) {
    files.forEach((file) => {
      if(isVideoFile(file)) {
        move(file, videoDir)
      } else if(isCapturedFile(file)) {
        move(file, capturedDir)
      } else if(isDuplicatedFile(files, file)) {
        move(file, duplicatedDir)
      }
    })
  }

function isVideoFile(file) {
  const reqExp = /(mp4|mov)$/gm; // extname 으로 활용해보기
  const match = file.match(reqExp);
  return !!match // match = 문자열이 정규식과 매치되는 부분을 검색
}
function isCapturedFile(file) {
  const reqExp = /(png|aae)$/gm;
  const match = file.match(reqExp);
  return !!match;
}
function isDuplicatedFile(files, file) {
 // 해당 문장(파일 이름 등)이 탐색할 문자열로 시작하는지 확인
  if(!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
    return false;
  }

  const edited = `IMG_E${file.split('_')[1]}`;
  // find : 주어진 판별 함수를 만족하는 첫번째 요소의 값을 반환
  const found = files.find( f => f.includes(edited));
  return !!found
}

function move(file, targetDir) {
  // console.info(`move ${file} to ${path.basename(targetDir)}`)
    const oldPath = path.join(workingDir, file);
    const newPath = path.join(targetDir, file)
  fs.promises
    .rename(oldPath, newPath) //
    .catch(console.error)
}
