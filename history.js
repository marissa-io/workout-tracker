
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
// https://www.geeksforgeeks.org/javascript/search-bar-using-html-css-and-javascript/
// https://www.w3schools.com/Jsref/jsref_includes.asp
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

function sortingWorkouts(workouts){
    const sortChoice = document.getElementById("sortWorkouts").value;

    //created a copy of the array so it does not permanently modify the order of the original array.
    let sortedWorkouts= workouts.slice();
    
    // https://www.w3docs.com/snippets/javascript/how-to-sort-array-alphabetically-in-javascript
    // https://www.geeksforgeeks.org/javascript/sort-an-object-array-by-date-in-javascript/
        if(sortChoice === "dateNewest"){
        sortedWorkouts = workouts.sort((a,b)=>new Date(b.dateCompleted) - new Date(a.dateCompleted));

        }
        else if(sortChoice === "dateOldest"){
        sortedWorkouts = workouts.sort((a,b)=> new Date(a.dateCompleted) - new Date(b.dateCompleted));
        }
        else if(sortChoice === "nameAZ"){
            sortedWorkouts = workouts.sort((a,b)=> a.exerciseName.localeCompare(b.exerciseName));
        }
        else if(sortChoice === "nameZA"){
            sortedWorkouts = workouts.sort((a,b)=> b.exerciseName.localeCompare(a.exerciseName));

        }
            displayWorkouts(sortedWorkouts);
    }

    const sortDropdown = document.getElementById("sortWorkouts");
    sortDropdown.addEventListener("change", () => {
        sortingWorkouts(entries);
    });


//TO DO: newest-oldest needs work, if user writes exerciseName in all lowercase, 
//make it upper case???


 //TO DO: EDIT AND DELETE FEATURE