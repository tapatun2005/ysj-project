import {
    $selector
} from 'Functions'

class ScrollButton {
    constructor(el) {
        this.el = $selector(el)
        this.isVisible = true
        this._init()
    }

    _init() {
        this._scroll()
        window.addEventListener('scroll', () => this._scroll())
        this.el.addEventListener('click', () => this._click())
    }

    _click() {
        const section = document.querySelectorAll('section')[0]
        const height = section.getBoundingClientRect().height
        window.scrollTo({top: height, behavior: 'smooth'})
    }

    _scroll() {
        if (window.pageYOffset > 40 && this.isVisible)  {
            this.el.classList.add('is-hidden')
            this.isVisible = false
        } else if (window.pageYOffset <= 40 && !this.isVisible) {
            this.el.classList.remove('is-hidden')
            this.isVisible = true
        }
    }
}

export default ScrollButton