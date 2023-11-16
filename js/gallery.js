document.addEventListener('DOMContentLoaded', () => {
    const listTab = document.querySelectorAll('.wrapper-menu__item');
    const listContent = document.querySelectorAll('.wrapper-img .box-img img');
    const popup = document.querySelector('.popup');
    const popUpImg = document.getElementById('popUpImg');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentTab = 'all';
    let currentIndex = 0;
    let imgRender; // Use 'let' instead of 'var'
  
    function setActiveContent() {
      listContent.forEach(content => {
        const contentTab = content.getAttribute('data-tab');
        content.classList.toggle('active', currentTab === 'all' || contentTab === currentTab);
      });
  
      const contentText = document.querySelectorAll('.wrapper-img .box-wrapper .box-text');
      contentText.forEach(c => {
        c.classList.toggle('active', currentTab === 'tab1');
      });
    }
  
    function setFilter(filter) {
      currentTab = filter;
      openPopup();
      moreImg();
      setActiveContent();
      listTab.forEach(t => t.classList.toggle('active', t.getAttribute('data-filter') === filter));
    }
  
    listTab.forEach(item => {
      item.addEventListener('click', () => setFilter(item.getAttribute('data-filter')));
    });
    setFilter(currentTab);
  
    function handleImageClick(event) {
      const targetImg = event.target.closest('.wrapper-img .box-img img.active');
      if (targetImg) {
        popup.style.display = 'block';
        popUpImg.src = targetImg.src;
      }
    }
  
    function openPopup() {
      popup.style.display = 'none'; // Close popup initially
  
      document.addEventListener('click', handleImageClick);
  
      // Sự kiện click nút đóng popup
      document.getElementById('close-btn').addEventListener('click', () => {
        popup.style.display = 'none';
        document.removeEventListener('click', handleImageClick);
      });
  
      // Sự kiện click nút next
      nextBtn.addEventListener('click', handleNextClick);
  
      // Sự kiện click nút prev
      prevBtn.addEventListener('click', handlePrevClick);
    }
  
    function handleNextClick() {
      currentIndex = (currentIndex + 1) % listContent.length;
      popUpImg.src = listContent[currentIndex].src;
    }
  
    function handlePrevClick() {
      currentIndex = (currentIndex - 1 + listContent.length) % listContent.length;
      popUpImg.src = listContent[currentIndex].src;
    }
  
    function moreImg() {
      // Determine the initial value of imgRender based on the window width
      if (window.innerWidth >= 450) {
        imgRender = 8;
      } else {
        imgRender = 5;
      }
  console.log(currentIndex)
      const btnLoadMore = document.getElementById('load-more');
  
      // Add a click event listener to the "Load More" button
      btnLoadMore.addEventListener('click', () => {
        // Increase the imgRender value by 3
        imgRender += 3;
  
        // Check if all images have been rendered, and hide the "Load More" button
        if (imgRender >= listContent.length) {
          btnLoadMore.classList.toggle('hidden', imgRender >= listContent.length);
        }
      });
  
      // Initial rendering of items
      renderItem(imgRender);
    }
    
    function renderItem(imgRender) {
      listContent.forEach((img, index) => {
        img.classList.toggle('active', index < imgRender);
      });
    }
  });
  
  