# tag-html html``
Is minimalistic ES6+ Templating Engine
with Optional Helper methods for tasks like Promises, .... it is more light weight then lit-html
while offering Cross Platform and Environment Support. Eg: WebWorker ServiceWorker NodeJS Browser.

it even is lit-html compatible the only striped out feature is directives its successor is customElements

it creates Efficient, Fast ,Expressive, Extensible HTML templates with JavaScript Tagged Template Literals that render in any Environment 

offers also a Cross Environment WebComponents bridge to allow SSR and CustomElements without a JSDOM in nodejs
so it offers highperformance low overhead SSR.

we encurage functional reactive programming via Streams and integrate in our examples the @direktspeed/stream lib
wich offers extensiv predefined Stream Interfaces for Common and Imposibible Tasks.

https://github.com/direktspeed/webcomponents/

```js
import {html, htmlPromise, render, asElement, renderAsElement, getTagName, defineComponentElement} from 'tag-html';
// # String Methods
// This is a tag-html template function. It returns a tag-html template.
const helloTemplate = name => html`<div>Hello ${name}!</div>`;
 
// This renders <div>Hello Frank!</div> to the document body
render(helloTemplate('Frank'), document.body);
 
// This updates to <div>Hello Nils!</div>
render(helloTemplate('Nils'), document.body);

// In NodeJS
render(helloTemplate('Nils')) // => <div>Hello Nils!</div>;
render(helloTemplate('Nils'),{ innerHTML: '' }) // => { innerHTML: '<div>Hello Nils!</div>' };

let result 
render(helloTemplate('Nils'),result)
console.log(result)//=> '<div>Hello Nils!</div>';

const templateAsFunction = (data=string) => `${data}`
const othertemplatewithdata = data => templateAsFunction(data)

// Working with promises
const helloTemplatePromise = name => htmlPromise`<div>Hello ${Promise.resolve('myName')}!</div>`;
helloTemplatePromise.then(t=>render(t,el))

getTagName(helloTemplate) //=> 'hello-template'
html`${asElement(helloTemplate)}` //=> '<hello-template><hello-template>'

// Components with customElements
renderAsElement(helloTemplate('Frank')) //=> '<hello-template><div>Frank!</div><hello-template>'
// you should always code your elements to be self defining like this on load. so you always expect them to have content set
// or you always expect them to have no content set on init.
defineComponentElement(class HelloTemplate extends ifHTMLElement {
    connectedCallback() {
        this.innerHTML = this.innerHTML+'!!!!'
    }
}) //=> '<hello-template><div>Frank!!!!!</div><hello-template>'



document.createElement('tag-name').toString() => '<tag-name></tag-name>';
'<tag-name></tag-name>'.slice(1).split('>',2)[0].split(" ",2)[0] => 'tag-name';


```

## How Components work
a tagHtmlComponent is a template so it can be String, Function, Object with a render method eg; class or constructor function
to make Components Interactive you need to define customElements for the elements in the Component. You can use Components inside
your customElements but you can't use customElements logic inside Components unless you use some DOM Pollyfill or you run exclusiv in a Browser Environment.
As design Philiosophy you should always use strings and serializeable methods eg: use attribute changes use data-attributes use inner content do not use slots.
as they break the concept of string serializability on the server.

## Old Deprecated How Components
Its a Constructor that registers as a custom-element if tag is supplyed and we are running in the browser
It also returns a instantiat able representation of your Component that you can use via new myComponent
it also acts as a registry if you use <hello-world></hello-world> in a nodeJs Template it will look if it can get a 
representation of it even if customElements api is not there. if u use this style your components should be
written in a way that accepts attributes as input for inital data.

tag-html Component Example NodeJS, Browser, WebWorker
```js
import { html, render, Component } from 'tag-html';

// To Make a App Template simply return it without tag then its document!
const helloComponent = Component.define({
    tag: 'hello-world',
    template: ({ name }) => html`<div>Hello ${name}!</div>`,
    viewModel: { name: 'Frank' }
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

## TODO Implament domc
https://github.com/Freak613/domc

## TODO Component patterns
We Should show new syntax for reUseable Components eg component + defineComponentDefinition
- A Component can be String, Function, anything with a render function on it
- If you want to use it as CustomElement you Should follow Naming Confention UpperCamelCase as function name or object name or class name
```js
// Deprecated define examples. superseeded by new component model
// supports partials
const partial = name => html`${new helloComponent({ name })}<br />`
const myApp = Component.define({
    template: ({ names }) => html`<html><head></head><body>
    ${names.map(partial).join('')}
    </body></html>`,
    viewModel: { names: ['Frank', 'Nils'] }
})

// no partial app
const myAppNoPart = Component.define({
    template: ({ names }) => html`<html><head></head><body>
    ${names.map(name => `${new helloComponent({ name })}<br />`).join('')}
    </body></html>`,
    viewModel: { names: ['Frank', 'Nils'] }
})
``` 
