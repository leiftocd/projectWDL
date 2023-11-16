const urlParams = new URLSearchParams(window.location.search);
const tabIdParam = urlParams.get('tab') || 'tab0';
const asideMenus = document.querySelectorAll('.aside .aside-menu');
const arrowRight = document.querySelector('.arrow-right .img-active');

let currentTab = 'all';
let currentIndex = 0;

    asideMenus.forEach(item => {
        item.addEventListener('click', () =>{
            let tab = item.getAttribute('data-tabs')
            if(tab){
                updateAsideMenuActiveState(tab);
                const urlParams = new URLSearchParams();
                urlParams.set('tab', tab);
                history.replaceState(null,null, `?${urlParams.toString()}`)
            }
        })
    })

    // If a tab ID parameter is found, set the active state
    if (tabIdParam) {
        // Update the active state of the aside menu
        updateAsideMenuActiveState(tabIdParam);
    }

    // Function to update the active state of the aside menu
    function updateAsideMenuActiveState(tabId) {
        const tabContent = document.querySelectorAll('.new-card .new-card__box');
        tabContent.forEach(content => {
            content.classList.remove('active')
            if(tabId === 'tab0'){
                content.classList.add('active')
            }
            let itemTag = content.querySelectorAll(`.tab span[data-tabs="${tabId}"]`)
            itemTag.forEach(item => {
                console.log(item)
                if(item.getAttribute('data-tabs') === tabId){
                    content.classList.add('active')
                }else{
                    content.classList.remove('active')
                }
            })
        });



        asideMenus.forEach(menu => {
            menu.classList.remove('active');
        });
    
        document.querySelectorAll('.arrow-right .img-active').forEach(imgActive => {
            imgActive.classList.remove('active');
        });
    
        const activeAsideMenu = document.querySelector(`.aside-menu[data-tabs="${tabId}"]`);
        const activeArrowRight = activeAsideMenu.querySelector('.img-active');
        if (activeAsideMenu && activeArrowRight) {
            activeAsideMenu.classList.add('active');
            activeArrowRight.classList.add('active');
        }
    }

    

     

