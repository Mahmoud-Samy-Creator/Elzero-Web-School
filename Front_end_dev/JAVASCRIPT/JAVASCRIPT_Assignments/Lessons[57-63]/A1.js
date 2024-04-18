function sayHello(theName, theGender) {
  theGender === 'Male' ? console.log(`Hello Mr ${theName}`) : theGender === 'Female' ? console.log(`Hello Ms ${theName}`) : console.log(`Hello ${theName}`)
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"