"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promoAdv = document.querySelectorAll(".promo__adv img"),
    promoGenre = document.querySelector(".promo__genre"),
    promoBg = document.querySelector(".promo__bg"),
    promoInteractiveList = document.querySelector(".promo__interactive-list");

promoAdv.forEach(item => {
    item.remove();
});

promoGenre.innerHTML = "драма".toUpperCase();

promoBg.style.backgroundImage = "url(img/bg.jpg)";

// 2)

promoInteractiveList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    promoInteractiveList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});
