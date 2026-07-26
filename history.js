
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
 //TO DO: SORTING FEATURE
 //TO DO: EDIT AND DELETE FEATURE