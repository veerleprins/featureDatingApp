// Import packages:
const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const slug = require('slug');
const dotenv = require('dotenv').config();
const app = express();
const PORT = 3000;
const urlencodedParser = bodyParser.urlencoded({extended: true});

let idThisUser = 1;
let allUsers;
let db = null;
let url = process.env.DB_HOST + ':' + process.env.DB_PORT;

mongo.MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client){
  if (err) {
    throw err
  }
  db = client.db(process.env.DB_NAME);
  console.log('Database is connected...');
});

let thisUser = {
  id: 01,
  name: 'Veerle Prins',
  gender: 'Woman',
  age: 22,
  location: 'Hoofddorp, Nederland',
  movies: ['actionMovies', 'comedyMovies'],
  pref: []
}

let usersData = [thisUser,
{
  id: 02,
  picture: 'JackHughes.png',
  name: 'Jack Hughes',
  gender: 'Man',
  age: 23,
  location: 'York, England',
  movies: ['actionMovies', 'comedyMovies']
},
{
  id: 03,
  picture: 'KaylaJansen.png',
  name: 'Kayla Jansen',
  gender: 'Woman',
  age: '22',
  location: 'York, England',
  movies: ['comedyMovies']
}, 
{
  id: 04,
  picture: 'JenniferMiller.png',
  name: 'Jennifer Miller',
  gender: 'Woman',
  age: '25',
  location: 'York, England',
  movies: ['actionMovies']
},
{
  id: 05,
  picture: 'NoahAdams.png',
  name: 'Noah Adams',
  gender: 'Man',
  age: '25',
  location: 'York, England',
  movies: ['comedyMovies']
},
{
  id: 06,
  picture: 'LiamSmith.png',
  name: 'Liam Smith',
  gender: 'Man',
  age: '22',
  location: 'York, England',
  movies: ['adventureMovies', 'actionMovies']
},
{
  id: 07,
  picture: 'JamesBrown.png',
  name: 'James Brown',
  gender: 'Man',
  age: '23',
  location: 'York, England',
  movies: ['actionMovies']
}
];

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));

//Setting ejs & telling to get view directory:
app.set('view engine', 'ejs');
app.set('views', 'view-ejs');

//Getting all the paths and calling the functions:
app.get('/', home);
app.get('/filters', filters);
app.get('/*', error);
app.post('/', postFilters);

//Listen to the port:
app.listen(PORT, connected);

function filters(req, res){
    db.collection('datingUsers').findOne({_id: ('5e70df1afab0ce3cb81154f8')}, test);

    function test(err, users) {
      if (err) {
        next(err)
      } else {
        // let data = slug(req.body);
        res.render('/', { preferences: req.body }) ;
      }
    }
}

function home(req, res) {
  db.collection('datingUsers').find().toArray(done)

  function done(err, users) {
    //Get the index of the loggedIn user: 
    let index = users.findIndex(p => p.id === idThisUser);
    //Remove own user from allUsers: 
    allUsers = users;
    allUsers.splice(index, 1);

      if (err) {
          next(err);
      } else {
          res.render('index.ejs', { users: allUsers });
      }
  }
};

function postFilters (req, res){
  db.collection('datingUsers').findOne({id: 1}, test);
  // db.collection('datingUsers').findOne({_id: "5e70df1afab0ce3cb81154f8"}, test);
  // db.collection('datingUsers').insertOne({ _id: ('5e70df1afab0ce3cb81154f8')}, { $set: { prefGender: req.body.gender }})

  function test(err, user) {
    if (err) {
      next(err)
    } else {
      db.collection('datingUsers').updateOne({id: 1}, { $set: { prefGender: req.body.gender }})
      console.log(user);

      // if ( == 'anything') {

      //   // if PrefGender === gender || prefGender === 'anything' => show  db.collection('datingUsers').find().toArray(done)
      //   // functie done


      // }
      res.render('index.ejs', { users: user})
    }
  }
        //  if (err) {
        //     next(err);
        // } else {
        //   res.render('index.ejs', {users: usersData});

        // }
  // preference = req.body.gender;
  // db.collection('users').updateOne({ _id: ('5e6f9eadfab0ce3cb81154f0')}, { $set: { prefGender: req.body.gender }})


  // function test (err, user) {
  //   if (err) {
  //     next(err)
  //   }else {
  //     db.collection('users').updateOne({prefGender: ''}, {$set: preference});
  //   }
  // } 
};


// let index = users.findIndex(p => p.id === yourSelf);
// completeCollection = users;
// completeCollection.splice(index, 1);
// // console.log(allUsers)

// let x = (completeCollection.length - 1);


// if (req.body.like) {
//     usersCollection.updateOne({ _id: (completeCollection[x]._id) }, { $set: { match: true } })

//     console.log(`you have a like with ${completeCollection[x].name}, and the ID is ${completeCollection[x]._id}`)




  // usersCollection.find().toArray(done)
  // function done(err, users) {
  //   //Get the OBJECT of the loggedIn user: 
  //   if (err) {
  //     next(err)
  //   } else {
  //     loggedIn = users.find(obj => obj.id === idThisUser);
  //     usersCollection.updateOne({prefGender :})
  //   }
    // res.render('index.ejs', { users: usersData });
    // // console.log('_________________________');
    // // console.log(loggedIn["pref"]);
    // // console.log('_________________________');
    // if (err) {
    //   next(err);
    // } else {
    //   // hier naar kijken: loggedIn["pref"].update()
    //   }


  
  // usersCollection.find().toArray(done);
  
//   function done(err, users) {
//     // Get the object of the user that's logged in:
//     let loggedIn = users.find(obj => obj.id === idThisUser);
//     let filters = loggedIn["pref"];
//     let filteredUsers = {filtered: []};
//     if (err) {
//         next(err);
//     } else {
//       if (filters.length === 0) {
//         // Push to database
//         loggedIn.insert({preferences: [req.body.gender, req.body.movies]});
//         console.log(loggedIn);
//       } else if (filters.length === 2) {
//         // Update to database:
//         filters.update(req.body.gender);
//         filters.update(req.body.movies);
//       }
//     }
//     users.forEach(function(person) {
//       if (person.id != 01) {
//         if (person.gender === filters[0] || filters[0] === 'Anything') {
//           filteredUsers.filtered.push(person);
//         };
//       }
//     });
//     res.render('index', {
//       users: filteredUsers.filtered
//     });
//   };
// };
  // // let f = usersData[0]["pref"];
  // // console.log(f);
  // let filters = thisUser["pref"];
  // if (filters.length === 0) {
  //   // Push to database:
  //   filters.push(req.body.gender);
  //   filters.push(req.body.movies);
  // } else if (filters.length === 2) {
  //   // Update to database:
  //   filters[0] = req.body.gender;
  //   filters[1] = req.body.movies;
  // }

  // let filteredUsers = {filtered: []};

  // //Looping through users:
  // usersData.forEach(function(person) {
  //   if (person.id != 01) {
  //     if (person.gender === filters[0] || filters[0] === 'Anything') {
  //       filteredUsers.filtered.push(person);
  //     };
  //   }
  //   // if (person.gender === filters[0] || filters[0] === 'Anything') {
  //   //   filteredUsers.filtered.push(person);
  //   // };
  // });
  // res.render('index', {
  //   users: filteredUsers.filtered
  // });
// }; 

function filters(req, res) {
  res.render('filters');
};

function error(req, res) {
 res.render('404');
};

function connected() {
  //Server listening on given port:
  console.log(`Server is listening on port ${PORT}`);
}