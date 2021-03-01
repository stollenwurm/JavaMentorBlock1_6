let services = document.querySelector('.services')
let btn = services.querySelector('.services-button')
let img = btn.querySelector('img')
let p = btn.querySelector('.services-button-item__text')
let content = services.querySelector('.services-content__text')

export function resizeServices () {
  btn.addEventListener('click', function (evt) {
    evt.preventDefault()
    
    if (btn.classList.contains('services-button--open')) {
      btn.classList.remove('services-button--open')
      services.classList.add('services--b')
      content.classList.add('services-content__text--b')
      img.src = 'img/icon-reverse.svg'
      p.textContent = 'Скрыть'
      p.style.width = '57px'
      btn.style.width = '88px'
    } else  {
      btn.classList.add('services-button--open')
      services.classList.remove('services--b')
      content.classList.remove('services-content__text--b')
      img.src = 'img/icon.svg'
      p.textContent = 'Показать все'
      p.style.width = '101px'
      btn.style.width = '101px'
    }
  })
}