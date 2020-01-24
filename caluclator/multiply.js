/*
const multiply = (...operand) => {
    const reducer = (prev, curr) => prev * curr;
    return(operand.reduce(reducer,1));
}
*/
const multiply = (op1,op2) => {
    return(op1*op2);
}
module.exports.multiply = multiply;