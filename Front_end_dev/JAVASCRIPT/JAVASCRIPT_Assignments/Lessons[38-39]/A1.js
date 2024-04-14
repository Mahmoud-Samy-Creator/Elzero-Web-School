let day = "   monday  ";

// Trim the spaces from the beginning and end of the string
day = day.trim();

// Convert the first letter to uppercase and the rest to lowercase
day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();
console.log(day)

switch(day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available")
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM")
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM")
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM")
    break;
  case "World":
    console.log("")
    break;
}
