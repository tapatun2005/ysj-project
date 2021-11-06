import '@styles/Views/Schools.scss'
import App from '../App.js'

import { 
    $selector
} from "Functions"

import { 
    Data,
    Carousel
} from 'Components'

App().then(() => {
    if ($selector('#dowloads')) {
        new Data('Schools', {
            output: '#dowloads',
            category: $selector('#dowloads').dataset.category
        })
    }
    if ($selector('.carousel')) {
        new Carousel('.carousel')
    }
})