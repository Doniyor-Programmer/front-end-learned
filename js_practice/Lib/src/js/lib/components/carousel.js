import $ from '../core';

$.prototype.carousel = function () {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width,
            slides = this[i].querySelectorAll('.carousel-item'),
            slidesField = this[i].querySelector('.carousel-slides'),
            dots = this[i].querySelectorAll('.carousel-indicators li');

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0,
            slideIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click((e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;
            
            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
    }
};

$.prototype.createCarousel = function({id, slides, src, alt}) {
    const carousel = document.createElement('div'),
          carouselIndicators = document.createElement('ol'),
          carouselInner = document.createElement('div'),
          carouselSlides = document.createElement('div'),
          prev = document.createElement('a'),
          next = document.createElement('a');

    carousel.setAttribute('id', id);
    carousel.classList.add('carousel');
    carouselIndicators.classList.add('carousel-indicators');
    carouselInner.classList.add('carousel-inner');
    carouselSlides.classList.add('carousel-slides');
    carouselInner.append(carouselSlides);
    prev.setAttribute('href', '#');
    prev.classList.add('carousel-prev');
    prev.setAttribute('data-slide', 'prev');
    prev.innerHTML = `<span class="carousel-prev-icon">&lt;</span>`;
    next.setAttribute('href', '#');
    next.classList.add('carousel-next');
    next.setAttribute('data-slide', 'next');
    next.innerHTML = `<span class="carousel-next-icon">&gt;</span>`;
    carousel.append(carouselIndicators, carouselInner, prev, next);

    for (let i = 0; i < slides; i++) {
        const dot = document.createElement('li'),
              carouselItem = document.createElement('div'),
              slideImg = document.createElement('img');

        dot.setAttribute('data-slide-to', i);

        carouselItem.classList.add('carousel-item');
        slideImg.setAttribute('src', src[i]);
        slideImg.setAttribute('alt', alt[i]);
        carouselItem.append(slideImg);

        carouselIndicators.append(dot);
        carouselSlides.append(carouselItem);

        if (i == 0) {
            dot.classList.add('active');
        } else {
            continue;
        }
    }

    $(carousel).carousel();
    this[0].append(carousel);
};

$('.carousel').carousel();