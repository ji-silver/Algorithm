function solution(num) {
  let i = num;
  let result = 0;

  while (i !== 1) {
    if (i % 2 === 0) {
      i = i / 2;
    } else {
      i = i * 3 + 1;
    }
    result++;

    if (result === 500) {
      return -1;
    }
  }

  return result;
}
