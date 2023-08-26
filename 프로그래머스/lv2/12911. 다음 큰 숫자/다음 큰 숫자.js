function solution(n) {
    let nLength = n.toString(2).split("").filter(x => x === "1").length
    for(let i = n + 1; i <= 1000000; i++) {
        let iLength = i.toString(2).split("").filter(x => x=== "1").length
        if(nLength === iLength) {
            return i
        }
    }
}