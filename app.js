const game = () => {
  let pScore = 0;
  let cScore = 0;

  //start game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button')
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn')
    });
  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button')
    const playerHand = document.querySelector('.player-hand')
    const computerHand = document.querySelector('.computer-hand')
    //computer options
    const computerOptions = ['rock', 'paper', 'scissors'];


    options.forEach((option) => {
      option.addEventListener('click', function() {
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        //compare hands

        //update image
        playerHand.src = `./assets/${this.textContent}.png`
        computerHand.src = `./assets/${computerChoice}.png`
      })
    });

  }

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner')

    //tie
    if (playerChoice === computerChoice){
      winner.textContent = 'It is a tie';
      return;
    }

    //rock
    if (playerChoice === 'rock'){
      if (computerChoice === 'scissors'){
        winner.textContent = 'Player Wins';
      } else {
        winner.textContent = 'Computer Wins';
      }
      return;
    }

    //paper
    if (playerChoice === 'paper'){
      if (computerChoice === 'rock'){
        winner.textContent = 'Player Wins';
      } else {
        winner.textContent = 'Computer Wins';
      }
      return;
    }

    //scissors
    if (playerChoice === 'scissors'){
      if (computerChoice === 'paper'){
        winner.textContent = 'Player Wins';
      } else {
        winner.textContent = 'Computer Wins';
      }
      return;
    }
  }

  //call functions
  startGame();
  playMatch();
  //updateScore();

};

//start the game function
game();
