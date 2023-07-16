function solution(array, commands) {
  let arr = [];
  for (let i = 0; i < commands.length; i++) {
    let first = commands[i][0];
    let second = commands[i][1];
    let num = commands[i][2];
    let ex = array.slice(first - 1, second);
      
    ex.sort((a, b) => a - b);
    arr.push(ex[num - 1]);
  }

  return arr;
}
