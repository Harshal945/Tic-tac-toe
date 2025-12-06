let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let winner = document.querySelector("#msg");
let newGameBtn = document.querySelector("#newG");
let msgContainer = document.querySelector(".msg-container");
let turnO = true; //playerX or playerO


const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];

const newgame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button clicked");
        if (turnO) {
            box.innerText = 'O';
            box.style.color="#b0413e";
            turnO = false;
        } else {
            box.innerText = 'X';
            box.style.color="#3B352F";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner=(win)=>{
    msgContainer.classList.remove("hide");
    winner.innerText= `congratulations, the winner is ${win}`;
    disableBoxes();
}
checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner " ,pos1val);
                showWinner(pos1val);
            }
        }
    }
}
newGameBtn.addEventListener("click",newgame);
resetbtn.addEventListener("click",newgame);