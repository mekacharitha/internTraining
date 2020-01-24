/*
const difference = (...operand) => {
    const reducer = (prev, curr) => prev - curr;
    return(operand.reduce(reducer));
}
*/
const difference = (op1,op2) => {
    return(op1-op2);
}
module.exports.difference = difference;