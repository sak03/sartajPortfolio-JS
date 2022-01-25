
let a, b, c, d;

// analog clock JavaScript code
setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minut.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

function analogClock() {
    a = document.getElementById("analogClock").style.display = "block";
    b = document.getElementById("digiClock").style.display = "none";
    c = document.getElementById("digiCalculator").style.display = "none";
    d = document.getElementById("tictac").style.display = "none";
}


// digital clock JavaScript code
function updateClock() {
    var now = new Date();
    var dname = now.getDay();
    var mo = now.getMonth();
    var dnum = now.getDate();
    var yr = now.getFullYear();
    var hou = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var pe = "AM";

    if (hou == 0) {
        hou = 12;
    }
    if (hou > 12) {
        hou = hou - 12;
        pe = "PM";
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    };

    var months = [
        "Jan",
        "Frb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Num",
        "Dec",
    ];
    var week = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ];
    var ids = [
        "dayname",
        "month",
        "daynum",
        "year",
        "hours",
        "minutes",
        "seconds",
        "periods",
    ];
    var values = [
        week[dname],
        months[mo],
        dnum.pad(2),
        yr,
        hou.pad(2),
        min.pad(2),
        sec.pad(2),
        pe,
    ];

    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}
function digiClock() {
    a = document.getElementById("analogClock").style.display = "none";
    b = document.getElementById("digiClock").style.display = "block";
    c = document.getElementById("digiCalculator").style.display = "none";
    d = document.getElementById("tictac").style.display = "none";
}


// digital calculator JavaScript code
let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        // console.log("Button text is", buttonText);
        if (buttonText == "X") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == "=") {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}
function digiCalculator() {
    a = document.getElementById("analogClock").style.display = "none";
    b = document.getElementById("digiClock").style.display = "none";
    c = document.getElementById("digiCalculator").style.display = "block";
    d = document.getElementById("tictac").style.display = "none";
}

// tic tac toe game JavaScript code
let music = new Audio("music.mp3");
let audioTurn = new Audio("tik.mp3");
let gameOver = new Audio("gameOver.mp3");
let turn = "X";
let game_over = false;

//function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

//function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach((e) => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector(".info").innerText =
                boxtext[e[0]].innerText + " Won";
            game_over = true;
            document
                .querySelector(".imgbox")
                .getElementsByTagName("img")[0].style.width = "25vw";
            gameOver.play();
        }
    });
};

//game logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!game_over) {
                document.getElementsByClassName("info")[0].innerText =
                    "Turn for " + turn;
            }
        }
    });
});

// add onclich listener to reset button
reset.addEventListener("click", () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach((element) => {
        element.innerText = "";
    });
    turn = "X";
    game_over = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
        "0vw";
});

function tictac() {
    a = document.getElementById("analogClock").style.display = "none";
    b = document.getElementById("digiClock").style.display = "none";
    c = document.getElementById("digiCalculator").style.display = "none";
    d = document.getElementById("tictac").style.display = "block";
}

function cancle() {
    a = document.getElementById("analogClock").style.display = "none";
    b = document.getElementById("digiClock").style.display = "none";
    c = document.getElementById("digiCalculator").style.display = "none";
    d = document.getElementById("tictac").style.display = "none";
}