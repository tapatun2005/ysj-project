import {
    $selector,
    $selectors
} from 'Functions'

class Carousel {
    constructor(els, opts = {}) {
        this.els = $selectors(els)
        this._init()
    }

    _init() {
        for (let i = 0; i < this.els.length; i++) {
            const list = $selector(this.els[i], 'ul')
            const items = $selectors(list, 'li')
            const navs = $selectors(this.els[i], '.carousel__navs div')
            let current = 0
            
            for (let x = 0; x < navs.length; x++) {
                navs[x].addEventListener('click', () => {
                    const dir = navs[x].dataset.dir
                    let next = current
                    
                    if (dir === 'prev') {
                        next = current + 1
                        if (next >= items.length) {
                            next = items.length - 1
                        }
                    } else {
                        next = current - 1
                        if (next < 0) {
                            next = 0
                        }
                    }
                    current = next
                    list.style.transform = `translateX(${-100 * current}%)`
                })
            }
        }
    }
}

export default Carousel