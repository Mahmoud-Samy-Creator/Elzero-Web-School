function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    return(zName.slice(0, zName.indexOf(' ') + 2) + '.')
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    return (`Your age is ${zAge.slice(0, 3)}`)
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    return(`You live in ${zCountry}`)
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    return(`Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`)
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
