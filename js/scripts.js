var saySomething = function(something) {
  alert(something);
};

var convertion = function(celcius) {
  return celcius * 1.8 + 32
};

var celcius = parseFloat(prompt("Input celcius degree"));
var result = convertion(celcius);
var outcome = "Farenheit degree are  " + result;
saySomething(outcome);
