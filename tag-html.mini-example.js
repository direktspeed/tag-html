// shim that allows isoMorphic class myElement extends HTMLElement
// const HTMLElement = globalThis.HTMLElement || class HTMLElement {};
// Would only work with HTML element would require above shim
// const htmlElementToString = exp => exp instanceof HTMLElement ? Object.assign(exp,{toString(){return this.outerHTML}}): exp;
const htmlElementToString = exp => exp.outerHTML ? exp.outerHTML : exp;

const asyncHtml = async (strings=[""],...args) => {
    const resolvedArgs = await Promise.all(args);
    return strings.reduce((resultString, currentString, i) => {
    const exp = resolvedArgs[i] !== undefined ? resolvedArgs[i] : "";
    
    const processedExp = `${htmlElementToString(exp)}`;
    return resultString + currentString + processedExp;
    }, "");
}

const html = (strings=[""],...args) => strings.reduce((resultString, currentString, i) => {
    const exp = args[i] !== undefined ? args[i] : "";
    const processedExp = htmlElementToString(exp);
    // String + exp auto calls toString on exp like `${exp}`
    return resultString + currentString + processedExp;
}, "");


export const productListComponent = { 
    outerHTML: `<div class="col-8" id="product-list"> 
        Produkt Name                        
    </div>`,
    toString() {
        return this.outerHTML;
    }
};

class ProductListComponent extends HTMLElement {
    connectedCallback() {
        Object.assign(this,{
            classList: "col-8", id: "product-list",
            innerHTML: `Produkt Name`,
        });
    }
    toString() {
        return this.outerHTML;
    }
};
