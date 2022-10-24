// Time Complexity: O(n)
// Space Complexity: O(1)
const numsSum = (nums: Array<number>): number => {
    let sum = 0;

    for(let num of nums){
        sum += num;
    }

    return sum;
}

console.log(numsSum([3, 5, 9, 15]));
