
    function calculateBMI() {
      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value);
      const gender = document.querySelector('input[name="gender"]:checked').value;

      if (!weight || !height) {
        document.getElementById("bmiResult").textContent = "Please enter all fields!";
        document.getElementById("bmiMessage").textContent = "";
        return;
      }

      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

      let message = "";
      if (bmi < 18.5) {
        message = "Underweight 😔";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        message = "Normal weight 😊";
      } else if (bmi >= 25 && bmi < 29.9) {
        message = "Overweight 😐";
      } else {
        message = "Obese 😬";
      }

      // Optional: add slight humor for gender
      if (gender === "male" && bmi < 18.5) message += " — Eat more bro 🍔";
      if (gender === "female" && bmi < 18.5) message += " — Take care sis 💖";

      document.getElementById("bmiResult").textContent = `Your BMI: ${bmi}`;
      document.getElementById("bmiMessage").textContent = message;
    }
 