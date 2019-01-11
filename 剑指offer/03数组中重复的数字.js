/**
 * Create By liuchuan on 2019/1/5.
 * 判断数组是否有重复数字
 * 其中数组长度为n，数字的大小在0-n-1中
 */
// [2, 3, 1, 0, 2, 5, 3]
// 2 3 1 0 2 5 3
// 1 3 2 0 2 5 3
// 3 1 2 0 2 5 3
// 0 1 2 3 2 5 3


// 1 8 4 5 3 0 6 4 3
// 8 1 4 5 3 0 6 4 3
// 3 1 4 5 3 0 6 4 8
// 5 1 4 3 3 0 6 4 8
// 3 1 4 3 5 0 6 4 8
// 3 1 4 3 5 0 6 4 8

function duplicate(numbers, len) {
    if (numbers.length < 0 || len < 0) {
        return false;
    }
    for (var i = 0; i < len; i++) {
        if (numbers[i] < 0 || numbers[i] > len - 1) {
            return false;
        }
    }
    for (var i = 0; i < len; i++) {
        while (numbers[i] !== i) {
            if (numbers[i] === numbers[numbers[i]]) {
                return true;
            }
            var tem = numbers[i];
            numbers[i] = numbers[tem];
            numbers[tem] = tem;
        }
    }
    return false;
}

console.log(duplicate([2, 3, 1, 0, 2, 5, 3], 7));
