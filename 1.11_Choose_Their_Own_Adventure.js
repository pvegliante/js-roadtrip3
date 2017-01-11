// Video 1.10 accompanies this exercise

// Arbor Adventures has three different “adventures” to choose from, and
// customers are prompted for a number at a terminal. The number is stored
// as userChoice and then passed into a function called adventureSelector.
//
// Inside the function, you need to return an anonymous function based on the
// number that the user selected. Each of your three anonymous functions should
// contain a boarding alert message:
//
// If the user selects 1:
//
//    You selected the Vines of Doom!
//
// If the user selects 2:
//
//    Looks like you want the Lake of Despair!
//
// If the user selects 3:
//
//    The Caves of Catastrophe!
//
// Assume the user’s choice has already been stored as 1, 2, or 3, and is
// passed in as the userChoice parameter. Make sure that you return all
// message functions as anonymous functions, instead of stored in variables.
// You do not need to call the function at the end.














// Answer example:
function adventureSelector(userChoice) {

  if (userChoice == 1) {
    return function() {
      alert("You selected the Vines of Doom!");
    };
  } else if (userChoice == 2) {
    return function() {
      alert("Looks like you want the Lake of Despair!");
    };
  } else if (userChoice == 3) {
    return function() {
      alert("The Caves of Catastrophe!");
    };
  }
}

// Another answer example:
function adventureSelector(userChoice) {

  switch (userChoice) {

    case 1:
      return function () {
        alert("You selected the Vines of Doom!");
      };

    case 2:
      return function () {
      	alert("Looks like you want the Lake of Despair!");
      };

    case 3:
      return function () {
      	alert("The Caves of Catastrophe!");
      };
  }
}
