let player = document.getElementById("imgshow");
let comp = document.getElementById("imgshow2");
let res = document.getElementById("Result");
let playerVal;

function pkPapel(){
    playerVal = 0;
    player.src = "paper.png";
}

function pkGunting(){
    playerVal = 1;
    player.src = "Scissors.png";
}

function pkBato(){
    playerVal = 2;
    player.src = "rock.png";
}

function play(){

    let num = Math.random()
    let randomNumber = num * 3;
    let randomDown = Math.floor(randomNumber);

    if(randomDown === 0){
        comp.src = "paper.png";
        console.log(randomDown);

        if(playerVal == 0){
            res.innerHTML = "DRAW";
        }if(playerVal == 1){
            res.innerHTML = "YOU WIN";
        }if(playerVal == 2){
            res.innerHTML = "YOU LOSE";
        }
    }

    if(randomDown === 1){
        comp.src = "Scissors.png";
        console.log(randomDown);

        if(playerVal == 0){
            res.innerHTML = "YOU LOSE";
        }if(playerVal == 1){
            res.innerHTML = "DRAW";
        }if(playerVal == 2){
            res.innerHTML = "YOU WIN";
        }
    }

    if(randomDown === 2){
        comp.src = "rock.png";
        console.log(randomDown);

        if(playerVal == 0){
            res.innerHTML = "YOU WIN";
        }if(playerVal == 1){
            res.innerHTML = "YOU LOSE";
        }if(playerVal == 2){
            res.innerHTML = "DRAW";
        }
    }
   
}
