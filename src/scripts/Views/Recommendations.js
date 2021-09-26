import '@styles/Views/Recommendations.scss'
import App from '../App.js'
import { Tabs } from 'Components'

App().then(() => {
    Tabs('.tabs', '.tab')
})