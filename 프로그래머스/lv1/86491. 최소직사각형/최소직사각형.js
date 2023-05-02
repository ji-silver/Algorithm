function solution(sizes) {
    // sizes[0]; => [60, 50]
    // sizes[0][0]; => 60
    // sizes[0][1]; => 50
    
    // 가로 길이 중 큰거
    // 세로 길이 중 큰거
    
    let maxNum = 0;
    for(let i = 0; i < sizes.length; i++) {
        sizes[i].sort((a, b) => b - a)
        if(maxNum < sizes[i][0]) {
            maxNum = sizes[i][0]
        }
    }
    
    let secNum = 0;
    for(let j = 0; j < sizes.length; j++) {
        if(secNum < sizes[j][1]) {
            secNum = sizes[j][1]
        }
    }
    return maxNum * secNum;
}