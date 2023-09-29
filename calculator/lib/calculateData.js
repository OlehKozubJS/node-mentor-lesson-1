function calculate(op, numbers) {
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

module.exports = calculate;
