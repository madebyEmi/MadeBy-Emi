    document.addEventListener("DOMContentLoaded", function () {
      const textElement = document.querySelector(".typewriter");
      const text = "Hi! Ik ben Emi,";
      let i = 0;

      function typeEffect() {
        if (i < text.length) {
          textElement.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeEffect, 70); // Snelheid van typen (100ms per letter)
        }
      }
      
      typeEffect();
    });

    const button = document.querySelector(".button-container");

    document.addEventListener("DOMContentLoaded", function () {
        const typewriter = document.querySelector(".typewriter");
        const workButton = document.getElementById("work-button");
    
        // Wacht tot de typewriter-animatie klaar is (bijv. 3 seconden na laden)
        setTimeout(() => {
            workButton.classList.add("show-button");
        }, 3000); // Pas deze tijd aan op basis van je typewriter-effect
    });
    

setTimeout(() => {
  button.classList.add("show");
}, 4000); // Zelfde timing als het verdwijnen van het streepje

    
