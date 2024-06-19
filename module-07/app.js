// let h1Element = document.body.firstElementChild;
// h1Element = document.body.children[0];

// console.dir(h1Element);

// console.dir(h1Element.parentElement);

// console.dir(h1Element.nextElementSibling);

// h1Element = document.getElementById("first-title");

// console.log(h1Element);

// let highlightedParagraph = document.querySelector(".highlighted-paragraph");

// console.dir(highlightedParagraph);

// highlightedParagraph.textContent = "this is javascript";

// INSERT ELEMENT
let newAnchorElement = document.createElement("a");
newAnchorElement.textContent = "Google";
newAnchorElement.href = "https://www.google.com";
let firstParagraph = document.querySelector("p"); // returns fist element of type
firstParagraph.append(newAnchorElement);

// REMOVE ELEMENT
let firstH1Element = document.querySelector("h1");
// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); // for older browsers

// MOVE ELEMENT
// because first element is inside body, it removes it and append it to end of body
firstParagraph.parentElement.append(firstParagraph);

// innerHTML || html elements inside an element
firstParagraph.innerHTML = "Hi! This is <b>Important!</b>";

// EVENT LISTENER
let count = 0;
let clickableElement = document.getElementById("clickable");
let text = clickableElement.textContent;

function clickEvent(e) {
  count++;
  clickableElement.textContent = text + " " + count;
  console.log("CLICK");
}

clickableElement.addEventListener("click", clickEvent);

const textInput = document.getElementById("text-input");
const remindedElement = document.getElementById("reminded");
function handleChange(e) {
  const reminded = 60 - e.target.value.length;
  remindedElement.textContent = reminded;
  if (reminded <= 10) {
    remindedElement.style.color = "rgb(200, 100, 50)";
    remindedElement.style.fontWeight = "bold";
  } else {
    remindedElement.style.color = "black";
    remindedElement.style.fontWeight = "normal";
  }
  // instead of above code we can define our style in styles.css and add class name to element
  // remindedElement.className += " warning-style";
  // remindedElement.classList.add("warning-style");
  // remindedElement.classList.remove("warning-style");
}
textInput.addEventListener("input", handleChange);
