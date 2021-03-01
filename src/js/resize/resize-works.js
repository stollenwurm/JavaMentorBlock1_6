let works = document.querySelector('.works')
let btn = works.querySelector('.services-button')
let img = btn.querySelector('img')
let p = btn.querySelector('.services-button-item__text')
let content = works.querySelector('.works-items')

export function resizeWorks () {
  btn.addEventListener('click', function (evt) {
    evt.preventDefault()
    
    if (btn.classList.contains('services-button--open')) {
      btn.classList.remove('services-button--open')
      works.classList.add('works--b')
      content.classList.add('works-items--b')
      img.src = 'img/icon-reverse.svg'
      p.textContent = 'Скрыть'
      p.style.width = '57px'
      btn.style.width = '88px'
    } else  {
      btn.classList.add('services-button--open')
      works.classList.remove('works--b')
      content.classList.remove('works-items--b')
      img.src = 'img/icon.svg'
      p.textContent = 'Показать все'
      p.style.width = '101px'
      btn.style.width = '101px'
    }
  })
}