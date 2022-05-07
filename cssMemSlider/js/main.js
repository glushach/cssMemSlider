const slides = [
    {src: './img/slide_1.1.jpg', alt: 'slide_1', title: 'Fort on the lake'},
    {src: './img/slide_2.1.jpg', alt: 'slide_2', title: 'West coast'},
    {src: './img/slide_3.1.jpg', alt: 'slide_3', title: 'New Your'},
    {src: './img/slide_4.1.jpg', alt: 'slide_4', title: 'UK Real Estate'},
    {src: './img/slide_5.1.jpg', alt: 'slide_5', title: 'River in the forest'},
    {src: './img/slide_6.1.jpg', alt: 'slide_6', title: 'Grass-plot'},
];

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelectorAll('.carousel__card');
    const docs = document.querySelectorAll('.dots__dot');
    const docsSpan = document.querySelectorAll('span');
    const title = document.querySelectorAll('.titles__item');
    let preventIndex = 0;

    docs.forEach((item, idx) => {
        item.addEventListener('click', (e) => {

            docsSpan.forEach((el, i) => {
                el.classList.remove('active');

                let currentIndex = +e.target.dataset.id;
                if (i === currentIndex) {
                    el.classList.add('active');
                    preventIndex = currentIndex;
                }
            });
            console.log('IDX', preventIndex)
            //console.log(slides[item.dataset.id])
        });
        //console.log(item.dataset.id)
    })

    console.log('Длина массива', slider.length)
});

