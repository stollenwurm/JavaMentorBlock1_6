let btn = document.querySelector('.page-button--burger')
let menu = document.querySelector('.menu')
let menuClose = menu.querySelector('.page-button--close')
let opacity = document.querySelector('.opacity')

export function modalMenu () {
  btn.addEventListener('click', evt => {
    evt.preventDefault()

    if (window.innerWidth >= 768) {
      opacity.classList.add('opacity--open')
    }
    menu.classList.add('menu--open')
  })

  menuClose.addEventListener('click', evt => {
    evt.preventDefault()

    if (window.innerWidth >= 768) {
      opacity.classList.remove('opacity--open')
    }
    menu.classList.remove('menu--open')
  })

  opacity.addEventListener('click', evt => {
    evt.preventDefault()

    menu.classList.remove('menu--open')
    opacity.classList.remove('opacity--open')
  })
}