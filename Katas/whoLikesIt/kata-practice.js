//6kyu

//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item.It must return the display text as shown in the examples:

// likes[] // must be "no one likes this"
// likes["Peter"] // must be "Peter likes this"
// likes["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

let input = ["Alex", "Jacob", "Mark"];

const likes = arr => {
  let len = arr.length;
  let firstName = arr[0];
  let secondName = arr[1];
  let thirdName = arr[2];
  if (len === 0) {
    return "no one like this";
  }
  if (len === 1) {
    return `${firstName} likes this`;
  }
  if (len === 2) {
    return `${firstName} and ${secondName} like this`;
  }
  if (len === 3) {
    return `${firstName}, ${secondName} and ${thirdName} like this`;
  }
  if (len >= 4) {
    let length = len - 2;
    return `${firstName}, ${secondName} and ${length} others like this`;
  }
};

console.log(likes(input));
