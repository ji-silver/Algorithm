function solution(d, budget) {
    
    let arr = d.sort((a, b) => a - b);
    let result = 0;
    for(let i = 0; i < d.length; i++) {
        budget = budget - arr[i]
        if(budget >= 0) { // 0보다 크면
            result++
        }
    }
    return result;
}