// 🎯 High-Low Number Guessing Game Starter
// You will use prompt(), alert(), and confirm() to make an interactive guessing game!

function playHighLowGame() {
  // Welcome message
  window.alert("🎮 Welcome to the High-Low Number Guessing Game!");
  window.alert("I'm thinking of a number between 1 and 100...");

  // TODO: Create a random number between 1 and 100 and store it in a variable called targetNumber
  // Example: const targetNumber = Math.floor(Math.random() * 100) + 1;
const targetNumber = Math.floor(Math.random() * 100) + 1;
console.log(targetNumber)
  // TODO: Create a variable to track how many guesses the player has made
let guesses = 0
  // Create a variable to store the player's current guess
  let guess = null;

  // TODO: Create a loop that keeps asking the player for a guess until they guess correctly
  // Use window.prompt() to ask for a number
while (guess !== targetNumber) {
  guess = parseInt(window.prompt("Guess a number between 1 - 100"));
  guesses++;

  if (guess > targetNumber) {
    window.alert("Too high! Try again.");
  } else if (guess < targetNumber){
    window.alert("Too low! Guess again.");
  } else if (guess == targetNumber){
    window.alert(`Congratulations, you guessed it! It took you ${guesses} tries.`);
    let choice = window.confirm("Would you like to play again?");
    if (choice) {
      playHighLowGame();
    } else {
      window.alert("Play again soon!")
    }
  } else {
    window.alert("Please enter a valid number.");
  }
}
  // Inside your loop:
  // 1️⃣ Convert the input to a number using parseInt()
  // 2️⃣ Check if the guess is too high, too low, or correct
  // 3️⃣ Use window.alert() to tell the player the result
  // 4️⃣ Count the number of attempts

  // TODO: When the player guesses correctly:
  // - Alert them that they won and show how many attempts it took
  // - Ask if they want to play again using window.confirm()
  // - If yes, call playHighLowGame() again
  // - If no, show a “Thanks for playing” message


}

// 🚀 Call the function to start the game
playHighLowGame();

