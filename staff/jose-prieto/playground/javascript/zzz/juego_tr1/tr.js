function updateScore(elementId) {
    const element = document.getElementById(elementId);
    element.textContent = parseInt(element.textContent) + 1;
    element.classList.add('score-change');
    setTimeout(() => {
        element.classList.remove('score-change');
    }, 500);
}
