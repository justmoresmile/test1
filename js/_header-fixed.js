window.onscroll = function showHeader() {
    let header = document.querySelector('.header');
    let headerWrapper = document.querySelector('.header__wrapper');
    let headerLink = document.querySelectorAll('.header__link');
    let headerLinkFixed = document.querySelectorAll('.header__link-fixed');
    if (window.pageYOffset > 0) {
        header.classList.add('header-fixed');
    }if (window.pageYOffset > 0){
        headerWrapper.classList.add('header__wrapper-fixed');

    }if (window.pageYOffset > 0){
        headerLink.forEach(function(item){
            item.classList.add('header__link-fixed');
        });
    }  else{
    header.classList.remove('header-fixed');
    headerWrapper.classList.remove('header__wrapper-fixed');
    headerLinkFixed.forEach(function(item){
         item.classList.remove('header__link-fixed');
    });
   
    }
    
    
};