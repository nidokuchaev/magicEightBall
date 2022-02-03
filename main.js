let userName = 'Dick';

userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');
//A ternary expression that checks username. If user didn't print it's username the programm prints "Hello!" 

const userQuestion = 'Does he loves me?';
//Questions asked this question

console.log(`The ${userName} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
//Random number generator. Imitates real Magic Eight Ball numbers

let eightBall = '';
switch (randomNumber){
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4: 
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7: 
  eightBall = 'Signs point to yes';
  break;
}
//A control flow that prints a phrase depending on random number

console.log(eightBall);
