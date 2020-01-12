// if you use a wirred packager then this could easy get always class {} which is then not useable in browsers
//A ES Module that runs in the browser and any other environment that returns HTMLElement Conditional
const ifHTMLElement = typeof HTMLElement !== 'undefined' ? HTMLElement : class { }
export { ifHTMLElement as HTMLElement };


export class TagHTML extends ifHTMLElement {}
/**
 * Example Code
 */
/*
import HTMLElement from './node_modules/stealify/lit-html-framework/html-element.mjs'
class myElement extends HTMLElement {

}
*/
// The use case for this is to create HTMLElements that can run inside NodeJS and the Browser.