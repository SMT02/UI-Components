// Sean Tiner 2025

// Nav hamburger --------------------------------------------------------------------------
const hamburger = document.querySelector(".hamburgerButton");
const navMenu = document.querySelector(".navMenu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("show");
});

// Greeting --------------------------------------------------------------------------
const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "Good Day!";
} else {
    greeting = "Good Evening";
}

document.getElementById("greetingMessage").innerHTML = greeting;

// Incrementor --------------------------------------------------------------------------
let count = 0;
function incrementFunction() {
    count += 1;
    document.getElementsByClassName("incrementor")[0].innerHTML = "Count: " + count;
}


// Dropdowns --------------------------------------------------------------------------

// on click dropdown menu
function dropdownMenuFunction() {
    document.querySelector(".dropdownContent").classList.toggle("show");
}

// animated on click dropdown menu
function animatedDropdownMenuFunction() {
    document.querySelector(".animatedDropdownContent").classList.toggle("show");
}


// Modal --------------------------------------------------------------------------

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const modalButton = document.getElementById("modalButton");
const closeModal = document.getElementById("closeModal");
 
modalButton.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
    modalContent.classList.toggle("close");
    setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove("close");
    }, 200); // match animation-duration
    
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modalContent.classList.add("close");
        setTimeout(() => {
            modal.style.display = "none";
            modalContent.classList.remove("close");
        }, 200); // match animation-duration
    }
}

// Image Modal --------------------------------------------------------------------------

const ImageModal = document.getElementById("ImageModal");
const modalImage = document.getElementById("modalImage");
const modalContentImage = document.getElementById("modalContentImage");
const closeImageModal = document.getElementById("closeImageModal");

modalImage.onclick = function() {
  ImageModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeImageModal.onclick = function() {
  ImageModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target === ImageModal) {
        ImageModal.style.display = "none";
    }
});    


// Image carousel --------------------------------------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carouselSlide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// Lightbox --------------------------------------------------------------------------
const lightboxImage = document.getElementById("lightboxImage");
const lightbox = document.getElementById("lightbox");
const closeLightbox = document.getElementById("closeLightbox");

lightboxImage.onclick = function() {
  lightbox.style.display = "block";
}

