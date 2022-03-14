let swiperComments = new Swiper('.comments .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
    },

    pagination: {
        el: '.comments .swiper-pagination',
    },
});

let swiperPhotos = new Swiper('.photos .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: '-7%',

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 'auto',
            spaceBetween: '-7%',
        }
    },


    pagination: {
        el: '.photos .swiper-pagination',
    },
});

let swiperAbout = new Swiper('.about-us .swiper', {
    direction: 'horizontal',

    breakpoints: {
        0: {
            loop: true,
            slidesPerView: 1
        },
        768: {
            slidesPerView: 3
        }
    },

    pagination: {
        el: '.about-us .swiper-pagination',
    },
});

const burger = document.querySelector('.header__burger')

burger.addEventListener('click', function () {
    this.classList.toggle('header__burger--active')
})

const aboutUsVideo = [...document.querySelectorAll('.about-us__video')]

if (!aboutUsVideo.length) {

} else {
    const aboutUsPopup = document.querySelector('.about-us__popup')
    const close = document.querySelector('.about-us__popup .close-popup')

    aboutUsVideo.forEach(elem => {
        elem.addEventListener('click', function () {
            aboutUsPopup.classList.add('about-us__popup--visible')
        })
    })

    close.addEventListener('click', function (e) {
        e.stopPropagation()
        aboutUsPopup.classList.remove('about-us__popup--visible')
    })

    aboutUsPopup.addEventListener('click', function (e) {
        e.stopPropagation()
        aboutUsPopup.classList.remove('about-us__popup--visible')
    })
}

const btnTag = [...document.querySelectorAll('.btn-tag')]

if (!btnTag.length) {

} else {
    const popUpPrices = [...document.querySelectorAll('.popup-prices')]
    const body = document.querySelector('body')
    const close = document.querySelectorAll('.popup-prices .close-popup')

    btnTag.forEach((elem, index) => {
        elem.addEventListener('click', function (e) {
            e.preventDefault()
            popUpPrices.forEach((el, idx) => {
                if (index === idx) {
                    el.classList.add('popup-prices--active')
                    body.classList.add('noscroll')
                }
            })
        })
    })

    popUpPrices.forEach(elem => {
        elem.addEventListener('click', function (e) {
            const item = e.target

            if (item.classList.contains('popup-prices--active')) {
                this.classList.remove('popup-prices--active')
                body.classList.remove('noscroll')
            }
        })
    })

    close.forEach((elem, index) => {
        elem.addEventListener('click', function () {
            popUpPrices.forEach((el, idx) => {
                if (index === idx) {
                    el.classList.remove('popup-prices--active')
                    body.classList.remove('noscroll')
                }

            })
        })
    })
}

const orderCar = [...document.querySelectorAll('.cars .cars__card .btn ')]

if (!orderCar.length) {

} else {
    const popUpOrder = document.querySelector('.popup-order')
    const carRadioBtn = [...document.querySelectorAll('.order__form input[type=radio]')]
    const body = document.querySelector('body')
    const close = document.querySelector('.popup-order .close-popup')

    orderCar.forEach(elem => {
        elem.addEventListener('click', function (e) {
            e.preventDefault()
            const item = this

            popUpOrder.classList.add('popup-order--active')
            body.classList.add('noscroll')

            carRadioBtn.forEach(elem => {
                if (elem.value === item.dataset.radio) {
                    elem.checked = true
                }
            })
        })
    })

    popUpOrder.addEventListener('click', function (e) {
        const item = e.target
        if (item.classList.contains('popup-order--active')) {
            this.classList.remove('popup-order--active')
            body.classList.remove('noscroll')
        }
    })

    close.addEventListener('click', function () {
        popUpOrder.classList.remove('popup-order--active')
        body.classList.remove('noscroll')
    })
}


