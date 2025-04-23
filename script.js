const inputValue = document.getElementById("user-input");

// แก้จาก .number → .numbers
document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "0" || inputValue.innerText === "NaN") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerText.trim(); // interText → innerText
    });
});

document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        let lastValue = inputValue.innerText.slice(-1);
        if (e.target.innerText === "=") {
            inputValue.innerHTML = 'I LOVE U NAA<i class="fas fa-heart heart-icon"></i>';
        } else if (e.target.innerText === "AC") {
            inputValue.innerText = "0";
        } else if (e.target.innerText === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1);
            if (inputValue.innerText.length === 0) {
                inputValue.innerText = "0";
            }
        } else if (!isNaN(lastValue) || e.target.innerText === "%") {
            inputValue.innerText += e.target.innerText.trim();
        }
    });
});
