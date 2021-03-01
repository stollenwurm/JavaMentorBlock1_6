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

    if (window.innerWidth >= 768) {
      opacity.classList.add('opacity--open')
    }
    fb.classList.add('feedback--open')
    menu.classList.remove('menu--open')
  })

  if (window.innerWidth >= 768 && window.innerWidth < 1366) {
    phBtn.addEventListener('click', evt => {
      evt.preventDefault()

      opacity.classList.add('opacity--open')
      fb.classList.add('feedback--open')
      menu.classList.remove('menu--open')
    })
  }
  
  fbClose.addEventListener('click', evt => {
    evt.preventDefault()

    if (window.innerWidth >= 768) {
      opacity.classList.remove('opacity--open')
    }
    fb.classList.remove('feedback--open')
  })

  opacity.addEventListener('click', evt => {
    evt.preventDefault()

    opacity.classList.remove('opacity--open')
    fb.classList.remove('feedback--open')
  })
}