function checkAnswers() {
    const inputs = document.querySelectorAll("input[type='radio']:checked");
    let red = 0;
    let yellow = 0;
    let green = 0;

    inputs.forEach(input => {
      const color = input.value;
      if (color === "red") {
        red++;
      } else if (color === "yellow") {
        yellow++;
      } else if (color === "green") {
        green++;
      }
    });

    const total = red + yellow + green;
    let message;

    if (red > total / 3) {
      alert("Ești în zona periculoasă de risc!! Imediat consultă un specialist.");
    } else if (yellow > total / 3) {
      alert("Consultă un specialist");
    } else {
       alert("Bravo!");
    }

    document.getElementById("results").classList.add("visible");
    document.getElementById("advice").textContent = message;
  }