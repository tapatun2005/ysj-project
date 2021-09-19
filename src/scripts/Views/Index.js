import '@styles/style.scss'
import '@styles/Views/Index.scss'

import { 
    $selector, 
    $selectors 
} from 'Functions'

console.log($selector('#app'))
console.log($selector($selector('body'), '#app'))

console.log($selectors('div'))
console.log($selectors($selector('div'), 'p'))