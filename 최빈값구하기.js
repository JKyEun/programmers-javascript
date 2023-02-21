function solution(array) {
  let answer = 0;
  let num = 0;
  let check = 0;
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], 0);
  }
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], map.get(array[i])+1);
  }
  for (let [key, value] of map) {
    if (value > num) {
      answer = key;
      num = value;
    }
  }
  let newArr = [...new Set(array)];
  for (let i = 0; i < array.length; i++) {
    if (map.get(newArr[i]) === num) {
      check++;
    }
  }
  if (check > 1) {
    answer = -1;
  }
  return answer;
}

solution([1, 1, 2, 2]);