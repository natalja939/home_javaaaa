//Loop

//let n = parseFloat(prompt('Enter number'));


//function fib(n) {
  //  let fibPrev  = 1,
 //       fibPrePrev = 1;
  //  for (let i = 1; i <= n; i++) {
  //  let fibNext = fibPrev + fibPrePrev;
   //     fibPrePrev = fibPrev;
 //       fibPrev = fibNext;
  //  }
  //  return fibPrev;
//}

//const result = fib(n);
//alert(result);



//Array


    //let n = parseFloat(prompt('Enter number'));


  //  let fibArr = [1,1];
   //     for (let i = 0; i <= n; i++) {
 //       fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
 //   }
 //   let result = fibArr;
 //   alert(result);
    
    
//recursion
    
    
    //let n = parseFloat(prompt('Enter number'));
    
   //function fib(n) {
     //   if (n <= 1) return 1;
     //   return fib(n - 1) + fib(n + 2);
    //}
    
    // let result = fib(n);
    // alert(result);
     
     
     
     let n = parseFloat(prompt('Enter number'));


    function fib(n) {
	if(n > 1){
		return fib(n-1) + fib(n-2);
	} else {
		return n;
	}
}


   let result = fib(n);
   alert(result);

     
    
    
    
    
    

