// 계획

// 1. 사용자가 원하는 폴더의 이름을 받아온다
const path = require('path');
const process = require('process');
const os = require('os');
const fs = require('fs');

const folder = process.argv[2];
// Pictures 라는 폴더 안에서 작업
const workingDir = path.join(os.homedir(), 'Pictures', folder);
if (!folder || !fs.existsSync(workingDir)) {
  console.error('Please enter folder name in Pictures');
  return;
}

// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다.
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

// 해당 경로가 존재하지 않으면 만들고 존재하면 무시
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

