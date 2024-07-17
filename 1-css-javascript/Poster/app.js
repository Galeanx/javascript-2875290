document.getElementById('start-button').addEventListener('click', startAnimations);

function startAnimations() {
    animateWitches();
    animatePumpkins();
}

function animateWitches() {
    const leftWitch = document.querySelector('.left-witch');
    const rightWitch = document.querySelector('.right-witch');

    leftWitch.style.transition = 'left 2s linear';
    rightWitch.style.transition = 'right 2s linear';

    leftWitch.style.left = '20%';
    rightWitch.style.right = '20%';

    setTimeout(() => {
        leftWitch.style.left = '-100px';
        rightWitch.style.right = '-100px';
    }, 2000);

    setInterval(() => {
        leftWitch.style.left = '20%';
        rightWitch.style.right = '20%';

        setTimeout(() => {
            leftWitch.style.left = '-100px';
            rightWitch.style.right = '-100px';
        }, 2000);
    }, 4000);
}

function animatePumpkins() {
    const pumpkins = document.querySelectorAll('.pumpkin');

    pumpkins.forEach((pumpkin, index) => {
        pumpkin.style.transition = `transform 1s ease-in-out`;
        setInterval(() => {
            pumpkin.style.transform = `translateY(${index % 2 === 0 ? '10px' : '-10px'})`;
            setTimeout(() => {
                pumpkin.style.transform = 'translateY(0)';
            }, 500);
        }, 1000);
    });
}
