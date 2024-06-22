let resetbtn = document.getElementById("reset-btn");
let boxes = document.querySelectorAll(".box");
let message = document.querySelector("#message");
let turn = true;// X turn
let counter = 0;

const arr_winning_pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) { box.innerText = "X";turn = false }
        else { box.innerText = "O";box.style.color="green"; turn = true }
        counter++;
        box.disabled = true;
        if (counter === 9) {
            message.innerText = `It's a Draw`;
        }
        checkWinner();
    });
})

resetbtn.addEventListener("click", (e) => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        message.innerText = "";
    });
})

const checkWinner = () => {
    for (let pattern of arr_winning_pattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                message.innerText = `Player ${pos1val} won the round`;
                boxes.forEach((box) => { box.disabled = true; })
            }
        }
    }
}

// create to logic to make the fourth last clicked disappear so the game can continue till we get a winner