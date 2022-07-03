const domSymbol = Symbol('watermark-dom')

export function useWatermark(appendEl: HTMLElement | null = document.body) {
  let func: Fn = () => {}
  const id = domSymbol.toString()
  const clear = () => {
    const domId = document.getElementById(id)
    if (domId) {
      const el = appendEl
      el && el.removeChild(domId)
    }
    window.removeEventListener('resize', func)
  }
  const createWatermark = (str: string) => {
    clear()

    const can = document.createElement('canvas')
    can.width = 300
    can.height = 240

    const cans = can.getContext('2d')
    if (cans) {
      cans.rotate((-20 * Math.PI) / 120)
      cans.font = '15px Vedana'
      cans.fillStyle = 'rgba(0, 0, 0