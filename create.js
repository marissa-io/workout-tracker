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

//save workout list to local storage
function saveEntries(){
    localStorage.setItem("entries", JSON.stringify(entries));
}

//Add remaining steps of editWorkout function here

const editingIndex = localStorage.getItem("editWorkout");

//if the index is not null 
if (editingIndex !== null){
    // https://www.w3schools.com/jsref/prop_node_textcontent.asp
    //Change page title to say "Edit" when user is editing an entry.
document.getElementById("pageTitle").textContent="EDIT WORKOUT ENTRY";

    //populate the form with previously exisiting workout data.
    // https://stackoverflow.com/questions/38806425/how-to-edit-and-update-data-in-local-storage

    const workout = entries[editingIndex];


    document.getElementById("exerciseName").value= workout.exerciseName;
    document.getElementById("weight").value= workout.weight;
    document.getElementById("sets").value= workout.sets;
    document.getElementById("reps").value= workout.reps;
    document.getElementById("dateCompleted").value= workout.dateCompleted;

}



//1. CREATE DATA
// user fills out form, reads values, and creates workout object

// https://stackoverflow.com/questions/27265282/form-input-to-javascript-object
function addWorkoutEntry(form){ //called by browser when form is submitted
  

//store user input into object
    const workoutEntry= {
        exerciseName: form.exerciseName.value,
        weight: form.weight.value,
        sets: form.sets.value,
        reps: form.reps.value,
        dateCompleted: form.dateCompleted.value
    }

//check if the user is editing an existing workout or creating a new one
if(editingIndex !== null){

    //replace exisiting workout
entries[editingIndex] = workoutEntry;


//added to prevent from overriding the same workout entry when creating a new entry
// https://stackoverflow.com/questions/63412799/how-do-i-removeitem-from-localstorage
localStorage.removeItem("editWorkout");
}
else{
//adds object to the end of the entries array
// https://www.geeksforgeeks.org/javascript/add-elements-to-a-javascript-array/
entries.push(workoutEntry);
}

saveEntries(); //saves data as a string to local Storage



form.reset();  //this may need extra attention, 

//Once user clicks "save", JavaScript clears out the previousWorkouts div.
const previousWorkouts = document.getElementById("previousWorkouts");
previousWorkouts.innerHTML = "";

return false;
}





// https://www.geeksforgeeks.org/javascript/how-to-get-the-value-of-text-input-field-using-javascript/

function displayUserData (){

    //select text input field and get value while also making it case-insensitive
    const textInput = document.getElementById('exerciseName').value.trim().toLowerCase();

//check to see if any matches are found
    let found = false;

    //get the div
    const previousWorkouts = document.getElementById("previousWorkouts");
    previousWorkouts.innerHTML = "";

    for(let i= 0; i < entries.length; i++){
        //compare the users input to the same workouts
        if (entries[i].exerciseName.toLowerCase().includes(textInput)){
        found = true;   

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
    previousWorkouts.innerHTML = "No previous workouts found.";

}

}

// https://www.w3schools.com/js/js_htmldom_eventlistener.asp - to show event listener syntax
// https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event - showed me there in fact is an "input" event
const exerciseInput = document.getElementById("exerciseName");
exerciseInput.addEventListener("input", displayUserData);
