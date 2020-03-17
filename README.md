# Filter feature dating application

This schoolproject consists of creating a feature for an online dating application. Within the project, it was decided to create a **filter** feature. Later in the project there is a collaboration with other students to add other features to a fully functioning dating app. To read the entire process of creating this filter feature and creating the functioning dating application, you can go to my [wiki](https://github.com/veerleprins/featureDatingApp/wiki).

## Job story
*When I sit on the couch at home with my phone in my hands, I want to be able to filter on the movie preferences of my possible matches, so that I don't have a fight in the future about which movie genre we're going to watch (for example on Netflix).*


<img width="250" alt="Screenshot 2020-03-17 at 14 41 11" src="https://user-images.githubusercontent.com/35265583/76861775-642adf80-685d-11ea-9f19-bea6d7879213.png"> <img width="250" alt="Screenshot 2020-03-17 at 14 37 34" src="https://user-images.githubusercontent.com/35265583/76861441-e8c92e00-685c-11ea-834f-d5665d530c44.png">

## Needed for this feature:
- Code editor
- knowledge of JavaScript
- knowledge of HTML & CSS
- little bit of knowledge of command line

## Table of contents
- Connect Git and Github
- Install Node
- Clone folder
- Install all the packages

## Getting started
To start, you must have a *code editor* installed on your computer. For this project (and most of my projects) I used [Visual Studio Code](https://code.visualstudio.com/download). But you can also use [Atom](https://atom.io/), for example.

### Connect Git and GitHub
Then you need to Connect Git and GitHub in the terminal. This can be done by opening the terminal and typing the next line of code and pressing enter:

```git config --global user.name "type here your user name"```

```git config --global user.email "type here your user email"```

This information is the same as you used to sign up for GitHub.

### Install Node
Then you need to install nvm to install Node. nvm can be installed by typing the following line of code in terminal and pressing enter:

```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh ```

If nvm has been successfully installed, you can check the version by typing the following line of code in the terminal and pressing enter:

```nvm --version```

Then you need to close and re-open the terminal and type the following line of code:

```nvm install stable ```

Now, both Node and npm (node packaging manager) are installed. You can check it by typing the next line of code in the terminal to get the versions of node and npm:

```node -v```
```npm -v```

### Clone folder
The last step before getting started is to download this project and open it with your code editor. To do this, open your terminal with the correct path in which you want this repository. **Example**:

``` cd/Desktop/Repos```

Then type the folling line of code into your terminal:

``` git clone https://github.com/veerleprins/featureDatingApp.git```

With this line of code, you've succesfully downloaded the repository to your desired location.


### Install all the packages
Then type the code below into your terminal:

``` npm install ```

With this line of code, you download all the packages (like express) you need for this feature.

Now you can go to http://localhost:3000/ in your browser and view my filter feature! :raised_hands:

### Screenshot about the database
The structure of the database is shown in the code below:


``` JSON
[
  {
    "id":1,
    "name":"",
    "gender":"Woman",
    "age":22,
    "location":"",
    "movies":[],
    "prefGender": "",
    "prefMovies": "",
  },{
    "id":2,
    "picture":"JackHughes.png",
    "name":"Jack Hughes",
    "gender":"Man",
    "age":23,
    "location":"York, England",
    "movies":["actionMovies","comedyMovies"]
  },{
    "id":3,
    "picture":"KaylaJansen.png",
    "name":"Kayla Jansen",
    "gender":"Woman",
    "age":"22",
    "location":"York, England",
    "movies":["comedyMovies"]
  },{
    "id":4,
    "picture":"JenniferMiller.png",
    "name":"Jennifer Miller",
    "gender":"Woman",
    "age":"25",
    "location":"York, England",
    "movies":["actionMovies"]
  },{
    "id":5,"picture":"NoahAdams.png",
    "name":"Noah Adams",
    "gender":"Man",
    "age":"25",
    "location":"York, England",
    "movies":["comedyMovies"]
  },{
    "id":6,
    "picture":"LiamSmith.png",
    "name":"Liam Smith",
    "gender":"Man",
    "age":"22",
    "location":"York, England",
    "movies":["adventureMovies","actionMovies"]
  },{
    "id":7,
    "picture":"JamesBrown.png",
    "name":"James Brown",
    "gender":"Man",
    "age":"23",
    "location":"York, England",
    "movies":["actionMovies"]
}]
```