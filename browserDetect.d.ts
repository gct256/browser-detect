type OnChangeOrientationListener = (newOrientation: string) => void

interface BroewserDetect {
  orientation: string
  os: string
  type: string

  android(): boolean
  androidPhone(): boolean
  androidTablet(): boolean
  blackberry(): boolean
  blackberryPhone(): boolean
  blackberryTablet(): boolean
  chrome(): boolean
  cordova(): boolean
  desktop(): boolean
  edge(): boolean
  firefox(): boolean
  fxos(): boolean
  fxosPhone(): boolean
  fxosTablet(): boolean
  ie(): boolean
  ios(): boolean
  ipad(): boolean
  iphone(): boolean
  ipod(): boolean
  landscape(): boolean
  macos(): boolean
  meego(): boolean
  mobile(): boolean
  noConflict(): BroewserDetect
  nodeWebkit(): boolean
  onChangeOrientation(listener: (newOrientation?: string) => void): void
  portrait(): boolean
  safari(): boolean
  tablet(): boolean
  television(): boolean
  windows(): boolean
  windowsPhone(): boolean
  windowsTablet(): boolean
}

export const browserDetect: BroewserDetect
