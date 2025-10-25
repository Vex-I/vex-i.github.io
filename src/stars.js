function createStars(num) { 
for(let i = 1; i <= num; i++) {
    let stars = document.createElement('div');
    stars.classList.add('star');
    stars.style.left = Math.floor(Math.random() * 100) + '%';
    stars.style.top = Math.floor(Math.random() * 100) + '%';
    stars.style.width = (Math.random() * 2 ) + 'px';
    stars.style.height = stars.style.width;
    document.querySelector('body').appendChild(stars);
}
}

function animateStars() {
    let stars = document.querySelectorAll('.star');
    let num = Math.floor(Math.random() * stars.length);
    stars[num].classList.toggle('animate');
}
createStars(100);
setInterval(animateStars, 50);
