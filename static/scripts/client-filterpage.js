// Global initializations:
let selectField, movieGenres, optionList, section;
let dataListInput, message;

// Global declarations:
selectField = document.querySelector('select');
section = document.querySelector('section');
movieGenres = document.getElementsByClassName('movieGenres');
optionList = ['actionMovies', 'adventureMovies', 'comedyMovies', 'horrorMovies'];

// Calling the functions:
removeElement(selectField);
addElement(movieGenres[0], 'datalist', optionList);
create('p', 'errorMessage', section);

//New global declaration:
dataListInput = document.querySelector('#movieSelector');
message = document.querySelector('.errorMessage');
console.log(message);

//Add event listeners:
dataListInput.addEventListener('change', checkInput);

function removeElement (element) {
  // Removing the parentNode of the given element:
  element.parentNode.removeChild(element);
}


function addElement(parent, element, options) {
  // Creating the datalist
  let i, len, dl, label, labeltext, input;
  dl = document.createElement(element);
  i = 0;
  len = options.length;
  label = document.createElement('label');
  label.setAttribute('for','movieSelector');
  labeltext = document.createTextNode('Choose your movie preference from the list: ');
  label.appendChild(labeltext);

  input = document.createElement('input');
  input.setAttribute('list', 'movieSelector');
  input.setAttribute('name', 'movies');
  input.setAttribute('placeholder', 'Type your movie');
  input.id = 'movieSelector';

  dl.id = 'dataList';
  dl.name = 'movies';
  options.forEach(option => {
    let htmlOption = document.createElement('option');
    htmlOption.value = option;
    dl.appendChild(htmlOption);
  });
  parent.appendChild(label);
  parent.appendChild(dl);
  parent.appendChild(input);
}

function create (el, className, place) {
  createdEl = document.createElement(el);
  createdEl.classList.add('errorMessage');
  place.insertBefore(createdEl, place.firstChild);
}

function checkInput (e) {
  //https://www.youtube.com/watch?v=In0nB0ABaUk
  //https://www.udemy.com/course/modern-javascript/learn/lecture/9862416#overview
  if (optionList.includes(e.target.value)) {
    console.log("YES");
    dataListInput.classList.add('correctInput');
    message.innerHTML = "This input is correct";
  } else {
    console.log("fuckkkk");
  }
}







// - Geen display block/none gebruiken - check
// - Name element van input in select button wijzigen, of op non-actief zetten voor je backend
// - Op een nette manier elementen via JavaScript inladen (appendChild etc etc) - check
