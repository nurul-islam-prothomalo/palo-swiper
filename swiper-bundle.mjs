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

import { S as Swiper } from './shared/swiper-core.mjs';
import Mousewheel from './modules/mousewheel.mjs';
import Navigation from './modules/navigation.mjs';
import Pagination from './modules/pagination.mjs';
import Parallax from './modules/parallax.mjs';
import Zoom from './modules/zoom.mjs';
import Controller from './modules/controller.mjs';
import A11y from './modules/a11y.mjs';
import Autoplay from './modules/autoplay.mjs';
import Grid from './modules/grid.mjs';

// Swiper Class
const modules = [Mousewheel, Navigation, Pagination, Parallax, Zoom, Controller, A11y, Autoplay, Grid];
Swiper.use(modules);

export { Swiper, Swiper as default };
