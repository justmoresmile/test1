let whyItem = document.querySelectorAll('.why__item');

whyItem.forEach(function(item){
    let whyDescr = item.querySelector('.why__descr');
    let whyButton = item.querySelector('.button__why');
    item.addEventListener('mouseover', function(){
        // whyDescr.style.color = '#fff';
        // whyDescr.style.fontWeight = '500';
        // whyButton.style.borderColor = '#fff';
        // whyButton.style.border = '3, solid';
    
    });
});

