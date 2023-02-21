const lotteries = [[100, 100, 500], [1000, 1000, 100]];

function solution(lotteries) {
    var answer = 0;
    let percentMoney = [];
    for (let i = 0; i < lotteries.length; i++) {
      percentMoney.push([lotteries[i][0], lotteries[i][1], lotteries[i][2], lotteries[i][0] / (lotteries[i][1]+1)]);
    }
    percentMoney.sort((a, b) => b[2] - a[2]);
    percentMoney.sort((a, b) => b[3] - a[3]);
    percentMoney[0].pop();
    for (let i = 0; i < lotteries.length; i++) {
      if (lotteries[i][0] === percentMoney[0][0] && lotteries[i][1] === percentMoney[0][1] && lotteries[i][2] === percentMoney[0][2]) {
        answer = i+1;
      }
    }
    return answer;
}

solution(lotteries);