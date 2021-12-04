import '@styles/Views/Outputs.scss'
import App from '../App.js'

import { 
    $selector
} from "Functions"

import { 
    Data
} from 'Components'

App().then(() => {
    if ($selector('#dowloads-business')) {
        new Data('Schools', {
            output: '#dowloads-business',
            category: $selector('#dowloads-business').dataset.category
        })
    }

    if ($selector('#dowloads-language')) {
        new Data('Schools', {
            output: '#dowloads-language',
            category: $selector('#dowloads-language').dataset.category
        })
    }

    if ($selector('#dowloads-art')) {
        new Data('Schools', {
            output: '#dowloads-art',
            category: $selector('#dowloads-art').dataset.category
        })
    }

    if ($selector('#dowloads-humanity')) {
        new Data('Schools', {
            output: '#dowloads-humanity',
            category: $selector('#dowloads-humanity').dataset.category
        })
    }

    if ($selector('#dowloads-others')) {
        new Data('Outputs', {
            output: '#dowloads-others',
            category: $selector('#dowloads-others').dataset.category
        })
    }

})