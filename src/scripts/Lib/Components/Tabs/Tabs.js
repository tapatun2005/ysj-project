import {
    $selectors
} from 'Functions'

const Tabs = (selector, item) =>  {
    
    const lists = $selectors(selector)
    
    for (let i = 0; i < lists.length; i++) {
        const items = $selectors(lists[i], item)
        for (let x = 0; x < items.length; x++) {
            items[x].addEventListener('click', () => { show(items[x])})
        }
    }

    function show(tab) {
      const isOpen = tab.classList.contains('is-active')
      const action = isOpen ? 'remove' : 'add'
      tab.classList[action]('is-active')
    }

}

export default Tabs