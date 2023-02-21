function solution(babbling) {
  let answer = babbling.length;
  let newBabbling = babbling;
  const aya = /aya/gi;
  const ye = /ye/gi;
  const woo = /woo/gi;
  const ma = /ma/gi;
  for (let i = 0; i < babbling.length; i++) {
    newBabbling[i] = newBabbling[i].replace(aya, "1");
    newBabbling[i] = newBabbling[i].replace(ye, "1");
    newBabbling[i] = newBabbling[i].replace(woo, "1");
    newBabbling[i] = newBabbling[i].replace(ma, "1");
  }

  for (let i = 0; i < newBabbling.length; i++) {
    for (let j = 0; j < newBabbling[i].length; j++) {
      if (newBabbling[i][j] !== "1") {
        answer--;
        break;
      }
    }
  }
  console.log(answer);
  return answer;
}

solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);
