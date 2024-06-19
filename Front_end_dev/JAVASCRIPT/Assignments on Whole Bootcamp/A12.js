let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result = [];

// [a, b, , , c, d] = names;
// result.push(a);
// result.push(b);
// result.push(c);
// result.push(d);

for (let name of names) {
    if (name[0].toLocaleLowerCase() === name[name.length - 1].toLocaleLowerCase()) result.push(name);
}
// Your Code Here
console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']
