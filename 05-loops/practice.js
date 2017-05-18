// Write a function called `isVowel` that returns `true` if the input is a
// single character and either an upper or lower-case a, e, i, o, or
// u. It should return false otherwise.
//
//    isVowel("a");
//    //=> true
//
//    isVowel("E");
//    //=> true
//
//    isVowel(1);
//    //=> false
//
//    isVowel("Ea");
//    //=> false
//
//    isVowel("Y");
//    //=> false
//
var isVowel = function (fin) {
  var fin1 = fin.toLowerCase();
  console.log(fin1);
  if(fin1.length>1){
    return "string must be 1 letter";
  }
  else if("aeiou".indexOf(fin1)!=-1){
    return true;
  }
  else{
    return false;
  }
};


/*var isVowel = function (str) {
  console.log(str.length);
  if(str.length>1||typeof(str)!="string"){
    return false;
  }
 else if(str=='a'||str=='e'||str=='i'||str=='o'||str=='u'){
    return true;
  }
  else if (str=="A"||str=="E"||str=="I"||str=="O"||str=="U") {
    return true;
  }
  else {
    return false;
  }
};*/


// Write a function called `isLowerCaseLetter` that returns `true` if
// the input is a single letter and lower-case. It should return false otherwise.
//
//    isLowerCaseLetter("a");
//    //=> true
//
//    isLowerCaseLetter("A");
//    //=> false
//
//    isLowerCaseLetter(1);
//    //=> false
//
//    isLowerCaseLetter("ae");
//    //=> false
//
//    isLowerCaseLetter(true);
//    //=> false
//
var isLowerCaseLetter = function (letter) {
  if(letter.length>1||typeof(letter)!="string"){
    return false;
  }
  else if (letter==(letter.toLowerCase())) {
    return true;
  }
  else {
    return false;
  }
};


// Write a function called `sumUpTo` so that it accepts a positive number `n`
// and sums the first `n` positive integers. For example, if you call `sumUpTo(5)`
// it should sum the numbers 1 through 5 inclusive. It should throw an error if the
// input number is negative.
//     sumUpTo(100);
//     //=> 5050
//
//     sumUpTo(10);
//     //=> 55
//
//     sumUpTo(0);
//     //=> 0
//
//     sumUpTo(-10);
//     //=> input must be a zero or a positive number!
//
var sumUpTo = function (num) {
  total = 0;
  if(num>=0){
  for(i=0;i<=num;i++){
      total+=i;
  }
  return total;
}
else{
  return "input must be a zero or a positive number!";
}
};


// Write a function called `sumAToB` so that it accepts two parameters
// `a` and `b` and sums the numbers between `a` and `b` inclusive. Note
// that `a` may be larger than `b`, in which case you'll need to work
// backawards.
//
//     sumAToB(10, 20);
//     //=> 165
//
//     sumAToB(0, -15);
//     //=> 120
//
//     sumAToB(-10, 500);
//     //=> 125195
//
//     sumAToB(10, 10);
//     //=> 10
//     sumAToB("hello", "world");
//     //=> inputs should be numbers!
//
var sumAToB = function (a,b) {
  var j=a;
  total=0;
  if(typeof(a)!="number"||typeof(b)!="number"){
    return "inputs should be numbers!";
  }
  else {
    for(i=j;i<=b;i++){
      total+=i;
    }
    return total;
  }
};


// Write a function called `countVowels` that accepts a string and
// returns the number of vowels contained in that string. You'll want
// to use the `isVowel` helper function from above. It should throw an
// error if the input is not a string
//
//     countVowels("hello world!");
//     //=> 3
//
//     countVowels("omg this is a hilarious tweet about nothing");
//     //=> 16
//
//     countVowels("");
//     //=> 0
//
//     countVowels(true);
//     //=> input to countVowels must be a string!
//
var countVowels = function (str) {
  var count=0;
  if(typeof(str)!="string"){
    return "input to countVowels must be a string!";
  }
  else {
    for(i=0;i<=str.length;i++){
      if("aeiou".indexOf(str[i])!=-1){
        count=count+1;;
      }
      else count =count;
    }
    return count;
  }
};


