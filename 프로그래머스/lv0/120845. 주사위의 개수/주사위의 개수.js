function solution(box, n) {
    let result = [];
    for (let i = 0; i < box.length; i++) {
        result.push(Math.floor(box[i] / n))
    }
    return result.reduce((a, b) => a * b);
}