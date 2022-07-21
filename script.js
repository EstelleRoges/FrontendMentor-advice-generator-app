let adviceId = document.getElementById("adviceId");
    let advice = document.getElementById("advice");
    let button = document.getElementById("adviceButton");

    const fetchAdvice = () => {
    const random = Math.floor(Math.random() * 200);
      fetch(`https://api.adviceslip.com/advice/${random}`).then(function (response) {
        return response.json();
      }).then(function (data) {
        adviceId.innerHTML = data.slip.id;
        advice.innerText = data.slip.advice;
        advice.classList.add("fadeIn");
        
        button.addEventListener('click', function() {
          button.classList.add("disabled");
          button.style.cursor ="not-allowed";
        });

        setTimeout(function() {
          advice.classList.remove("fadeIn");
        }, 800);

        setTimeout(function() {
          button.classList.remove("disabled");
          button.style.cursor = "pointer";
        }, 2000);

      }).catch(function (error) {
        console.warn("Failed to get an advice", error);
      });
    }