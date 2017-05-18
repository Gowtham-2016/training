// Write a function called `containsTwice` that accepts a number and an array,
// and returns `true` if that number appears in the array twice, and `false`
// otherwise.
//
//     containsTwice(5, [1, 2, 3, 4, 5]);
//     //=> false
//
//     containsTwice("hello", [ "hello", "world", "hello" ]);
//     //=> true
//
//     containsTwice(true, [ true, false, false, true ]);
//     //=> true
//
//     containsTwice(10, [10, 10, 10, 10, 10]);
//     //=> false
//
var containsTwice = function (element,array) {
  var i = 0;
  var j=element;
  var count=0;
  for(i=0;i<=array.length;i++){
    if((array[i])==j){
      count=count+1;
    }
    else{
      count=count;
    }
  }
  if(count>1){
    return true;
  }
  else{
    return false;
  }
};


// Generalize the previous solution into a function called `containsNTimes` so
// that it can check for a value an arbitrary number of times.
//
//     containsNTimes(3, "hello", [ "hello", "hello", "hello" ]);
//     //=> true
//
//     containsNTimes(5, true, [ true, true, true, true, false ]);
//     //=> false
//
//     containsNTimes(0, 5, [ 1, 2, 3, 4, 5 ]);
//     //=> false
//
var containsNTimes = function (no,element,array) {
  var i = 0;
  var j=element;
  var count=0;
  for(i=0;i<=array.length;i++){
    if((array[i])===j){
      count=count+1;
    }
    else{
      count=count;
    }
  }
    console.log("count"+count);
  if(count==no){
    return true;
  }
  else{
    return false;
  }
};


// Write a function called `atLeastOneEven` that returns `true` if at least one of
// the numbers in input array is even, false otherwise. It should throw an error if
// the argument is not an array.
//
//     atLeastOneEven([ 3, 5, 6, 7, 9 ]);
//     //=> true
//
//     atLeastOneEven([]);
//     //=> false
//
//     atLeastOneEven([ 101, 203, 401 ]);
//     //=> false
//
//     atLeastOneEven("hello");
//     //=> input should be an array!
//
var atLeastOneEven = function (array) {
  count=0;
  if(!Array.isArray(array)){
    throw "input should be an array!";
  }
  else{
  for(i=0;i<=array.length;i++){
    if(array[i]%2==0){
      count=count+1;
    }
    else{
      count=count;
    }
  }
  if(count>0){
    return true;
  }
  else {
    return false;
  }
}
};


// Write a function called `allStrings` that accepts an array as an argument and
// returns `true` if all of the values in the array are strings. It should
// return false if they are not all strings, and throw an error if the input is
// not an array.
//
//     allStrings([ "these", "are", "all", "strings" ]); //=> true
//
//     allStrings([ "these", "are", "not", 5 ]); //=> false
//
//     allStrings([ ]); //=> true
//
//     allStrings("hello"); //=> input should be an array!
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds a non-string entry in the array.
//
var allStrings = function (array) {
  var count =0;
  if(!Array.isArray(array)){
    throw "input should be an array!";
  }
  else {
  for(i=0;i<array.length;i++){
    if(typeof(array[i])!="string"){
      count=count+1;
      console.log(count);
    }
    else{
      count=count;
    }
  }
  if(count>0){
    return false;
  }
  else{
    return true;
  }
}
};


// Write a function that accepts two arrays, and returns true if any of the
// values in the first array appear twice in the second array. You might want to
// reuse the function `containsNTimes` or `containsTwice` from above. It should
// throw an error if either of the inputs are not arrays.
//
//
//     containsAnyTwice([1, 2], ["hello", 1, "world", 1]);
//     //=> true
//
//     containsAnyTwice([], ["always", "will", "return", "false"]);
//     //=> false
//
//     containsAnyTwice(["hello", "world"], ["hello", "hello", "world", "world"]);
//     //=> true
//
//     containsAnyTwice("hello", ["hello", "world"]);
//     //=> containsAnyTwice expects two arguments, both of which should be an array.
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds an element in the first array that appears twice in the second
// array.
//
var containsAnyTwice = function (arr1,arr2) {
  i=0;
  j=0;
  count=0;
  if((!Array.isArray(arr1))||(!Array.isArray(arr2))){
    throw "containsAnyTwice expects two arguments, both of which should be an array.";
  }
  else{
    while(i<arr1.length){
      for(i=0;i<arr1.length;i++){
      for(j=0;j<=arr2.length;j++){
        if(arr1[i]===arr2[j]){
          count+=1;
        }
        else{
          count=count;
        }
      }
    }
  }
}
    if((count)>1){
      console.log(count);
      return true;
    }
    else{
      return false;
    }
};


