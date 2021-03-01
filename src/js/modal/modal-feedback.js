let btn = document.querySelector('.page-button--request')
let services = document.querySelector('.services')
let btnServ = services.querySelector('.page-button--request')
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
  })
  
  fbClose.addEventListener('click', evt => {
    evt.preventDefault()

    if (window.innerWidth >= 768) {
      opacity.classList.remove('opacity--open')
    }
    fb.classList.remove('feedback--open')
  })
  
  btnServ.addEventListener('click', evt => {
    evt.preventDefault()

    opacity.classList.add('opacity--open')
    fb.classList.add('feedback--open')
  })

  opacity.addEventListener('click', evt => {
    evt.preventDefault()

    opacity.classList.remove('opacity--open')
    fb.classList.remove('feedback--open')
  })
}