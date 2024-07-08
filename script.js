let count = 0;

function incrementCounter() {
    count++;
    updateCounter();
}

function updateCounter() {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = count;
}

document.addEventListener('click', incrementCounter);
