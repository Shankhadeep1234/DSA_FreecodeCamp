/**
 * Palindrome using stack
 */

var letter = [];

var word = "bob";

var rword = "";

for (var i = 0; i < word.length; i++) {
  letter.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
  rword += letter.pop();
}

if (word === rword) {
  console.log(`Yaa, ${word} is a palindrome`);
} else {
  console.log(`Noo, ${word} is not a palindrome`);
}
