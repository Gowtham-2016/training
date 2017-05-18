// We'll consider a password's strength to be "strong" if it is at least 10
// characters long. If it's between 7 and 10 characters long, we'll consider it to
// have "medium" strength, and if it's less than 7 characters, we'll say it is a
// "weak" password. Write a function that accepts as input a potential password and
// returns either "weak", "medium" or "strong" depending on its length.
//
//     passwordStrength("hello");
//     //=> weak
//
//     passwordStrength("longerpassword");
//     //=> strong
//
//     passwordStrength("helloone");
//     //=> medium
var passwordStrength = function (string) {
  if(string.length<=7){
    return "weak";
  }
  else if(string.length<=10){
    return "medium";
}
  else if(string.length>10) {
    return "strong";
  }
};


// A year is a leap year if it is divisible by 4, unless it is also divisible by
// 100 in which case it is not a leap year unless it is also divisible by
// 400. Phew. Got that? Good. Write a function that accepts a number and outputs
// true if the number is a leap year, false if not.
//
//      isLeapYear(1988);
//      //=> true
//
//      isLeapYear(2001);
//      //=> false
//
//      isLeapYear(1800);
//      //=> false
//
//      isLeapYear(2000);
//      //=> true
//
// It should also throw an error if the input is not a number.
//
//      isLeapYear("hello");
//      //=> THAT'S NOT A NUMBER!
var isLeapYear = function (num) {
if(typeof(num)=="number"){
  return ((num%400==0 || num%100!=0)&& num%4==0);
}
else{
  return "THAT'S NOT A NUMBER";
}
};


// Write a function that accepts three strings and input, and returns the one
// that would come earliest in the dictionary.
//
//      firstInDictionary("rhino", "aardvark", "zebra");
//      //=> aardvark
//
//      firstInDictionary("whale", "zebra", "yak");
//      //=> whale
//
//      firstInDictionary("whale", "zebra", "aardvark");
//      //=> aardvark
//
// It should throw an error string if any of the arguments are not strings.
//
//      firstInDictionary("whale", 5, 10);
//      //=> ALL THREE ARGS MUST BE STRINGS!
var firstInDictionary = function (s1,s2,s3) {
      if(s1==s2||s2==s3||s3==s1){
        return "Three strings are same";
      }
      else if((typeof(s1)&&typeof(s2)&&typeof(s3))!="string") {
        return "ALL THREE ARGS MUST BE STRINGS!";
      }
      else if(s1<s2&&s1<s3){
        return s1;
      }
      else if(s2<s1&&s2<s3){
        return s2;
      }
      else if(s3<s1&&s3<s2){
        return s3;
      }
      else {
        return "ALL THREE ARGS MUST BE STRINGS!";
      }
};




// Write a function that extracts a tag from a string representing an HTML
// element, but throws an error if the string is not an HTML element. You may reuse
// one of your functions from the previous section (or, better yet, see if you can
// remember how to re-write it).
//
//     getTagName("<p>this is a paragraph</p>");
//     //=> p
//
//     getTagName("<p>this is wrong</div>");
//     //=> Error: Not an HTML Element!
var getTagName = function (line) {
  var x=line.indexOf(">");
  console.log(x);
  var a=line.lastIndexOf("<");
  console.log(a);
  var b=line.lastIndexOf(">");
  console.log(b);
  var s1=line.substring(0,x+1);
  console.log(s1);
  var s2=line.substring(a,b+1);
  console.log(s2);
  var s3=s2.replace("/","");
  console.log(  s3);
  if((s2.length-s1.length)==1){
    console.log(s2.length-s1.length);
  if(s1!=s3){
      return "Error: Not an HTML Element!";
  }
  else{
    var tag= line.substring(1,x);
    return tag;
  }
}
else{
  return "Error: Not an HTML Element!";
}

};


// Re-implement our improveTweet function so it can generate any of lol, omg,
// lmao, and rofl.
var improveTweet = function () {
  var x=Math.random()*10;
  if(x<=2.5){
    return "lol";
  }
  else if(x<=5){
    return "omg";
  }
  else if(x<=7.5){
    return "lmao";
  }
  else if(x<=10){
    return "rofl";
  }
};


