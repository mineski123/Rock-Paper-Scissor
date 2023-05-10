let player = document.getElementById("imgshow");
let comp = document.getElementById("imgshow2");
let res = document.getElementById("Result");
let playerVal;
let winCount = 0;
let lossCount = 0;
let drawCount = 0;

function pkPapel() {
  playerVal = 0;
  player.src = "paper.png";
}

function pkGunting() {
  playerVal = 1;
  player.src = "Scissors.png";
}

function pkBato() {
  playerVal = 2;
  player.src = "rock.png";
}

function play() {
  let num = Math.random();
  let randomNumber = num * 3;
  let randomDown = Math.floor(randomNumber);

  if (randomDown === 0) {
    comp.src = "paper.png";
    console.log(randomDown);

    if (playerVal === 0) {
      res.innerHTML = "DRAW!";
      drawCount++;
    } else if (playerVal === 1) {
      res.innerHTML = "YOU WIN!";
      winCount++;
    } else if (playerVal === 2) {
      res.innerHTML = "YOU LOSE!";
      lossCount++;
    }
  }

  if (randomDown === 1) {
    comp.src = "Scissors.png";
    console.log(randomDown);

    if (playerVal === 0) {
      res.innerHTML = "YOU LOSE!";
      lossCount++;
    } else if (playerVal === 1) {
      res.innerHTML = "DRAW!";
      drawCount++;
    } else if (playerVal === 2) {
      res.innerHTML = "YOU WIN!";
      winCount++;
    }
  }

  if (randomDown === 2) {
    comp.src = "rock.png";
    console.log(randomDown);

    if (playerVal === 0) {
      res.innerHTML = "YOU WIN!";
      winCount++; //
    } else if (playerVal === 1) {
      res.innerHTML = "YOU LOSE!";
      lossCount++; //
    } else if (playerVal === 2) {
      res.innerHTML = "DRAW!";
      drawCount++; //
    }
  }
 // sa Console log makita gyapon ang records
  console.log("Wins: " + winCount + ", Losses: " + lossCount + ", Draws: " + drawCount);

 // Update the record counts on the page
  document.getElementById("winCount").textContent = winCount;
  document.getElementById("lossCount").textContent = lossCount;
  document.getElementById("drawCount").textContent = drawCount;
}

function checkWinner() {
  if (winCount === 5 || lossCount === 5) {
    const winner =
      winCount === 5
        ? "You win the game! Congratulations!"
        : "Computer wins the game! Try again next time!";
    alert(winner);
    return true;
  }
}