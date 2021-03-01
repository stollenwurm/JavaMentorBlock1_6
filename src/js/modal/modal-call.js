let btn = document.querySelector('.page-button--call')
let ph = document.querySelector('.page-header')
let phBtn = ph.querySelector('.page-button--call')
let menu = document.querySelector('.menu')
let call = document.querySelector('.call')
let callClose = call.querySelector('.page-button--close')
let opacity = document.querySelector('.opacity')

export function modalCall () {
  btn.addEventListener('click', evt => {
    evt.preventDefault()

    if (window.innerWidth >= 768) {
      opacity.classList.add('opacity--open')
    }
    call.classList.add('call--open')
    menu.classList.remove('menu--open')
  })

  if (window.innerWidth >= 768 && window.innerWidth < 1366) {
    phBtn.addEventListener('click', evt => {
      evt.preventDefault()

      opacity.classList.add('opacity--open')
      call.classList.add('call--open')
      menu.classList.remove('menu--open')
    })
  }

  callClose.addEventListener('click', evt => {
    evt.preventDefault()

    if (window.innerWidth >= 768) {
      opacity.classList.remove('opacity--open')
    }
    call.classList.remove('call--open')
  })

  opacity.addEventListener('click', evt => {
    evt.preventDefault()

    menu.classList.remove('menu--open')
    call.classList.remove('call--open')
    opacity.classList.remove('opacity--open')
  })
}