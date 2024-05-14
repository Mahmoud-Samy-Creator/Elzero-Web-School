/**
 * BOM [Browser Object Model]
 * - location object
 * --- href Get / Set [URL || HASH || FILE || MAIL]
 * --- host
 * --- hash
 * --- protocol
 * --- reload()
 * --- replace()
 * --- assign()
 */

console.log(location)

// Get the href
console.log(location.href)

// Set the href
// location.href = "https://google.com"
// location.href = "/#sec02" --> hash

// Get host & host name & protocol & hash
console.log(location.host)
console.log(location.hostname)
console.log(location.protocol)
console.log(location.hash)

// Reload the webpage
window.location.reload()

// replace & assign
// location.replace("https://google.com")
location.assign("https://google.com")