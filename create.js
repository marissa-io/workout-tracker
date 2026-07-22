// HTML elements to store:
// -exercise name
// -weight
// -sets 
// -reps 
// -date

//workout object that stores info for one entry. 
//I was going to do an entries object filled with workout objects but
//since names can be repeated, they cannot be stored in the same object.

const entries = [

//workout objects go here {
// exerciseName:
// weight:
// sets:
// reps:
// dateCompleted:
// }

]

//1. user fills out form, reads values, and creates workout object

// https://stackoverflow.com/questions/27265282/form-input-to-javascript-object
function addWorkoutEntry(form){

//testing to see if function is working in console - passed
    console.log("Function Started");

    let workoutEntry= {
        exerciseName: form.exerciseName.value,
        weight: form.weight.value,
        sets: form.sets.value,
        reps: form.reps.value,
        dateCompleted: form.dateCompleted.value
    }

//adds object to the end of the entries array
entries.push(workoutEntry);
// testing to see if object is added to entries - passed
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

    // TO DO: Make form clear after clicking "Save Workout"

// 2. Load existing array from Local Storage

//TO DO: Testing
// https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
localStorage.setItem("entries", JSON.stringify(entries)); //saves data

//also TO DO: retreieve data, delete data, clear data

// add new workout 
// save updated array