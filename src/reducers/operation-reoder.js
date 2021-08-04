const multiplication = (a) => (b) => a*b;
const division = (a) => (b) => (b === 0) ? 'error' : a/b;
const addition = (a) => (b) => a+b;
const subtraction = (a) => (b) => a-b;
function operationReoder(display){
    let re = /[+,\-,*,/]/ig;
    let numbers = display.split(re);
    let operation = display.match(re);
    if (operation === null) {return numbers[0]};
    let operationLength = operation.length;
   while(operationLength > 0){
    if(operation.indexOf('*') > -1 && (operation.indexOf('*') < operation.indexOf('/') || operation.indexOf('/') <= -1) && numbers[operation.indexOf('*') + 1] !== ''){
       const i = operation.indexOf('*');
       const num1 = Number(numbers[i]);
       const num2 = (numbers[i+1] === '') ? 1 : Number(numbers[i+1]);
       numbers.splice(i, 2, multiplication(num1)(num2));
       operation.splice(i, 1);
    }else if(operation.indexOf('/') > -1 && (operation.indexOf('/') < operation.indexOf('*') || operation.indexOf('*') <= -1) && numbers[operation.indexOf('/') + 1] !== ''){
      const i = operation.indexOf('/');
      const num1 = Number(numbers[i]);
      const num2 = (numbers[i+1] === '') ? 1 : Number(numbers[i+1]);
      if(division(num1)(num2) === 'error'){return 'error'}
      numbers.splice(i, 2, division(num1)(num2));
      operation.splice(i, 1);
    }else if(operation.indexOf('+') > -1 && (operation.indexOf('+') < operation.indexOf('-') || operation.indexOf('-') <= -1)){
      const i = operation.indexOf('+');
      const num1 = Number(numbers[i]);
      const num2 = Number(numbers[i+1]);
      numbers.splice(i, 2, addition(num1)(num2));
      operation.splice(i, 1);
    }else if(operation.indexOf('-') > -1 && (operation.indexOf('-') < operation.indexOf('+') || operation.indexOf('+') <= -1)){
      const i = operation.indexOf('-');
      const num1 = Number(numbers[i]);
      const num2 = Number(numbers[i+1]);
      numbers.splice(i, 2, subtraction(num1)(num2));
      operation.splice(i, 1);
    }
   operationLength--;
   }
   return numbers[0];
 }

export default operationReoder;