function FirstReverse(str) { 

    // code goes here
    let stringArr = str.split("")
    
    
    
    let reverserdArr = stringArr.reverse();
    
    let reverserdString = reverserdArr.join(" ")
    
    
    
    console.log(reverserdString)
    
    return reverserdString; 
           
  }
     
  // keep this function call here 
  //change the sring to whatever you want to be reversed
  FirstReverse('the quick brown fox jumped ove the lazy fox');