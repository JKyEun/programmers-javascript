function solution(keyinput, board) {
  const limitX = Math.floor(board[0] / 2);
  const limitY = Math.floor(board[1] / 2);
  let answer = [0, 0];
  for (let i = 0; i < keyinput.length; i++) {
      const key = keyinput[i];
      if (key === "left" && answer[0] > -1 * limitX) {
        answer[0]--;
      } else if (key === "right" && answer[0] < limitX) {
        answer[0]++;
      } else if (key === "up" && answer[1] < limitY) {
        answer[1]++;
      } else if (key === "down" && answer[1] > -1 * limitY) {
        answer[1]--;
      }
  }

  return answer;
}

console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));