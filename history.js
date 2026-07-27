
let entries=[];
//get data from local storage

if(localStorage.getItem("entries") === null){
    entries = [];
}
else{
    entries= JSON.parse(localStorage.getItem("entries"));
}


//display data in html.

// I want to reuse the displayUserData function in the history using similar logic.

function displayWorkouts(workouts){
    //get the div
    const workoutList = document.getElementById("workoutList");
    workoutList.innerHTML = "";

    //loop through entries
    for(let i= 0; i < workouts.length; i++){
        //display previous workouts
        // This reference only made me realize you could interpolate in JavaScript, the rest I just messed around with myself.
        // https://stackoverflow.com/questions/52845823/can-you-create-object-property-names-using-template-literals-in-javascript
       workoutList.innerHTML += 
       `<div class="workoutCard">
       <div class="workoutInfo">
       <p class="displayDate">${workouts[i].dateCompleted}</p>
       <p class="displayName">${workouts[i].exerciseName}</p>
       </div>
       <div class="workoutButtons">
       <button>Edit</button>
       <button>Delete</button>
       </div>
       </div>`;
    }
 }

 displayWorkouts(entries);


 //TO DO: READ AND MATCH USER SEARCHES

function displaySearch (workouts){

//variable for search input field and get input value
// https://www.w3schools.com/js/js_string_methods.asp
const searchInput = document.getElementById("searchWorkout").value.trim().toLowerCase();
const workoutList = document.getElementById("workoutList");

//Create new array to store the matching data
const matchingWorkouts = [];

//loop through workouts
for(let i=0; i < workouts.length; i++){
    //if the workoutName is the same as the user's search...
    if(workouts[i].exerciseName.toLowerCase().includes(searchInput)){
        //...add it to the matching workouts array
        matchingWorkouts.push(workouts[i]);
    }
}
//if there are no matching workouts, display message
if(matchingWorkouts.length === 0){
//included class workoutCard for styling purposes
    workoutList.innerHTML= 
    `<div class="workoutCard">
    <p>No search results found.</p>
    </div>`
}
else {
//calling displayWorkouts to show matching searches only.
displayWorkouts(matchingWorkouts);
}
}

//create an event listener
const workoutInput = document.getElementById("searchWorkout");
workoutInput.addEventListener("input", () =>{displaySearch(entries);});

 //TO DO: SORTING FEATURE NEW-OLD OLD-NEW
//  A-Z AND Z-A


 //TO DO: EDIT AND DELETE FEATURE