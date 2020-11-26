var readLineSync = require("readline-sync");
 const chalk = require("chalk");

questionsArray = [
  {
    question : "Choose the imposter among the programming languages ?",
    answer : "HTML"
  },
  {
    question : "Which among these does not fit in FAANG ?",
    answer : "Ali-Express"
  },
  {
    question : "Which among these is not a planet ?",
    answer : "Pluto"
  },
  {
    question : "Which among these is not a fruit ?",
    answer : "None"
  }

  
];


options = [
  ["HTML","C++","JS","C#","Python","Java","PHP"],
  ["Facebook","Amazon","Ali-Express","Netflix","Google"],
  ["Jupiter","Mars","Uranus","Pluto","Earth"],
  ["Cucumber","Tomato","Capsicum","Sweet Corn","None"]
];

scoreArray = [
  {
    playerName : "Alice",
    playerScore : 3
  }
];



var score = 0;

function Quiz(){
   for(var i = 0; i < questionsArray.length; i++){
    console.log(chalk.redBright.bgGreen.bold(questionsArray[i].question));        
    var index = readLineSync.keyInSelect(options[i]);
    var userAnswer = index;
    if(questionsArray[i].answer === options[i][userAnswer] )
    {
      console.log(chalk.cyanBright.bgRed.bold("yes, you are right"));
      score += 1;
    }

    else if(questionsArray[i].answer !== options[i][userAnswer]){
      console.log(chalk.redBright.bgWhite.bold("Sorry, try your luck next time again"));
      score -= 1;

    }

    console.log();
    console.log(chalk.yellow("----------------------------------------------------------"));
    console.log();

  }

}


var userName = "Please enter your name ";
var name = readLineSync.question(chalk.green.bgRed.bold(userName));
console.log(chalk.yellow.bold("Hello " + name + ", welcome to among us quiz."));
console.log();

console.log(chalk.cyanBright.bgRed.bold("-------------------Rules-----------------------------------"));
console.log(chalk.cyanBright("Each correct answer fetches you +1 points"));
console.log(chalk.cyanBright("Each wrong answer or using cancel option will get -1 points"));

console.log();
console.log(chalk.cyanBright.bgRed.bold("-----------------------------------------------------------"));
console.log();
console.log();


Quiz();
console.log(chalk.cyanBright.bgRed.bold("Congratulations, your score is : " +score));


for(var j = 0; j < scoreArray.length; j++){
  if(score > scoreArray[j].playerScore){
    console.log(chalk.redBright.bgGreen.bold("You beat " + scoreArray[j].playerName));
  }
}


