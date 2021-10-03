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
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
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
  backInDown: {
    from: { opacity: '0', transform: 'translate3d(0, -100vh, 0) scale3d(0, 0, 1)' },
    '80%': { opacity: '0.7', transform: 'translate3d(0, 0, 0) scale3d(0.7, 0.7, 1)' },
  },
  backInLeft: {
    from: { opacity: '0', transform: 'translate3d(-100vw, 0, 0) scale3d(0, 0, 1)' },
    '80%': { opacity: '0.7', transform: 'translate3d(0, 0, 0) scale3d(0.7, 0.7, 1)' },
  },
  backInRight: {
    from: { opacity: '0', transform: 'translate3d(100vw, 0, 0) scale3d(0, 0, 1)' },
    '80%': { opacity: '0.7', transform: 'translate3d(0, 0, 0) scale3d(0.7, 0.7, 1)' },
  },
  backInUp: {
    from: { opacity: '0', transform: 'translate3d(0, 100vh, 0) scale3d(0, 0, 1)' },
    '80%': { opacity: '0.7', transform: 'translate3d(0, 0, 0) scale3d(0.7, 0.7, 1)' },
  },
  backOutDown: {
    '20%': { opacity: '0.7', transform: 'translate3d(0, 0, 0) scale3d(0.7, 0.7, 1)' },
    to: { opacity: '0', transform: 'translate3d(0, 100vh, 0) scale3d(0, 0, 1)' },
  },
  backOutLeft: {
    '20%': { opacity: '0.7', transform: 'translate3d(0, 0, 0) scale3d(0.7, 0.7, 1)' },
    to: { opacity: '0', transform: 'translate3d(-100vw, 0, 0) scale3d(0, 0, 1)' },
  },
  backOutRight: {
    '20%': { opacity: '0.7', transform: 'translate3d(0, 0, 0) scale3d(0.7, 0.7, 1)' },
    to: { opacity: '0', transform: 'translate3d(100vw, 0, 0) scale3d(0, 0, 1)' },
  },
  backOutUp: {
    '20%': { opacity: '0.7', transform: 'translate3d(0, 0, 0) scale3d(0.7, 0.7, 1)' },
    to: { opacity: '0', transform: 'translate3d(0, -100vh, 0) scale3d(0, 0, 1)' },
  },
  bounceIn: {
    from: { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
    '20%': { transform: 'scale3d(1.1, 1.1, 1.1)' },
    '40%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
    '60%': { opacity: '1', transform: 'scale3d(1.03, 1.03, 1.03)' },
    '80%': { transform: 'scale3d(0.97, 0.97, 0.97)' },
  },
  bounceInDown: {
    from: { opacity: '0', transform: 'translate3d(0, -100vh, 0) scale3d(1, 3, 1)' },
    '60%': { opacity: '1', transform: 'translate3d(0, 20px, 0) scale3d(1, 0.9, 1)' },
    '75%': { transform: 'translate3d(0, -10px, 0) scale3d(1, 0.95, 1)' },
    '90%': { transform: 'translate3d(0, 5px, 0) scale3d(1, 0.985, 1)' },
  },
  bounceInLeft: {
    from: { opacity: '0', transform: 'translate3d(-100vw, 0, 0) scale3d(3, 1, 1)' },
    '60%': { opacity: '1', transform: 'translate3d(25px, 0, 0) scale3d(1, 1, 1)' },
    '75%': { transform: 'translate3d(-10px, 0, 0) scale3d(1, 0.98, 1)' },
    '90%': { transform: 'translate3d(5px, 0, 0) scale3d(1, 0.995, 1)' },
  },
  bounceInRight: {
    from: { opacity: '0', transform: 'translate3d(100vw, 0, 0) scale3d(3, 1, 1)' },
    '60%': { opacity: '1', transform: 'translate3d(-25px, 0, 0) scale3d(1, 1, 1)' },
    '75%': { transform: 'translate3d(10px, 0, 0) scale3d(1, 0.98, 1)' },
    '90%': { transform: 'translate3d(-5px, 0, 0) scale3d(1, 0.995, 1)' },
  },
  bounceInUp: {
    from: { opacity: '0', transform: 'translate3d(0, 100vh, 0) scale3d(1, 3, 1)' },
    '60%': { opacity: '1', transform: 'translate3d(0, -20px, 0) scale3d(1, 0.9, 1)' },
    '75%': { transform: 'translate3d(0, 10px, 0) scale3d(1, 0.95, 1)' },
    '90%': { transform: 'translate3d(0, -5px, 0) scale3d(1, 0.985, 1)' },
  },
  bounceOut: {
    '20%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
    '50%, 55%': { opacity: '1', transform: 'scale3d(1.1, 1.1, 1.1)' },
    to: { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
  },
  bounceOutDown: {
    '20%': { transform: 'translate3d(0, 10px, 0) scale3d(1, 0.985, 1)' },
    '40%, 45%': { opacity: '1', transform: 'translate3d(0, -20px, 0) scale3d(1, 0.9, 1)' },
    to: { opacity: '0', transform: 'translate3d(0, 100vh, 0) scale3d(1, 3, 1)' },
  },
  bounceOutLeft: {
    '20%': { opacity: '1', transform: 'translate3d(20px, 0, 0) scale3d(0.9, 1, 1)' },
    to: { opacity: '0', transform: 'translate3d(-100vw, 0, 0) scale3d(2, 1, 1)' },
  },
  bounceOutRight: {
    '20%': { opacity: '1', transform: 'translate3d(-20px, 0, 0) scale3d(0.9, 1, 1)' },
    to: { opacity: '0', transform: 'translate3d(100vw, 0, 0) scale3d(2, 1, 1)' },
  },
  bounceOutUp: {
    '20%': { transform: 'translate3d(0, -10px, 0) scale3d(1, 0.985, 1)' },
    '40%, 45%': { opacity: '1', transform: 'translate3d(0, 20px, 0) scale3d(1, 0.9, 1)' },
    to: { opacity: '0', transform: 'translate3d(0, -100vh, 0) scale3d(1, 3, 1)' },
  },
  fadeIn: { from: { opacity: '0' } },
  fadeInDown: { from: { opacity: '0', transform: 'translate3d(0, -100%, 0)' } },
  fadeInDownBig: { from: { opacity: '0', transform: 'translate3d(0, -100vh, 0)' } },
  fadeInLeft: { from: { opacity: '0', transform: 'translate3d(-100%, 0, 0)' } },
  fadeInLeftBig: { from: { opacity: '0', transform: 'translate3d(-100vw, 0, 0)' } },
  fadeInRight: { from: { opacity: '0', transform: 'translate3d(100%, 0, 0)' } },
  fadeInRightBig: { from: { opacity: '0', transform: 'translate3d(100vw, 0, 0)' } },
  fadeInUp: { from: { opacity: '0', transform: 'translate3d(0, 100%, 0)' } },
  fadeInUpBig: { from: { opacity: '0', transform: 'translate3d(0, 100vh, 0)' } },
  fadeInTopLeft: { from: { opacity: '0', transform: 'translate3d(-100%, -100%, 0)' } },
  fadeInTopRight: { from: { opacity: '0', transform: 'translate3d(100%, -100%, 0)' } },
  fadeInBottomLeft: { from: { opacity: '0', transform: 'translate3d(-100%, 100%, 0)' } },
  fadeInBottomRight: { from: { opacity: '0', transform: 'translate3d(100%, 100%, 0)' } },
  fadeOut: { to: { opacity: '0' } },
  fadeOutDown: { to: { opacity: '0', transform: 'translate3d(0, 100%, 0)' } },
  fadeOutDownBig: { to: { opacity: '0', transform: 'translate3d(0, 100vh, 0)' } },
  fadeOutLeft: { to: { opacity: '0', transform: 'translate3d(-100%, 0, 0)' } },
  fadeOutLeftBig: { to: { opacity: '0', transform: 'translate3d(-100vw, 0, 0)' } },
  fadeOutRight: { to: { opacity: '0', transform: 'translate3d(100%, 0, 0)' } },
  fadeOutRightBig: { to: { opacity: '0', transform: 'translate3d(100vw, 0, 0)' } },
  fadeOutUp: { to: { opacity: '0', transform: 'translate3d(0, -100%, 0)' } },
  fadeOutUpBig: { to: { opacity: '0', transform: 'translate3d(0, -100vh, 0)' } },
  fadeOutTopLeft: { to: { opacity: '0', transform: 'translate3d(-100%, -100%, 0)' } },
  fadeOutTopRight: { to: { opacity: '0', transform: 'translate3d(100%, -100%, 0)' } },
  fadeOutBottomRight: { to: { opacity: '0', transform: 'translate3d(100%, 100%, 0)' } },
  fadeOutBottomLeft: { to: { opacity: '0', transform: 'translate3d(-100%, 100%, 0)' } },
  flip: {
    from: {
      animationTimingFunction: 'ease-out',
      transform:
        'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
    },
    '40%': {
      animationTimingFunction: 'ease-out',
      transform:
        'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
    },
    '50%': {
      animationTimingFunction: 'ease-in',
      transform:
        'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
    },
    '80%': {
      animationTimingFunction: 'ease-in',
      transform:
        'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
    },
    to: {
      animationTimingFunction: 'ease-in',
      transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
    },
  },
  flipInX: {
    from: {
      animationTimingFunction: 'ease-in',
      opacity: '0',
      transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
    },
    '40%': {
      animationTimingFunction: 'ease-in',
      transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
    },
    '60%': { opacity: '1', transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)' },
    '80%': { transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)' },
    to: { transform: 'perspective(400px)' },
  },
  flipInY: {
    from: {
      animationTimingFunction: 'ease-in',
      opacity: '0',
      transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
    },
    '40%': {
      animationTimingFunction: 'ease-in',
      transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',
    },
    '60%': { opacity: '1', transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)' },
    '80%': { transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)' },
    to: { transform: 'perspective(400px)' },
  },
  flipOutX: {
    from: { transform: 'perspective(400px)' },
    '30%': { opacity: '1', transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)' },
    to: { opacity: '0', transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)' },
  },
  flipOutY: {
    from: { transform: 'perspective(400px)' },
    '30%': { opacity: '1', transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)' },
    to: { opacity: '0', transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)' },
  },
  lightSpeedInRight: {
    from: { opacity: '0', transform: 'translate3d(100%, 0, 0) skew(-30deg)' },
    '60%': { opacity: '1', transform: 'skew(20deg)' },
    '80%': { transform: 'skew(-5deg)' },
  },
  lightSpeedInLeft: {
    from: { opacity: '0', transform: 'translate3d(-100%, 0, 0) skew(30deg)' },
    '60%': { opacity: '1', transform: 'skew(-20deg)' },
    '80%': { transform: 'skew(5deg)' },
  },
  lightSpeedOutRight: { to: { opacity: '0', transform: 'translate3d(100%, 0, 0) skew(30deg)' } },
  lightSpeedOutLeft: { to: { opacity: '0', transform: 'translate3d(-100%, 0, 0) skew(-30deg)' } },
  rotateIn: { from: { opacity: '0', transform: 'rotate3d(0, 0, 1, -200deg)' } },
  rotateInDownLeft: { from: { opacity: '0', transform: 'rotate3d(0, 0, 1, -45deg)' } },
  rotateInDownRight: { from: { opacity: '0', transform: 'rotate3d(0, 0, 1, 45deg)' } },
  rotateInUpLeft: { from: { opacity: '0', transform: 'rotate3d(0, 0, 1, 45deg)' } },
  rotateInUpRight: { from: { opacity: '0', transform: 'rotate3d(0, 0, 1, -90deg)' } },
  rotateOut: { to: { opacity: '0', transform: 'rotate3d(0, 0, 1, 200deg)' } },
  rotateOutDownLeft: { to: { opacity: '0', transform: 'rotate3d(0, 0, 1, 45deg)' } },
  rotateOutDownRight: { to: { opacity: '0', transform: 'rotate3d(0, 0, 1, -45deg)' } },
  rotateOutUpLeft: { to: { opacity: '0', transform: 'rotate3d(0, 0, 1, -45deg)' } },
  rotateOutUpRight: { to: { opacity: '0', transform: 'rotate3d(0, 0, 1, 90deg)' } },
  hinge: {
    '20%, 60%': { transform: 'rotate3d(0, 0, 1, 80deg)' },
    '40%, 80%': { opacity: '1', transform: 'rotate3d(0, 0, 1, 60deg)' },
    to: { opacity: '0', transform: 'translate3d(0, 100vh, 0)' },
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
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      opacity: '0',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -100vw, 0)',
    },
    '60%': {
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      opacity: '1',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
    },
  },
  zoomInLeft: {
    from: {
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      opacity: '0',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-100vh, 0, 0)',
    },
    '60%': {
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      opacity: '1',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
    },
  },
  zoomInRight: {
    from: {
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      opacity: '0',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(100vh, 0, 0)',
    },
    '60%': {
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      opacity: '1',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
    },
  },
  zoomInUp: {
    from: {
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 100vw, 0)',
    },
    '60%': {
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      opacity: '1',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
    },
  },
  zoomOut: { '50%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' }, to: { opacity: '0' } },
  zoomOutDown: {
    '40%': {
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      opacity: '1',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
    },
    to: {
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      opacity: '0',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 100vh, 0)',
    },
  },
  zoomOutLeft: {
    '40%': { opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)' },
    to: { opacity: '0', transform: 'scale3d(0.1, 0.1, 1) translate3d(-100vw, 0, 0)' },
  },
  zoomOutRight: {
    '40%': { opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)' },
    to: { opacity: '0', transform: 'scale3d(0.1, 0.1, 1) translate3d(100vw, 0, 0)' },
  },
  zoomOutUp: {
    '40%': {
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      opacity: '1',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
    },
    to: {
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      opacity: '0',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -100vh, 0)',
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
