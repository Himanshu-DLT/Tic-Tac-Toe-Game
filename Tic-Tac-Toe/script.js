let boxes = document.querySelectorAll(".box");
let turnO = true;
let msg = document.querySelector(".hide");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new-game")

winningPatterns = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8]
];

const resetGame = () => {
      turnO = true;
      enableBoxes();
      msg.classList.add("hide");
}

boxes.forEach((box) => {
      box.addEventListener("click", () => {
            box.innerText = "X";

      if(turnO){
            box.innerText = "O";
            turnO = false;
      }
      else{
            box.innerText = "X";
            turnO = true;
      }
      box.disabled = true;

      checkWinner();
      });
});

const disableBoxes = () => {
      for(let box of boxes){
            box.disabled = true;
      }
}
const enableBoxes = () => {
      for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
      }
}

const showWinner = (winner) => {
      msg.innerText = `Congratulations, Winner is ${winner}`;
      msg.classList.remove("hide");
      disableBoxes();
}

const checkWinner = () => {
      for(let pattern of winningPatterns){
            
            let pos1 = boxes[pattern[0]].innerText; 
            let pos2 = boxes[pattern[1]].innerText; 
            let pos3 = boxes[pattern[2]].innerText;

            if(pos2 != "" && pos2 != "" && pos3 != ""){
                  if(pos1 === pos2 && pos2 === pos3){
                        showWinner(pos1);          
                  }
            }
             
      }
};

newGame.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);