closeLightbox.onclick = function() {
  lightbox.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

let lightboxSlideIndex = 1;
showLightboxSlides(lightboxSlideIndex);

function plusSlidesLightbox(n) {
  showLightboxSlides(lightboxSlideIndex += n);
}

function currentSlideLightbox(n) {
  showLightboxSlides(lightboxSlideIndex = n);
}

function showLightboxSlides(n) {
  let i;
  let slides = document.getElementsByClassName("lightboxSlide");
  let dots = document.getElementsByClassName("lightboxDot");
  if (n > slides.length) {lightboxSlideIndex = 1}    
  if (n < 1) {lightboxSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[lightboxSlideIndex-1].style.display = "block";  
  dots[lightboxSlideIndex-1].className += " active";
}

// Most common element in an array --------------------------------------------------------------------------
function mostFrequent(arr) {
    let m = new Map();
    let maxCount = 0;
    let res = null;

    for (let num of arr) {
        let count = (m.get(num) || 0) + 1;
        m.set(num, count);

        if (count > maxCount) {
            maxCount = count;
            res = num;
        }
    }

    return res;
}

let arr = [1, 3, 1, 3, 2, 1];
document.getElementById("arrayElements").innerHTML = "The most common element in " + arr + " is: " + mostFrequent(arr);


// Most common character in a string --------------------------------------------------------------------------
const commonChar = (str) => { 
  if (str.length === 0) {
    return 'String should not be empty!'
  }

  if (typeof str !== 'string') {
    return 'It must be a string.'
  }

  const occurrence_Map = new Map()

  for (const char of str) {
    occurrence_Map.set(char, occurrence_Map.get(char) + 1 || 1)
  }

  let max_char = { char: '', occur: -Infinity }

  for (const [char, occur] of occurrence_Map) {
    if (occur > max_char.occur) {
      max_char = { char,occur }
    }
  }

  return max_char.char
}

let testString = "Alabama";
document.getElementById("commonCharacter").innerHTML = "The most common character in " + testString + " is: " + commonChar(testString);


// To-do list --------------------------------------------------------------------------
// Create a "close" button and append it to each list item
function attachToDoHandlers(li) {
    // Remove handler
    const removeButton = li.querySelector(".removeItem");
    removeButton.onclick = function () {
        li.style.display = "none";
    };

    // Edit handler
    const editButton = li.querySelector(".editItem");
    editButton.onclick = function () {
        const currentText = li.firstChild.nodeValue.trim();

        // Create input
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.className = "editInput";

        // Create save button
        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.className = "saveEditButton";

        // Clear existing content
        li.innerHTML = '';
        li.appendChild(input);
        li.appendChild(saveBtn);

        saveBtn.onclick = function () {
            const newText = input.value.trim();
            if (!newText) {
                alert("To-do item cannot be empty.");
                return;
            }

            li.innerHTML = newText;

            // Re-add remove & edit buttons
            const removeSpan = document.createElement("SPAN");
            removeSpan.className = "removeItem";
            removeSpan.textContent = "\u00D7";
            li.appendChild(removeSpan);

            const editSpan = document.createElement("SPAN");
            editSpan.className = "editItem";
            editSpan.textContent = "Edit";
            li.appendChild(editSpan);

            // Re-attach handlers
            attachToDoHandlers(li);
        };
    };
}


// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('.toDoList');
list.addEventListener('click', function(ev) {
  if (ev.target.classList.contains('toDoListItem')) {
    ev.target.classList.toggle('checked');
  }
}, false);


// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement("li");
  li.className = "toDoListItem";
  const inputValue = document.querySelector(".toDoInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.querySelector(".toDoList").appendChild(li);
  }
  document.querySelector(".toDoInput").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "removeItem";
  span.appendChild(txt);
  li.appendChild(span);

  const editSpan = document.createElement("SPAN");
  const editTxt = document.createTextNode("Edit");
  editSpan.className = "editItem";
  editSpan.appendChild(editTxt);
  li.appendChild(editSpan);

  attachToDoHandlers(li);

}

// Basic addition calculator --------------------------------------------------------------------------
function calcSum(){
  let box1 = document.getElementById("box1").value;
  let box2 = document.getElementById("box2").value;
  let sum = Number(box1) + Number(box2);
  document.getElementById("+").value = sum;
}


// Calculator --------------------------------------------------------------------------
  let currentInput = '';
  let currentOperation = '';
  let previousInput = '';

  function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;
  }

  function appendOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
      calculate(); // Calculate the previous operation before appending a new one
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').value = `${previousInput} ${currentOperation}`;
  }

  function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        if (current === 0) {
          alert("Cannot divide by zero");
          return;
        }
        result = prev / current;
        break;
      default:
        return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    document.getElementById('display').value = currentInput;
  }

  function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
  }



// Overlay Nav --------------------------------------------------------------------------
const openOverlayNavButton = document.getElementById("openOverlayNavButton");
const closeOverlayNav = document.getElementById("closeOverlayNav");
const overlayNav = document.getElementById("overlayNav");

openOverlayNavButton.addEventListener("click", () => {
  overlayNav.style.width = "100%";
});

closeOverlayNav.addEventListener("click", () => {
  overlayNav.style.width = "0%";
});



// Fibonacci --------------------------------------------------------------------------
const fibButton = document.getElementById("fibButton");

fibButton.addEventListener('click', fibonacci);

function fibonacci() {
  const number = document.getElementById("fibInput").value;
  let n1 = 0, n2 = 1, nextTerm;
  let result = '';

  for (let i = 1; i <= number; i++) {
      result += n1 + ' ';
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
  }
  document.getElementById("fibResult").innerHTML = "Fibonacci Sequence: " + result;
}
