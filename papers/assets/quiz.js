function checkAnswers() {
    const answers = {
        q1: "b",
        q2: "c",
        q3: "b",
        q4: "b",
        q5: "c"
    };

    let score = 0;
    let total = Object.keys(answers).length;

    for (let q in answers) {
        let selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) {
            score++;
        }
    }

    document.getElementById("result").innerHTML =
        `🎯 You scored ${score} / ${total}`;
}
