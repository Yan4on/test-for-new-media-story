const sliderText = [
    '_УНИКАЛЬНОСТЬ / ЗАПАТЕНТОВАННЫЕ ТЕХНОЛОГИИ',
    '_ЭКСПЕРТИЗА / СОБСТВЕННЫЕ НАУЧНЫЕ РАЗРАБОТКИ',
    '_СОЗДАН ДЛЯ РОССИИ / РАЗРАБОТАН ДЛЯ ЭКСТРЕМАЛЬНЫХ УСЛОВИЙ',
    'ПОДХОДИТ ДЛЯ HI_TECH МАТЕРИАЛОВ_',
    "ЗАЩИТА БЕЛОГО ЦВЕТА / ТЕХНОЛОГИЯ EXTRA WHITE_",
    "ЕВРОПЕЙСКИЕ ИННОВАЦИИ_"
]

const mechanismMob = document.querySelector(".mechanism-mob")
const mechanismMobContainer = mechanismMob.querySelector(".mechanism-mob__container")
const mechanismMobDescription = mechanismMob.querySelector(".mechanism-mob__description")
const mechanismMobPinion = mechanismMob.querySelector(".mechanism-mob__pinion")

const btnLeft =  mechanismMob.querySelector(".btm_left")
const btnRight =  mechanismMob.querySelector(".btm_right")


if (typeof mechanismMobDescription.textContent !== "undefined") {
    mechanismMobDescription.textContent = sliderText[0];
} else {
    mechanismMobDescription.innerText = 'Error';
}


  btnRight.addEventListener('click', function() {
  var current = +mechanismMobDescription.getAttribute('data-current'); // запоминаем текущий отображаемый элемент в атрибуте
  current++;
  if (current >= sliderText.length) {
    current = 0;
  }
  mechanismMobDescription.setAttribute('data-current', current);
  mechanismMobDescription.innerHTML = sliderText[current];
});

btnLeft.addEventListener('click', function() {
  var current = +mechanismMobDescription.getAttribute('data-current');
  current--;
  if (current < 0) {
    current = sliderText.length - 1;
  }
  mechanismMobDescription.setAttribute('data-current', current);
  mechanismMobDescription.innerHTML = sliderText[current];
});

