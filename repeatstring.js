function repeatStringNumTimes(str, num) {
    // repeat after me
    var  bunchedStr = "";
    while(num > 0){
      bunchedStr += str
      num--;
    }
    return bunchedStr;
  }
  
  repeatStringNumTimes("abc", 3);
  