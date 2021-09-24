import { 
    Loader,
    Images,
    SplitWords,
    SectionLoad
} from 'Components'

const App = () => {

    window.addEventListener('load', () => {
        const promise = Loader().then(() => {
            new SplitWords('.js-split-words')
            new SectionLoad('section')
            new Images('.image')
        })
    })
    
}

export default App