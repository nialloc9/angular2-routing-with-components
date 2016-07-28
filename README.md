What are components?
These are the building blocks that we use to create large scale applications. Think of them like lego. When we buy lego it comes all messed up and it is up to us as developers to take these individual blocks and create some awesome stuff with them.

So what they made of?
Components include the html either directly with the template property or indirectly via an external html file and a templateUrl property. Inside the component we include the logic for how it works all bundled nicely together so if we want to use the component again we can simply import it in. Other things such as selectors which tell angular where to put the html and directives which add extra meta data to the component to do other things are also included. Don’t worry about knowing what these are yet. We will get onto them later. 

What is routing?
Routing is used to navigate in angular. It navigates us from component to component. For this we need a routing file which specifies which component to use. We import this route class and bootstrap it in the main file so it is available application wide.

So this project here, what’s in it?
This is just a very basic angular2 project where we have 4 components that have a html and a css file each. Let’s look at the app.component.js. This component uses a router directive because it is in charge of navigating the user around. If you look in the html file you will see router links for the other files. The other files are just regular components with sample data in them.
