function solution(n,a,b)
{
    // 게임 참가자 수 = n, 참가자 번로 = a, 경쟁자 번호 = b
    // a와 b는 항상 이김
    
    let round = 1;
    
    while (true) {
        a = Math.ceil(a / 2)
        b = Math.ceil(b / 2)
        
        if(a === b) {
            return round
        }
        
        round ++
    }
}