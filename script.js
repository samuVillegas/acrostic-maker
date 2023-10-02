document.addEventListener("DOMContentLoaded", function () {
  const generarButton = document.getElementById("generar");
  const nombreInput = document.getElementById("nombre");
  const resultadoDiv = document.getElementById("resultado");

  generarButton.addEventListener("click", function () {
    const nombre = nombreInput.value.trim();
    if (nombre.length === 0) {
      alert("Please, enter a valid name.");
      return;
    }

    const acrostico = nombre
      .toUpperCase()
      .split("")
      .map((letter) => {
        const randomWord = getRandomWordStartingWith(letter);
        return `${letter}: ${randomWord}`;
      })
      .join(", ");

    resultadoDiv.textContent = acrostico;
  });

  function getRandomWordStartingWith(letter) {
    // Esta es una función simulada para obtener una palabra aleatoria que comience con la letra proporcionada.
    // Puedes reemplazarla con una llamada a una API de palabras aleatorias en inglés si lo deseas.
    const words = {
      A: ["Accountability", "Altruism", "Authenticity"],
      B: ["Balance", "Beneficence", "Bravery"],
      C: ["Compassion", "Courage", "Civility"],
      D: ["Dignity", "Duty", "Decency"],
      E: ["Empathy", "Equality", "Ethical"],
      F: ["Fairness", "Forgiveness", "Fortitude"],
      G: ["Gratitude", "Generosity", "Goodness"],
      H: ["Honesty", "Humility", "Heroism"],
      I: ["Integrity", "Intuition", "Inclusivity"],
      J: ["Justice", "Joyfulness", "Judiciousness"],
      K: ["Kindness", "Knowledge", "Kinship"],
      L: ["Loyalty", "Love", "Liberality"],
      M: ["Mercy", "Morality", "Modesty"],
      N: ["Nobility", "Neutrality", "Nurturing"],
      O: ["Open-mindedness", "Optimism", "Objectivity"],
      P: ["Patience", "Perseverance", "Prudence"],
      Q: ["Quality", "Quietude", "Quotability"],
      R: ["Respect", "Responsibility", "Resilience"],
      S: ["Selflessness", "Sincerity", "Sympathy"],
      T: ["Tolerance", "Trustworthiness", "Tenacity"],
      U: ["Understanding", "Unity", "Uprightness"],
      V: ["Virtue", "Valor", "Veracity"],
      W: ["Wisdom", "Warmth", "Willpower"],
    };


    const wordsForLetter = words[letter] || ["no words found"];
    const randomIndex = Math.floor(Math.random() * wordsForLetter.length);
    return wordsForLetter[randomIndex];
  }
});
