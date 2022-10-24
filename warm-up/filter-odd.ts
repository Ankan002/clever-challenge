// Time Complexity: O(n)
// Space Complexity: O(n)
const filterOdd = (nums: Array<number>): Array<number> => nums.filter((num) => num % 2 !== 0);

console.log(filterOdd([5, 3, 2, 8, 9, 7]))
