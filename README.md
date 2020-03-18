# Filter feature dating application

This schoolproject consists of creating a feature for an online dating application. Within the project, it was decided to create a **filter** feature. Later in the project there is a collaboration with other students to add other features to a fully functioning dating app. To read the entire process of creating this filter feature and creating the functioning dating application, you can go to my [wiki](https://github.com/veerleprins/featureDatingApp/wiki).

## Job story
*When I sit on the couch at home with my phone in my hands, I want to be able to filter on the movie preferences of my possible matches, so that I don't have a fight in the future about which movie genre we're going to watch (for example on Netflix).*

<img width="250" alt="Screenshot 2020-03-17 at 14 41 11" src="https://user-images.githubusercontent.com/35265583/76861775-642adf80-685d-11ea-9f19-bea6d7879213.png"> <img width="250" alt="Screenshot 2020-03-17 at 14 37 34" src="https://user-images.githubusercontent.com/35265583/76861441-e8c92e00-685c-11ea-834f-d5665d530c44.png">

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

## Licence :lock:
MIT © Veerle Prins