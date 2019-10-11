//Javascript variables are muteable containers used to store SIMPLE/SINGLE string or numeric data values
var name = "Arneezy";

//Javascript Arrays are containers used to store SIMPLE/MULTI string or numeric data values.
//Each data value is stored at a unique index place.

var names = ["Arnell","KELLY"];

//Javascript objects are containers used to store more COMPLEX/MULTIPLE string or numeric data values
//Each data value is compromised of a PROPERTY that is made up of a key; VALUE pair
//Objects can also contain special FUNCTIONS called METHODS
//objects often mirror, reflex or represent real worl items(objects)

var cohorts = {
    cohort: ["cohort08","cohort09"],
    students:[["Phen","Chang","Georgina"],["Crystal","Emilio"]],
    gpa:[ [4.0,3.5,3.9],[3.2,3.6]],

    printCohort08Students: function(){
        console.log("The following students are in Cohort 08")
        for(var i = 0; i < this.students[0]; i++){
           console.log(this.students[0][i]),this.gpa);
        }
    },
};
printGpasAbove34: function(){
    console.log("The following students  have a GPA 3.5 and above");
    for(var i = 0;i< this.students.length; i++){
        for(var j = 0; j < this.students[i].length; j++){
        if(this.gpa[i][j] > 3.4){
            console.log(this.students[i][j],":",this.gpa[i][j]);
        }
    }
}


//cohorts.printCohort08Students();

cohorts.printGpasAbove34()
