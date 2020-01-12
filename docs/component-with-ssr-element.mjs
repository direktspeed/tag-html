import { html, createTemplateElement } from '../tag-html.mjs'

const MyComponent = data => html`${render(MyOtherComponent)}`


const MyOtherComponent = data => html``

const MyOtherDeepComponent = data => html`MyOtherDeepliveComponent('data')`
const MyOtherDeepliveComponent = data => createTemplateElement``()
// defines elements if needed browser will pick that up


// do what ever is needed to return string or dom element.
const isoComp = () => {
    // returns wrapped string
    // define elements
}


// do what ever is needed to return string or dom element.
// here we return a render function that can be applyed on elements like this
const isoOptTemp = () {
    isoComp() //=> result is string!
    // if browser uses createTemplateElement with the result of isoComponent 
    // can extend existing isoComp with customElements that are not defined.
    // returns render function that applys elements to container
}

const vCustomElement = () => {
    // string or dom node
}
// this can only be used in customElements or in the browser but it is really powerfull.
// It enables 