// In the previous problem, we determined whether or not an array contains any
// of a list of values exactly twice. In this problem, we'll actually return
// those values appearing twice.  Create a new function that returns an array of
// only the values from the first array that appear twice in the second array.
//
// For this problem, you'll create a new array, and you'll use its `push`
// function to add elements to the end. You'll most likely want to use the
// `containsTwice` function you created in the previous exercise.
//
// The difficulty here will be in avoiding duplicates. You may want to use the
// `indexOf` method of the resulting array to confirm that you're not adding a
// value a second time.
//
//     getValuesAppearingTwice(["hello", 1, "world", 1]);
//     //=> [ 1 ]
//
//     getValuesAppearingTwice(["always", "will", "return", "empty"]);
//     //=> []
//
//     getValuesAppearingTwice(["hello", "hello", "world", "world", "goodbye"]);
//     //=> [ "hello", "world" ]
//
//     getValuesAppearingTwice(["hello", "world", "goodbye"])
//     //=> []
//
var getValuesAppearingTwice = function (arr) {
  var ar = [];
    for(i=0;i<=arr.length;i++){
      if(arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])){
        ar.push(arr[i]);
      }
    }
    ar = ar.filter (function (value, index, array) {
    return array.indexOf (value) == index;
});
    return ar;
  /*var count = 0;
  var ar = [];
  if(!Array.isArray(arr)){
    throw "containsAnyTwice expects two arguments, both of which should be an array.";
  }
  else {
    for (i=0; i<arr.length;i++){
      for (x=0;x<arr.length;x++){
        if(arr[i]==arr[x] && i != x){
          ar.push(arr[i]);
        }
      }
    }
    ar = ar.filter (function (value, index, array) {
    return array.indexOf (value) == index;
});
    return ar;
  }*/
};


// Using a standard `for` loop, along with the `push` function, write a function
// called `range` that accepts two numbers, `begin` and `end`, and returns an array
// that contains all of the integers starting at `begin` and ending at `end`
// (including `begin` and `end`). For example:
//
//     range(5,10);
//     //=> [5, 6, 7, 8, 9, 10]
//
//     range(0,3);
//     //=> [0, 1, 2, 3]
//
//     range(10,3);
//     //=> [10, 9, 8, 7, 6, 5, 4, 3]
//
// It should throw an error when either of the arguments are not numbers.
//
//     range("hello", "world");
//     //=> arguments to range must be numbers
//
var range = function (begin,end) {
  var arr = [];
  var i;
  if(typeof(begin)!="number"||typeof(end)!="number"){
    throw "arguments to range must be numbers";
  }
  else if(begin>end){
    for(i=end;i<=begin;i++){
    arr.push(i);
    }
    return arr;
  }
  else if(begin<end){
      for(i=begin;i<=end;i++){
      arr.push(i);
      console.log("less")
      }
    return arr;
  }
};


// Using the `isHTMLElement` and `getTagName` function from one of the previous
// sections, write a function called `mapToTags` that accepts an array of HTML
// elements and returns a new array that consists of only the tags associated with
// those HTML elements. It should throw an error if any of the elements are not
// HTML elements, or if the input is not an array.
//
//     mapToTags(["<p>this is a paragraph</p>", "<span>this is a span</span>", "<li>this is a list item</li>"]);
//     //=> ["p", "span", "li"]
//
//     mapToTags([]);
//     //=> []
//
//     mapToTags(["<p>this is a paragraph</p>", "this is a tweet"]);
//     //=> "this is a tweet" is not an HTML element!
//
//     mapToTags(5);
//     //=> wat?
//
//     mapToTags([ "not an html element" ]);
//     //=> all entries must be html elements!
//
var mapToTags = function (array) {

};


// Write a function called `filterToLol` which accepts an array of tweets and
// returns an array that consists only of those that contain `lol` (upper, lower,
// or mixed-case). It should throw an error if the input is not an array or if any
// of the elements are not strings.
//
//     filterToLol(["hello world!", "this is a tweet lol", "this is a tweet omg"]);
//     //=> ["this is a tweet lol"]
//
//     filterToLol(["lol", "LOL", "LoL", "omg", "lollerskates"]);
//     //=> ["lol", "LOL", "LoL", "lollerskates"]
//
//     filterToLol(["omg", "this is a tweet"]);
//     //=> []
//
//     filterToLol(5);
//     //=> no can do.
//
//     filterToLol(["this is a string", false, 5]);
//     //=> all entries must be strings!
//
var filterToLol = function () {
};
