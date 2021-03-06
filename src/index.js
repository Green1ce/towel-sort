
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let answer = [];
  if (matrix == undefined) return answer;
  for (let i = 0; i < matrix.length; i++) {
      if (i % 2 != 0) {
          for (let j = 0; j < matrix[i].length; j++) {
              matrix[i].unshift(0);
              answer.push(matrix[i].pop());
          }
      } else {
          for (let j = 0; j < matrix[i].length; j++) {
              answer.push(matrix[i][j]);
          }
      }
  }
  return answer;
}
