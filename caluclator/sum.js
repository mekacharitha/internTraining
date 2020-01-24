/*
const sum = (...operand) => {
    const reducer = (prev, curr) => prev + curr;
    return(operand.reduce(reducer,0));
}
*/
const sum = (op1,op2) => {
    return(op1+op2);
}
module.exports.sum = sum;