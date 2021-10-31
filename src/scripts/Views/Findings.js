import '@styles/Views/Findings.scss'
import App from '../App.js'
import { 
    Data 
} from 'Components'


App().then(() => {
    new Data('Findings', {
        output: '#data', 
        category: 'data'
    })

    new Data('Findings', {
        output: '#agency', 
        category: 'agency'
    })

    new Data('Findings', {
        output: '#discourse', 
        category: 'discourse'
    })
})