function solution(s) {
    const numbers = s.split(' ').map(x => Number(x));
    const maxNum = Math.max(...numbers);
    const minNum = Math.min(...numbers);
    return minNum.toString() +' '+ maxNum.toString()
}