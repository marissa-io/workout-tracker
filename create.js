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

//user fills out form, reads values, and creates workout object

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
return false;
}

//test to see if JavaScript is working. -passed
console.log("JavaScript loaded and is working on the page");

    // TO DO: Make form clear after clicking "Save Workout"