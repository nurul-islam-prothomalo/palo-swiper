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
import Keyboard from './modules/keyboard.mjs';
import Navigation from './modules/navigation.mjs';
import Scrollbar from './modules/scrollbar.mjs';
import Zoom from './modules/zoom.mjs';
import Autoplay from './modules/autoplay.mjs';

// Swiper Class
const modules = [Mousewheel, Keyboard, Navigation, Scrollbar, Zoom, Autoplay];
Swiper.use(modules);

export { Swiper, Swiper as default };
