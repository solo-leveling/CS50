var fizzBuzzCustom = function(stringOne = "Fizz", stringTwo = "Buzz", numOne = 3, numTwo = 5) {

   var arr = [];
   for(let i = 1; i<=100; i++){
      if(i%numOne === 0 && i%numTwo === 0){
        arr[i-1]=stringOne+stringTwo;
      }else if(i%numOne === 0){
        arr[i-1]=stringOne;
      }else if(i%numTwo === 0){
        arr[i-1]=stringTwo;
      }
      else{
        arr[i-1]=i;
      }
   }
   console.log(arr);
   
};

fizzBuzzCustom("Hein", "Htet", 4, 5);