# The New Player on the Frontend and Backend Market
In the Frontend world there was Vue, React, Angular1, Angular2, Backbone and so on.

They all use a Template Engine to Select Elements and Apply bindings all that is 
working like magic and is also really complex you can't adjust them to your needs

but in big applications you simply need to adjust every piece of your software
and you also need to Produce Fast Results.

## Here Comes tag-html + es-streams
tag-html laso known as tagHtml is a lit-html like implamentation that allows
Fast and Ultra Flexible Templating. Then it uses customElements and Streams
to Connect and bind Values to components. @direktspeed/stream offers also
prebuild bindings as Streams that can be applyed often with less then a line
of code they have less overhead and are also auto lifecyling and managing state.

This is really Powerfull Combined with the Design Concepts of tag-html
tag-html focuses on a edge first paradigm bundled with a modlet structure


## The History
There was JavaScript MVC by Bitovi and that became CanJs and DoneJS for the Tooling 
all is using a loader called Steal its Really the best framework that existed it 
was packed with all possible features you can think of also the Project Maintainers
and Engineers from Bitovi did a amazing job with general Documentation.

but the code was pre ES11 it was filled with stuff for backward compatiblity and it 
also often changed.

i wanted something nativ that i can run and code with that can compile down if needed!
While still enjoying to use Future Tech Today.

There was no flow control and every model had all the methods i wanted something that i can control

## The Birth of Stealify
I was a big fan of Streams in genral and chunking data for distributed processing also with diffrent
write and persistent requirments. I found the Stream Lib MostJS aka Most aka Most/core it was a good
collection that illustrated whats possible.

i wanted to join most streams with canjs and was waisting years with experimenting studi render methods
use cases and a lot of more i dived deeper and deeper into frameworks and how they work.

i wanted to do a framework to Stealify Projects (build them out of existing reuseable stuff) even most 
time for my own use.

It at present uses tag-html and @direktspeed/stream in the background

## The Birth of Nils
Most JS turned more and more into something that was not useable so easy out of the box also the documentation
while it is useable for me as i can code and understand haskell most JS and ES Developers can not :).

Nils === 'Nativ Interactive Live Streams'

its also the name of my First Son and it is the short form of Nikolaos the Santa.

i got a warm feeling about that name NilsJS NilsES thats why i re export @direktspeed/stream as nils


## The Journy Ends!
- tag-html is the best template system that exists for ECMAScript Combined with the Stealify Eco System
It is able to Produce even the Most Flexible and Debug as also Maintainable Applications that are build
to last. It has Zero Depndencys!
- @direktspeed/stream, @direktspeed/nils, @most/core, are the most complet and efficent as also fast
libs for FRP Coding.
- Stealify is a Framework around all that with Best Practices that Illustrates how to Combine the following 
tech to create Cross Platform and Environment Applications with a single code base and less bundling much
more debug able and fast.
  - tag-html
  - Streams
  - esnext modules


## Something to Show
- Better and Faster as domc
  - add example to the performance test.
- Better and Faster as Angular
  - explain typescript and alternatives and so on
- Better and Faster as Polymer
- Better and Faster as CanJS + DoneJS
- Better and Faster as React
- Better and Faster as Vue
- Better and Faster as lit-html
- Better and Faster as any other webcomponents implamentation



### Cons of CanJS + DoneJS
- Needs build pipeline and produces always pre es11 code.
- many hacks
- needs much learning to understand how to work with the framework when it errors
- its a bit big for first inital Render
- ssr needs vdom shim and other hacks.
- not easy to control as it implaments its own opinions about everything
- steal loader bundler config needs understanding then also ssr
- for everything you need to learn a new abstraction layer over the raw code
- many functions are not pure functions.

### Pros of CanJS + DoneJS
If you follow the guides you will have fast results its even stable when it works.
But onboarding can be hard without Bitovi. Its still the best existing most complet
framework in the JS World

### Pros of Stealify
- Plays nice with every Framework 
  - can run in any framework 
  - can run any framework inside it
  - even partial updates are possible with the smooth migration path
  - you learn more about the Framework that your already using as you switch to Stealify
