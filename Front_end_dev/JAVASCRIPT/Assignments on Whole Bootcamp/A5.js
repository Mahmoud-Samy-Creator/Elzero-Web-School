function replaceFirstWithLast(word) {
    let str = word.split("");
    [str[0], str[str.length - 1]] = [str[str.length - 1], str[0]];
    return str.join("");
}

  console.log(replaceFirstWithLast("olzerE")); // Elzero
  console.log(replaceFirstWithLast("Hello")); // oelloH