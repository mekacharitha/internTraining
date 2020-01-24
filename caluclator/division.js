/*
const division = (...operand) => {
    const reducer = (prev, curr) => prev / curr;
    return(operand.reduce(reducer));
}
*/
const division= (op1,op2) => {
    return(op1/op2);
}
module.exports.division = division;