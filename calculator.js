
    // get the user inputs
do{
    var value1 = parseFloat(prompt('enter first value'));
    var value2 = parseFloat(prompt('enter the second value'));
    var choice = prompt('Choose your action add (+), subtract(-), multiply(*), divide(/), power(^) or quit(q)') || "a";
    var answer = 0;


  switch(choice){
  case "+":
  alert(answer = value1 + value2);
  break;

  case "-":
  alert(answer = value1 - value2);
  break;

  case "*":
  alert(answer = value1 * value2);
  break;

  case "/":
  alert(answer = value1 / value2);
  break;

  case "^":
  alert(answer = value1 ** value2);
  break;
  
  default:
  alert(answer = value1 + value2);
  break;
 }
}
while(choice!='q');
