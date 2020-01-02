//A ES Module that runs in the browser and any other environment that returns HTMLElement Conditional
const ifHTMLElement = typeof HTMLElement !== 'undefined' ? HTMLElement : class HTMLElement { }
export { ifHTMLElement as HTMLElement };

/**
 * Example Code
 */
/*
import HTMLElement from './node_modules/stealify/lit-html-framework/html-element.mjs'
class myElement extends HTMLElement {

}
*/
// The use case for this is to create HTMLElements that can run inside NodeJS and the Browser.