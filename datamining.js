var filesys = require("fs");
var departmentNames;
var departmentEmployee3d;

// 1.load_dept_names.txt 

function deptNamesSync() {
  var fileData = filesys.readFileSync("load_dept_names.txt");
  fileData = fileData.toString();

  //console.log(fileData.toString());

  fileData = fileData.replace(/\(|\'|\)/g, "");

  departmentNames = fileData.replace(/\(|\'|\)/g, "");
  departmentNames = departmentNames.split("\n");

  for (var i = 0; i < departmentNames.length; i++) {
    departmentNames[i] = departmentNames[i].substring(0, departmentNames[i].length - 1);
    departmentNames[i] = departmentNames[i].split(",");
  }
  departmentNames.shift();
  console.log(departmentNames);

}

//2.load_dept_emp.txt

function departmentEmployeesSync() {
  var fileData = filesys.readFileSync("load_dept_emp.txt", "utf8");


  departmentEmployees = fileData.replace(/\INSERT INTO `dept_emp` VALUES |\(|\'|\)/g, "").replace(/^\s*/gm, '');
  departmentEmployees = departmentEmployees.split("\n");



  for (var i = 0; i < departmentEmployees.length; i++) {
    departmentEmployees[i] = departmentEmployees[i].substring(0, departmentEmployees[i].length - 1);
    departmentEmployees[i] = departmentEmployees[i].split(",");
  }
  departmentEmployees.pop();//.pop takes the last element of the array off
  //console.log(departmentEmployees)

  var departmentEmployees3D = [];
  for (var i = 0; i < departmentNames.length; i++) {
    departmentEmployees3D.push([]);
  }
  //console.log(departmentEmployees3D)

  for (var i = 0; i < departmentEmployees.length; i++) { // department from empolyees file 
    //console.log(departmentEmployees[i][1])
    for (var j = 0; j < departmentNames.length; j++) { //department from names file 
      //console.log(departmentNames[j][0]);
      if (departmentEmployees[i][1] == departmentNames[j][0]) {
        departmentEmployees3D[j].push(departmentEmployees[i])

      }


    }
  }
  //console.log(departmentEmployees3D);
  for (var i = 0; i < departmentNames.length; i++) {
    for (var j = 0; j < departmentEmployees3D[i].length; j++) {
      if (departmentEmployees3D[i][j][3] == "9999-01-01") {

      }




    }
    console.log(departmentNames[i][0], departmentNames[i][1] + ":", departmentEmployees3D[i].length);

  }













  
}
deptNamesSync();
departmentEmployeesSync();