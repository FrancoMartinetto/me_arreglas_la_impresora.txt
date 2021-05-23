let cards = [
  {
    title: 'WE',
    description: 'ANIMA/ANIMA/ANIMA/ANIMA/',
    img: './images/9.png',
  },
  {
    title: 'BRING STORIES',
    description: 'ANIMA/ANIMA/ANIMA/ANIMA/',
    img: './images/8.png',
  },
  {
    title: 'FROM ALTERNATE UNIVERSES.',
    description: 'ANIMA/ANIMA/ANIMA/FINI',
    img: './images/7.png',
  },
  {
    title: 'Jandric for Dummies 404',
    description: 'FFFFFFFFFFFFF',
    img: './images/10.png',
  },
];
document.addEventListener('DOMContentLoaded', function () {
  CreateCards();
  AddListenerToModalCont();
  AddListenerToCard();
  addMenuBehaviour();
  const aboutUs = document.querySelector('#about_us');

  aboutUs.addEventListener('click', () => {
    const scrollElement = document.querySelector('footer');
    scrollElement.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

const openInstagram = () => {
  window.open(`https://www.Instagram.com/animafini/`);
};
let AddListenerToCard = () => {
  let cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      console.log(event);
      let modalCont = document.querySelector('.modal_container');
      modalCont.classList.add('show');
      const target = event.target;
      const card = target.closest('.card');
      console.log(card);
      let usedIndex = card.dataset.index;
      ChangeModalContent(parseInt(usedIndex));
    });
  });
};

const ChangeModalContent = (index) => {
  const title = document.querySelector('.title');
  const description = document.querySelector('.description');
  const image = document.querySelector('.img');
  title.textContent = cards[index].title;
  description.textContent = cards[index].description;
  image.src = cards[index].img;
};
let AddListenerToModalCont = () => {
  let modalCont = document.querySelector('.modal_container');
  modalCont.addEventListener('click', (event) => {
    if (event.target === modalCont) {
      modalCont.classList.remove('show');
    } else {
      console.log('se hizo click en el modal');
    }
  });
};

const CreateCards = () => {
  const cardElements = cards.map((el, index) => {
    return `<div data-index="${index}" class="card">
          <img src="${el.img}" alt="" />
        <div class="card_description">
          <h4 class="card_title">${el.title}</h4>
          <p class="card_text">${el.description}</p>
        </div>
      </div>`;
  });
  console.log(cardElements);
  cardElements.forEach((element) => {
    const temporalParent = document.createElement('div');
    temporalParent.innerHTML = element;
    const cardsContainer = document.querySelector('.cards_container');
    cardsContainer.appendChild(temporalParent.firstChild);
  });
};
addMenuBehaviour = () => {
  let toggleMenuBtn = document.querySelector('.menu_container');
  toggleMenuBtn.addEventListener('click', (ev) => {
    let navMenu = document.querySelector('.navMenu');
    navMenu.classList.toggle('active');
    toggleMenuBtn.classList.toggle('active');
  });
};
