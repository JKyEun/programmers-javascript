function solution(numer1, denom1, numer2, denom2) {
  let answer = [0, 0];
  let 분모 = denom1 * denom2;
  let 분자 = numer1 * denom2 + numer2 * denom1;
  let GCD = 0;
  function getGCD(분모, 분자) {
    if (분모 === 0) {
      GCD = 분자;
      return;
    }
    if (분자 === 0) {
      GCD = 분모;
      return;
    }
    if (분모 >= 분자) {
      getGCD(분모-분자, 분자);
    } else {
      getGCD(분자-분모, 분모);
    }
  }
  getGCD(분모, 분자);
  분모 = 분모 / GCD;
  분자 = 분자 / GCD;
  answer[0] = 분자;
  answer[1] = 분모;
  return answer;
}

console.log(solution(1, 2, 3, 4));