// sort the properties and remove to/from if possible
// use 3d transform functions
// In -> from opacity 0
// Out -> to opacity 0
// move more stuff to utilities
// remove magic numbers
// fix things laid out in this: https://github.com/animate-css/animate.css/issues/1371
// then update the readme -- uses patched animate.css -- not exactly same | similar

const keyframes: Keyframes = {
  bounce: {
    'from, 20%, 53%, to': {
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0)',
    },
    '40%, 43%': {
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      transform: 'translate3d(0, -30px, 0) scale3d(1, 1.1, 1)',
    },
    '70%': {
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      transform: 'translate3d(0, -15px, 0) scale3d(1, 1.05, 1)',
    },
    '80%': {
      transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0) scale3d(1, 0.95, 1)',
    },
    '90%': { transform: 'translate3d(0, -4px, 0) scale3d(1, 1.02, 1)' },
  },
  flash: { '25%, 75%': { opacity: '0' }, '50%': { opacity: '1' } },
  pulse: { '50%': { transform: 'scale3d(1.05, 1.05, 1.05)' } },
  rubberBand: {
    '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
    '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
    '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
    '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
    '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
  },
  shakeX: {
    '10%, 30%, 50%, 70%, 90%': { transform: 'translate3d(-10px, 0, 0)' },
    '20%, 40%, 60%, 80%': { transform: 'translate3d(10px, 0, 0)' },
  },
  shakeY: {
    '10%, 30%, 50%, 70%, 90%': { transform: 'translate3d(0, -10px, 0)' },
    '20%, 40%, 60%, 80%': { transform: 'translate3d(0, 10px, 0)' },
  },
  headShake: {
    '6.5%': { transform: 'translate3d(-6px, 0, 0) rotate3d(0, 1, 0, -9deg)' },
    '18.5%': { transform: 'translate3d(5px, 0, 0) rotate3d(0, 1, 0, 7deg)' },
    '31.5%': { transform: 'translate3d(-3px, 0, 0) rotate3d(0, 1, 0, -5deg)' },
    '43.5%': { transform: 'translate3d(2px, 0, 0) rotate3d(0, 1, 0, 3deg)' },
    '50%': { transform: 'translate3d(0, 0, 0)' },
  },
  swing: {
    '20%': { transform: 'rotate3d(0, 0, 1, 15deg)' },
    '40%': { transform: 'rotate3d(0, 0, 1, -10deg)' },
    '60%': { transform: 'rotate3d(0, 0, 1, 5deg)' },
    '80%': { transform: 'rotate3d(0, 0, 1, -5deg)' },
  },
  tada: {
    '10%, 20%': { transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
    '30%, 50%, 70%, 90%': { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
    '40%, 60%, 80%': { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
  },
  wobble: {
    '15%': { transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)' },
    '30%': { transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)' },
    '45%': { transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)' },
    '60%': { transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)' },
    '75%': { transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)' },
  },
  jello: {
    '11.1%': { transform: 'translate3d(0, 0, 0)' },
    '22.2%': { transform: 'skew(-12.5deg, -12.5deg)' },
    '33.3%': { transform: 'skew(6.25deg, 6.25deg)' },
    '44.4%': { transform: 'skew(-3.125deg, -3.125deg)' },
    '55.5%': { transform: 'skew(1.5625deg, 1.5625deg)' },
    '66.6%': { transform: 'skew(-0.78125deg, -0.78125deg)' },
    '77.7%': { transform: 'skew(0.390625deg, 0.390625deg)' },
    '88.8%': { transform: 'skew(-0.1953125deg, -0.1953125deg)' },
  },
  heartBeat: {
    '14%': { transform: 'scale3d(1.3, 1.3, 1.3)' },
    '28%': { transform: 'scale3d(1, 1, 1)' },
    '42%': { transform: 'scale3d(1.3, 1.3, 1.3)' },
    '70%': { transform: 'scale3d(1, 1, 1)' },
  },

  // fucked up code starts
  backInDown: {
    from: { transform: 'translateY(-1200px) scale(0.7)', opacity: '0.7' },
    '80%': { transform: 'translateY(0px) scale(0.7)', opacity: '0.7' },
  },
  backInLeft: {
    from: { transform: 'translateX(-2000px) scale(0.7)', opacity: '0.7' },
    '80%': { transform: 'translateX(0px) scale(0.7)', opacity: '0.7' },
  },
  backInRight: {
    from: { transform: 'translateX(2000px) scale(0.7)', opacity: '0.7' },
    '80%': { transform: 'translateX(0px) scale(0.7)', opacity: '0.7' },
  },
  backInUp: {
    from: { transform: 'translateY(1200px) scale(0.7)', opacity: '0.7' },
    '80%': { transform: 'translateY(0px) scale(0.7)', opacity: '0.7' },
  },
  backOutDown: {
    '20%': { transform: 'translateY(0px) scale(0.7)', opacity: '0.7' },
    to: { transform: 'translateY(700px) scale(0.7)', opacity: '0.7' },
  },
  backOutLeft: {
    '20%': { transform: 'translateX(0px) scale(0.7)', opacity: '0.7' },
    to: { transform: 'translateX(-2000px) scale(0.7)', opacity: '0.7' },
  },
  backOutRight: {
    '20%': { transform: 'translateX(0px) scale(0.7)', opacity: '0.7' },
    to: { transform: 'translateX(2000px) scale(0.7)', opacity: '0.7' },
  },
  backOutUp: {
    '20%': { transform: 'translateY(0px) scale(0.7)', opacity: '0.7' },
    to: { transform: 'translateY(-700px) scale(0.7)', opacity: '0.7' },
  },
  // fucked up code ends

  bounceIn: {
    from: { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
    '20%': { transform: 'scale3d(1.1, 1.1, 1.1)' },
    '40%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
    '60%': { opacity: '1', transform: 'scale3d(1.03, 1.03, 1.03)' },
    '80%': { transform: 'scale3d(0.97, 0.97, 0.97)' },
  },

  // fucked up code starts again
  bounceInDown: {
    from: { opacity: '0', transform: 'translate3d(0, -3000px, 0) scale3d(1, 3, 1)' },
    '60%': { opacity: '1', transform: 'translate3d(0, 25px, 0) scale3d(1, 0.9, 1)' },
    '75%': { transform: 'translate3d(0, -10px, 0) scale3d(1, 0.95, 1)' },
    '90%': { transform: 'translate3d(0, 5px, 0) scale3d(1, 0.985, 1)' },
  },
  bounceInLeft: {
    from: { opacity: '0', transform: 'translate3d(-3000px, 0, 0) scaleX(3)' },
    '60%': { opacity: '1', transform: 'translate3d(25px, 0, 0) scaleX(1)' },
    '75%': { transform: 'translate3d(-10px, 0, 0) scaleX(0.98)' },
    '90%': { transform: 'translate3d(5px, 0, 0) scaleX(0.995)' },
  },
  bounceInRight: {
    from: { opacity: '0', transform: 'translate3d(3000px, 0, 0) scaleX(3)' },
    '60%': { opacity: '1', transform: 'translate3d(-25px, 0, 0) scaleX(1)' },
    '75%': { transform: 'translate3d(10px, 0, 0) scaleX(0.98)' },
    '90%': { transform: 'translate3d(-5px, 0, 0) scaleX(0.995)' },
  },
  bounceInUp: {
    from: { opacity: '0', transform: 'translate3d(0, 3000px, 0) scaleY(5)' },
    '60%': { opacity: '1', transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
    '75%': { transform: 'translate3d(0, 10px, 0) scaleY(0.95)' },
    '90%': { transform: 'translate3d(0, -5px, 0) scaleY(0.985)' },
  },
  bounceOut: {
    '20%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
    '50%, 55%': { opacity: '1', transform: 'scale3d(1.1, 1.1, 1.1)' },
    to: { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
  },
  bounceOutDown: {
    '20%': { transform: 'translate3d(0, 10px, 0) scaleY(0.985)' },
    '40%, 45%': { opacity: '1', transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
    to: { opacity: '0', transform: 'translate3d(0, 2000px, 0) scaleY(3)' },
  },
  bounceOutLeft: {
    '20%': { opacity: '1', transform: 'translate3d(20px, 0, 0) scaleX(0.9)' },
    to: { opacity: '0', transform: 'translate3d(-2000px, 0, 0) scaleX(2)' },
  },
  bounceOutRight: {
    '20%': { opacity: '1', transform: 'translate3d(-20px, 0, 0) scaleX(0.9)' },
    to: { opacity: '0', transform: 'translate3d(2000px, 0, 0) scaleX(2)' },
  },
  bounceOutUp: {
    '20%': { transform: 'translate3d(0, -10px, 0) scaleY(0.985)' },
    '40%, 45%': { opacity: '1', transform: 'translate3d(0, 20px, 0) scaleY(0.9)' },
    to: { opacity: '0', transform: 'translate3d(0, -2000px, 0) scaleY(3)' },
  },
  // fucked up code ends

  fadeIn: { from: { opacity: '0' } },
  fadeInDown: { from: { opacity: '0', transform: 'translate3d(0, -100%, 0)' } },
  fadeInDownBig: { from: { opacity: '0', transform: 'translate3d(0, -2000px, 0)' } },
  fadeInLeft: { from: { opacity: '0', transform: 'translate3d(-100%, 0, 0)' } },
  fadeInLeftBig: { from: { opacity: '0', transform: 'translate3d(-2000px, 0, 0)' } },
  fadeInRight: { from: { opacity: '0', transform: 'translate3d(100%, 0, 0)' } },
  fadeInRightBig: { from: { opacity: '0', transform: 'translate3d(2000px, 0, 0)' } },
  fadeInUp: { from: { opacity: '0', transform: 'translate3d(0, 100%, 0)' } },
  fadeInUpBig: { from: { opacity: '0', transform: 'translate3d(0, 2000px, 0)' } },
  fadeInTopLeft: { from: { opacity: '0', transform: 'translate3d(-100%, -100%, 0)' } },
  fadeInTopRight: { from: { opacity: '0', transform: 'translate3d(100%, -100%, 0)' } },
  fadeInBottomLeft: { from: { opacity: '0', transform: 'translate3d(-100%, 100%, 0)' } },
  fadeInBottomRight: { from: { opacity: '0', transform: 'translate3d(100%, 100%, 0)' } },
  fadeOut: { to: { opacity: '0' } },
  fadeOutDown: { to: { opacity: '0', transform: 'translate3d(0, 100%, 0)' } },
  fadeOutDownBig: { to: { opacity: '0', transform: 'translate3d(0, 2000px, 0)' } },
  fadeOutLeft: { to: { opacity: '0', transform: 'translate3d(-100%, 0, 0)' } },
  fadeOutLeftBig: { to: { opacity: '0', transform: 'translate3d(-2000px, 0, 0)' } },
  fadeOutRight: { to: { opacity: '0', transform: 'translate3d(100%, 0, 0)' } },
  fadeOutRightBig: { to: { opacity: '0', transform: 'translate3d(2000px, 0, 0)' } },
  fadeOutUp: { to: { opacity: '0', transform: 'translate3d(0, -100%, 0)' } },
  fadeOutUpBig: { to: { opacity: '0', transform: 'translate3d(0, -2000px, 0)' } },
  fadeOutTopLeft: { to: { opacity: '0', transform: 'translate3d(-100%, -100%, 0)' } },
  fadeOutTopRight: { to: { opacity: '0', transform: 'translate3d(100%, -100%, 0)' } },
  fadeOutBottomRight: { to: { opacity: '0', transform: 'translate3d(100%, 100%, 0)' } },
  fadeOutBottomLeft: { to: { opacity: '0', transform: 'translate3d(-100%, 100%, 0)' } },
  flip: {
    from: {
      transform:
        'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
      animationTimingFunction: 'ease-out',
    },
    '40%': {
      transform:
        'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
      animationTimingFunction: 'ease-out',
    },
    '50%': {
      transform:
        'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
      animationTimingFunction: 'ease-in',
    },
    '80%': {
      transform:
        'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
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
      opacity: '0',
    },
    '40%': {
      transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
      animationTimingFunction: 'ease-in',
    },
    '60%': { transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '1' },
    '80%': { transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)' },
    to: { transform: 'perspective(400px)' },
  },
  flipInY: {
    from: {
      transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
      animationTimingFunction: 'ease-in',
      opacity: '0',
    },
    '40%': {
      transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',
      animationTimingFunction: 'ease-in',
    },
    '60%': { transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1' },
    '80%': { transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)' },
    to: { transform: 'perspective(400px)' },
  },
  flipOutX: {
    from: { transform: 'perspective(400px)' },
    '30%': { transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: '1' },
    to: { transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0' },
  },
  flipOutY: {
    from: { transform: 'perspective(400px)' },
    '30%': { transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: '1' },
    to: { transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0' },
  },
  lightSpeedInRight: {
    from: { transform: 'translate3d(100%, 0, 0) skew(-30deg)', opacity: '0' },
    '60%': { transform: 'skew(20deg)', opacity: '1' },
    '80%': { transform: 'skew(-5deg)' },
  },
  lightSpeedInLeft: {
    from: { transform: 'translate3d(-100%, 0, 0) skew(30deg)', opacity: '0' },
    '60%': { transform: 'skew(-20deg)', opacity: '1' },
    '80%': { transform: 'skew(5deg)' },
  },
  lightSpeedOutRight: { to: { transform: 'translate3d(100%, 0, 0) skew(30deg)', opacity: '0' } },
  lightSpeedOutLeft: { to: { transform: 'translate3d(-100%, 0, 0) skew(-30deg)', opacity: '0' } },
  rotateIn: { from: { transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0' } },
  rotateInDownLeft: { from: { transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0' } },
  rotateInDownRight: { from: { transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0' } },
  rotateInUpLeft: { from: { transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0' } },
  rotateInUpRight: { from: { transform: 'rotate3d(0, 0, 1, -90deg)', opacity: '0' } },
  rotateOut: { to: { transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0' } },
  rotateOutDownLeft: { to: { transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0' } },
  rotateOutDownRight: { to: { transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0' } },
  rotateOutUpLeft: { to: { transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0' } },
  rotateOutUpRight: { to: { transform: 'rotate3d(0, 0, 1, 90deg)', opacity: '0' } },
  hinge: {
    '20%, 60%': { transform: 'rotate3d(0, 0, 1, 80deg)' },
    '40%, 80%': { transform: 'rotate3d(0, 0, 1, 60deg)', opacity: '1' },
    to: { transform: 'translate3d(0, 700px, 0)', opacity: '0' },
  },
  jackInTheBox: {
    from: {
      transform: 'scale3d(0.1, 0.1, 1) rotate3d(0, 0, 1, 30deg)',
      transformOrigin: 'center bottom',
    },
    '50%': { transform: 'rotate3d(0, 0, 1, -10deg)' },
    '70%': { transform: 'rotate3d(0, 0, 1, 3deg)' },
  },
  rollIn: { from: { transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)' } },
  rollOut: { to: { opacity: '0', transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)' } },
  zoomIn: { from: { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' }, '50%': { opacity: '1' } },
  zoomInDown: {
    from: {
      opacity: '0',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    '60%': {
      opacity: '1',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  zoomInLeft: {
    from: {
      opacity: '0',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    '60%': {
      opacity: '1',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  zoomInRight: {
    from: {
      opacity: '0',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    '60%': {
      opacity: '1',
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
      opacity: '1',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  zoomOut: { '50%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' }, to: { opacity: '0' } },
  zoomOutDown: {
    '40%': {
      opacity: '1',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    to: {
      opacity: '0',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  zoomOutLeft: {
    '40%': { opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)' },
    to: { opacity: '0', transform: 'scale3d(0.1, 0.1, 1) translate3d(-2000px, 0, 0)' },
  },
  zoomOutRight: {
    '40%': { opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)' },
    to: { opacity: '0', transform: 'scale3d(0.1, 0.1, 1) translate3d(2000px, 0, 0)' },
  },
  zoomOutUp: {
    '40%': {
      opacity: '1',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    to: {
      opacity: '0',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
    },
  },
  slideInDown: { from: { transform: 'translate3d(0, -100%, 0)' } },
  slideInLeft: { from: { transform: 'translate3d(-100%, 0, 0)' } },
  slideInRight: { from: { transform: 'translate3d(100%, 0, 0)' } },
  slideInUp: { from: { transform: 'translate3d(0, 100%, 0)' } },
  slideOutDown: { to: { transform: 'translate3d(0, 100%, 0)' } },
  slideOutLeft: { to: { transform: 'translate3d(-100%, 0, 0)' } },
  slideOutRight: { to: { transform: 'translate3d(100%, 0, 0)' } },
  slideOutUp: { to: { transform: 'translate3d(0, -100%, 0)' } },
};

export = keyframes;
