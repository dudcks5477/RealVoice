const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/users', (req, res) => {
  const {phoneNumber, verificationCode} = req.body;
  console.log('전화번호', phoneNumber);

  if (verifyCode(phoneNumber, verificationCode)) {
    res.status(200).json({message: '회원가입 성공'});
  } else {
    res.status(400).json({message: '회원가입 실패'});
  }
});

app.post('/api/resend-verification', (req, res) => {
  res.status(200).json({message: '재전송이 성공적으로 요청되었습니다.'});
});

app.post('/api/nickname', (req, res) => {
  const {nickName} = req.body;
  console.log('닉네임:', nickName);

  if (verifyName(nickName)) {
    res.status(200).json({message: '닉네임 저장 성공'});
  } else {
    res.status(400).json({message: '닉네임 저장 실패'});
  }
});

function verifyCode(phoneNumber, verificationCode) {
  const storedVerificationCode = '123456';
  return verificationCode === storedVerificationCode;
}

function verifyName(nickName) {
  return nickName && nickName.length >= 2;
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
