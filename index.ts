// eslint-disable-next-line @typescript-eslint/no-redeclare
import type * as CSS from 'csstype';
import type { TailwindConfig as StrictTailwindConfig } from 'tailwindcss/tailwind-config';

import get from 'lodash.get';
import set from 'lodash.set';

// eslint-disable-next-line
const plugin = require('tailwindcss/plugin');

type TailwindConfig = Partial<StrictTailwindConfig>;

const keyframes: Record<string, Record<string, CSS.Properties>> = {
  bounce: {
    'from, 20%, 53%, to': {
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0)',
    },
    '40%, 43%': {
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
    },
    '70%': {
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      transform: 'translate3d(0, -15px, 0) scaleY(1.05)',
    },
    '80%': {
      transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0) scaleY(0.95)',
    },
    '90%': { transform: 'translate3d(0, -4px, 0) scaleY(1.02)' },
  },
  flash: { 'from, 50%, to': { opacity: 1 }, '25%, 75%': { opacity: 0 } },
  pulse: {
    from: { transform: 'scale3d(1, 1, 1)' },
    '50%': { transform: 'scale3d(1.05, 1.05, 1.05)' },
    to: { transform: 'scale3d(1, 1, 1)' },
  },
  rubberBand: {
    from: { transform: 'scale3d(1, 1, 1)' },
    '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
    '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
    '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
    '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
    '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
    to: { transform: 'scale3d(1, 1, 1)' },
  },
  shakeX: {
    'from, to': { transform: 'translate3d(0, 0, 0)' },
    '10%, 30%, 50%, 70%, 90%': { transform: 'translate3d(-10px, 0, 0)' },
    '20%, 40%, 60%, 80%': { transform: 'translate3d(10px, 0, 0)' },
  },
  shakeY: {
    'from, to': { transform: 'translate3d(0, 0, 0)' },
    '10%, 30%, 50%, 70%, 90%': { transform: 'translate3d(0, -10px, 0)' },
    '20%, 40%, 60%, 80%': { transform: 'translate3d(0, 10px, 0)' },
  },
  headShake: {
    '0%': { transform: 'translateX(0)' },
    '6.5%': { transform: 'translateX(-6px) rotateY(-9deg)' },
    '18.5%': { transform: 'translateX(5px) rotateY(7deg)' },
    '31.5%': { transform: 'translateX(-3px) rotateY(-5deg)' },
    '43.5%': { transform: 'translateX(2px) rotateY(3deg)' },
    '50%': { transform: 'translateX(0)' },
  },
  swing: {
    '20%': { transform: 'rotate3d(0, 0, 1, 15deg)' },
    '40%': { transform: 'rotate3d(0, 0, 1, -10deg)' },
    '60%': { transform: 'rotate3d(0, 0, 1, 5deg)' },
    '80%': { transform: 'rotate3d(0, 0, 1, -5deg)' },
    to: { transform: 'rotate3d(0, 0, 1, 0deg)' },
  },
  tada: {
    from: { transform: 'scale3d(1, 1, 1)' },
    '10%, 20%': { transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
    '30%, 50%, 70%, 90%': { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
    '40%, 60%, 80%': { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
    to: { transform: 'scale3d(1, 1, 1)' },
  },
  wobble: {
    from: { transform: 'translate3d(0, 0, 0)' },
    '15%': { transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)' },
    '30%': { transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)' },
    '45%': { transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)' },
    '60%': { transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)' },
    '75%': { transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)' },
    to: { transform: 'translate3d(0, 0, 0)' },
  },
  jello: {
    'from, 11.1%, to': { transform: 'translate3d(0, 0, 0)' },
    '22.2%': { transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
    '33.3%': { transform: 'skewX(6.25deg) skewY(6.25deg)' },
    '44.4%': { transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
    '55.5%': { transform: 'skewX(1.5625deg) skewY(1.5625deg)' },
    '66.6%': { transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' },
    '77.7%': { transform: 'skewX(0.390625deg) skewY(0.390625deg)' },
    '88.8%': { transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)' },
  },
  heartBeat: {
    '0%': { transform: 'scale(1)' },
    '14%': { transform: 'scale(1.3)' },
    '28%': { transform: 'scale(1)' },
    '42%': { transform: 'scale(1.3)' },
    '70%': { transform: 'scale(1)' },
  },
  backInDown: {
    '0%': { transform: 'translateY(-1200px) scale(0.7)', opacity: 0.7 },
    '80%': { transform: 'translateY(0px) scale(0.7)', opacity: 0.7 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  },
  backInLeft: {
    '0%': { transform: 'translateX(-2000px) scale(0.7)', opacity: 0.7 },
    '80%': { transform: 'translateX(0px) scale(0.7)', opacity: 0.7 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  },
  backInRight: {
    '0%': { transform: 'translateX(2000px) scale(0.7)', opacity: 0.7 },
    '80%': { transform: 'translateX(0px) scale(0.7)', opacity: 0.7 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  },
  backInUp: {
    '0%': { transform: 'translateY(1200px) scale(0.7)', opacity: 0.7 },
    '80%': { transform: 'translateY(0px) scale(0.7)', opacity: 0.7 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  },
  backOutDown: {
    '0%': { transform: 'scale(1)', opacity: 1 },
    '20%': { transform: 'translateY(0px) scale(0.7)', opacity: 0.7 },
    '100%': { transform: 'translateY(700px) scale(0.7)', opacity: 0.7 },
  },
  backOutLeft: {
    '0%': { transform: 'scale(1)', opacity: 1 },
    '20%': { transform: 'translateX(0px) scale(0.7)', opacity: 0.7 },
    '100%': { transform: 'translateX(-2000px) scale(0.7)', opacity: 0.7 },
  },
  backOutRight: {
    '0%': { transform: 'scale(1)', opacity: 1 },
    '20%': { transform: 'translateX(0px) scale(0.7)', opacity: 0.7 },
    '100%': { transform: 'translateX(2000px) scale(0.7)', opacity: 0.7 },
  },
  backOutUp: {
    '0%': { transform: 'scale(1)', opacity: 1 },
    '20%': { transform: 'translateY(0px) scale(0.7)', opacity: 0.7 },
    '100%': { transform: 'translateY(-700px) scale(0.7)', opacity: 0.7 },
  },
  bounceIn: {
    'from, 20%, 40%, 60%, 80%, to': {
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    },
    '0%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)' },
    '20%': { transform: 'scale3d(1.1, 1.1, 1.1)' },
    '40%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
    '60%': { opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)' },
    '80%': { transform: 'scale3d(0.97, 0.97, 0.97)' },
    to: { opacity: 1, transform: 'scale3d(1, 1, 1)' },
  },
  bounceInDown: {
    'from, 60%, 75%, 90%, to': { animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    '0%': { opacity: 0, transform: 'translate3d(0, -3000px, 0) scaleY(3)' },
    '60%': { opacity: 1, transform: 'translate3d(0, 25px, 0) scaleY(0.9)' },
    '75%': { transform: 'translate3d(0, -10px, 0) scaleY(0.95)' },
    '90%': { transform: 'translate3d(0, 5px, 0) scaleY(0.985)' },
    to: { transform: 'translate3d(0, 0, 0)' },
  },
  bounceInLeft: {
    'from, 60%, 75%, 90%, to': { animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    '0%': { opacity: 0, transform: 'translate3d(-3000px, 0, 0) scaleX(3)' },
    '60%': { opacity: 1, transform: 'translate3d(25px, 0, 0) scaleX(1)' },
    '75%': { transform: 'translate3d(-10px, 0, 0) scaleX(0.98)' },
    '90%': { transform: 'translate3d(5px, 0, 0) scaleX(0.995)' },
    to: { transform: 'translate3d(0, 0, 0)' },
  },
  bounceInRight: {
    'from, 60%, 75%, 90%, to': { animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    from: { opacity: 0, transform: 'translate3d(3000px, 0, 0) scaleX(3)' },
    '60%': { opacity: 1, transform: 'translate3d(-25px, 0, 0) scaleX(1)' },
    '75%': { transform: 'translate3d(10px, 0, 0) scaleX(0.98)' },
    '90%': { transform: 'translate3d(-5px, 0, 0) scaleX(0.995)' },
    to: { transform: 'translate3d(0, 0, 0)' },
  },
  bounceInUp: {
    'from, 60%, 75%, 90%, to': { animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    from: { opacity: 0, transform: 'translate3d(0, 3000px, 0) scaleY(5)' },
    '60%': { opacity: 1, transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
    '75%': { transform: 'translate3d(0, 10px, 0) scaleY(0.95)' },
    '90%': { transform: 'translate3d(0, -5px, 0) scaleY(0.985)' },
    to: { transform: 'translate3d(0, 0, 0)' },
  },
  bounceOut: {
    '20%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
    '50%, 55%': { opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)' },
    to: { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)' },
  },
  bounceOutDown: {
    '20%': { transform: 'translate3d(0, 10px, 0) scaleY(0.985)' },
    '40%, 45%': { opacity: 1, transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
    to: { opacity: 0, transform: 'translate3d(0, 2000px, 0) scaleY(3)' },
  },
  bounceOutLeft: {
    '20%': { opacity: 1, transform: 'translate3d(20px, 0, 0) scaleX(0.9)' },
    to: { opacity: 0, transform: 'translate3d(-2000px, 0, 0) scaleX(2)' },
  },
  bounceOutRight: {
    '20%': { opacity: 1, transform: 'translate3d(-20px, 0, 0) scaleX(0.9)' },
    to: { opacity: 0, transform: 'translate3d(2000px, 0, 0) scaleX(2)' },
  },
  bounceOutUp: {
    '20%': { transform: 'translate3d(0, -10px, 0) scaleY(0.985)' },
    '40%, 45%': { opacity: 1, transform: 'translate3d(0, 20px, 0) scaleY(0.9)' },
    to: { opacity: 0, transform: 'translate3d(0, -2000px, 0) scaleY(3)' },
  },
  fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
  fadeInDown: {
    from: { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  },
  fadeInDownBig: {
    from: { opacity: 0, transform: 'translate3d(0, -2000px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  },
  fadeInLeft: {
    from: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  },
  fadeInLeftBig: {
    from: { opacity: 0, transform: 'translate3d(-2000px, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  },
  fadeInRight: {
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  },
  fadeInRightBig: {
    from: { opacity: 0, transform: 'translate3d(2000px, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  },
  fadeInUp: {
    from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  },
  fadeInUpBig: {
    from: { opacity: 0, transform: 'translate3d(0, 2000px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  },
  fadeInTopLeft: {
    from: { opacity: 0, transform: 'translate3d(-100%, -100%, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  },
  fadeInTopRight: {
    from: { opacity: 0, transform: 'translate3d(100%, -100%, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  },
  fadeInBottomLeft: {
    from: { opacity: 0, transform: 'translate3d(-100%, 100%, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  },
  fadeInBottomRight: {
    from: { opacity: 0, transform: 'translate3d(100%, 100%, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  },
  fadeOut: { from: { opacity: 1 }, to: { opacity: 0 } },
  fadeOutDown: { from: { opacity: 1 }, to: { opacity: 0, transform: 'translate3d(0, 100%, 0)' } },
  fadeOutDownBig: {
    from: { opacity: 1 },
    to: { opacity: 0, transform: 'translate3d(0, 2000px, 0)' },
  },
  fadeOutLeft: { from: { opacity: 1 }, to: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' } },
  fadeOutLeftBig: {
    from: { opacity: 1 },
    to: { opacity: 0, transform: 'translate3d(-2000px, 0, 0)' },
  },
  fadeOutRight: { from: { opacity: 1 }, to: { opacity: 0, transform: 'translate3d(100%, 0, 0)' } },
  fadeOutRightBig: {
    from: { opacity: 1 },
    to: { opacity: 0, transform: 'translate3d(2000px, 0, 0)' },
  },
  fadeOutUp: { from: { opacity: 1 }, to: { opacity: 0, transform: 'translate3d(0, -100%, 0)' } },
  fadeOutUpBig: {
    from: { opacity: 1 },
    to: { opacity: 0, transform: 'translate3d(0, -2000px, 0)' },
  },
  fadeOutTopLeft: {
    from: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    to: { opacity: 0, transform: 'translate3d(-100%, -100%, 0)' },
  },
  fadeOutTopRight: {
    from: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    to: { opacity: 0, transform: 'translate3d(100%, -100%, 0)' },
  },
  fadeOutBottomRight: {
    from: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    to: { opacity: 0, transform: 'translate3d(100%, 100%, 0)' },
  },
  fadeOutBottomLeft: {
    from: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    to: { opacity: 0, transform: 'translate3d(-100%, 100%, 0)' },
  },
  flip: {
    from: {
      transform:
        'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
      animationTimingFunction: 'ease-out',
    },
    '40%': {
      transform:
        'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)     rotate3d(0, 1, 0, -190deg)',
      animationTimingFunction: 'ease-out',
    },
    '50%': {
      transform:
        'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)     rotate3d(0, 1, 0, -170deg)',
      animationTimingFunction: 'ease-in',
    },
    '80%': {
      transform:
        'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)     rotate3d(0, 1, 0, 0deg)',
      animationTimingFunction: 'ease-in',
    },
    to: {
      transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
      animationTimingFunction: 'ease-in',
    },
  },
  flipInX: {
    from: {
      transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
      animationTimingFunction: 'ease-in',
      opacity: 0,
    },
    '40%': {
      transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
      animationTimingFunction: 'ease-in',
    },
    '60%': { transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: 1 },
    '80%': { transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)' },
    to: { transform: 'perspective(400px)' },
  },
  flipInY: {
    from: {
      transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
      animationTimingFunction: 'ease-in',
      opacity: 0,
    },
    '40%': {
      transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',
      animationTimingFunction: 'ease-in',
    },
    '60%': { transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: 1 },
    '80%': { transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)' },
    to: { transform: 'perspective(400px)' },
  },
  flipOutX: {
    from: { transform: 'perspective(400px)' },
    '30%': { transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: 1 },
    to: { transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: 0 },
  },
  flipOutY: {
    from: { transform: 'perspective(400px)' },
    '30%': { transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1 },
    to: { transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0 },
  },
  lightSpeedInRight: {
    from: { transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: 0 },
    '60%': { transform: 'skewX(20deg)', opacity: 1 },
    '80%': { transform: 'skewX(-5deg)' },
    to: { transform: 'translate3d(0, 0, 0)' },
  },
  lightSpeedInLeft: {
    from: { transform: 'translate3d(-100%, 0, 0) skewX(30deg)', opacity: 0 },
    '60%': { transform: 'skewX(-20deg)', opacity: 1 },
    '80%': { transform: 'skewX(5deg)' },
    to: { transform: 'translate3d(0, 0, 0)' },
  },
  lightSpeedOutRight: {
    from: { opacity: 1 },
    to: { transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: 0 },
  },
  lightSpeedOutLeft: {
    from: { opacity: 1 },
    to: { transform: 'translate3d(-100%, 0, 0) skewX(-30deg)', opacity: 0 },
  },
  rotateIn: {
    from: { transform: 'rotate3d(0, 0, 1, -200deg)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
  },
  rotateInDownLeft: {
    from: { transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
  },
  rotateInDownRight: {
    from: { transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
  },
  rotateInUpLeft: {
    from: { transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
  },
  rotateInUpRight: {
    from: { transform: 'rotate3d(0, 0, 1, -90deg)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
  },
  rotateOut: { from: { opacity: 1 }, to: { transform: 'rotate3d(0, 0, 1, 200deg)', opacity: 0 } },
  rotateOutDownLeft: {
    from: { opacity: 1 },
    to: { transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0 },
  },
  rotateOutDownRight: {
    from: { opacity: 1 },
    to: { transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0 },
  },
  rotateOutUpLeft: {
    from: { opacity: 1 },
    to: { transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0 },
  },
  rotateOutUpRight: {
    from: { opacity: 1 },
    to: { transform: 'rotate3d(0, 0, 1, 90deg)', opacity: 0 },
  },
  hinge: {
    '0%': { animationTimingFunction: 'ease-in-out' },
    '20%, 60%': { transform: 'rotate3d(0, 0, 1, 80deg)', animationTimingFunction: 'ease-in-out' },
    '40%, 80%': {
      transform: 'rotate3d(0, 0, 1, 60deg)',
      animationTimingFunction: 'ease-in-out',
      opacity: 1,
    },
    to: { transform: 'translate3d(0, 700px, 0)', opacity: 0 },
  },
  jackInTheBox: {
    from: { opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom' },
    '50%': { transform: 'rotate(-10deg)' },
    '70%': { transform: 'rotate(3deg)' },
    to: { opacity: 1, transform: 'scale(1)' },
  },
  rollIn: {
    from: { opacity: 0, transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  },
  rollOut: {
    from: { opacity: 1 },
    to: { opacity: 0, transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)' },
  },
  zoomIn: { from: { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)' }, '50%': { opacity: 1 } },
  zoomInDown: {
    from: {
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  zoomInLeft: {
    from: {
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  zoomInRight: {
    from: {
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  zoomInUp: {
    from: {
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  zoomOut: {
    from: { opacity: 1 },
    '50%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)' },
    to: { opacity: 0 },
  },
  zoomOutDown: {
    '40%': {
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    to: {
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  zoomOutLeft: {
    '40%': { opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)' },
    to: { opacity: 0, transform: 'scale(0.1) translate3d(-2000px, 0, 0)' },
  },
  zoomOutRight: {
    '40%': { opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)' },
    to: { opacity: 0, transform: 'scale(0.1) translate3d(2000px, 0, 0)' },
  },
  zoomOutUp: {
    '40%': {
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    to: {
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  slideInDown: {
    from: { transform: 'translate3d(0, -100%, 0)', visibility: 'visible' },
    to: { transform: 'translate3d(0, 0, 0)' },
  },
  slideInLeft: {
    from: { transform: 'translate3d(-100%, 0, 0)', visibility: 'visible' },
    to: { transform: 'translate3d(0, 0, 0)' },
  },
  slideInRight: {
    from: { transform: 'translate3d(100%, 0, 0)', visibility: 'visible' },
    to: { transform: 'translate3d(0, 0, 0)' },
  },
  slideInUp: {
    from: { transform: 'translate3d(0, 100%, 0)', visibility: 'visible' },
    to: { transform: 'translate3d(0, 0, 0)' },
  },
  slideOutDown: {
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { visibility: 'hidden', transform: 'translate3d(0, 100%, 0)' },
  },
  slideOutLeft: {
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)' },
  },
  slideOutRight: {
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { visibility: 'hidden', transform: 'translate3d(100%, 0, 0)' },
  },
  slideOutUp: {
    from: { transform: 'translate3d(0, 0, 0)' },
    to: { visibility: 'hidden', transform: 'translate3d(0, -100%, 0)' },
  },
};

const utilities: Record<string, CSS.Properties> = {
  animated: {
    animationDuration: 'var(--animate-duration, 1s)',
    animationFillMode: 'both',
    // @ts-expect-error Tailwind-style PostCSS JSS property are not recognized by CSSType
    '@apply print:animate-none motion-reduce:animate-none': {},
  },
  infinite: { animationIterationCount: 'infinite' },
  'repeat-1': { animationIterationCount: 'var(--animate-repeat, 1)' },
  'repeat-2': { animationIterationCount: 'calc(var(--animate-repeat, 1) * 2)' },
  'repeat-3': { animationIterationCount: 'calc(var(--animate-repeat, 1) * 3)' },
  'delay-1s': { animationDelay: 'var(--animate-delay, 1s)' },
  'delay-2s': { animationDelay: 'calc(var(--animate-delay, 1s) * 2)' },
  'delay-3s': { animationDelay: 'calc(var(--animate-delay, 1s) * 3)' },
  'delay-4s': { animationDelay: 'calc(var(--animate-delay, 1s) * 4)' },
  'delay-5s': { animationDelay: 'calc(var(--animate-delay, 1s) * 5)' },
  faster: { animationDuration: 'calc(var(--animate-duration, 1s) / 2)' },
  fast: { animationDuration: 'calc(var(--animate-duration, 1s) * 0.8)' },
  slow: { animationDuration: 'calc(var(--animate-duration, 1s) * 2)' },
  slower: { animationDuration: 'calc(var(--animate-duration, 1s) * 3)' },
  bounce: { transformOrigin: 'center bottom' },
  pulse: { animationTimingFunction: 'ease-in-out' },
  headShake: { animationTimingFunction: 'ease-in-out' },
  swing: { transformOrigin: 'top center' },
  jello: { transformOrigin: 'center' },
  heartBeat: {
    animationDuration: 'calc(var(--animate-duration, 1s) * 1.3)',
    animationTimingFunction: 'ease-in-out',
  },
  bounceIn: { animationDuration: 'calc(var(--animate-duration, 1s) * 0.75)' },
  bounceOut: { animationDuration: 'calc(var(--animate-duration, 1s) * 0.75)' },
  flip: { backfaceVisibility: 'visible' },
  flipInX: { backfaceVisibility: 'visible' },
  flipInY: { backfaceVisibility: 'visible' },
  flipOutX: {
    animationDuration: 'calc(var(--animate-duration, 1s) * 0.75)',
    backfaceVisibility: 'visible',
  },
  flipOutY: {
    animationDuration: 'calc(var(--animate-duration, 1s) * 0.75)',
    backfaceVisibility: 'visible',
  },
  lightSpeedInRight: { animationTimingFunction: 'ease-out' },
  lightSpeedInLeft: { animationTimingFunction: 'ease-out' },
  lightSpeedOutRight: { animationTimingFunction: 'ease-in' },
  lightSpeedOutLeft: { animationTimingFunction: 'ease-in' },
  rotateIn: { transformOrigin: 'center' },
  rotateInDownLeft: { transformOrigin: 'left bottom' },
  rotateInDownRight: { transformOrigin: 'right bottom' },
  rotateInUpLeft: { transformOrigin: 'left bottom' },
  rotateInUpRight: { transformOrigin: 'right bottom' },
  rotateOut: { transformOrigin: 'center' },
  rotateOutDownLeft: { transformOrigin: 'left bottom' },
  rotateOutDownRight: { transformOrigin: 'right bottom' },
  rotateOutUpLeft: { transformOrigin: 'left bottom' },
  rotateOutUpRight: { transformOrigin: 'right bottom' },
  hinge: {
    animationDuration: 'calc(var(--animate-duration, 1s) * 2)',
    transformOrigin: 'top left',
  },
  zoomOutDown: { transformOrigin: 'center bottom' },
  zoomOutLeft: { transformOrigin: 'left center' },
  zoomOutRight: { transformOrigin: 'right center' },
  zoomOutUp: { transformOrigin: 'center bottom' },
};

const animation = Object.keys(keyframes).reduce<Record<string, string>>((a, b) => {
  a[b] = b;
  if (b.includes('Out')) set(utilities, [b, '@apply print:opacity-0 motion-reduce:opacity-0'], {});
  return a;
}, {});

const withAnimations = (config: TailwindConfig = {}): TailwindConfig => {
  //
  set(config, 'theme.extend.screens.print.raw', 'print');

  set(config, 'variants.extend.animation', [
    ...new Set([...get(config, 'variants.extend.animation', []), 'motion-reduce']),
  ]);

  set(config, 'variants.extend.opacity', [
    ...new Set([...get(config, 'variants.extend.opacity', []), 'motion-reduce']),
  ]);

  Object.entries(get(config, 'theme.extend.keyframes', {})).forEach(
    ([key, value]) => (keyframes[key] = value as Record<string, CSS.Properties>),
  );
  set(config, 'theme.extend.keyframes', keyframes);

  Object.entries(get(config, 'theme.extend.animation', {})).forEach(
    ([key, value]) => ((animation[key] = value as string), delete utilities[key]),
  );
  set(config, 'theme.extend.animation', animation);

  set(config, 'plugins', [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    plugin(({ addUtilities }: { addUtilities: (u: Record<string, CSS.Properties>) => void }) => {
      addUtilities(
        Object.fromEntries(Object.entries(utilities).map((o) => ((o[0] = `.animate-${o[0]}`), o))),
      );
    }),
    ...get(config, 'plugins', []),
  ]);

  return config;
};

module.exports = withAnimations;
