// Create floating hearts background
// Show page function
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Quiz answer checking
function checkAnswer(answer) {
    let message = '';
    if(answer === 1) {
        message = 'Benar sekali! Kita pertama kali bertemu di kampus 😊';
    } else {
        message = 'Hmm... coba ingat-ingat lagi ya 😉';
    }
    alert(message);
}

// Your existing JavaScript functions here

// Initialize everything when the page loads
window.onload = function() {
    initializeDecorations();
    addClickAnimations();
    // Make sure welcome page is shown first
    showPage('welcome');
};

function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.className = 'heart-bg';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        container.appendChild(heart);
    }
}

// Create welcome page decorations
function createWelcomeDecorations() {
    const container = document.querySelector('.welcome-decoration');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.className = 'welcome-heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);
    }
}

// Create final page hearts
function createFinalHearts() {
    const container = document.querySelector('.final-hearts');
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.className = 'final-heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);
    }
}

// Add sparkles to buttons
function addSparkles() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            button.appendChild(sparkle);
        }
    });
}

// Create falling petals
function createFallingPetals() {
    const container = document.createElement('div');
    container.className = 'falling-petals';
    document.body.appendChild(container);

    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.setProperty('--x', (Math.random() * 100 - 50) + 'px');
        petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
        petal.style.width = petal.style.height = (Math.random() * 10 + 5) + 'px';
        container.appendChild(petal);
    }
}

// Initialize all decorative elements
function initializeDecorations() {
    createFloatingHearts();
    createWelcomeDecorations();
    createFinalHearts();
    addSparkles();
    createFallingPetals();
}

// Add click animations to elements
function addClickAnimations() {
    document.querySelectorAll('.admire-item').forEach(item => {
        item.addEventListener('click', () => {
            item.style.transform = 'scale(1.05)';
            setTimeout(() => {
                item.style.transform = 'translateX(0)';
            }, 200);
        });
    });
}

// Music player functionality
let audioElement = null;
function toggleMusic() {
    if (!audioElement) {
        audioElement = new Audio('path_to_romantic_music.mp3');
        audioElement.loop = true;
    }
    
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
}

// Initialize everything when the page loads
window.onload = function() {
    initializeDecorations();
    addClickAnimations();
};