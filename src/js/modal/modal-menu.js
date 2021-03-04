let content = document.querySelector('.page-content')
let btn = document.querySelector('.page-button--burger')
let menu = document.querySelector('.menu')
let menuClose = menu.querySelector('.page-button--close')
let opacity = document.querySelector('.opacity')

export function modalMenu () {
  btn.addEventListener('click', evt => {
    evt.preventDefault()

    content.classList.add('page-content--fixed')
    opacity.classList.add('opacity--open')
    menu.classList.add('menu--open')
  })

  menuClose.addEventListener('click', evt => {
    evt.preventDefault()

    content.classList.remove('page-content--fixed')
    opacity.classList.remove('opacity--open')
    menu.classList.remove('menu--open')
  })

  opacity.addEventListener('click', evt => {
    evt.preventDefault()

    content.classList.remove('page-content--fixed')
    menu.classList.remove('menu--open')
    opacity.classList.remove('opacity--open')
  })
}