// First Example: Sum numbers

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum(e) {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;
  //   simple loop
  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber += i;
  }

  const outputResultElement = document.getElementById("calculated-sum");
  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);

// Second Example : highlight links

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("a");
  //   let item <<of>> array : loop through all items inside an array
  for (const element of anchorElements) {
    element.classList.add("highlight");
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

// Third Example : Display user data

const dummyUserData = {
  firstName: "AmirHosein",
  lastName: "Tabasi",
  age: 29,
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  // clear all element inside output result
  outputDataElement.innerHTML = "";

  // <<in>> array : loop through all properties of an object as key value.
  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    newUserDataListItemElement.textContent = outputText;
    outputDataElement.append(newUserDataListItemElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

// Fourth Example :  Statistics / Roll the Dice

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6);
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement =
    document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");

  // putting + before string, convert it to number like: +targetNumberInputElement.value
  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    numberOfRolls++;
    const newRollListItemElement = document.createElement("li");
    const outputText = "Roll" + numberOfRolls + ": " + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);
