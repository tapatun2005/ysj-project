import { 
    Images,
    Loader,
    Menu,
    SplitWords,
    SectionLoad
} from 'Components'

const App = async () => {

    await window.addEventListener('load', () => {
        const promise = Loader().then(() => {
            Menu('nav', '.toggle')
            new SplitWords('.js-split-words')
            new SectionLoad('section')
            new Images('.image')
        })
    })

}

export default App