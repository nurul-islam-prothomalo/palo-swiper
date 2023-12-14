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

import{S as Swiper}from"./shared/swiper-core.min.mjs";import Mousewheel from"./modules/mousewheel.min.mjs";import Navigation from"./modules/navigation.min.mjs";import Pagination from"./modules/pagination.min.mjs";import Parallax from"./modules/parallax.min.mjs";import Zoom from"./modules/zoom.min.mjs";import Controller from"./modules/controller.min.mjs";import A11y from"./modules/a11y.min.mjs";import Autoplay from"./modules/autoplay.min.mjs";import Grid from"./modules/grid.min.mjs";const modules=[Mousewheel,Navigation,Pagination,Parallax,Zoom,Controller,A11y,Autoplay,Grid];Swiper.use(modules);export{Swiper,Swiper as default};
//# sourceMappingURL=swiper-bundle.min.mjs.map