var fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
  stringOne = (stringOne == undefined) ? "Fizz" : stringOne;
  stringTwo = (stringTwo == undefined) ? "Buzz" : stringTwo;
  numOne = (numOne == undefined) ? 3 : numOne;
  numTwo = (numTwo == undefined) ? 5 : numTwo;
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

fizzBuzzCustom();