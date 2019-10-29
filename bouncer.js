function bouncer(arr) {
    // Don't show a false ID to this bouncer.
     let empty = [];
    for(var i = 0; i < arr.length;i++){
      if(arr[i]) empty.push(arr[i])
    }
    return empty;
  }
  
  bouncer([7, "ate", "", false, 9]);