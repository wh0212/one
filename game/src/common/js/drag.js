import { prefixStyle } from 'common/js/dom'

let transform = prefixStyle('transform')
let position = {x: 0, y: 0}
export default class Drag {
  pos = {
    x: 0,
    y: 0
  }
  settings = {
    obj: null,
    move: null,
    slideWidth: 300,
    objWidth: 10,
    down: null,
    up: null
  }
  dx = 0
  dy = 0
  constructor (opt) {
    this.opt = opt
  }

  init () {
    Object.assign(this.settings, this.opt)
    this.addEvent()
  }

  addEvent () {
    this.settings.obj.onmousedown = this.mouseDown.bind(this)
  }

  mouseDown (event) {
    let ev = event || window.event
    this.dx = ev.clientX
    this.dy = ev.clientY
    this.pos.x = position.x
    this.pos.y = position.y
    if (typeof this.settings.down === 'function') {
      this.settings.down()
    }
    document.onmousemove = this.mouseMove.bind(this)
    document.onmouseup = this.mouseUp.bind(this)
  }

  mouseMove (event) {
    let ev = event || window.event
    let x = this.pos.x + (ev.clientX - this.dx)
    let y = this.pos.y + (ev.clientY - this.dy)

    if (x <= 0) {
      x = 0
    }

    if (x >= (this.settings.slideWidth - 10)) {
      x = (this.settings.slideWidth - 10)
    }

    this.settings.obj.style[transform] = `translate3d(${x}px,0,0)`
    if (typeof this.settings.move === 'function') {
      this.settings.move({x: x, y: y})
    }
    position.x = x
    position.y = y
  }

  mouseUp (event) {
    if (typeof this.settings.up === 'function') {
      this.settings.up()
    }
    document.onmousemove = null
    document.onmouseup = null
  }
}
