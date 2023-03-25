function solution(before, after) {
    let beforeArr = [...before].sort().join("");
    let afterArr = [...after].sort().join("");
    return beforeArr == afterArr ? 1 : 0;
}