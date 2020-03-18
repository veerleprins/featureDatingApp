// Import packages:
const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;
const slug = require('slug');
const dotenv = require('dotenv').config();
const app = express();
const PORT = 3000;

//Setting the global variables: 
let idThisUser = 1;
let db = null;

//Connecting to the database:
let url = process.env.DB_HOST + ':' + process.env.DB_PORT;
mongo.connect(url, { useUnifiedTopology: true }, function (err, client){
  if (err) {
    throw err
  }
  db = client.db(process.env.DB_NAME);
  console.log('Database is connected...');
});

//Setting and using the middleware:
app.set('view engine', 'ejs');
app.set('views', 'view-ejs');
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));

//Getting all the paths and calling the functions:
app.get('/', home);
app.get('/filters', filters);
app.post('/', postFilters);
app.get('/*', error);

//Listen to the server:
app.listen(PORT, connected);

function searchIndex(s_person) {
  //Searches for the ID of the user that matches 
  //the ID of the logged in person:
  if (s_person.id === idThisUser){
    return s_person;
  }
}

function removeOwn(r_users) {
  //Removes the own user from the array of persons:
  let index = r_users.findIndex(searchIndex);
  let allUsers = r_users;
  allUsers.splice(index, 1);
  return allUsers
}

function home(req, res) {
  //Displays the index page with all the users from the database
  //except the logged in user:
  db.collection('datingUsers').find().toArray(done)
  function done(err, users) {
    let databaseUsers = removeOwn(users)
      if (err) {
          next(err);
      } else {
          res.render('index.ejs', { users: databaseUsers });
      }
  }
};



function postFilters (req, res){
  //Updates the database with the information from the form and then searches
  // for users that match the logged-in user's preferences. Finally, the index
  // page is shown with the filtered users:
  let gender = slug(req.body.gender);
  let movie = slug(req.body.movies);
  db.collection('datingUsers').updateOne({id: 1}, { $set: { prefGender: gender, prefMovies: movie}});
  setTimeout(wait, 800);
  
  function wait () {
    db.collection('datingUsers').find().toArray(done);
    let filteredUsers = [];
    function done (err, users) {
      let preferenceThisUser = users[0].prefGender
      let preferenceThisMovie = users[0].prefMovies
      let gebruikers = db.collection('datingUsers').find({gender: preferenceThisUser}, test);
      function test(err, user) {
        if (err) {next(err)}
        else {return user;}
      }
      console.log(gebruikers);
      if (err) {
        next(err);
      }else {
        let databaseUsers = removeOwn(users);
        users.forEach(function(person){
          person.movies.forEach(function (movie) {
            if (movie === preferenceThisMovie) {
              filteredUsers.push(person);
            }
          })
        })
        // console.log(filteredUsers);
        if (filteredUsers === []){
          // console.log(users)
          filteredUsers = databaseUsers;
        }
        res.render('index.ejs', {users : filteredUsers});
        filteredUsers = [];
      }
    }
  }
};
  // db.collection('datingUsers').find().toArray(done);

  // let filteredUsers = [];
  // function done (err, users) {
  //   let preferenceThisUser = users[0].prefGender
  //   let preferenceThisMovie = users[0].prefMovies
  //   console.log(users[0].prefGender);
  //   console.log(preferenceThisMovie);
  //   if (err) {
  //     next(err);
  //   }else {
  //     let databaseUsers = removeOwn(users);
  //     users.forEach(function(person){
  //       if (person.gender === preferenceThisUser) {
  //         filteredUsers.push(person);
  //       }
  //       // person.movies.forEach(function (movie) {
  //       //   if (person.gender === preferenceThisUser) {
  //       //     filteredUsers.push(person);
  //       //     // if (preferenceThisMovie === "" || movie === preferenceThisMovie){
  //       //     //   filteredUsers.push(person);
  //       //     // }
  //       //   }
  //       // })
  //     })
  //     // databaseUsers.find({ gender: users }|| {prefGender: "Anything"}).toArray(matchOrNot);
  //     res.render('index.ejs', {users : filteredUsers});
  //     filteredUsers = [];
  //   }
  // }

  // users.forEach(function(person) {
    //       if (person.id != 01) {
    //         if (person.gender === filters[0] || filters[0] === 'Anything') {
    //           filteredUsers.filtered.push(person);
    //         };
    //       }
    //     });

  // function test(err, user) {
  //   if (err) {
  //     next(err)
  //   } else {
  //     // db.collection('datingUsers').updateOne({id: 1}, { $set: { prefGender: req.body.gender, prefMovies: req.body.movies}})
  //     console.log('test');
  //     res.render('index.ejs', { users: user})


  //   }
  // }
      // }
        //  if (err) {
        //     next(err);
        // } else {
        //   res.render('index.ejs', {users: usersData});

        // }
  // preference = req.body.gender;
  // db.collection('users').updateOne({ _id: ('5e6f9eadfab0ce3cb81154f0')}, { $set: { prefGender: req.body.gender }})





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
  //Displays the filter page:
  res.render('filters');
};

function error(req, res) {
  //Displays the error page:
 res.render('404');
};

function connected() {
  //Server listening on given port:
  console.log(`Server is listening on port ${PORT}`);
}