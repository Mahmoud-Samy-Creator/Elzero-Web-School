/**
 * Reguler Expression
 * = Quantifiers => characters help in determining the quantati;
 * n+ => One or more
 * n* => Zero or more
 * n? => Zero or One
 */

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@gmail.ru"; // All Emails
let nums = "0110 10 150 05120 0560 350 00";
let urls = "https://google.com http://www.website.net web.com";

let mailRe = /\w+@\w+.\w+/igm;
let numsRe = /0\d*0/igm;
let urlRe = /(https?:\/\/)?(www.)?\w+.\w+/igm;

console.log(mails.match(mailRe));
console.log(nums.match(numsRe));
console.log(urls.match(urlRe));
