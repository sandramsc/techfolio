const nba = [
    {team: "Toronto Raptors", division: "Atlantic", wins: 46, losses: 18},
    {team: "Boston Celtics", division: "Atlantic", wins: 43, losses: 21},
    {team: "Philadelphia 76ers", division: "Atlantic", wins: 39, losses: 26},
    {team: "Brooklyn Nets", division: "Atlantic", wins: 30, losses: 34},
    {team: "New York Knicks", division: "Atlantic", wins: 21, losses: 45},
    {team: "Milwaukee Bucks", division: "Central", wins: 53, losses: 12},
    {team: "Indiana Pacers", division: "Central", wins: 39, losses: 26},
    {team: "Chicago Bulls", division: "Central", wins: 22, losses: 43},
    {team: "Detroit Pistons", division: "Central", wins: 20, losses: 46},
    {team: "Cleveland Cavaliers", division: "Central", wins: 19, losses: 46},
    {team: "Miami Heat", division: "Southeast", wins: 41, losses: 24},
    {team: "Orlando Magic", division: "Southeast", wins: 30, losses: 35},
    {team: "Washington Wizards", division: "Southeast", wins: 24, losses: 40},
    {team: "Charlotte Hornets", division: "Southeast", wins: 23, losses: 42},
    {team: "Atlanta Hawks", division: "Southeast", wins: 20, losses: 47},
    {team: "Denver Nuggets", division: "Northwest", wins: 43, losses: 22},
    {team: "Utah Jazz", division: "Northwest", wins: 41, losses: 23},
    {team: "Oklahoma City Thunder", division: "Northwest", wins: 40, losses: 24},
    {team: "Portland Trail Blazers", division: "Northwest", wins: 29, losses: 37},
    {team: "Minnesota Timberwolves", division: "Northwest", wins: 19, losses: 45},
    {team: "Los Angeles Lakers", division: "Pacific", wins: 49, losses: 14},
    {team: "LA Clippers", division: "Pacific", wins: 44, losses: 20},
    {team: "Sacramento Kings", division: "Pacific", wins: 28, losses: 36},
    {team: "Phoenix Suns", division: "Pacific", wins: 26, losses: 39},
    {team: "Golden State Warrior", division: "Pacific", wins: 15, losses: 50},
    {team: "Houston Rockets", division: "Southwest", wins: 40, losses: 24},
    {team: "Dallas Mavericks", division: "Southwest", wins: 40, losses: 27},
    {team: "Memphis Grizzlies", division: "Southwest", wins: 32, losses: 33},
    {team: "New Orleans Pelicans", division: "Southwest", wins: 28, losses: 36},
    {team: "San Antonio Spurs", division: "Southwest", wins: 26, losses: 37},
];

const percentWin = [.719, .672, .600, .469, .318, .815, .600, .338, .303, 
                  .292, .631, .462, .375, .354, .299, .662, .641, .625, .439, 
                  .297, .778, .688, .438, .400, .231, .625, .597, .492, .438, .429];


   ///* forEach

//    for (let i = 0; i < nba.length; i++) {
//        console.log(nba[i]);
//    }

// for (let i = 0; i < percentWin.length; i++) {
//     console.log(percentWin[i]);
// }
   

   ///* filter
   ///Get .650 percent wins or more

    // let canPlay = [];
//     for (i = 0; i < percentWin.length; i++) {
//     if (percentWin[i] >= .650) {
//         canPlay.push(percentWin[i]);
//     }
//     }
//     console.log(canPlay);

// const canPlay = percentWin.filter(function(percentWin){
//     if(percentWin >= .65)
//     return true
// });

///Get .750 percent wins or more
// const canPlay = percentWin.filter(percentWin => percentWin >= 0.75);

// console.log(canPlay);

   ///* Filter Southeast division
// const southeastDiv = nba.filter(function(nba){
//     if(nba.division === 'Southeast') {
//         return true
//     }
// });

   ///* Filter Pacific division

// const pacificDiv = nba.filter(function(nba) {
//     if(nba.division === 'Pacific')
//     return true
// });

// const northwestDiv = nba.filter( nba => nba.division === 'Northwest');
// console.log(northwestDiv);

   ///* Get teams with wins in the 30s
//const thirtyWins = nba.filter(nba => nba.wins >= 30 && nba.wins < 40);

   ///* Get teams with wins between 20 and 30
//const twentyFiveOrLessWins = nba.filter (nba => nba.wins >= 20 && nba.wins < 30);

 ///* Get teams with less than 40 wins
//  const FourtyOrLess = nba.filter(nba => nba.wins < 40);
//  console.log(FourtyOrLess);


   ///* map
/// Create an array of NBA teams
// const nbaTeams = nba.map(function(nba) {
//     return nba.team;
// });
// console.log(nbaTeams);

/// Create an array of NBA divisions
// const nbaDivs = nba.map(function(nba) {
//     return nba.division;
// });

//  const testMap = nba.map (function(nba) {
//  return `${nba.division} `;
//  });
//  console.log(testMap);

   ///* Finds the sqrt 
//    const percentWinSqrt = percentWin.map(percentWin => Math.sqrt(percentWin));
//    console.log(percentWinSqrt);
   
   ///* Finds the sqrt then multiplies
//    const pWinSqrtMutlt = percentWin
//    .map(percentWin => Math.sqrt(percentWin))
//    .map(percentWin => percentWin * 3);
//    console.log(pWinSqrtMutlt);

   ///* sort
///Teams by wins
// const sortTeams = nba.sort(function(t1, t2) {
//     if (t1.wins > t2.wins) {
//         return 1;
//     } else {
//         return -1;
//     }

// });

/// Sort teams in decending order
// const sortTeams = nba.sort ((a, b) => a.wins > b.wins ? 1 : -1);

// const sortPercentWin = percentWin.sort((a, b)=> b-a);
// console.log(sortPercentWin);

///* reduce (adds stuff together)
///total for percentWin 1stmethod
// let percentWinSum = 0;
// for(i = 0; i < percentWin.length; i ++) {
//     percentWinSum += percentWin[i];
// }


///total for percentWin 2ndmethod
// const percentWinSum = percentWin.reduce(function(total, percentWin){
// return total + percentWin;
// }, 0);
// console.log(percentWinSum);


/// totalWins for NBA games 1st method
//  const totalWins = nba.reduce(function(total, nba){
//  return total + (nba.wins);
//  }, 0);
//  console.log(totalWins);

/// totalWins for NBA games 2nd method 
// const totalWins = nba.reduce((total, nba) => total + (nba.wins),0);
// console.log(totalWins);

/// totalLosses for NBA games
// const totalLosses = nba.reduce(function(total, nba) {
//     return total + (nba.losses);
//     }, 0);
//     console.log(totalLosses);


///* Combine above Methods
// const combine = percentWin
// .filter(percentWin => percentWin >= .50)
// .map(percentWin => Math.sqrt(percentWin))
// .sort((a, b) => b - a)
// .reduce((a, b) => b + a, 0);


// console.log(combine);
