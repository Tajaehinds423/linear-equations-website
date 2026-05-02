function checkAnswer() {
    let answer = document.getElementById("answer").value;
    let result = document.getElementById("result");

    if (answer == 3) {
        result.textContent = "Correct!";
        result.style.color = "green";
    } else {
        result.textContent = "Try again!";
        result.style.color = "red";
    }
}
