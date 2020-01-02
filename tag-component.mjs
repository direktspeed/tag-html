/*
    A Multi Environment Component Wrapper / Creator
    new Component('tag-tag')
    tag, view, scope

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

