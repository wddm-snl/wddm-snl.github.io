// player rolls dice 

// player moves the amount of cells given by the dice 

// board checks if the player falls on a normal cell, snake or ladder

// if player falls on ladder, move the player upwards

// if player falls on snake, move the player down

/////// DICE FUNCTION ///////

const htmlDice = document.getElementById(`dice`);
const htmlButton = document.getElementById(`button`);

// htmlDice.innerHTML = (`dsadada`)


htmlButton.addEventListener(`click`, o => {
   htmlDice.innerHTML = roll();
 
});


const roll = () => {
 return Math.floor(Math.random() * 6 + 1);
};

///// END OF DICE FUNCTION ////////////