//burger menu
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.add('is-active');
  });
  document.querySelector('#burger-close').addEventListener('click', function () {
    document.querySelector('#menu').classList.remove('is-active');
  });
});

//search form

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#search').addEventListener('click', function () {
    document.querySelector('.search__form').classList.add('search__form--active');
  });
  document.querySelector('#search__close').addEventListener('click', function (evt) {
    evt.preventDefault()
    document.querySelector('.search__form').classList.remove('search__form--active');
  });
});

//swiper
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    hide: true,
  },
  //Scrolling effect
  effect: 'cube',
});

//tabs 
document.querySelectorAll('.work__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path;

    document.querySelectorAll('.work__content').forEach(function(tabContent) {
      tabContent.classList.remove('work__content-active');
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('work__content-active');
  })

  tabsBtn.addEventListener('click', function(event) {
    const tabDefault = event.currentTarget.dataset.default;

    document.querySelectorAll('.work__btn').forEach(function(tabContent) {
      tabContent.classList.remove('work__btn--active');
    })
    document.querySelector(`[data-path="${tabDefault}"]`).classList.add('work__btn--active');
  })

})

