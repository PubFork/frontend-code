/**
 * Create By liuchuan on 2018/12/10.
 */
//todo
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums.sort((a, b) => a > b);
    for(var i = 0; i < nums.length; i++){
        if(nums[i] !== i){
            return i;
        }
    }
   return 0;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
