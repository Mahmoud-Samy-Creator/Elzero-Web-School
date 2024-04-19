console.log((() => `Iam A Normal Function`)());
console.log(((protocol, web, tld) => {return `${protocol}://www.${web}.${tld}`})('https', 'example', 'com'))