import '@styles/Views/Schools.scss'
import App from '../App.js'

import { 
    $selector
} from "Functions"

import { 
    Data 
} from 'Components'

App().then(() => {
    if ($selector('#dowloads')) {
        console.log($selector('#dowloads').dataset.category)
        new Data('Schools', {
            output: '#dowloads',
            category: $selector('#dowloads').dataset.category
        })
    }
})