function sumZero(numbers) {
  const seen = new Set();

  for (let num of numbers) {
    if (seen.has(-num)) {
      return true;
    } else {
      seen.add(num);
    }
  }

  return false;
}


console.log(sumZero([1, 2, 3, -2]))
// time complexity is O(n)
// space complexity is O(n)


function hasUniqueChars(word){
  let seenChars = {}

  for(let i = 0; i < word.length; i++){
    let chars = word[i]

    if(seenChars[chars]){
      return false
    }

    seenChars[chars] = true
  }
  return true 
}

console.log(hasUniqueChars('Monday'))
// Time complexity is O(n)
// Space complexity is O(n)


function isPangram(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  sentence = sentence.toLowerCase();

  for (let letter of alphabet) {
    if (sentence.indexOf(letter) === -1) {
      return false;
    }
  }

  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// Time complexity is O(n)
// Space complexity is O(1)


function findLongestWord(words) {
  let longest = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }

  return longest;
}

console.log(findLongestWord(["hi", "hello"]))
// Time complexity is O(n)
// Space copmplexity is O(1)