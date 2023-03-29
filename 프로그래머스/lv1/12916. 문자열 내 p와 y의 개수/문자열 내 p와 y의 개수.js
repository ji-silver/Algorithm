function solution(s){
    let arr = s.toLowerCase().split("");
    let strP = 0;
    let strY = 0;
    
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] === 'p') {
            strP++;
        } else if(arr[i] === 'y') {
            strY++
        } else {}
    }
    return strP === strY ? true : false;
}