// Write a function called `isQuestion` that returns true if the input is a
// string and it ends in a question mark. We'll use this function in the next
// practice problem.
var isQuestion = function (question) {
  var x=question.length;
  if(question[x-1]=="?"){
    return true;
  }
  else {
    return false;
  }
};


// The Magic 8 Ball is a classic toy that allows you to ask a yes/no
// question and it responds with a random answer. Most of the time (at least half)
// it responds with a "positive" answer, about a quarter of the time it responds
// with a "neutral" answer, and about a quarter of the time it responds with a
// "negative" answer. You can read more about the Magic 8 Ball toy (and see it's
// actual responses) on Wikipedia.
//
// Write a function that simulates the Magic 8 Ball by generating a random
// number. Try to make it match the probabilities of the real toy.
//     magic8Ball("Will people like this problem?");
//     //=> Very doubtful
//
//     magic8Ball("Do people like these videos?");
//     //=> My reply is no
//
//     // throw an error if there's no question mark at the end
//     // use your isQuestion function from the previous question
//     magic8Ball("you suck");
//     //=> THAT DOESN'T SOUND LIKE A QUESTION!
//
//     magic8Ball("Is this a question?");
//     //=> Signs point to yes
var magic8Ball = function (question) {
  var y=Math.random()*10;
  var x=question.length;
  if(question[x-1]!="?"){
    return "THAT DOESN'T SOUND LIKE A QUESTION!";
  }
  else if(y<=5){
    return "My reply is Yes!";
  }
  else if(y<=7.5){
    return "Maybe";
  }
  else if(y<=10){
    return "My reply is No!";
  }
};


// Suppose we wanted to randomly interject "-lol-" or "-omg-" into a random
// place in a string. For example:
//
//     randomInterject("this is a tweet");
//     //=> this is -omg- a tweet
//
// Notice that it may break into the middle of words as well.
//
//     randomInterject("hilarious, I'm having a great day");
//     //=> hil-lol-arious, I'm having a great day");
//
// This is a little tricky, so here are some tips. It may be helpful to break down
// this problem into two steps. First, you may want to write a function called
// interjection that accepts a number and two strings -- the interjection and the
// actual string.
//
//     interjectAt("interjection", 5, "hello world!");
//     //=> hello-interjection- world!
//
//     interjectAt("lol", 0, "this is a tweet");
//     //=> -lol-this is a tweet
//
//     interjectAt("omg", 15, "hello");
//     //=> the string doesn't have that many letters!
//
//     interjectAt(5, "omg", "hello");
//     //=> expected first arg to be a string, second arg to be a number and third arg to be a string
//
// You can interject by using two slices. For instance:
//
//     var str = "hello world!";
//     var beginning = str.slice(0,5);
//     var end = str.slice(5,str.length);
//     var strWithInterjection = beginning + "-lol-" + end;
 // You just have to generalize this to an arbitrary index and wrap it in a function.
var interjectAt = function (str1,num,str2) {
  if(str2.length<num){
    return "the string doesn't have that many letters!";
  }
  else{
    var start=str2.slice(0,num);
    var end=str2.slice(num,str2.length);
    return start + str1 + end;
  }
};


// Now that you have a robust function to do your interjection, your actual
// `randomInterjection` function consists of generating a random message and a
// random location within the string, and then calling into the `interjectAt`
// function with the appropriate arguments.
var randomInterject = function (string) {
  var str=string.length;
  var f=Math.round(Math.random()*10);
  var lel="";
  if(f>=5){
    lel="-lol-";
  }
  else{
    lel="-omg-";
  }
  console.log(lel);
  var x = Math.round(Math.random() * (str));
  console.log(x);
  if(x<=(str/2)){
    var start = string.slice(0,x);
    console.log(start);
    var stop = string.slice(x,str);
    console.log(stop);
    return start + lel + stop;
  }
  else if(x>(str/2)){
      var start = string.slice(0,x);
      console.log(start);
      var stop = string.slice(x,str);
      console.log(stop);
      return start + lel + stop;
  }
};
