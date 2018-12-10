/**
 *  删除排序数组中的重复项
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    for(var i = 0; i < nums.length; i++){
        for(var j = i+1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                nums.splice(j, 1);
                j--;
            }
        }
    }
    return nums.length;
};

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));


/**
 * official
 * @param nums
 * @returns {*}
 */
var removeDuplicatesofficial = function(nums) {
    if (nums.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    console.log(nums)
    return i + 1;
};


console.log(removeDuplicatesofficial([1,1,1,2,2,3,3,4]));
