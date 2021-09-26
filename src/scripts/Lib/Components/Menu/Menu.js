import {
    $selector
} from 'Functions'

const Menu = (el, toggle) => {
    let isOpen = false
    const menu = $selector(el)
    const button = $selector(toggle)

    console.log(menu, button)

    button.addEventListener('click', () => {
        isOpen = !isOpen
        const action = isOpen ? 'add' : 'remove'
        menu.classList[action]('is-active')
        button.classList[action]('is-active')
    })
} 

export default Menu