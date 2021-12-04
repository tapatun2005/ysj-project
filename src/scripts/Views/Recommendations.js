import '@styles/Views/Recommendations.scss'
import App from '../App.js'
import { Tabs } from 'Components'

import { 
    $selector
} from "Functions"

import { 
    Data
} from 'Components'

App().then(() => {
    Tabs('.tabs', '.tab')
    if ($selector('#dowloads-language')) {
        new Data('Recommendations', {
            output: '#dowloads-language',
            category: $selector('#dowloads-language').dataset.category
        })
    }
    if ($selector('#dowloads-humanity')) {
        new Data('Recommendations', {
            output: '#dowloads-humanity',
            category: $selector('#dowloads-humanity').dataset.category
        })
    }
    if ($selector('#dowloads-business')) {
        new Data('Recommendations', {
            output: '#dowloads-business',
            category: $selector('#dowloads-business').dataset.category
        })
    }

    if ($selector('#dowloads-art')) {
        new Data('Recommendations', {
            output: '#dowloads-art',
            category: $selector('#dowloads-art').dataset.category
        })
    }
})