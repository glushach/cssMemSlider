const slides = [
    {src: './img/slide_1.1.jpg', alt: 'slide_1', title: 'Fort on the lake'},
    {src: './img/slide_2.1.jpg', alt: 'slide_2', title: 'West coast'},
    {src: './img/slide_3.1.png', alt: 'slide_3', title: 'New Your'},
    {src: './img/slide_4.1.png', alt: 'slide_4', title: 'UK Real Estate'},
    {src: './img/slide_5.1.png', alt: 'slide_5', title: 'River in the forest'},
    {src: './img/slide_6.1.png', alt: 'slide_6', title: 'People and buildings'},
];

document.addEventListener('DOMContentLoaded', () => {
    const WRAPPER = document.querySelector('.carousel__inner');
    const slider = document.querySelectorAll('.carousel__card');
    const docs = document.querySelectorAll('.dots__dot');
    const docsSpan = document.querySelectorAll('span');
    const TITLES = document.querySelector('.titles');
    const title = document.querySelectorAll('.titles__item');
    let preventIndex = 0;

    docs.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            if (preventIndex !== +e.target.dataset.id) {
                docs.forEach(btn => {
                    btn.setAttribute('disabled', 'disabled'); // на веремя анимации отключить кнопки
                });
            }

            let currentIndex = +e.target.dataset.id;

            docsSpan.forEach((el, i) => {
                el.classList.remove('active');

                if (i === currentIndex) {
                    el.classList.add('active');
                }

            });
            if (preventIndex < currentIndex) { // добавить анимацию справа
                slider[2].firstElementChild.src = slides[currentIndex].src;
                slider[2].firstElementChild.alt = slides[currentIndex].alt;
                title[2].textContent = slides[currentIndex].title;
                WRAPPER.classList.add('transition-right');
                TITLES.classList.add('transition-right-title');
                preventIndex = currentIndex;
            } else if (currentIndex < preventIndex) { // добавить анимацию слева
                slider[0].firstElementChild.src = slides[currentIndex].src;
                slider[0].firstElementChild.alt = slides[currentIndex].alt;
                title[0].textContent = slides[currentIndex].title;
                WRAPPER.classList.add('transition-left');
                TITLES.classList.add('transition-left-title');
                preventIndex = currentIndex;
            }
        });
    })

    WRAPPER.addEventListener('animationend', (animationEvent) => {
        WRAPPER.classList.remove('transition-right');
        TITLES.classList.remove('transition-right-title');
        slider.forEach((item, idx) => { // взято из верстки
            item.firstElementChild.src = slides[preventIndex].src;
            item.firstElementChild.alt = slides[preventIndex].alt;
        });
        docs.forEach(btn => {
            btn.removeAttribute('disabled'); // на веремя анимации отключить кнопки
        });
    });


    TITLES.addEventListener('animationend', (animationEvent) => {
        WRAPPER.classList.remove('transition-left');
        TITLES.classList.remove('transition-left-title');
        title.forEach((item, idx) => { // взято из верстки
            item.textContent = slides[preventIndex].title;
        });
    });

    console.log('Длина массива из верстки', slider.length)
});

