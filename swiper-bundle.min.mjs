/**
 * Swiper 11.0.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 14, 2023
 */

import{S as Swiper}from"./shared/swiper-core.min.mjs";import Mousewheel from"./modules/mousewheel.min.mjs";import Keyboard from"./modules/keyboard.min.mjs";import Navigation from"./modules/navigation.min.mjs";import Pagination from"./modules/pagination.min.mjs";import Scrollbar from"./modules/scrollbar.min.mjs";import Zoom from"./modules/zoom.min.mjs";import Autoplay from"./modules/autoplay.min.mjs";const modules=[Mousewheel,Keyboard,Navigation,Pagination,Scrollbar,Zoom,Autoplay];Swiper.use(modules);export{Swiper,Swiper as default};
//# sourceMappingURL=swiper-bundle.min.mjs.map