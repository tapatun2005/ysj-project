import {
    $selector
} from 'Functions'

export const Loader = (el) => {
    return new Promise(resolve => {
        $selector(el || 'html').classList.add('is-page-loaded')
        resolve()
    })
}

export default Loader