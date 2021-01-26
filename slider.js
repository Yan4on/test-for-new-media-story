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

const rotate = document.querySelector(".rotate")



if (typeof mechanismMobDescription.textContent !== "undefined") {
  mechanismMobDescription.textContent = sliderText[0];
} else {
  mechanismMobDescription.innerText = 'Error';
}

function swipeLeft() {
  let current = +mechanismMobDescription.getAttribute('data-current');
  current--;
  if (current < 0) {
    current = sliderText.length - 1;
  }
  mechanismMobDescription.setAttribute('data-current', current);
  mechanismMobDescription.innerHTML = sliderText[current];
}

function swipeRigth() {
  let current = +mechanismMobDescription.getAttribute('data-current'); // запоминаем текущий отображаемый элемент в атрибуте
  current++;
  if (current >= sliderText.length) {
    current = 0;
  }
  mechanismMobDescription.setAttribute('data-current', current);
  mechanismMobDescription.innerHTML = sliderText[current];
}


let initialPoint;
let finalPoint;
document.addEventListener('touchstart', function (event) {
  // event.preventDefault();
  event.stopPropagation();
  initialPoint = event.changedTouches[0];
}, false);
mechanismMob.addEventListener('touchend', function (event) {
  event.preventDefault();
  event.stopPropagation();
  finalPoint = event.changedTouches[0];
  let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
  let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);

  if (xAbs > 10 || yAbs > 10) {
    if (xAbs > yAbs) {
      if (finalPoint.pageX < initialPoint.pageX) {
        swipeLeft()
        mechanismMobPinion.classList.toggle("rotate")
        // setTimer ()
      }
      else {
        swipeRigth()
        mechanismMobPinion.classList.toggle("rotate")
        // setTimer ()
      }
    }
  }
}, false);



