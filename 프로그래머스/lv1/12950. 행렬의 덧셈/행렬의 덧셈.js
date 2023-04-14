function solution(arr1, arr2) {
    // arr1[0] = [1, 2] / arr1[1] = [2,3]
    // arr1.length = 2
    // arr1[0].length = 2
        
    let arr = [];
        for(let i = 0; i < arr1.length; i++) { // arr1[0] ~ arr1[1]
            arr[i] = [];
            for(let j = 0; j < arr1[i].length; j++) { //arr1[0] ~
                arr[i][j] = arr1[i][j] + arr2[i][j]
            }
            
        }
    // return arr1[1].length;
    return arr;

}