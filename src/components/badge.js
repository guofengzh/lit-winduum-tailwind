import { LitElement, unsafeCSS, css, html } from 'lit'
//import twCSS from '../../src/index.css?inline'
import BadgeCss from 'winduum/src/components/badge/index.css?inline'

export class Badge extends LitElement {
    render () {
        return html`<slot />`
    }

    static get styles () {
        return [
            css`
              :host, * {
                box-sizing: border-box;
              }
            `, unsafeCSS(
                // needs to be rewritten as vitePlugin
                BadgeCss.replaceAll('.x-badge', ':host').replace(/:host((?! \{).*?[^{]+(?=\s*{))/g, ':host($1)')
            ),
            //unsafeCSS(twCSS)
        ]
    }
}

window.customElements.define('x-badge', Badge)
