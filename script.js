// Below we are creating a function that takes an array,
// and returns a random item from the array based off of a 
// random number. The upper bound is not inclusive in our function
// as the Math.random function is not inclusive of 1 and 
// we are using Math.floor to round to
// our nearest integer, so the upper bound will never be reached. 

function teams() {
    let teamsList = ["Pop Style", "Marvins Room", "One Dance", "Passionfruit"];
    if (teamsList.length % 2 == 0){
        let upper = teamsList.length;
        let number = Math.floor(Math.random() * upper);
        let randomTeam = teamsList[number];

        // Delete selected team from array, decrease upper bound by one

        teamsList.splice(number, 1);
        upper --;
        let numberTwo = Math.floor(Math.random() * upper);
        let randomTeamTwo = teamsList[numberTwo];

        // Delete selected team from array, decrease upper bound by one

        teamsList.splice(numberTwo, 1);
        upper --;
        let numberThree = Math.floor(Math.random() * upper);
        let randomTeamThree = teamsList[numberThree];

        // Delete selected team from array, decrease upper bound by one

        teamsList.splice(numberThree, 1);
        upper --;
        let numberFour = Math.floor(Math.random() * upper);
        let randomTeamFour = teamsList[numberFour];

        // Creates array of teams 

        let matchups = [randomTeam, randomTeamTwo, randomTeamThree, randomTeamFour];
        return(matchups);
    } else {
        return("Please enter an even number of teams");
    }
    
}

console.log(teams());

