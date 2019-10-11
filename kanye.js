var sentence = "Jill and Jack coded an app"

//split the sentence above then output the results
// don't console.log inside of the function
// create your function below this line



function splitSentence(sentenceString){
    var afterSplit = sentenceString.split(" ");
    return afterSplit;
}

console.log(splitSentence(sentence)[0]);

var sentence2 = "KANYE IS THE GOAT";

console.log(splitSentence(sentence2));
