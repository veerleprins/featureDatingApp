// Global initializations:
let selectField,
  movieGenres,
  optionList,
  section,
  buttonDiv,
  message,
  button,
  inputAttributes,
  ul,
  listItems;

// Global declarations:
selectField = document.querySelector('select');
button = document.getElementById('Submit');
buttonDiv = Array.from(document.getElementsByClassName('buttonDiv'));
section = document.querySelector('section');
movieGenres = document.getElementsByClassName('movieGenres');

optionList = [
  'action', 'adventure', 'animation', 'comedy', 'crime',
  'disney', 'drama', 'fantasy', 'historical', 'horror',
  'romance', 'science', 'thriller', 'western'
];
inputAttributes = {
  'name': 'movies',
  'placeholder': 'Movie genre',
  'autocomplete': 'off',
  'id': 'movieSelector'
};

// Calling the functions:
removeElement(selectField);
addElement(movieGenres[0], 'input', inputAttributes, 'normal');
addElement(section, 'p', {
  'class': 'errorMessage'
}, 'before');
addElement(movieGenres[0], 'ul', {
  'class': 'optionList',
  'id': 'list'
}, 'normal');


//Global declaration after removing and adding elements:
inputField = document.querySelector('#movieSelector');
message = document.querySelector('.errorMessage');
ul = document.getElementById('list');
createLi(optionList, ul);
listItems = Array.from(document.getElementsByTagName('li'));

//Adding event listeners:
listItems.forEach(items);
inputField.addEventListener('focusin', focusInput);
inputField.addEventListener('input', checkInput);
buttonDiv[0].addEventListener('click', clicked);

function items(li) {
  //Adding a click event on each list item and when clicked,
  //the submit button can be clicked, classes are added to 
  //the input type and the dropdown ul is not showing.
  li.addEventListener('click', clicked, false);

  function clicked(e) {
    inputField.classList.remove('falseInput');
    button.classList.remove('disabledButton');
    ul.classList.remove('focussed');
    inputField.classList.add('correctInput');
    inputField.value = e.target.innerHTML;
    message.innerHTML = '';
  }
}

function removeElement(element) {
  // Removing the parentNode of the given element:
  element.parentNode.removeChild(element);
}


function addElement(parent, element, Obj, place) {
  // Function for creating a new element and adding attributes:
  // Source: https://weblog.west-wind.com/posts/2017/mar/04/getting-javascript-properties-for-object-maps-by-index-or-name
  let createdElement = document.createElement(element);
  let entries = Object.entries(Obj);
  for (const [prop, val] of entries) {
    if (entries.length !== 0) {
      createdElement.setAttribute(prop, val);
    }
  }
  if (place === 'before') {
    parent.insertBefore(createdElement, parent.firstChild);
  } else if (place === 'normal') {
    parent.appendChild(createdElement);
  }
}

function createLi(options, parent) {
  //Creates a li-item for each option in the options variable:
  options.forEach(function (option) {
    let li = document.createElement('li');
    var text = document.createTextNode(option);
    li.appendChild(text);
    parent.appendChild(li);
  })
}

function focusInput() {
  //Toggles between showing and not showing the ul:
  ul.classList.toggle('focussed');
}

function checkInput(e) {
  //Checks the input and displays the right li-items and styling:
  //Source: https://www.youtube.com/watch?v=In0nB0ABaUk
  //Source: https://www.udemy.com/course/modern-javascript/learn/lecture/9862416#overview
  inputField.classList.remove('correctInput');
  inputField.classList.remove('falseInput');
  let userInput = e.target.value.toLowerCase();
  message.innerHTML = '';

  listItems.forEach(function (li) {
    let text = li.innerHTML.toLowerCase();
    let found = text.indexOf(userInput);
    if (userInput === '') {
      li.style.display = 'block';
    } else if (found === -1) {
      li.style.display = 'none';
    } else {
      li.style.display = 'block';
    }
  })


  if (optionList.includes(userInput)) {
    inputField.classList.add('correctInput');
    button.classList.remove('disabledButton');
  } else if (userInput === '') {
    button.classList.remove('disabledButton');
    inputField.classList.remove('correctInput');
    inputField.classList.remove('falseInput');
  } else {
    inputField.classList.add('falseInput');
    button.classList.add('disabledButton');
  }
}

function clicked() {
  // Checks if button is disabled and then adds a innerHTML:
  if (button.classList.contains('disabledButton')) {
    message.innerHTML = 'Please type a movie from the list.';
  }
}