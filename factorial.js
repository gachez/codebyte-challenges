function FirstFactorial(num) { 

    // code goes here
    let factorial = 1;
    
    for(let i =1; i <=num; i++){
      
      factorial = factorial * i;
    }
    console.log('factorial for ' + num + ' is ' + factorial)
    
    return factorial; 
           
  }
     
  // keep this function call here 
  FirstFactorial(4);                            
  
  
    