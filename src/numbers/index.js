const isEven = (num) => {
  // write code for numbers.isEven

    return num % 2 == 0;

}

const sum = (arr) => {
  // write code for numbers.sum
  
    var answer = arr.reduce((a, b) => a + b, 0);
    return answer;

}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i]+arr[j] == sum) {
              return true;
            }
          }
        }
        return false;
}

module.exports = {
  isEven,
  sum,
  comboSum
}