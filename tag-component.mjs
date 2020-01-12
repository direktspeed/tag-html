/*
    A Multi Environment Component Wrapper / Creator
    new Component('tag-tag')
    tag, view, scope
*/
/*
Component.extend({
  tag: "my-counter",
  view: `
    Count: <span>{{this.count}}</span>
    <button on:click="this.increment()">+1</button>
  `,
  ViewModel: {
    count: {default: 0},
    increment() {
      this.count++;
    }
  }
});

// Registers a Component for DOM and String usage
// when you create none arrpw functions you can use this in them
function render() {
        // Test bind this.
        this.innerHTML = this.view(this)
    }



const comp = Component.define({ 
    tag: 'my-counter',
    view: ({ count }) => html`
        Count: <span>{{count}}</span>
        <button>+1</button>
    `, 
    //viewModel: class extends HTMLElement {
    viewModel: {
        count = 0,
        connectedCallback: function() {
            this.querySelector('button').onclick = this.increment()
        },
        render,
        increment() {
            this.count++;
            this.render()
        }
    }
})
// Returns component registers component

const myInst = new comp({
    tag: 'my-counter',
    view: ({ count = 0 }) => html`
        Count: <span>{{count}}</span>
        <button>+1</button>
    `, 
    //viewModel: class extends HTMLElement {
    viewModel: {
        connectedCallback: function() {
            this.querySelector('button').onclick = this.increment()
        },
        render,
        increment() {
            const count = Number(this.querySelector('span'))
            count++
            this.querySelector('span').innerText = count
        }
    }
})

tap(()=>{
    // more here
},myInst.connected)
// returns component instance or string representation also registers the component if its not!
    */

//A ES Module that runs in the browser and any other environment that returns HTMLElement Conditional
const ifHTMLElement = typeof HTMLElement !== 'undefined' ? HTMLElement : class HTMLElement { }
export { ifHTMLElement as HTMLElement };
const MixinComponent = base=>class extends base {
    // Used when not using extend or when calling super with arguments
    constructor(tag = '', template = () => '', data = 'default') {
        super()
        this.tagName = tag
        this.template = template.bind(this)
        this.data = data
        // Should Choose to register the element.
    }
    render() {
        const { template, tagName, data } = this
        const result = template(data)
        this.innerHTML = result
        return `<${tagName}>${result}</${tagName}>`
    }
}


// minimum component can be also customElement
// customElements can trigger actions on insert
// customElements can encapsulate dom.
class myComponent extends MixinComponent(ifHTMLElement) {
    tagName = 'my-tag'
    template(data) {
        return `${data}`
    }
    data = 'string'
}
/**
 * About values
 * they can come from user input
 * they can come from external source
 * they can be coded
 * when a value changes it should call render or not
 */
class myListComponent extends MixinComponent(ifHTMLElement) {
    tagName = 'my-tag'
    //data should be a array
    template(data) {
        return `${data}`
    }
    data = 'string'
}

class pageComponent extends MixinComponent(ifHTMLElement) {
    tagName = 'my-tag'
    //data should be a array
    template(data) {
        return `${data}`
    }
    data = 'string'
}


// function pattern tag-html-component
function TagHtmlComponent(data) {
    return html`<p></p>`
}

//class pattern tag-html-component-class
class TagHtmlComponentClass {
    constructor(data) {
        this.data = data
    }
    template() {
        const { data } = this;
        return html`<p>${data}`
    }
    render() {
         return this.template()
    }
}