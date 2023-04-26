import readlineSync from 'readline-sync';

export default function gameEven() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');

    if (
      (number % 2 === 0 && answer === 'yes') ||
      (number % 2 !== 0 && answer === 'no')
    ) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${
          number % 2 === 0 ? 'yes' : 'no'
        }'.`
      );
      console.log(`Let's try again, ${name}!`);
      correctAnswers = 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
