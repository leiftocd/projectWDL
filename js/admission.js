

document.addEventListener("DOMContentLoaded", function () {
    const faqTitles = document.querySelectorAll('.admissions-faq .admissions-faq__item .faq-title');
    const menuItems = document.querySelectorAll('.nav-pc .menu li');
    const admissionsBoxes = document.querySelectorAll('.Admissions .Admissions-box');

    faqTitles.forEach(function (title) {
        let content = title.parentElement.querySelector('.faq-content');
        let arrowBtn = title.parentElement.querySelector('.admissions-faq__item .faq-title svg');
    
        title.addEventListener('click', function () {
            content.classList.toggle('active');
            arrowBtn.classList.toggle('active');
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const activeTab = urlParams.get('tab');

    menuItems.forEach((item, index) => {
        if (activeTab === `tab${index}`) {
            // Set initial state based on the tab parameter
            item.classList.add('active');
            admissionsBoxes[index].classList.add('active');
        }
        item.addEventListener('click', function () {
            // Remove "active" class from all menu items and admissions boxes
            menuItems.forEach(item => item.classList.remove('active'));
            admissionsBoxes.forEach(box => box.classList.remove('active'));

            // Add "active" class to the clicked menu item and corresponding admissions box
            this.classList.add('active');
            admissionsBoxes[index].classList.add('active');
        });
    });
});


document.getElementById('support-btn1').addEventListener('click', function() {
    document.getElementById('support-popup').style.display = 'flex';
  });
  document.getElementById('support-btn2').addEventListener('click', function() {
    document.getElementById('support-popup').style.display = 'flex';
  });
  document.getElementById('support-btn3').addEventListener('click', function() {
    document.getElementById('support-popup').style.display = 'flex';
  });
  document.getElementById('support-btn4').addEventListener('click', function() {
    document.getElementById('support-popup').style.display = 'flex';
  });
  function closePopup() {
    document.getElementById('support-popup').style.display = 'none';
  }

  const showAco = document.querySelectorAll('.more-content .more-content__title ');
  showAco.forEach(function (title) {
      let content = title.parentElement.querySelector('.more-content__table');
      let arrowBtn = title.parentElement.querySelector('.more-content__title svg');

      title.addEventListener('click', function () {
          content.classList.toggle('active');
          arrowBtn.classList.toggle('active');
      });
  });
  