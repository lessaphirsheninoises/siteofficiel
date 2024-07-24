// Fonction pour vérifier le quiz
function checkQuiz() {
    let score = 0;
    const answers = {
        q1: "Lens",
        q2: "Bâton"
    };

    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    document.getElementById('quiz-result').textContent = `Votre score est de ${score} sur 2.`;
}
