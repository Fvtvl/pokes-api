export default function getRefs() {
    return {
        cardContainer: document.querySelector('.js-class-container'),
        cardImg: document.querySelector('.js-img'),
        cardName: document.querySelector('.js-name'),
        cardFull: document.querySelector('.js-btn-info'),
        searchForm: document.querySelector('.js-search-form'),
        showForm: document.querySelector('.js-btn-show'),
        startFind: document.querySelector('.js-btn-primary'),
    };
}