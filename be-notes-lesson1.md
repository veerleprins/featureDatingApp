# :notebook: Notes Lesson 1

## Learning:
- Build web apps with node
- Store data in database
- Use packages from npm
- Render data server-side with templating
- 

Examples in the site

## Node:
JavaScript is a JIT-compiled programming language with first-class functions. <br>
Node is the v8 engine. JavaScript machine uit browser gehaald is NODE. <br>
Node.js is an open-source for executing JavaScript code server-side. (server-side scripting) <br>
Er is geen DOM model in NODE.js en in de terminal. 
DUS: document.getelementbyid() werkt dus NIET.

### Node principles:
- Callbacks
- Events (suger over callbacks heen)
- Modules
- Streams

events zien er netter uit in code.<br>
Modules is net zoals bij python import: je importeert een bestand extern. 

In node index: require('./sum.js')<br>
in node sum: module.exports = sum

## NPM:
Je kunt je modules downloaden DUS hergebruiken. <br>
Heeft een website: [Link naar NPM site]('www.npmjs.com)

npm install express (express, vroeger nodig tegenwoordig niet meer)<br>
express is een package.

## Packages: 
- npm init
- package.json <- zien welke packages zijn geïnstalleerd

- npm install .. <- global en local