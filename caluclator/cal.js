//REQUIREMENTS
//1.Take a mathematical expression containing only (+,-,*,/) using command line arguments
//2.Caluclate the value of the expression using modules defined for each mathematical operators
//3.Print the final output 


//importing the different arithmetic function modules
const sum = require('./sum');
const difference = require('./difference');
const multiply = require('./multiply');
const  division= require('./division');


// Taking the mathematical expression as input from command line
const input = process.argv[2];


// Regular expression for finding all the digits in the given string
const reg = /(\d+\.\d+)|\d+/g;
// Array containing the digits
const operands = input.match(reg);


// Regular expression for finding the mathematical operators in the given string
const reg1 = /[+\-*\/]/g;
// Array containing the digits
const operators = input.match(reg1);


var operand1=Number(operands[0]);
var operand2=Number(operands[1]);
var accessingoperators=0;
var operandindex=2;

for(let i=0;i<operands.length-1 ;i++){
    switch(operators[accessingoperators]){
        case '+' :
            operand1=sum.sum(operand1,operand2);                  // calling the sum function
            break;
        case '-' :
            operand1=difference.difference(operand1,operand2);    // calling the difference function
            break;
        case '*' :
            operand1=multiply.multiply(operand1,operand2);        // calling the multiply function
            break;
        case '/' :
            operand1=division.division(operand1,operand2);       // calling the division function
            break;
    }
    operand2=Number(operands[operandindex++]);
    accessingoperators++;
}
console.log(`Final result is ${operand1}`);












/*const inp = [1,2,3,4,5];
console.log(sum.sum(...inp));
console.log(difference.difference(...inp));
console.log(multiply.multiply(...inp));
console.log(division.division(...inp));
*/


/*var i =0
const caluclation = (prev , curr ,i)=> {
    switch(operators[i]){
        case '+' :
            prev=sum.sum(parseInt(prev,10),parseInt(curr,10));
            i++;
            break;
        case '-' :
            prev=difference.difference(parseInt(prev,10),parseInt(curr,10));
            i++;
            break;
        case '*' :
            prev=multiply.multiply(parseInt(prev,10),parseInt(curr,10));
            i++;
            break;
        case '/' :
            prev=division.division(parseInt(prev,10),parseInt(curr,10));
            i++;
            break;
    }
}
console.log(operands.reduce(caluclation)); */