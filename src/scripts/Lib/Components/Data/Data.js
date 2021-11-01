import {
    $selector
} from 'Functions'

import { __recordsPerPageForIteration } from 'airtable/lib/table';

const Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyNXNLgJCOcwP46h'
});
const base = Airtable.base('appj3cx5Q4gJ8eF3z')

class Data {
    
    constructor(type, config = {}) {
        this.type = type
        this.config = config
        this._init()
    }

    _init() {
        this._data()
    }

    async _data() {
        const items = await base(this.type).select({view: 'Grid view'}).all()
        if (items) {
            const filtered = items.filter( x => x.fields.Category === this.config.category)
            if (filtered.length === 0) {
                 $selector(`[data-resources="${this.config.category}"]`).classList.add('is-hidden')
            } else {
                this._render(filtered)
            }
        }
    }

    _renderImage(item) {
        let x = ''
        if (item !== undefined) {
            x = `<div class="_img"><img src="${item[0].url}"></div>`
        }
        return x
    }

    _renderName(item) {
        let x = ''
        if (item !== undefined) {
            x = `<div class="_title">${ item }</div>`
        }
        return x
    }

    _renderDescription(item) {
        let x = ''
        if (item !== undefined) {
            x = `<div class="_desc">${ item }</div>`
        }
        return x
    }

    _renderPath(item) {
        let link = ''
        if (item.Document !== undefined) {
            link = item.Document[0].url
        } else if (item.Link !== undefined) {
            link = item.Link
        }

        return link
    }

    _render(items) {
        const markup = `${items.map((x) => `
            ${ x.fields.Status === 'Done' ? 
                `<a href="${this._renderPath(x.fields)}" class="data__item" target="_blank">
                    <div class="_details">
                        ${this._renderImage(x.fields.Image)}
                        <div class="_content">
                            ${this._renderName(x.fields.Name)}
                            ${this._renderDescription(x.fields.Description)}
                        </div>
                    </div>
                    <div class="_arrow">
                        <img src="/assets/arrow-right-lg.svg"/>
                    </div>
                </a>`
                : ''
            }
            
        `).join('')}`
        
        $selector(this.config.output).innerHTML = markup
    }
}

export default Data