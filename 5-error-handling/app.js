import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

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
app.get('/file2', (req, res) => {
  fsAsync.readFile('/file.txt').catch((error) => res.status(404).send('File not found'));
});

app.get('/file3', async (req, res) => {
  try {
  const data = await fsAsync.readFile('/file.txt');
  } catch(error) {
    res.status(404).send('File3 not found')
  }
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
})

app.listen(8080);


