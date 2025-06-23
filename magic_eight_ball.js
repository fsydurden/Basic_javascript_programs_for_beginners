let userName = 'obama';
userN
ame ? console.log(`Hello, ${userName}`) :console.log('Hello!');
const userQuestion = '\nWill Trump  win the  2024 elections';
/*userQuestion = */
console.log(`\nHey what do you want to ask ${userName}?
${userQuestion}
`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
//console.log(eightBall);
switch(randomNumber){
  case 0:
  eightBall='It is certain';
  break;
  case 1:
  eightBall='It is decidedly so';
  break;
  case 2:
   eightBall='Reply hazy try again';
  break;
  case 3:
   eightBall='Cannot predict now';
  break;
  case 4:
   eightBall='Do not count on it';
  break;
  case 5:
   eightBall='My sources say no';
  break;
  case 6:
   eightBall='Outlook not so good';
  break;
  case 7:
   eightBall='Signs point to yes';
  break;
  default:
  console.log('invalid Number');
  break;
}
console.log(eightBall);
