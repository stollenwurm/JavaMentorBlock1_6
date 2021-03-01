import '../scss/style.scss'
import {mobileSliderBrands} from './swiper/swiper-brands.js'
import {mobileSliderWorks} from './swiper/swiper-works.js'
import {mobileSliderPrice} from './swiper/swiper-price.js'

import {modalMenu} from './modal/modal-menu'
import {modalCall} from './modal/modal-call'
import {modalFeedback} from './modal/modal-feedback'

import {resizeServices} from './resize/resize-services'
import {resizeBrands} from './resize/resize-brands'
import {resizeWorks} from './resize/resize-works'

mobileSliderBrands()
mobileSliderWorks()
mobileSliderPrice()

modalMenu()
modalCall()
modalFeedback()

resizeServices()
resizeBrands()
resizeWorks()

window.addEventListener('resize', () => {
  mobileSliderBrands()
  mobileSliderWorks()
  mobileSliderPrice()
})
