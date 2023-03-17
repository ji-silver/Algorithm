function solution(my_string) {
    return my_string.replace(/[^0-9]/g, "").split("").map(Number).reduce((a, b) => a + b);
}