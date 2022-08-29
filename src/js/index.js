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
      deckContainer = document.querySelector('.deck-container'),
      playCard = document.querySelector('.deck-container-bottom');


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


// btnEasy.addEventListener('click', () => {
//   btnEasy.classList.add('btn-active');
//   btnMedium.classList.remove('btn-active');
//   btnHard.classList.remove('btn-active');
//   mixContainer.style.display = 'flex';
// })
btnMedium.addEventListener('click', () => {
  // btnEasy.classList.remove('btn-active');
  btnMedium.classList.add('btn-active');
  // btnHard.classList.remove('btn-active');
  mixContainer.style.display = 'flex';
})
// btnHard.addEventListener('click', () => {
//   btnEasy.classList.remove('btn-active');
//   btnMedium.classList.remove('btn-active');
//   btnHard.classList.add('btn-active');
//   mixContainer.style.display = 'flex';
// })


btnMix.addEventListener('click', () => {
  btnMix.classList.toggle('btn-active');
  deckContainer.style.display = 'block';
});



// ******************************Типа логика********************************

const cardsBlueData = ['blue1', 'blue2','blue3','blue4','blue5','blue6','blue7','blue8','blue9','blue10','blue11','blue12'];
const cardsGreenData = ['green1', 'green2', 'green3', 'green4', 'green5', 'green6', 'green7', 'green8', 'green9', 'green10', 'green11', 'green12', 'green13', 'green14', 'green15', 'green16', 'green17', 'green18'];
const cardsBrownData = ['brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown6', 'brown7', 'brown8', 'brown9', 'brown10', 'brown11', 'brown12', 'brown13', 'brown14', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20',  'brown21'];


const randomBlue = Math.round(Math.random() * cardsBlueData.length);
const randomGreen = Math.round(Math.random() * (18 -1) + 1);
const randomBrown = Math.round(Math.random() * (21 -1) + 1);
let stage1 = ['', `green${randomGreen}`, `brown${randomBrown}`, `brown${randomBrown - 1}`, `blue${randomBlue}`, `green${randomGreen - 1}`, `green${randomGreen - 2}`, `brown${randomBrown - 2}`, `brown${randomBrown + 1}`, `brown${randomBrown + 2}`, `blue${randomBlue - 1}`, `green${randomGreen + 1}`, `green${randomGreen + 2}`, `brown${randomBrown + 3}`, `brown${randomBrown + 4}`, `brown${randomBrown - 4}`, `brown${randomBrown - 3}`];
// let stage2 = [`green${randomGreen - 1}`, `green${randomGreen - 2}`, `brown${randomBrown - 2}`, `brown${randomBrown + 1}`, `brown${randomBrown + 2}`, `blue${randomBlue - 1}`];
// let stage3 = [`green${randomGreen + 1}`, `green${randomGreen + 2}`, `brown${randomBrown + 3}`, `brown${randomBrown + 4}`, `brown${randomBrown - 4}`, `brown${randomBrown - 3}`];

backCard.addEventListener('click', changeBg);

let counter = 0;
function changeBg(){
  let i = counter += 1;
  if (i === 16){
    alert('Reload page');
  }
  playCard.style.background = `url('../../assets/MythicCards/ALL/${stage1[i]}.jpg')`;
  playCard.style.width = '404px';
  playCard.style.height = '592px';
  playCard.style.backgroundSize = '103%';
}


