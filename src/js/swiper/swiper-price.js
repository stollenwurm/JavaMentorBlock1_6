import Swiper, { Pagination } from 'swiper'

Swiper.use([Pagination])

const swiper = document.querySelector('.swiper-container--price')

let mySwiper

export function mobileSliderPrice () {
  if ((window.innerWidth < 768) && (swiper.dataset.mobile === 'false')) {
    mySwiper = new Swiper(swiper, {
      pagination: {
        el: '.swiper-pagination--price',
        clickable: true
      },
    
      grabCursor: true,
    
      slidesPerView: 1.15,
    
      // spaceBetween: 16,
      slideClass: 'price-items__item',
    
      a11y: {
        enabled: true
      }
    })
  
    swiper.dataset.mobile = 'true'
  } 
  
  if (window.innerWidth >= 768) {
    swiper.dataset.mobile = 'false'

    if (swiper.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy()
    }
  }
}
