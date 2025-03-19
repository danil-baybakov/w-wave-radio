// header
// ==========================================================
// ==========================================================
// ==========================================================

// модальное окно

const modal = new GraphModal();

// валидация формы

const formPass = document.querySelector('.header-modal-user__form-input--pass');

new window.JustValidate('.header-modal-user__form', {
  colorWrong: '#D52B1E',
  rules: {
    login: {
      required: true,
      minLength: 3,
      maxLength: 10,
    },
    pass: {
      required: true,
      strength: {
        // Строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 символов
        custom: '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$',
      }
    },
  },

  messages: {
    login: {
      required: 'Вы не ввели логин',
      minLength: 'Длинна логина меньше 3-х букв!!',
      maxLength: 'Длинна логина больше 10-ти букв!!'
    },
    pass: {
      required: 'Вы не ввели пароль',
      strength: 'Ошибка!!',
    },
  },

});

// aккордеон

let headerAccordion = new Accordion('.header__col-play .ac', {
  elementClass: 'ac__item',
  triggerClass: 'ac__header-trigger',
  panelClass: 'ac__panel',
  openOnInit: [],
});

// бургер
let itemBthBurgerOpen = document.querySelector('.header__burger');
let itemBthBurgerClose = document.querySelector('.header__close-burger');
let itemNav = document.querySelector('.header__col-nav');
let itemNavLink = document.querySelectorAll('.header__nav-link');
let itemMenu = document.querySelector('.header__col-menu');
let itemMenuLink = document.querySelectorAll('.header__menu-link');

itemBthBurgerOpen.addEventListener('click', () => {
  itemNav.classList.add('is--burger');
  itemMenu.classList.add('is--burger');
  document.body.classList.add('stop-scroll');
});

itemBthBurgerClose.addEventListener('click', () => {
  itemNav.classList.remove('is--burger');
  itemMenu.classList.remove('is--burger');
  document.body.classList.remove('stop-scroll');
});

itemNavLink.forEach(e => {
  e.addEventListener('click', () => {
    itemNav.classList.remove('is--burger');
    itemMenu.classList.remove('is--burger');
    document.body.classList.remove('stop-scroll');
  });
});

itemMenuLink.forEach(e => {
  e.addEventListener('click', () => {
    itemNav.classList.remove('is--burger');
    itemMenu.classList.remove('is--burger');
    document.body.classList.remove('stop-scroll');
  });
});

// выдвигающийся поиск
let itemSearchBth = document.querySelector('.header__search-bth');
let itemSearchInput = document.querySelector('.header__search-input');

itemSearchBth.addEventListener('click', () => {
  itemSearchInput.classList.toggle('is--active');
})

// broadcasts
// ==========================================================
// ==========================================================
// ==========================================================

// кастомный селект

const elChoiseBroadcasts = document.querySelector('.broadcasts__choise .choise');
const choiseBroadcasts = new Choices(elChoiseBroadcasts, {
  searchEnabled: false,
  position: 'bottom',
  placeholder: false,
  itemSelectText: '',
  sorter: () => { },
});


// guests
// ==========================================================
// ==========================================================
// ==========================================================

// Аккордеон

let guestsAccordion = new Accordion('.guests__left .ac', {
  elementClass: 'ac__item',
  triggerClass: 'ac__header-trigger',
  panelClass: 'ac__panel',
  openOnInit: [0],
});

// Табы

let guestsItems = document.querySelectorAll('.guests__bth');

guestsItems.forEach(e => {
  e.addEventListener('click', e => {
    const path = e.currentTarget.dataset.path;
    console.log(path);

    document.querySelectorAll('.guests__right-item').forEach(e => {
      e.classList.remove('guests__right-item--active');
    })

    if (document.querySelector(`[data-target=${path}]`) !== null) {
      document.querySelector(`[data-target=${path}]`).classList.add('guests__right-item--active');
    } else {
      document.querySelector(`[data-target=none]`).classList.add('guests__right-item--active');
    };

  })
})


// playlists
// ==========================================================
// ==========================================================
// ==========================================================

// слайдер - категории

const swiperComtainerRadio = document.querySelector('.playlists__radio-swiper');
let swiperRadio;

function mobileSwiperRadio() {
  if (window.innerWidth < 576 && swiperComtainerRadio.dataset.mobile == 'false') {
    swiperRadio = new Swiper(swiperComtainerRadio, {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,

      a11y: {
        slideLabelMessage: '{{index}} радиокнопка из {{slidesLength}}',
        slideRole: 'radio',
      },
    });

    swiperComtainerRadio.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 576) {
    swiperComtainerRadio.dataset.mobile = 'false';

    if (swiperComtainerRadio.classList.contains('swiper-initialized')) {
      swiperRadio.destroy();
    }
  }
}

mobileSwiperRadio();

window.addEventListener('resize', () => {
  mobileSwiperRadio();
})

// слайдер - карточки

const swiperComtainerCards = document.querySelector('.playlists__cards-swiper');

new Swiper(swiperComtainerCards, {
  slidesPerView: 2,
  grid: {
    rows: 6,
    fill: 'row',
  },
  spaceBetween: 30,

  a11y: {
    slideLabelMessage: '{{index}} плейлист из {{slidesLength}}',
    prevSlideMessage: 'Предыдущий плейлист',
    nextSlideMessage: 'Следующий плейлист',
  },

  breakpoints: {
    992: {
      slidesPerView: 3,
      grid: {
        rows: 4,
        fill: 'row',
      },
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      grid: {
        rows: 3,
        fill: 'row',
      },
      spaceBetween: 30,
    }
  }
});


// about
// ==========================================================
// ==========================================================
// ==========================================================

// слайдер - карточки

const swiperAboutComtainer = document.querySelector('.about__cards-swiper');

new Swiper(swiperAboutComtainer, {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 20,

  navigation: {
    nextEl: null,
    prevEl: null,
  },

  a11y: {
    slideLabelMessage: '{{index}} исполнитель из {{slidesLength}}',
    prevSlideMessage: 'Предыдущий плейлист',
    nextSlideMessage: 'Следующий плейлист',
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,

      navigation: {
        nextEl: '.about__cards-bth-next',
        prevEl: '.about__cards-bth-prev',
      },

    },

    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,

      navigation: {
        nextEl: '.about__cards-bth-next',
        prevEl: '.about__cards-bth-prev',
      },

    },

  }

});


// валидация формы

new window.JustValidate('.about__form', {
  colorWrong: '#D52B1E',
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 10,
    },
    email: {
      required: true,
      email: true,
    },
  },

  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Длинна имени меньше 3-х букв!!',
      maxLength: 'Длинна имени больше 15-ти букв!!',
    },
    email: {
      required: 'Вы не ввели Email',
      email: 'Email не корректный!',
    },
  },

});

