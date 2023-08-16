const cars = [
{name: "Audi R8", assembly: "Germany", start: 2007, end: 2020},
{name: "Audi A1", assembly: "Belgium", start: 2010, end: 2020},
{name: "Fiat 127", assembly: "Egypt", start: 1971, end: 1983},
{name: "Ford Aerostar", assembly: "US", start: 1986, end: 1997},
{name: "Jaguar C-Type", assembly: "UK", start: 2007, end: 2020},
{name: "Jeep CJ", assembly: "US", start: 1944, end: 1986},
{name: "Jeep Cherokee", assembly: "US", start: 2007, end: 2020},
{name: "Yugo", assembly: "Yugoslavia", start: 1977, end: 2008},
{name: "Alfa R. S.", assembly: "Italy", start:  1967, end:  1967},
{name: "Alpine A110", assembly: "France", start: 1961, end: 1977},
{name: "AMC Hornet", assembly: "Australia", start: 1970, end: 1977},
{name: "Fisker Karma", assembly: "Finland", start: 2011, end: 2012},
{name: "Alpine A108", assembly: "France", start: 1958, end: 1965},
{name: "Jensen Interceptor", assembly: "UK", start: 1950, end: 1957},
];

const height = [172.6, 163.9, 165.1, 158.0, 170.6, 161.0, 164.8, 180.3, 171, 174.7, 161.9, 168.0, 184.8, 151.8, 152.2];

///* forEach

// for (let i = 0; i <cars.length; i++){
//     console.log(cars[i]);
// }

// for(let i = 0; i< height.length; i++) {
//     console.log(height[i]);
// }


///* filter
///Get 160.0 and taller

//  let canRide = [];

//  for (i = 0; i < height.length; i++) {
//  if(height[i] >= 160.0) {
//      canRide.push(height[i]);
//  }
//  }

//  console.log(canRide);

 
//  const canRide = height.filter(function(height) {
//      if(height >= 160.0)
//     return true
//  });

//  console.log(canRide);

// const canRide = height.filter(height => height >= 160.0);
// console.log(canRide); 

///* Filter assembly UK

// const assemblyUK = cars.filter(function(cars) {
//     if(cars.assembly === 'UK') {
//         return true
//     }

// });

///* Filter assembly France

// const assemblyFrance = cars.filter(function(cars) {
//     if (cars.assembly === 'France')
//     return true
// });

// const assemblyFrance = cars.filter(cars => cars.assembly === 'France');

// const assemblyYugoslavia = cars.filter (cars => cars.assembly === 'Yugoslavia');

// const assemblyUS = cars.filter(cars => cars.assembly === 'US');
// console.log(assemblyUS);

///* Get cars from the 80s 
//  const  eightiesCars = cars.filter( assembly => (assembly.start >=1980 && assembly.start < 1990 ));

///* Get cars from the 60s

// const sixtiesCars = cars.filter(assembly=>(assembly.start >= 1960 && assembly.start< 1970));
//  console.log(sixtiesCars);

///* Get cars that lasted 6 years or more

// const LastedSixYearOrMore = cars.filter(assembly => (assembly.end - assembly.start >= 26));
// console.log(LastedSixYearOrMore);

///* map
/// Create array of car names

//  const carNames = cars.map(function(car) {
//      return car.name;
//  });

// console.log(carNames);

// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
//     });

// const testMap = cars.map(function(car){
//             return `${car.name} (${car.end} - ${car.start})`;
// });

// const testMap = cars.map(car => `${car.name} (${car.end} - ${car.start}`);

///* Finds the sqrt 
 const heightSqrt = height.map(height => Math.sqrt(height));
 console.log(heightSqrt);
///* Finds the  multipliplication by two
// const heightTimesTwo = height.map()(height => height *2);

///* Finds the sqrt then multiplies
// const testMap = height
// .map(height => Math.sqrt(height))
// .map(height => height *2);

// console.log(testMap);

///* sort
///Companies by start year

// const sortCars = cars.sort(function(c1, c2) {
// if (c1.start > c2.start) {
//     return 1;
// } else {
//      return -1;
//  }
//  });

// const sortCars = cars.sort ((a , b) => (a.start > b.start ? 1 : -1 ));

/// Sort ages in decending order
// const sortHeights = height.sort((a, b) => b - a );
// console.log(sortHeights);

///* reduce (adds stuff together)
///total for height 1stmethod
// let heightSum = 0;
//  for(i = 0; i < height.length; i++) {
//     heightSum += height[i];
//  }

///total for height 2ndmethod
 const heightSum = height.reduce(function(total, height) {
 return total + height;
 }, 0);

 console.log(heightSum);

/// total for cars 1st method
// const totalYears = cars.reduce(function(total, cars) {
//  return total + (cars.end - cars.start);

// }, 0);

/// total for cars 1st method

// const totalYears = cars.reduce((total, cars) => 
// total + (cars.end - cars.start), 0);
//  console.log(totalYears);

///* Combine above Methods

//  const combine = height
//  .map(height => height * 4)
//  .filter(height => height >= 165.1)
//  .sort((a, b) => a - b)
//  .reduce((a,b) => a + b, 0 );

// console.log(combine);
 
