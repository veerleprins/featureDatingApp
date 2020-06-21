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
  li.addEventListener('click', clicked, false);

  function clicked(e) {
    inputField.classList.remove('falseInput');
    inputField.classList.add('correctInput');
    button.classList.remove('disabledButton');
    inputField.value = e.target.innerHTML;
    ul.classList.remove('focussed');
    message.innerHTML = '';
  }
}

function removeElement(element) {
  // Removing the parentNode of the given element:
  element.parentNode.removeChild(element);
}


function addElement(parent, element, Obj, place) {
  // Function for creating a new element and adding attributes:
  createdElement = document.createElement(element);
  const entries = Object.entries(Obj);
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
  options.forEach(option => {
    let li = document.createElement('li');
    var text = document.createTextNode(option);
    li.appendChild(text);
    parent.appendChild(li);
  })
}

function focusInput() {
  ul.classList.toggle('focussed');
}

function checkInput(e) {
  //https://www.youtube.com/watch?v=In0nB0ABaUk
  //https://www.udemy.com/course/modern-javascript/learn/lecture/9862416#overview
  inputField.classList.remove('correctInput');
  inputField.classList.remove('falseInput');
  let userInput = e.target.value.toLowerCase();
  message.innerHTML = '';

  listItems.forEach(li => {
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
  if (button.classList.contains('disabledButton')) {
    message.innerHTML = 'Please type a movie from the list.';
  }
}