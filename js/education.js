document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabIdParam = urlParams.get('tab') || 'tab0';
    const asideMenus = document.querySelectorAll('.aside .aside-menu');
    const tabContent = document.querySelectorAll('.content');
    const popup = document.querySelector('.popup');
    const popUpImg = document.getElementById('popUpImg');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const mySwiper = initializeSwiper('.education-swiper', handleSwiperChange);
  
    asideMenus.forEach(item => {
      item.addEventListener('click', handleTabClick);
    });
  
    if (tabIdParam) {
      updateAsideMenuActiveState(tabIdParam);
    }
  
    const showAco = document.querySelectorAll('.division-box .division-box__title ');
  
    showAco.forEach(title => {
      title.addEventListener('click', handleAccordionClick);
    });
  
    function handleSwiperChange() {
      const currentIndex = mySwiper.activeIndex;
      const imgSrc = `./assets/Image/IntroducePage/Education/Slide/${currentIndex + 1}.jpg`;
      document.getElementById('largeImg').setAttribute('src', imgSrc);
    }
  
    function handleTabClick() {
      const tab = this.getAttribute('data-tabs');
      if (tab) {
        updateAsideMenuActiveState(tab);
        urlParams.set('tab', tab);
        history.replaceState(null, null, `?${urlParams.toString()}`);
      }
    }
  
    function updateAsideMenuActiveState(tabId) {
      tabContent.forEach(content => {
        const hasItems = content.querySelectorAll(`[data-tabs="${tabId}"]`).length > 0;
        content.classList.toggle('active', hasItems);
  
        content.querySelectorAll(`[data-tabs]`).forEach(item => {
          item.classList.toggle('active', item.getAttribute('data-tabs') === tabId);
        });
      });
  
      asideMenus.forEach(menu => menu.classList.remove('active'));
  
      const activeAsideMenu = document.querySelector(`.aside-menu[data-tabs="${tabId}"]`);
      const activeArrowRight = activeAsideMenu?.querySelector('.img-active');
      
      if (activeAsideMenu && activeArrowRight) {
        activeAsideMenu.classList.add('active');
        activeArrowRight.classList.add('active');
      }
    }
  
    function handleAccordionClick() {
      const content = this.parentElement.querySelector('.division-box__content');
      const arrowBtn = this.parentElement.querySelector('.division-box__title svg');
  
      content.classList.toggle('active');
      arrowBtn.classList.toggle('active');
    }
  
    function initializeSwiper(selector, onChangeCallback) {
      const swiper = new Swiper(selector, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: { delay: 2000 },
        speed: 3000,
        breakpoints: {
          0: { slidesPerView: 0 },
          450: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        },
      });
  
      swiper.on('slideChange', onChangeCallback);
  
      return swiper;
    }
  
  // Education Popup
  const educationPopup = {
    popup: document.querySelector('.popup'),
    popUpImg: document.getElementById('popUpImg'),
    nextBtn: document.querySelector('.next-btn'),
    prevBtn: document.querySelector('.prev-btn'),
  
    openPopup: function (swiper, currentIndex) {
      this.popup.style.display = 'block';
      this.popUpImg.src = `./assets/Image/IntroducePage/Education/Slide/${currentIndex + 1}.jpg`;
  
      document.getElementById('close-btn').addEventListener('click', () => {
        this.popup.style.display = 'none';
      });
  
      this.nextBtn.addEventListener('click', () => this.handleNextClick(swiper));
      this.prevBtn.addEventListener('click', () => this.handlePrevClick(swiper));
    },
  
    handleNextClick: function (swiper) {
      const currentIndex = swiper.activeIndex;
      this.popUpImg.src = `./assets/Image/IntroducePage/Education/Slide/${currentIndex + 1}.jpg`;
    },
  
    handlePrevClick: function (swiper) {
      const currentIndex = swiper.activeIndex;
      this.popUpImg.src = `./assets/Image/IntroducePage/Education/Slide/${currentIndex - 1}.jpg`;
    },
  };
  /////kitchen popup
  const kitchenPopup = {
    kitchenPopup: document.querySelector('.kitchenPopup'),
    popUpImg: document.getElementById('kitchenPopupImg'),
    nextBtn: document.querySelector('.kitchenPopup .next-btn'),
    prevBtn: document.querySelector('.kitchenPopup .prev-btn'),
  
    openPopup: function (swiper, currentIndex) {
      this.kitchenPopup.style.display = 'block';
      this.popUpImg.src = `./assets/Image/IntroducePage/Kitchen/Kitchen-img/${currentIndex + 1}.jpg`;
  
      document.getElementById('kitchenClose-btn').addEventListener('click', () => {
        this.kitchenPopup.style.display = 'none';
      });
  
      this.nextBtn.addEventListener('click', () => this.handleNextClick(swiper));
      this.prevBtn.addEventListener('click', () => this.handlePrevClick(swiper));
    },
  
    handleNextClick: function (swiper) {
      const currentIndex = swiper.activeIndex;
      this.popUpImg.src = `./assets/Image/IntroducePage/Kitchen/Kitchen-img/${currentIndex + 1}.jpg`;
    },
  
    handlePrevClick: function (swiper) {
      const currentIndex = swiper.activeIndex;
      this.popUpImg.src = `./assets/Image/IntroducePage/Kitchen/Kitchen-img/${currentIndex - 1}.jpg`;
    },
  };
  
  
  document.querySelectorAll('.edu-slide__box img').forEach((img, index) => {
    img.addEventListener('click', () => educationPopup.openPopup(mySwiper, index));
  });
  
  document.querySelectorAll('.kitchen-slide__box img').forEach((img, index) => {
    img.addEventListener('click', () => kitchenPopup.openPopup(swiper4, index));
  });
  });