import { html, promise } from './tag-html';

// as Long as the value is always a string we did it right
const aStringValue = 'a'
const aStringValueFromLiteral = ` \${aStringValue\}2` 
const aStringValueFromPromise = Promise.resolve('Pstring');
const aStringValueFromFunction = () => 'aStringValueFromFunction';
const aStringValueFromHtmlJsTag = () => html`<h1>aStringValueFromHtmlJsTag</h1>`;

const scope = {
    aStringValue,
    aStringValueFromLiteral,
    aStringValueFromPromise,
    aStringValueFromFunction,
    aStringValueFromHtmlJsTag }





class returnTemplate {
    constructor(ctx,templateString) {
        Object.assign(this,ctx)
    }
    render() {
        return html``
    }
    promise {
        return promise
    }
}

