const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];
    if (validChoices.includes(userInput)) {
      return userInput;
    } else {
      console.log('Error: Invalid input');
      return null;
    }
  };
  
  const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie';
    }
  
    if ((userChoice === 'rock' && computerChoice === 'scissors')
        (userChoice === 'paper' && computerChoice === 'rock') 
        (userChoice === 'scissors' && computerChoice === 'paper')) {
      return 'Human Wins!';
    } else {
      return 'Computer Wins!';
    }
  };

  const handleButtonClick = (userChoice) => {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    window.alert(`You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`);
  };

  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = getUserChoice(button.getAttribute('data-choice'));
        if (userChoice) {
            handleButtonClick(userChoice);
        }
    });
  });

