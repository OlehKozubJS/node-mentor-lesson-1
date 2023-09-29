class Calculator {
  constructor(operator, numbersArr) {
    this.operator = operator;
    this.numbersArr = numbersArr;
  }

  init() {
    return this.calculate(this.operator, this.numbersArr);
  }

  calculate(op, numbers) {
    switch (op) {
      case "sum":
        return numbers.reduce((total, number) => total + number);
      case "sub":
        return numbers.reduce((total, number) => total - number);
      case "mult":
        return numbers.reduce((total, number) => total * number);
      case "div":
        return numbers.reduce((total, number) => total / number);
      default:
        return "unknown operation type";
    }
  }
}
const [operator, ...args] = process.argv.slice(2);
const numbersArr = args.map((number) => Number(number));

module.exports = new Calculator(operator, numbersArr);
