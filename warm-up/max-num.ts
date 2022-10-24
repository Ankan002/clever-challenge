// Time Complexity: O(n)
// Space Complexity: O(1)
const findMax = (nums: Array<number>): number => {
    if(nums.length < 1) return -1;

    let maxNum = nums[0];

    for(let i=1; i<nums.length; i++){
        if(maxNum < nums[i]) maxNum = nums[i];
    }

    return maxNum;
}

console.log(findMax([5, 4, 2, 10, 15, 5]));