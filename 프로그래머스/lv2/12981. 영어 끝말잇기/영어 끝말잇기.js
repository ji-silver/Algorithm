function solution(n, words) {
    
    // words 배열 반복문으로 검사 => 단어 끝과 다음단어 시작을 비교
    // 이미 나온 단어 확인 => 배열에 저장
    
    let arr = [];
    let preArr = words[0] // 이전 단어 저장
    arr.push(preArr) // 첫번 째 단어 arr 저장
    
    for(let i = 1; i < words.length; i++) {
        let word = words[i] // 현재 단어
        let last = preArr[preArr.length - 1] // 끝글자
        
         // 이미 나왔던 단어이거나, 끝단어가 다른경우 탈락
        if(arr.includes(word) || last !== word[0]) {
            let num = (i % n) + 1; // 번호 계산 (0 % 3 = 0 + 1 ...)
            let turn = Math.ceil((i + 1) / n) // 차례
            return [num, turn]
         } 
        
        // 현재 단어 배열에 추가
        arr.push(word);
        preArr = word
    }
    
    return [0, 0];
}