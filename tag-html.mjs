//Sync supports streaming
export const html = (strArr, ...valArr)=>strArr
  // add a Stream Emitter here
  .map((e, i) => `${e}${valArr[i] ? valArr[i] : ''}`) 
  .join('')

  // Pollyfill render(template,optional, domNode)
export const render = (x,el) => {
    const result = typeof x.render !== 'function' ? x : x.render()
    if (!el) {
        return result;
    }
    const target = typeof el.shadowRoot !== 'undefined' ? el.shadowRoot.innerHTML : typeof el.innerHTML !== 'undefined' ? el.innerHTML : el;
    target = result;
    return el;
};

export const append = (x,el) => {
    const result = typeof x.render !== 'function' ? x : x.render()
    if (!el) {
        return result;
    }
    // Should use browsers append method if possible
    const target = typeof el.shadowRoot !== 'undefined' ? el.shadowRoot.innerHTML : typeof el.innerHTML !== 'undefined' ? el.innerHTML : el;
    target = target+result;
    return el;
}

// Promise Support returns a promise that resolved to html``result with all values resolved
// If one Promise Rejects without Handling it via catch it will throw?
// This allows timeout feature to return a template in a given time.
export const htmlPromise = (strArr, ...valArr) => Promise.all(valArr).then(vA => html(strArr, vA));

// Stream Processing binding (**optional**) you can always go the react way with render()
class streamElement {
    view(ctx) {
        const color = ctx.color
        return html`<input style="background-color: ${color};">`;
    }
    connectedCallback() {
        // Setup State
        this.color = 'green'
        //Render view if needed supply propertys via arguments
        this.innerHTML = this.innerHTML.length === 0 ? this.view(this) : this.innerHTML;
        //select element or elements for bindings to this state this.querySelector('')
        setTimeout(() => {
            this.setAttribute("class", "democlass");
            this.style.backgroundColor = 'red'    
        },4000)
        
        //Update <tag attribute=value>
        //Update <tag attribute>
        //get attribute as part
        //this.attribute
    }
}
/*
    <stream-element>${value}<stream-element>
*/

// Advanced utils helpers 
export function Tag2Str(strings, ...values) {
    let i = 0
    return strings
      .map((s,i)=>(i === strings.raw.length-1) ? strings.raw[i] : strings.raw[i]+'${'+i+'}')
      .join('')
}
//console.log(Tag2Str`${me}t4 string text line 1 \n ${me} string text line 2 ${me} me`);

// Accepts only Objects
export function Obj2Arrays(obj) { 
    const arrays = [[], []] // [[...keysAsString],[...values]]
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          arrays[0].push(key);
          arrays[1].push(ctx[key]);
        }
    };
    return arrays; // const [keys,vals] = arrays
}

export function Arrays2Object(arrays) {
    const [keys, vals] = arrays;
    const obj = {}
    keys.map((key, i) => obj[key] = vals[i]);
}

export function Str2Tag(str,ctx) {
    const [keys,vals] = Obj2Arrays(ctx)
    const source = `return (() => \`${str}\`)()`;
    return Function(keys, source).apply(ctx,vals);
}
// Str2Tag Supporting async values in the ctx
export async function AsyncStr2Tag(str) {
    const [keys,vals] = Obj2Arrays(ctx)
    let source = `return ((async () => \`${stringOrPromise.replace(/\${/g, '${await ')}\`))()`;
    return await Function(keys, source).apply(ctx, vals);
}

