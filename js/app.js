new Swiper('.swiper', {
    mousewheel: {
      },
      direction: 'vertical',
      speed: 800,
      slidesPerView: 'auto', 
});

new Swiper('.slider', {
    mousewheel: {
      },
      freeMode: true,
      nested: true,
      direction: 'vertical',
      speed: 800,
});

new Swiper('.sliderForm', {
    mousewheel: {
      },
      freeMode: true,
      nested: true,
      direction: 'vertical',
      height: null,
});

document.body.onload = function (){
    setTimeout(function(){
        let preloader = document.querySelector('.preloader');
        if ( !preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000)
    
}

let slide = document.querySelector('.form-slide');

document.addEventListener('mousemove', function(){
    slide.style.height = "auto";
})

// let last = document.querySelector('.last');

// document.addEventListener('mousemove', function(){
//     last.style.height = '.5px';
// })