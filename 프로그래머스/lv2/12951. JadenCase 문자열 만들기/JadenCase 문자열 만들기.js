function solution(s) {
    let arr = s.split(" ");
    let result = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "") {
            result.push("")
        } else {
            result.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase())
        }
    }
    return result.join(" ")
}
