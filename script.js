
/* 

PROGRAM DETAILS 


Below we create a function, called matchups. The function takes an array and randonly rearranges it if it has an even number of items,
and prompts the user to enter a random number of Items if it doesn't. 

First, we declare the teams list, where we enter the teams that we want sorted. 

Next, we create an upper bound, which acts as both the upper limit for our random number, and our index to track how many
items are left in the array. 

After that, we declare two empty variables, for use within our while loop. 

Inside of our loop, so long as upper bound (the number of items in our loop) is greater than 0, we create a random number, take the item 
in that numbers position in the array, and move it to the empty array that we declared earlier. We then remove it from the original array. 

Lastly, we remove one from our upper bound ad repeat until there's nothing left in the array.


*/



function matchups (){

    let teamsList = ["Pop Style", "Marvins Room", "One Dance", "Passionfruit", "Fire and Desire", "Company", "Fake Love", "Madonna"]; // ENTER TEAMS HERE
    let upper = teamsList.length;
    let randomTeam;
    let reorderedList = [];

    if (teamsList.length % 2 == 0){
        while (upper > 0){
        let number = Math.floor(Math.random() * upper);
        let randomTeam = teamsList[number];
        teamsList.splice(number, 1);
        reorderedList.push(randomTeam);
        upper --; 
        }
        return(reorderedList);
    } else {
        return("Please enter an even number of teams");
    }

}


console.log(matchups());
let banner = `Your matchups are <br>${matchups()}`;
document.querySelector('h2').innerHTML = banner;

/* 

Below is the original function that didn't work as well

It didn't iterate over the array alone and required the user to keep adding new variables for every item in the array, which could easily
become too time consuming to be worth it

*/

// Below we are creating a function that takes an array,
// and returns a random item from the array based off of a 
// random number. The upper bound is not inclusive in our function
// as the Math.random function is not inclusive of 1 and 
// we are using Math.floor to round to
// our nearest integer, so the upper bound will never be reached. 

// function teams() {

//     let teamsList = ["Pop Style", "Marvins Room", "One Dance", "Passionfruit"];

//     if (teamsList.length % 2 == 0){
//         let upper = teamsList.length;
//         let number = Math.floor(Math.random() * upper);
//         let randomTeam = teamsList[number];
//         teamsList.splice(number, 1);
//         upper --;

//         // repeat above code

//         let numberTwo = Math.floor(Math.random() * upper);
//         let randomTeamTwo = teamsList[numberTwo];
//         teamsList.splice(numberTwo, 1);
//         upper --;

//         let numberThree = Math.floor(Math.random() * upper);
//         let randomTeamThree = teamsList[numberThree];
//         teamsList.splice(numberThree, 1);
//         upper --;

//         // Delete selected team from array, decrease upper bound by one

//         let numberFour = Math.floor(Math.random() * upper);
//         let randomTeamFour = teamsList[numberFour];

//         // Creates array of teams 

//         let matchups = [randomTeam, randomTeamTwo, randomTeamThree, randomTeamFour];
//         return(matchups);
//     } else {
//         return("Please enter an even number of teams");
//     }
    
// }

// console.log(teams());