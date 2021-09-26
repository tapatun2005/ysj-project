import '@styles/Views/Index.scss'
import App from '../App.js'

import {
    Video
} from 'Components'

App().then(() => {
    Video('.video', 'picture')
})