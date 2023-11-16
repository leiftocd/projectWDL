const mediaAboutQuery = window.matchMedia('(max-width:500px)')
if(mediaAboutQuery.matches){
    showAccordion()
}

function showAccordion () {
    const accordionList = document.querySelectorAll('.about .about-content .about-content__wrappper .wrapper-box')
    accordionList.forEach(item => {
        item.classList.remove('myHover')
        let title = item.querySelector('.wrapper-box__title')
        title.addEventListener('click', () =>{
            title.classList.toggle('active')
            let content = item.querySelector('.wrapper-box__content')
                content.classList.toggle('showAccordion')
        })
    })   
};

const homeMobileVideo = document.getElementById("home-mb__video");
const playVideo = document.getElementById('play-vd');

function playPause() {
    if (homeMobileVideo.paused) {
        homeMobileVideo.play();
        homeMobileVideo.style.display = "block";
    } else {
        homeMobileVideo.pause();
        playVideo.style.opacity = "0.3";
    }
}