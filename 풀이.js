const s = "()()()"

function solution(s){
    
    const arr = s.split('');
    let arr2 = [];
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            arr2.push(arr[i]);
        } else {
            arr2.pop();
        }}
    
    let answer = true;

    if (arr2[0] === undefined) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}

console.log(answer);