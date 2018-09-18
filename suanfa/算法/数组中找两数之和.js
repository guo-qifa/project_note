var twoSum = function (nums, target) {
  var arr = [];
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const curr = nums[j];
      if (i == j) {

      } else {
        if (target == (cur + curr)) {
          arr.push(i);
          arr.push(j);
        }
      }
    }
  }
  return arr;
};
twoSum([2, 7, 4, 9, 55], 9);