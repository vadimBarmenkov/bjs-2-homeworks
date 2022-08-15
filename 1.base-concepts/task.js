function solveEquation(a, b, c) {
  let arr;
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if ( discriminant == 0){
    arr = [-b / 2 * a];
  }

  if (discriminant > 0){
    arr = [((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2), ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2)];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  // код для задачи №2 писать здесь
  return totalAmount;
}
