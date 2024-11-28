const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Random Number (Debug): ${randomNumber}`);

let attempts = 0;
let guessList = []; 

document.getElementById("submitButton").addEventListener("click", function () {
    const userGuess = parseInt(document.getElementById("userInput").value);
    const messageElement = document.getElementById("message");
    const attemptsElement = document.getElementById("attempts");
    const guessListElement = document.getElementById("guessList");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = "올바른 숫자를 넣어주세요!!";
        return;
    }

    attempts++;
    guessList.push(userGuess); 
    guessList.sort((a, b) => a - b); 

    guessListElement.innerHTML = ""; 
    guessList.forEach(guess => {
        const li = document.createElement("li");
        li.textContent = guess;
        guessListElement.appendChild(li);
    });

    if (userGuess === randomNumber) {
        messageElement.textContent = `축하합니다!! 당신은 ${attempts}시도 만에 성공했어요`;
        attemptsElement.textContent = "";
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "낮아요, 높은 숫자를 넣어주세요!! 다시 시도해주세요!!";
        attemptsElement.textContent = `Attempts: ${attempts}`;
    } else if (userGuess > randomNumber) {
        messageElement.textContent = "커요, 낮은 숫자를 넣어주세요!! 다시 시도해주세요!!";
        attemptsElement.textContent = `Attempts: ${attempts}`;
    }
});