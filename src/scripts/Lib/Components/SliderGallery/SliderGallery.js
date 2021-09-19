// @Styles
import './SliderGallery.scss'

// @Functions
// -----------------
import {
	$selector
} from 'Functions'
// -----------------

export default class SliderGallery {
    
    constructor(el, opts = {}) {
        this.sliders = Array.isArray(el) ? el.map(item => $selector(item)) : [$selector(el)]
        this.isResponsive = opts.responsive ? true : false
    }
    
}