function solution(A, B) {
    var downStream = []
    var upStream = []
    var fishMove
    
    for (var j = 0; j < A.length; j++) {
        fishMove = B[j]

        if (fishMove === 0) {
            while (downStream.length > 0) {
                var k = downStream.pop()

                if (k > A[j]) {
                    downStream.push(k)
                    break
                }
            }
        
            if (downStream.length === 0) {
                upStream.push(A[j])
            }
        } else {
            downStream.push(A[j])
        }
    }
    
    return downStream.length + upStream.length    
}