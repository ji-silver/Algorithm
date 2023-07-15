function solution(food) {
  let arrA = [];
  let arrB = [];
  for (let i = 1; i < food.length; i++) {
    if (food[i] === 1) {
      continue;
    }
    let num = Math.floor(food[i] / 2);

    arrA = arrA.concat(new Array(num).fill(i));
    arrB = [...arrA].reverse();
  }
  let result = arrA.join("") + "0" + arrB.join("");
  return result;
}
