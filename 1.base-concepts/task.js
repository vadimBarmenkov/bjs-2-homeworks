function solveEquation(a, b, c) {
  let arr;
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if ( discriminant == 0){
    arr = [-b / 2 * a];
  }

  if (discriminant > 0){
    arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  percent = Number(percent / 100);
  let S = Number(amount) * (1 + percent) - Number(contribution);


  // код для задачи №2 писать здесь

  return totalAmount;
}
