let students = [
    {
      "name": "Isabella Williams",
      "roll": 38,
      "registrationDate": 'January 20, 2019'
    },
    {
      "name": "Sophia Heels",
      "roll": 45,
      "registrationDate": 'March 17, 2022'                          
    },
    {
      "name": "Ava Benjamin",
      "roll": 17,
      "registrationDate": 'April 10, 2017'
    },
    {
      "name": "Amelia Brown",
      "roll": 8,
      "registrationDate": 'July 15, 2017'
    },
  ]
  
  // sort by the registration date
  const sortData =  students.sort((x, y) => {
       x = new Date(x.registrationDate),
        y = new Date(y.registrationDate);
      return x - y;
  });

  console.log(sortData);
  
  
//   console.log("Students sorted based on ascending order of their registration dates are:")
  
//   // displaying the values
//   students.forEach((e) => {
//       console.log(`${e.name} ${e.roll} ${e.registrationDate}`);
//   });