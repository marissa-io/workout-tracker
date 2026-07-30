
let entries=[];
//get data from local storage

if(localStorage.getItem("entries") === null){
    entries = [];
}
else{
    entries= JSON.parse(localStorage.getItem("entries"));
}

function saveEntries(){
    localStorage.setItem("entries", JSON.stringify(entries));
}

//display data in html.

// I want to reuse the displayUserData function in the history using similar logic.

function displayWorkouts(workouts){
    const workoutList = document.getElementById("workoutList");
    workoutList.innerHTML = "";

    for(let i= 0; i < workouts.length; i++){

        // MDN contributors. (2025, July 10). Array.prototype.indexOf(). Mozilla. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
        //extra variable to hold the index of the original workout to be edited/deleted
       //this is to avoid the incorrect workout from being deleted when the user is filtering/searching
        const originalIndex = entries.indexOf(workouts[i]);


        // This reference only made me realize you could interpolate in JavaScript, the rest I just messed around with myself.
        // Rafael (2018, October 17). Can you create object property names using template literals in javascript? Stack Overflow. https://stackoverflow.com/questions/52845823/can-you-create-object-property-names-using-template-literals-in-javascript
       workoutList.innerHTML += 
       `<div class="workoutCard">
       <div class="workoutInfo">
       <p class="displayDate">${workouts[i].dateCompleted}</p>
       <p class="displayName">${workouts[i].exerciseName}</p>
       </div>
       <div class="workoutButtons">
       <button onclick="editWorkout(${originalIndex})">Edit</button>
       <button onclick="deleteWorkout(${originalIndex})">Delete</button>
       </div>
       </div>`;
    } //added the onclick at "i" so it can edit the index of the workout in the loop
// Reference for onclick: 
// W3Schools. (n.d.) onclick Event. W3Schools. https://www.w3schools.com/jsref/event_onclick.asp 
}


 displaySearch(entries);



function displaySearch (workouts){

    //I used this one to find toLowerCase() and trim()
// W3Schools. (n.d.). JavaScript String Methods. W3Schools. https://www.w3schools.com/js/js_string_methods.asp
// Bhutani, K. (2025, July 11). Search Bar using HTML CSS and JavaScript. GeeksForGeeks. https://www.geeksforgeeks.org/javascript/search-bar-using-html-css-and-javascript/
// W3Schools (n.d.). JavaScript String includes(). W3Schools. https://www.w3schools.com/Jsref/jsref_includes.asp
const searchInput = document.getElementById("searchWorkout").value.trim().toLowerCase();
const workoutList = document.getElementById("workoutList");

const matchingWorkouts = [];

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
sortingWorkouts(matchingWorkouts);
}
}

//create an event listener
const workoutInput = document.getElementById("searchWorkout");
workoutInput.addEventListener("input", () =>{displaySearch(entries);});

 //SORTING FEATURE NEW-OLD OLD-NEW
//  A-Z AND Z-A

function sortingWorkouts(workouts){
    const sortChoice = document.getElementById("sortWorkouts").value;

    //created a copy of the array so it does not permanently modify the order of the original array.
    let sortedWorkouts= workouts.slice();
    
    // W3docs. (n.d.). How to Sort Array Alphabetically in JavaScript. W3docs. https://www.w3docs.com/snippets/javascript/how-to-sort-array-alphabetically-in-javascript
    // GeeksForGeeks. (2025, May 24). Sort an Object Array by Date in JavaScript. GeeksForGeeks. https://www.geeksforgeeks.org/javascript/sort-an-object-array-by-date-in-javascript/
        if(sortChoice === "dateNewest"){
        sortedWorkouts.sort((a,b)=>new Date(b.dateCompleted) - new Date(a.dateCompleted));

        }
        else if(sortChoice === "dateOldest"){
        sortedWorkouts.sort((a,b)=> new Date(a.dateCompleted) - new Date(b.dateCompleted));
        }
        else if(sortChoice === "nameAZ"){
            sortedWorkouts.sort((a,b)=> a.exerciseName.localeCompare(b.exerciseName));
        }
        else if(sortChoice === "nameZA"){
            sortedWorkouts.sort((a,b)=> b.exerciseName.localeCompare(a.exerciseName));

        }
            displayWorkouts(sortedWorkouts);
    }

    const sortDropdown = document.getElementById("sortWorkouts");
    sortDropdown.addEventListener("change", () => {
            displaySearch(entries);
    });



// W3Schools. (n.d.). How TO - Redirect to Another Webpage. W3Schools. https://www.w3schools.com/howto/howto_js_redirect_webpage.asp

 function editWorkout(index){

    //store which workout is being edited
    localStorage.setItem("editWorkout", index);

    //go to create.html
    window.location.href = "create.html";
 }

 //added this function for when user clicks "Create New +", 
 // the previously edited entry will no longer appear in the form's input fields.
 function newWorkout(){
    localStorage.removeItem("editWorkout");
    window.location.href="create.html";
 }

 function deleteWorkout(index){

    // W3Schools. (n.d.). Window confirm(). W3Schools. https://www.w3schools.com/jsref/met_win_confirm.asp
if(!confirm("Are you sure you want to delete this workout?")){
return;
}

    entries.splice(index, 1);
 //save updated array
    saveEntries();

    //added feature to improve user experience
    //so the search/filtered list will stay visible even after deleting
    const searchInput = document.getElementById("searchWorkout").value.trim();

    displaySearch(entries);
  }
 

