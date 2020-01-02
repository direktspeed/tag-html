# tag-html html``
Is minimalistic ES6+ Templating Engine with Optional Promise Helper it is more light weight then lit-html
while offering Cross Platform and Environment Support. Eg: WebWorker ServiceWorker NodeJS Browser.

it even is lit-html compatible the only striped out feature is directives its successor is customElements

it creates Efficient, Fast ,Expressive, Extensible HTML templates with JavaScript Tagged Template Literals that render in any Environment 

offers also a Cross Environment WebComponents bridge to allow SSR and CustomElements without a JSDOM in nodejs
so it offers highperformance low overhead SSR.

we encurage functional reactive programming via Streams and integrate in our examples the @direktspeed/stream lib
wich offers extensiv predefined Stream Interfaces for Common and Imposibible Tasks.


```js
import {html, render} from 'tag-html';
 
// This is a tag-html template function. It returns a tag-html template.
const helloTemplate = name => html`<div>Hello ${name}!</div>`;
 
// This renders <div>Hello Frank!</div> to the document body
render(helloTemplate('Frank'), document.body);
 
// This updates to <div>Hello Nils!</div>, but only updates the ${name} part
render(helloTemplate('Nils'), document.body);
// In NodeJS
render(helloTemplate('Nils')) // => <div>Hello Nils!</div>;
render(helloTemplate('Nils'),{ innerHTML: '' }) // => { innerHTML: '<div>Hello Nils!</div>' };
let result 
render(helloTemplate('Nils'),result)
console.log(result)//=> '<div>Hello Nils!</div>';
```

tag-html Component Example NodeJS, Browser, WebWorker
```js
import { html, render, Component } from 'tag-html';

// To Make a App Template simply return it without tag then its document!
const helloComponent = Component.define({
    tag: 'hello-world',
    template: ({ name }) => html`<div>Hello ${name}!</div>`,
    viewModel: { name: 'Frank' }
})

const myApp = Component.define({
    template: ({ names }) => html`<html><head></head><body>
    ${names.map(name => html`${new helloComponent({ name })}<br />`)}
    </body></html>`,
    viewModel: { names: ['Frank', 'Nils'] }
})

// In Nodejs
function (req,res,next) {
    res.end(myApp.render()) 
    /**
     *  <html><head></head><body>
     *  <hello-world><div>Hello Frank!</div></hello-world><br />
     *  <hello-world><div>Hello Nils!</div></hello-world><br />
     *  </body></html>
     */
}

// In the Browser
render()
```

## How Components works
Its a Constructor that registers as a custom-element if tag is supplyed and we are running in the browser
It also returns a instantiat able representation of your Component that you can use via new myComponent
it also acts as a registry if you use <hello-world></hello-world> in a nodeJs Template it will look if it can get a 
representation of it even if customElements api is not there. if u use this style your components should be
written in a way that accepts attributes as input for inital data.