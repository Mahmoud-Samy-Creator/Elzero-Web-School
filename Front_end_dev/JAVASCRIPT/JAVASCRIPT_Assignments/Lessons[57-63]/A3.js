function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`You have ${theAge} in years`)
    console.log(`You have ${theAge * 12} in months`)
    console.log(`You have ${(theAge * 12) * 30} in days`)
    console.log(`You have ${((theAge * 12) * 30) * 24} in hours`)
    console.log(`You have ${(((theAge * 12) * 30) * 24) * 60} in minutes`)
    console.log(`You have ${((((theAge * 12) * 30) * 24) * 60) * 60} in seconds`)
  } else {
    console.log(`Your age is out of range`)
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months