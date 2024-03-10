document.addEventListener("DOMContentLoaded", function() {
  // Obține referințele către elementele HTML
  var questions = document.querySelectorAll(".question");
  var options = document.querySelectorAll(".option");
  var submitButton = document.getElementById("submitAnswers");
  var resultMessage = document.getElementById("resultMessage");

  var answers = []; // Va stoca răspunsurile utilizatorului

  // Funcția pentru afișarea întrebării următoare și ascunderea celei curente
  function showNextQuestion(currentQuestionIndex) {
      questions[currentQuestionIndex].style.display = "none";
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          questions[currentQuestionIndex].style.display = "block";
      } else {
          // Dacă utilizatorul a răspuns la toate întrebările, afișează rezultatul
          showResult();
      }
  }

  // Funcția pentru afișarea rezultatului
  function showResult() {
      // Calcularea răspunsului în funcție de câte opțiuni au fost selectate pentru fiecare întrebare
      var count = {}; // Un obiect pentru a număra câte opțiuni au fost selectate pentru fiecare întrebare
      for (var i = 0; i < answers.length; i++) {
          if (count[answers[i]]) {
              count[answers[i]]++;
          } else {
              count[answers[i]] = 1;
          }
      }

      // Găsirea opțiunii cu cele mai multe selecții
      var maxAnswer = "";
      var maxCount = 0;
      for (var key in count) {
          if (count[key] > maxCount) {
              maxAnswer = key;
              maxCount = count[key];
          }
      }

      // Afișarea rezultatului
      resultMessage.textContent = "Cea mai aleasă opțiune: " + maxAnswer;
      resultMessage.style.display = "block";
  }

  // Adăugarea funcției pentru manipularea evenimentului onclick pentru fiecare opțiune
  options.forEach(function(option) {
      option.addEventListener("click", function() {
          // Adăugarea opțiunii selectate la lista de răspunsuri
          answers.push(option.textContent);
          // Afișarea următoarei întrebări
          showNextQuestion(parseInt(option.dataset.questionIndex));
      });
  });

  // Adăugarea funcției pentru manipularea evenimentului onclick pentru butonul de trimitere a răspunsurilor
  submitButton.addEventListener("click", function() {
      // Afișarea rezultatului atunci când butonul este apăsat
      showResult();
  });
});
