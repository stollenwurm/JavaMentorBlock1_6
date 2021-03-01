let brands = document.querySelector('.brands')
let btn = brands.querySelector('.services-button')
let img = btn.querySelector('img')
let p = btn.querySelector('.services-button-item__text')
let content = brands.querySelector('.brands-items')

export function resizeBrands () {
  btn.addEventListener('click', function (evt) {
    evt.preventDefault()
    
    if (btn.classList.contains('services-button--open')) {
      btn.classList.remove('services-button--open')
      brands.classList.add('brands--b')
      content.classList.add('brands-items--b')
      img.src = 'img/icon-reverse.svg'
      p.textContent = 'Скрыть'
      p.style.width = '57px'
      btn.style.width = '88px'
    } else  {
      btn.classList.add('services-button--open')
      brands.classList.remove('brands--b')
      content.classList.remove('brands-items--b')
      img.src = 'img/icon.svg'
      p.textContent = 'Показать все'
      p.style.width = '101px'
      btn.style.width = '101px'
    }
  })
}