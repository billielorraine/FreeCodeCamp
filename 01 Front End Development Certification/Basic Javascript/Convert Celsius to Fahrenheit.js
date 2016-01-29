/*To test your learning you will create a solution "from scratch". Place your code between the indicated lines and it will be tested against multiple test cases.

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Create a variable fahrenheit and apply the algorithm to assign it the corresponding temperature in Fahrenheit. */

function convert(celsius) {
  // Only change code below this line

  var fahrenheit = celsius * 9 / 5 + 32;

  // Only change code above this line
  if ( typeof fahrenheit !== 'undefined' ) {
    return fahrenheit;
  } else {
    return 'fahrenheit not defined';
  }
}

// Change the inputs below to test your code
convert(0);
convert(-30);
convert(-10);
convert(20);
convert(30);
