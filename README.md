# Filter feature dating application

This schoolproject consists of creating a feature for an online dating application. Within the project, it was decided to create a **filter** feature. Later in the project there is a collaboration with other students to add other features to a fully functioning dating app. To read the entire process of creating this filter feature and creating the functioning dating application, you can go to my [wiki](https://github.com/veerleprins/featureDatingApp/wiki).

## Job story
*When I sit on the couch at home with my phone in my hands, I want to be able to filter on the movie preferences of my possible matches, so that I don't have a fight in the future about which movie genre we're going to watch (for example on Netflix).*

<img width="250" alt="Screenshot 2020-03-17 at 14 41 11" src="https://user-images.githubusercontent.com/35265583/76861775-642adf80-685d-11ea-9f19-bea6d7879213.png"> <img width="250" alt="Screenshot 2020-03-17 at 14 37 34" src="https://user-images.githubusercontent.com/35265583/76861441-e8c92e00-685c-11ea-834f-d5665d530c44.png">

Online site to check how my feature looks like:
[The link to my heroku site](https://featuredatingapp.herokuapp.com/)

## Table of contents
1. Connect Git and Github
2. Install Node
3. Clone folder
4. Install all the packages
5. Start and run the code!
6. Database connection

## Getting started :exclamation:
To start, you must have a *code editor* installed on your computer. For this project (and most of my projects) I used [Visual Studio Code](https://code.visualstudio.com/download). But you can also use [Atom](https://atom.io/), for example.

### 1. Connect Git and GitHub :octocat:
Then you need to Connect Git and GitHub in the terminal. This can be done by opening the terminal and typing the next line of code and pressing enter:

```git config --global user.name "type here your user name"```

```git config --global user.email "type here your user email"```

This information is the same as you used to sign up for GitHub.

### 2. Install Node :computer:
Then you need to install nvm to install Node. nvm can be installed by typing the following line of code in terminal and pressing enter:

```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh ```

If nvm has been successfully installed, you can check the version by typing the following line of code in the terminal and pressing enter:

```nvm --version```

Then you need to close and re-open the terminal and type the following line of code:

```nvm install stable ```

Now, both Node and npm (node packaging manager) are installed. You can check it by typing the next line of code in the terminal to get the versions of node and npm:

```node -v```
```npm -v```

### 3. Clone folder :file_folder:
The last step before getting started is to download this project and open it with your code editor. To do this, open your terminal with the correct path in which you want this repository. **Example**:

``` cd/Desktop/Repos```

Then type the folling line of code into your terminal:

``` git clone https://github.com/veerleprins/featureDatingApp.git```

With this line of code, you've succesfully downloaded the repository to your desired location.


### 4. Install all the packages :bookmark_tabs:
Then type the code below into your terminal:

``` npm install ```

With this line of code, you download all the packages (like express) you need for this feature.

### 5. Start and run the code! :white_check_mark:
Go to the repository in the terminal and add the following line of code below:

``` npm run dev```

Now you can go to http://localhost:3000/ in your browser and view my filter feature! :raised_hands:

### 6. Database connection :cloud:
If you can't connect with my database cause a *MongoObjectError*, feel free to contact me to ask for the DB host, port and name to make the connection for the database. 

## Data from the database :arrow_down:
The structure of the database is shown in the images below. The first image shows the name of the database and the name of the collection. With the filter feature I'm using the 'datingUsers' database.


<img width="1023" alt="Screenshot 2020-03-17 at 23 11 28" src="https://user-images.githubusercontent.com/35265583/76906748-f0142a00-68a4-11ea-96a3-1e929f7b69b8.png">


<img width="1008" alt="Screenshot 2020-03-17 at 23 12 29" src="https://user-images.githubusercontent.com/35265583/76906896-408b8780-68a5-11ea-8121-dd27bf8423a7.png">


## Sources :books:
- GitHub. (2014, February 15). Mastering Markdown · GitHub Guides. Retrieved from https://guides.github.com/features/mastering-markdown/
- Array.prototype.push(). (2020, January, 13). Retrieved from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
- Faure, L. (2017, July 2). Work with JavaScript arrays like a boss. Retrieved from https://hackernoon.com/work-with-javascript-arrays-like-a-boss-97207a042e42
- MDN. (2019, October 10). Array.prototype.find(). Retrieved from https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- MongoDB . (n.d.). db.collection.updateOne() — MongoDB Manual. Retrieved March 17, 2020, from https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/
- MongoDB. (n.d.). db.collection.findOne() — MongoDB Manual. Retrieved March 17, 2020, from https://docs.mongodb.com/manual/reference/method/db.collection.findOne/
- Tutorials Teacher. (n.d.). Access MongoDB in Node.js. Retrieved March 14, 2020, from https://www.tutorialsteacher.com/nodejs/access-mongodb-in-nodejs
- MongoDB. (n.d.-a). db.collection.find() — MongoDB Manual. Retrieved March 16, 2020, from https://docs.mongodb.com/manual/reference/method/db.collection.find/
- NPM. (n.d.). npm | build amazing things. Retrieved February 15, 2020, from https://www.npmjs.com/
- tspycher . (2020, March 15). Re: getting mongo error during database initialisation · Issue #128 · strapi/strapi-docker [Comment]. Retrieved from https://github.com/strapi/strapi-docker/issues/128
- The Net Ninja. (2016, June 22). Node JS Tutorial for Beginners #25 - Template Engines [Video file]. Retrieved from https://www.youtube.com/watch?v=oZGmHNZv7Sc&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=25
- StackOverflow. (2015, August 5). javascript filter array multiple conditions. Retrieved March 31, 2020, from https://stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions/44807918
- Eagles, L. (2019, October 12). Causes of Heroku H10-App Crashed Error And How To Solve Them. Retrieved April 5, 2020, from https://dev.to/lawrence_eagles/causes-of-heroku-h10-app-crashed-error-and-how-to-solve-them-3jnl
- Heroku. (2020, March 31). Heroku Error Codes | Heroku Dev Center. Retrieved April 5, 2020, from https://devcenter.heroku.com/articles/error-codes
- The Coding Train. (2019, June 28). 3.5 Web Application Deployment (Glitch and Heroku) - Working with Data and APIs in JavaScript [Video file]. Retrieved from https://www.youtube.com/watch?v=Rz886HkV1j4&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=20
- Esterling Accime. (2019, November 18). Connect MongoDB Atlas to your Heroku application [Video file]. Retrieved from https://www.youtube.com/watch?v=imR9LlbG3pU
- Tolulope, K. (2018, April 24). Understanding Hoisting and Scoping in Javascript - Backticks & Tildes. Retrieved April 10, 2020, from https://medium.com/backticks-tildes/understanding-hoisting-and-scoping-in-javascript-39ea7b41e31
- Engel, D. (2019, June 11). Scope vs. Context in JavaScript - Better Programming. Retrieved April 10, 2020, from https://medium.com/better-programming/scope-vs-context-in-javascript-b31818f58558
- Tsai, M. (2018, November 27). JavaScript: Introduction to Scope (function scope, block scope). Retrieved May 16, 2020, from https://dev.to/sandy8111112004/javascript-introduction-to-scope-function-scope-block-scope-d11
- Witkowski, M. (2017, 6 oktober). The many faces of this. Geraadpleegd op 5 mei 2020, van https://blog.pragmatists.com/the-many-faces-of-this-in-javascript-5f8be40df52e
- Patro, N. C. (2018, 1 februari). JavaScript — all about “this” keyword. Geraadpleegd op 20 mei 2020, van https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c
- Gisder-Dubé, L. (2018, 21 december). How to understand the keyword this and context in JavaScript. Geraadpleegd op 7 juni 2020, van https://www.freecodecamp.org/news/how-to-understand-the-keyword-this-and-context-in-javascript-cd624c6b74b8/
- P. (2018, 30 januari). Understanding the “this” Keyword in JavaScript - Better Programming. Geraadpleegd op 7 juni 2020, van https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8#:%7E:text=%E2%80%9Cthis%E2%80%9D%20Refers%20to%20an%20Invoker,contains%20the%20method%20being%20invoked
- Sandhu, S. (2018, 27 augustus). What is Hoisting in JavaScript? - JavaScript In Plain English. Geraadpleegd op 5 juni 2020, van https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1
- Morelli, B. (2017, 9 oktober). JavaScript: What is Hoisting? Geraadpleegd op 9 juni 2020, van https://codeburst.io/javascript-what-is-hoisting-dfa84512dd28
- Arora, S. (2018, 10 september). Hoisting in Modern JavaScript — let, const, and var. Geraadpleegd op 9 juni 2020, van https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda
- Deb, S. (2019, 27 november). What are Closures in JavaScript & How Do They Work? Geraadpleegd op 10 juni 2020, van https://www.edureka.co/blog/closures-in-javascript/
- Arora, S. (2018b, 24 september). Understanding Closures in JavaScript. Geraadpleegd op 10 juni 2020, van https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda
- Web Dev Simplified. (2019). Learn Closures In 7 Minutes [Videobestand]. YouTube. Geraadpleegd van https://www.youtube.com/watch?v=3a0I8ICR1Vg
- Gustafson, A. (2008, 7 oktober). Understanding Progressive Enhancement. Geraadpleegd op 14 juni 2020, van https://alistapart.com/article/understandingprogressiveenhancement/
- Matuzovic, M. (2020, 28 april). The beauty of Progressive Enhancement. Geraadpleegd op 14 juni 2020, van https://www.matuzo.at/blog/beauty-of-progressive-enhancement/
- w3schools. (z.d.). HTML DOM Event Object. Geraadpleegd 20 juni 2020, van https://www.w3schools.com/jsref/dom_obj_event.asp
- Mead, A. (z.d.). Attention Required! | Cloudflare. Udemy. Geraadpleegd 1 juni 2020, van https://www.udemy.com/join/login-popup/?next=/course/modern-javascript/learn/lecture/9862416#overview
- Web Dev Simplified. (2019, 18 juni). JavaScript Form Validation [Video]. YouTube. https://www.youtube.com/watch?v=In0nB0ABaUk
- StackOverflow. (2011, 5 mei). Check if an element contains a class in JavaScript? https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript
- StackOverflow. (2013, 29 november). How to trigger a click event on disabled elements. https://stackoverflow.com/questions/20294867/how-to-trigger-a-click-event-on-disabled-elements?rq=1
- The Net Ninja. (2017, 7 september). JavaScript DOM Tutorial #16 - Custom Search Filter [Video]. YouTube. https://www.youtube.com/watch?v=3NG8zy0ywIk
- Jeep, J. (2019, 16 december). Accessing an Object’s Keys, Values, and Entries in JavaScript. Medium. https://medium.com/better-programming/accessing-an-objects-keys-values-and-entries-in-javascript-e7bb5d33d11c
- Strahl, R. (2017, 4 maart). Getting JavaScript Properties for Object Maps by Index or Name. Rick Strahl’s Web Log. https://weblog.west-wind.com/posts/2017/mar/04/getting-javascript-properties-for-object-maps-by-index-or-name


## Licence :lock:
MIT © Veerle Prins