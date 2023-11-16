
const btnOpenMenu = document.getElementById('btnOpen')
const btnCloseMenu = document.getElementById('btnClose')
const navMenu = document.querySelector('.nav-pc');



btnOpenMenu.addEventListener('click', () => {
    navMenu.classList.add('showMenu')
})

btnCloseMenu.addEventListener('click', () => {
    navMenu.classList.remove('showMenu')
})


document.getElementById('support-btn').addEventListener('click', function() {
    document.getElementById('support-popup').style.display = 'flex';
    document.querySelector('.showMenu').style.display = 'none';
    navMenu.style.display = 'flex';
  });
  
  function closePopup() {
    document.getElementById('support-popup').style.display = 'none';
    document.querySelector('.showMenu').style.display = 'flex';

  }

  // const footerMobile = document.getElementById('footer-mobile');
