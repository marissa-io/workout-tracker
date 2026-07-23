// HTML elements to store:
// -exercise name
// -weight
// -sets 
// -reps 
// -date

//workout object that stores info for one entry. 
//I was going to do an entries object filled with workout objects but
//since names can be repeated, they cannot be stored in the same object.

let entries = [

//workout objects go here {
// exerciseName:
// weight:
// sets:
// reps:
// dateCompleted:
// }

]


//1. CREATE DATA
// user fills out form, reads values, and creates workout object

// https://stackoverflow.com/questions/27265282/form-input-to-javascript-object
function addWorkoutEntry(form){ //called by browser when form is submitted
  
//testing to see if function is working in console - passed
    console.log("Function Started");


// https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage

//TO DO: Test localStorage - passed
//I feel like I could shorthand this If statement, but it works for now!!
//check if "entries" is null
if (localStorage.getItem("entries") === null){
    entries = []; //if so start with empty array
}
//check for any existing workouts in Local Storage
else{
    entries = JSON.parse(localStorage.getItem("entries")); //if so, convert local Storage data 
    //back to an object and store in entries;
}


//store user input into object
    let workoutEntry= {
        exerciseName: form.exerciseName.value,
        weight: form.weight.value,
        sets: form.sets.value,
        reps: form.reps.value,
        dateCompleted: form.dateCompleted.value
    }

//adds object to the end of the entries array
// https://www.geeksforgeeks.org/javascript/add-elements-to-a-javascript-array/
entries.push(workoutEntry);
// testing to see if object is added to entries - passed

// Load existing array from Local Storage
localStorage.setItem("entries", JSON.stringify(entries)); //saves data as a string to local Storage


console.log(entries);


//testing to see if page refreshes - passed

//TO DO: Testing
form.reset();  //this may need extra attention, 
//Since the user should be allowed to easily compare their old exercises to their new ones
//Show previous workouts when exerciseName === a previous workout name while user typing?
//OR show previous workouts ONLY after submission?
//OR show previous workouts ONLY when user selects a pre-existing entry to edit?

return false;
}




//test to see if JavaScript is working. -passed
console.log("JavaScript loaded and is working on the page");

// 2. Display previous workout data

//USER SUBMITS FORM 
//IF exerciseName === a pre-existing name stored in the array
//Display all entries from the array that match that name, along with its other key-value pairs

//loop through each index to find every object that contains matching name.







//ADD POINTER CURSOR TO CREATE ON SEARCH PAGE
//ADD HOME BUTTON/ SEARCH TO HTML 