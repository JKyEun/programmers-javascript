let queries = [[0, 2, 0, 1, 5, 5, 3, 5], [0, 1, 0, 1, 1, 2, 3, 1, 2, 4]]

function solution(queries) {
  var answer = [];
  let count = 0;
  let start = 0;
  let end = 0;
  let N = 0;
  for (let i = 0; i < queries.length; i++) {
    count = 0;
    start = 0;
    end = queries[i].length-1;
    N = Math.floor(queries[i].length / 2);
    for (let j = 0; j < N; j++) {
      count += Math.abs(queries[i][start] - queries[i][end]);
      start++;
      end--;
    }

    if (queries.length % 2 === 1) {
      count += queries[i][N];
    }

    if (count % 2 === 1) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  }
  console.log(answer);
  return answer;
}

solution(queries);