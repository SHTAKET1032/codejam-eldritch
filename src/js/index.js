

// ;;;;;;;;;;;;;;;;Константы;;;;;;;;;;;;;;;;;;;;

const Azathoth = document.querySelector('.Azathoth'),
      Cthulthu = document.querySelector('.Cthulthu'),
      IogSothoth = document.querySelector('.IogSothoth'),
      ShubNiggurath = document.querySelector('.ShubNiggurath'),
      btnEasy = document.querySelector('.easy'),
      btnMedium = document.querySelector('.medium'),
      btnHard = document.querySelector('.hard'),
      btnMix = document.querySelector('.btn-mix'),
      backCard = document.querySelector('.back-card'),
      levelContainer = document.querySelector('.level-container'),
      mixContainer = document.querySelector('.mix-container'),
      deckContainer = document.querySelector('.deck-container');




// ;;;;;;;;;;;Клики по древним;;;;;;;;;;;;;;;;

Azathoth.addEventListener('click', () => {
  Azathoth.classList.add("boss-card-active");
  Cthulthu.classList.remove("boss-card-active");
  IogSothoth.classList.remove("boss-card-active");
  ShubNiggurath.classList.remove("boss-card-active");
  levelContainer.style.display = 'flex';
})

Cthulthu.addEventListener('click', () => {
  Azathoth.classList.remove("boss-card-active");
  Cthulthu.classList.add("boss-card-active");
  IogSothoth.classList.remove("boss-card-active");
  ShubNiggurath.classList.remove("boss-card-active");
  levelContainer.style.display = 'flex';
})

IogSothoth.addEventListener('click', () => {
  Azathoth.classList.remove("boss-card-active");
  Cthulthu.classList.remove("boss-card-active");
  IogSothoth.classList.add("boss-card-active");
  ShubNiggurath.classList.remove("boss-card-active");
  levelContainer.style.display = 'flex';
})

ShubNiggurath.addEventListener('click', () => {
  Azathoth.classList.remove("boss-card-active");
  Cthulthu.classList.remove("boss-card-active");
  IogSothoth.classList.remove("boss-card-active");
  ShubNiggurath.classList.add("boss-card-active");
  levelContainer.style.display = 'flex';
})


// ;;;;;;;;;;;Клики по уровням сложности и замес колоды;;;;;;;;;;;;;;;;


btnEasy.addEventListener('click', () => {
  btnEasy.classList.add('btn-active');
  btnMedium.classList.remove('btn-active');
  btnHard.classList.remove('btn-active');
  mixContainer.style.display = 'flex';
})
btnMedium.addEventListener('click', () => {
  btnEasy.classList.remove('btn-active');
  btnMedium.classList.add('btn-active');
  btnHard.classList.remove('btn-active');
  mixContainer.style.display = 'flex';
})
btnHard.addEventListener('click', () => {
  btnEasy.classList.remove('btn-active');
  btnMedium.classList.remove('btn-active');
  btnHard.classList.add('btn-active');
  mixContainer.style.display = 'flex';
})


btnMix.addEventListener('click', () => {
  btnMix.classList.add('btn-active');
  deckContainer.style.display = 'block';
});




// console.log('ZALUPA');