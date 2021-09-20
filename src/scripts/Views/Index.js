import '@styles/Views/Index.scss'
// import '../../assets/images/image-tes.jpg'

import { 
    $selector, 
    $selectors 
} from 'Functions'

console.log($selector('#app'))
console.log($selector($selector('body'), '#app'))

console.log($selectors('div'))
console.log($selectors($selector('div'), 'p'))