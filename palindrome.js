/**
 * Palindrome using stack
 */

let letters = [];

let word = "RaceCar";

let rWord = "";

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  rWord += letters.pop();
}

if (word.toLowerCase() === rWord.toLowerCase()) {
  console.log(`Yes.. ${word} is a palindrome`);
} else {
  console.log(`Opps.. ${word} is not a palindrome`);
}
