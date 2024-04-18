/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(...args) {
  let name, age, status, hireStatment
  for (arg of args) {
    // if (typeof arg === 'string') {
    //   name = arg
    // } else if (typeof arg === 'number') {
    //   age = arg
    // } else if (typeof arg == 'boolean') {
    //   status = arg
    //   if (status === true) {
    //     hireStatment = 'You Are Available For Hire'
    //   } else {
    //     hireStatment = 'You Are Not Available For Hire'
    //   }
    // }
    typeof arg === 'string' ? name = arg : typeof arg === 'number' ? age = arg : typeof arg == 'boolean' ? status === true ? hireStatment = 'You Are Available For Hire' : hireStatment = 'You Are Not Available For Hire' : arg = 'none'
  }

  console.log(`Hello ${name}, Your Age Is ${age}, ${hireStatment}`)
}
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"