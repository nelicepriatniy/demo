

new Swiper('.swiper', {
    mousewheel: {
      },
      direction: 'vertical',
      speed: 800,
    //   slidesPerView: 1, 
    hashNavigation: {
        watchState: true,
        replaceState: true,
      },
});

new Swiper('.sostav__slider', {
    mousewheel: {
      },
      direction: 'vertical',
    slidesPerView: 8, 
    spaceBetween: 10,
    simulateTouch: false,
});

new Swiper('.slider', {
    mousewheel: {
      },
      nested: true,
      direction: 'vertical',
      speed: 800,
      freeMode: {
        enabled: true,
      },
});

new Swiper('.swiper-form', {
    mousewheel: {
    },
    nested: true,
    direction: 'vertical',
    freeMode: {
        enabled: true,
      },
    autoHeight: true,
})

document.body.onload = function (){
    setTimeout(function(){
        let preloader = document.querySelector('.preloader');
        if ( !preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000)
    
}

// let slide = document.querySelector('.form-slide');

// document.addEventListener('mousemove', function(){
//     slide.style.height = "auto";
// })

// let last = document.querySelector('.last');

// document.addEventListener('mousemove', function(){
//     last.style.height = '.5px';
// })

let btn = document.querySelectorAll('.btn');

btn.forEach(element => {
    element.addEventListener('click', function(){
        document.querySelector('.lsat').classList.toggle('active');
        document.querySelector('.qweqwe').classList.toggle('active');
    })
});

//дополнительная информаця/состав

document.querySelector('.more').addEventListener('click', function(){
    document.querySelector('.tovar-podrobnee').classList.add('active');
    document.querySelector('.popap__close').classList.add('active')
})

document.querySelector('.popap__close').addEventListener('click', function(){
    document.querySelector('.tovar-podrobnee').classList.remove('active');
    document.querySelector('.popap__close').classList.remove('active')
    document.querySelector('.sostav').classList.remove('active')
})

document.querySelector('.sostavbtn').addEventListener('click', function(){
    document.querySelector('.sostav').classList.add('active');
    document.querySelector('.popap__close').classList.add('active')
})

let slides = document.querySelectorAll('.slide__sostav');

document.addEventListener('wheel', function(){
    for (i = 0; i < slides.length; ++i) {
        if(slides[i].classList.contains('swiper-slide-active')){
            slides[i+7].classList.add('sostavPrev');
        } else if(!slides[i].classList.contains('swiper-slide-active')){
            slides[i+7].classList.remove('sostavPrev');
        }
    }
})
document.addEventListener('mousemove', function(){
    for (i = 0; i < slides.length; ++i) {
        if(slides[i].classList.contains('swiper-slide-active')){
            slides[i+7].classList.add('sostavPrev');
        } else if(!slides[i].classList.contains('swiper-slide-active')){
            slides[i+7].classList.remove('sostavPrev');
        }
    }
})

slides.forEach(element => {
    element.addEventListener('click', function(){
        let textId = element.getAttribute('data-t');
        let text = document.querySelector(textId);
        let textdel = document.querySelectorAll('.sostavtext');
        textdel.forEach(element => {
            element.classList.remove('active')
        });
        text.classList.add('active')

    })
});

//форма
let formBtn = document.querySelectorAll('.formBtn');

formBtn.forEach(element => {
    element.addEventListener('click', function(){
        document.querySelector('.forma').classList.add('active');
    })
});

let closeForm = document.querySelectorAll('.closeForm');

closeForm.forEach(element => {
    element.addEventListener('click', function(){
        document.querySelector('.forma').classList.remove('active');
    })
});