// Write a function that accepts a string and returns the same string, only in
// reverse!
//
//     reverse("hello world!");
//     //=> !dlrow olleh
//
//     reverse("omg this is a hilarious tweet about nothing");
//     //=> gnihton tuoba teewt suoiralih a si siht gmo
//
//     reverse("");
//     //=>
//
//     reverse(true);
//     //=> input to reverseString must be an string!
//
var reverseString = function (strings) {
  var reverse = strings.split("").reverse().join("");
  return reverse;
};


// A number is a prime number if it is only evenly divisible by 1 and itself
// (although we don't consider 1 a prime number, so 2 is the first prime
// number). Write a function called `isPrime` that accepts a number `p` as an
// argument and returns `true` if it is prime, `false` otherwise.
//
//     isPrime(101);
//     //=> true
//
//     isPrime(13);
//     //=> true
//
//     isPrime(1);
//     //=> false
//
//     isPrime(2);
//     //=> true
//
//     isPrime("hello");
//     //=> false
//
//     isPrime(-101);
//     //=> false
//
var isPrime = function (value) {
  for(var i = 2; i < value; i++) {
       if(value % i === 0) {
           return false;
       }
   }
   return value >1;
};
// Using the `isPrime` function, write a function that accepts a number as
// input sums all the primes smaller than that number.
//
//     sumPrimesUpTo(100);
//     //=> 1060
//
//     sumPrimesUpTo(0);
//     //=> 0
//
//     sumPrimesUpTo(1000);
//     //=> 76127
//
//     sumPrimesUpTo(2);
//     //=> 2
//
//     sumPrimesUpTo("whatever");
//     //=> input should be a number
//
var sumPrimesUpTo = function (numbers) {
  var total=0;
    for(i=0;i<=numbers;i++)
      if(isPrime(i)){
        total+=i;
      }
      return total;
};


// Using the `isPrime` function, write a function that takes in a
// positive integer, n, and returns the first n numbers.
//
//     sumOfFirstNPrimes(10);
//     //=> 129
//
//     sumOfFirstNPrimes(100);
//     //=> 24133
//
//     sumOfFirstNPrimes(1000);
//     //=> 3672913
//
//     sumOfFirstNPrimes(0);
//     //=> 0
//
//     sumOfFirstNPrimes(1);
//     //=> 2
//
//     sumOfFirstNPrimes(-10);
//     //=> input number should be zero or a positive number!
//
var sumOfFirstNPrimes = function () {

};


// A _palindrome_ is a string that reads the same forwards and backwards. Write
// a function that accepts a string of arbitrary letters, numbers, and symbols, and
// returns true if it's a palindrome. For example:
//
//      isPalindrome("kayak");
//      //=> true
//
//      isPalindrome("A man, a plan, a canal, Panama");
//      //=> true
//
//      isPalindrome("hello world");
//      //=> false
//
// Let's start by writing a function to remove all non-letter characters
// from the input.
//
//     removeNonLetters("A man, a plan, a canal, Panama");
//     //=> AmanaplanacanalPanama
//
//     removeNonLetters("this is a string; it has some punctuation!");
//     //=> thisisastringithassomepunctuation
//
var removeNonLetters = function (string) {
  var final = string.replace(/[^A-Za-z0-9]/g, '');
  return final;
};


// Now use `removeNonLetters`, along with the `reverse` function from above to
// determine if the string is a palindrome.
var isPalindrome = function (word) {
  console.log(word);
  var fin = word.replace(/[^A-Za-z0-9]/g, '');
    console.log(fin);
      console.log(fin.split('').reverse().join(''));
  return fin.toLowerCase() == fin.split('').reverse().join('').toLowerCase();
};
