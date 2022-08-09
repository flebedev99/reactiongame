const background = document.getElementById("backGround").style;
const Message = document.getElementById("message");
let time = 0;
let turn = 1;
let yellowPressed = false;

function red() {
  if (yellowPressed === false) {
    background.backgroundColor = "red";
    Message.innerText = "PRESS, PRESS, PRESS!";
    turn = 0;
    updateTime();
    return;
  }
}
function updateTime() {
  time += 0.01;
  if (turn === 1) {
    return;
  }
  setTimeout(updateTime, 1);
}

document.body.onkeyup = function () {
  if (turn === 1) {
    background.backgroundColor = "green";
    Message.innerText = "Press any key when red";
    setTimeout(red, Math.random() * 5000);
    turn = 2;
    return;
  }
  if (turn === 0) {
    background.backgroundColor = "green";
    if (time !== "None!") {
      Message.innerText = "Press any key to start, Time: " + time.toFixed(3);
    } else {
      Message.innerText =
        "Press any key to start, Time: None, pressed to early!";
    }
    time = 0;
    turn = 1;
  }
  if (turn === 2) {
    background.backgroundColor = "yellow";
    Message.innerText = "Too early!";
    yellowPressed = true;
    time = "None!";
    turn = 0;
  }
};
