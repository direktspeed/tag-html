import { html, render, createElement } from '../tag-html.mjs'
// Can Create Minimal Component

const myComponent = (data)=>html`<h1>String with ${data}</h1>`