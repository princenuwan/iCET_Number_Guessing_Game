
let randumNumEasy = Math.floor(Math.random() * 5) + 1;
//console.log(randumNumEasy);//For testing
let randumNumMedium = Math.floor(Math.random() * 10) + 1;
//console.log(randumNumMedium);//For testing
let randumNumHard = Math.floor(Math.random() * 100) + 1;
//console.log(randumNumHard);//For testing

let count = 3;

//Easy-->
function guessingEasy() {
    let inputNumber = document.getElementById("txtInput").value;
    count--;
    switch (count) {
        case 2:
            if (randumNumEasy == inputNumber) {
                document.getElementById("eMMsg").innerText = "Correct Answer is "+randumNumEasy+" | Congratulations You Won";
            } else {
                document.getElementById("eMMsg").innerText = "Wrong You have " + count + " chances";
            }
            break;
        case 1:
            if (randumNumEasy == inputNumber) {
                document.getElementById("eMMsg").innerText = "Correct Answer is "+randumNumEasy+" | Congratulations You Won";
            } else {
                document.getElementById("eMMsg").innerText = "Wrong You have " + count + " chances";
            }
            break;
        case 0:
            if (randumNumEasy == inputNumber) {
                document.getElementById("eMMsg").innerText = "Correct Answer is "+randumNumEasy+" | Congratulations You Won";
            }else{
                document.getElementById("eMMsg").innerText = ("Wrong... Correct Answer is "+randumNumEasy);
            }
            break;

        default:
            document.getElementById("eMMsg").innerText = ("Refresh and try again");
            break;
    }
}
//Medium-->
function guessingMedium() {
    let inputNumber = document.getElementById("txtInput").value;
    count--;
    switch (count) {
        case 2:
            if (randumNumMedium == inputNumber) {
                document.getElementById("eMMsg").innerText = "Correct Answer is "+randumNumMedium+" | Congratulations You Won";
            } else {
                document.getElementById("eMMsg").innerText = "Wrong You have " + count + " chances";
            }
            break;
        case 1:
            if (randumNumMedium == inputNumber) {
                document.getElementById("eMMsg").innerText = "Correct Answer is "+randumNumMedium+" | Congratulations You Won";
            } else {
                document.getElementById("eMMsg").innerText = "Wrong You have " + count + " chances";
            }
            break;
        case 0:
            if (randumNumMedium == inputNumber) {
                document.getElementById("eMMsg").innerText = "Correct Answer is "+randumNumMedium+" | Congratulations You Won";
            }else{
                document.getElementById("eMMsg").innerText = ("Wrong... Correct Answer is "+randumNumMedium);
            }
            break;
        default:
            document.getElementById("eMMsg").innerText = ("Refresh and try again");
            break;
    }
}
//Hard-->
function guessingHard() {
    let inputNumber = document.getElementById("txtInput").value;
    count--;
    switch (count) {
        case 2:
            if (randumNumHard == inputNumber) {
                document.getElementById("eMMsg").innerText = "Correct Answer is "+randumNumHard+" | Congratulations You Won";
            } else {
                document.getElementById("eMMsg").innerText = "Wrong You have " + count + " chances";
            }
            break;
        case 1:
            if (randumNumHard == inputNumber) {
                document.getElementById("eMMsg").innerText = "Correct Answer is "+randumNumHard+" | Congratulations You Won";
            } else {
                document.getElementById("eMMsg").innerText = "Wrong You have " + count + " chances";
            }
            break;
        case 0:
            if (randumNumHard == inputNumber) {
                document.getElementById("eMMsg").innerText = "Correct Answer is "+randumNumHard+" | Congratulations You Won";
            } else {
                document.getElementById("eMMsg").innerText = ("Wrong... Correct Answer is "+randumNumHard);
            }
            break;
        default:
            document.getElementById("eMMsg").innerText = ("Refresh and try again");
            break;
    }
}