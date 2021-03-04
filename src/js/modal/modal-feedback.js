let content = document.querySelector('.page-content')
let btn = document.querySelector('.page-button--chat')
let ph = document.querySelector('.page-header')
let phBtn = ph.querySelector('.page-button--chat')
let menu = document.querySelector('.menu')
let fb = document.querySelector('.feedback')
let fbClose = fb.querySelector('.page-button--close')
let opacity = document.querySelector('.opacity')

export function modalFeedback () {
  btn.addEventListener('click', evt => {
    evt.preventDefault()

    content.classList.add('page-content--fixed')
    opacity.classList.add('opacity--open')
    fb.classList.add('feedback--open')
    menu.classList.remove('menu--open')
    menu.classList.add('menu--fixed')
  })

  if (window.innerWidth >= 768 && window.innerWidth < 1366) {
    phBtn.addEventListener('click', evt => {
      evt.preventDefault()

      content.classList.add('page-content--fixed')
      opacity.classList.add('opacity--open')
      fb.classList.add('feedback--open')
      menu.classList.remove('menu--open')
      menu.classList.add('menu--fixed')
    })
  }
  
  fbClose.addEventListener('click', evt => {
    evt.preventDefault()

    content.classList.remove('page-content--fixed')
    opacity.classList.remove('opacity--open')
    fb.classList.remove('feedback--open')
    menu.classList.remove('menu--fixed')
  })

  opacity.addEventListener('click', evt => {
    evt.preventDefault()

    content.classList.remove('page-content--fixed')
    opacity.classList.remove('opacity--open')
    fb.classList.remove('feedback--open')
    menu.classList.remove('menu--fixed')
  })
}