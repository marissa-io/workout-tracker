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

//TO DO: Test localStorage - passed
//check if "entries" is null
if (localStorage.getItem("entries") === null){
    entries = []; //if so start with empty array
}
//check for any existing workouts in Local Storage
else{
    entries = JSON.parse(localStorage.getItem("entries")); //if so, convert local Storage data 
    //back to an object and store in entries;
}
// https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage


//1. CREATE DATA
// user fills out form, reads values, and creates workout object

// https://stackoverflow.com/questions/27265282/form-input-to-javascript-object
function addWorkoutEntry(form){ //called by browser when form is submitted
  
//testing to see if function is working in console - passed
    console.log("Function Started");

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
// https://www.geeksforgeeks.org/javascript/how-to-get-the-value-of-text-input-field-using-javascript/

function displayUserData (){

    //select text input field
    const textInput = document.getElementById('exerciseName');
    //get value of input field
    const inputValue = textInput.value

//check to see if any matches are found
    let found = false;

    //get the div
    const previousWorkouts = document.getElementById("previousWorkouts");
    previousWorkouts.innerHTML = "";

    //loop through entries
    for(let i= 0; i < entries.length; i++){
        //compare the users input to the same workouts
        if (inputValue === entries[i].exerciseName){
        found = true;   

        //display previous workouts
        // This reference only made me realize you could interpolate in JavaScript, the rest I just messed around with myself.
        // https://stackoverflow.com/questions/52845823/can-you-create-object-property-names-using-template-literals-in-javascript
       previousWorkouts.innerHTML += 
       `<h3>Date Completed: ${entries[i].dateCompleted}</h3>
       <h4>Weight: ${entries[i].weight}
        <br>
       Sets: ${entries[i].sets}
        <br>
       Reps: ${entries[i].reps} 
       <br><br><br></h4>`
    }

    }
    if (!found) {
    previousWorkouts.innerHTML = "No previous workouts found."

}

}

// https://www.w3schools.com/js/js_htmldom_eventlistener.asp - to show event listener syntax
// https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event - showed me there in fact is an "input" event
const exerciseInput = document.getElementById("exerciseName");
exerciseInput.addEventListener("input", displayUserData);







//ADD POINTER CURSOR TO CREATE ON SEARCH PAGE
//ADD HOME BUTTON/ SEARCH TO HTML 