

document.querySelectorAll('a[href^="#home"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const text = document.querySelector(".text");
const roles = ["Fullstack Developer", "Frontend Developer", "Backend Developer", "Freelancer"];
let i = 0, j = 0, deleting = false;

function typeEffect() {
    let current = roles[i];
    text.textContent = current.substring(0, j);

    if (!deleting && j < current.length) {
        j++;
    } else if (deleting && j > 0) {
        j--;
    } else if (!deleting && j === current.length) {
        deleting = true;
        setTimeout(typeEffect, 2000);
        return;
    } else if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % roles.length;
    }
    setTimeout(typeEffect, deleting ? 150 : 200);
}

typeEffect();

 


function btndownload(){
    alert('You Want To Download')
}








