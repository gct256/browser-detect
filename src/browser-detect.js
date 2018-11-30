import currentDevice from 'current-device'

if (typeof window === 'object' && typeof window.device === 'object') {
  delete window.device
}

const classes = `${document.documentElement.className}`.trim().split(/\s+/)
const ua = window.navigator.userAgent

if (/Firefox/i.test(ua)) {
  classes.push('firefox', 'gecko')
} else if (/Trident/.test(ua)) {
  classes.push('ie', 'trident')
} else if (/Edge/.test(ua)) {
  classes.push('edge')
} else if (/Silk-/.test(ua)) {
  classes.push('silk', 'blink')
} else if (/Safari/.test(ua)) {
  if (/Chrome/.test(ua)) {
    classes.push('chrome', 'blink')
  } else {
    classes.push('safari', 'webkit')
  }
} else if (/Chrome/.test(ua)) {
  classes.push('chrome', 'blink')
} else if (/AppleWebKit/.test(ua)) {
  classes.push('safari', 'webkit')
} else if (/MSIE/.test(ua)) {
  classes.push('ie', 'trident')
}
document.documentElement.className = classes.join(' ')

export const browserDetect = {
  ...currentDevice,
  blink: () => classes.indexOf('blink') >= 0,
  chrome: () => classes.indexOf('chrome') >= 0,
  edge: () => classes.indexOf('edge') >= 0,
  firefox: () => classes.indexOf('firefox') >= 0,
  gecko: () => classes.indexOf('gecko') >= 0,
  ie: () => classes.indexOf('ie') >= 0,
  safari: () => classes.indexOf('safari') >= 0,
  silk: () => classes.indexOf('silk') >= 0,
  trident: () => classes.indexOf('trident') >= 0,
  webkit: () => classes.indexOf('webkit') >= 0
}
