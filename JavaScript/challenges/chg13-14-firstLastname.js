//Display Full Name

/* Challenge 13
Write a simple program to combine a first name and a last name inside a function.
Then update the function to accept a first and last name as arguments.
*/


function displayFullName(fName, lName) {
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    
/* Challenge 14
Add a return statement to your 'name' function. Use that function to set the value of a variable.
*/
    return (document.getElementById(
      "fullNameDisplay"
    ).innerHTML = `${fName} ${lName}`);
  }