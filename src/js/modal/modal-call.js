let content = document.querySelector('.page-content')
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

    content.classList.add('page-content--fixed')
    opacity.classList.add('opacity--open')
    call.classList.add('call--open')
    menu.classList.remove('menu--open')
    menu.classList.add('menu--fixed')
  })

  if (window.innerWidth >= 768 && window.innerWidth < 1366) {
    phBtn.addEventListener('click', evt => {
      evt.preventDefault()

      content.classList.add('page-content--fixed')
      opacity.classList.add('opacity--open')
      call.classList.add('call--open')
      menu.classList.remove('menu--open')
      menu.classList.add('menu--fixed')
    })
  }

  callClose.addEventListener('click', evt => {
    evt.preventDefault()

    content.classList.remove('page-content--fixed')
    opacity.classList.remove('opacity--open')
    call.classList.remove('call--open')
    menu.classList.remove('menu--fixed')
  })

  opacity.addEventListener('click', evt => {
    evt.preventDefault()

    content.classList.remove('page-content--fixed')
    menu.classList.remove('menu--open')
    call.classList.remove('call--open')
    opacity.classList.remove('opacity--open')
    menu.classList.remove('menu--fixed')
  })
}