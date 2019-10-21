
// starting to string together programs and diffrent techniques im learning in JavaScript
//keep this array for data


let sentence = "These Are All The Teams In The NFL"

function splitSentence(sentenceString){
    var afterSplit = sentenceString.split(",");
    return afterSplit
}

console.log(splitSentence(sentence));


var leaguesArray = ["AFC East", "AFC North", "AFC West", "ACF South","NFC East","NFC North","NFC South","NFC West"]
var teamsArray = [["New England Patriots","New York Jets","Buffalo Bills","Miami Dolphins"],["Cinncinati Bengals","Pittsbugh Steelers","Cleveland Browns","Baltimore Ravens"],["Los Angeles Chargers","Oakland Raiders","Kansas City Chiefs","Denver Broncos"],["Indianpolis Colts","Tennessee Titans","Jacksonville Jaguars","Houston Texans"],["Dallas Cowboys","New York Giants","Washington Redskins","Philidalphia Eagles"],["Green Bay Packers","Minnesota Vikings","Chicago Bears","Detroit Lions"],["Atlanta Falcons","New Orleans Saints","Tampa Bay Bucaneers","Carolina Panthers"],["Los Angeles Rams","Seattle Seahawks","San Fransisco 49ers","Arizona Cardinals"]];

for(var i = 0; i < leaguesArray.length; i++){
    console.log(leaguesArray[i]);
    for(var j = 0; j < teamsArray[i].length; j++){
        console.log('\t','\n',teamsArray[i][j]);
    }
}
let numberOfTeams = 32
let numberOfDivisions = 8

function nationalFootballLeague(teams, divisions){
var total = (teams / divisions);
return total

}
console.log("with");
console.log(nationalFootballLeague(numberOfTeams,numberOfDivisions,));
console.log("Teams Per Division")


