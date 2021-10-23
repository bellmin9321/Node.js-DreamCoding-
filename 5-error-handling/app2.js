// 11.9 비동기 에러 처리 하는 방법
import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
// require('express-async-errors'); // CommonJS module
import {} from 'express-async-errors';

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
  // 동기
  try {const data = fs.readFileSync('/file.txt');} 
  catch(error) {
    res.send(404).send('File not found')
  }
  // 비동기
  fs.readFile('/file1.txt', (err, data) => {
    if(err) {
      res.status(404).send('File not found');
    }
  });
});

// promise(비동기)
app.get('/file2', (req, res, next) => {
  return fsAsync.readFile('/file.txt');
});

app.get('/file3', async (req, res) => {
  const data = await fsAsync.readFile('/file.txt');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
})

app.listen(8080);


