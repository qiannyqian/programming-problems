// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Given nums = [1,1,2],
// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// Example 2:
// Given nums = [0,0,1,1,1,2,2,3,3,4],
// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

// It doesn't matter what values are set beyond the returned length.
function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let number = 0;

  for (i = 0; i < nums.length; i++) {
    console.log('number == ' + number);
    console.log('i ==  ' + i);
    console.log('this is nums[i]: ' + nums[i]);
    console.log('this is nums[number]: ' + nums[number]);

    if (nums[i] != nums[number]) {
      console.log('nums[i] != nums[number]');
      number++;
      nums[number] = nums[i];
      console.log('this is new nums[number]: ' + nums[number]);
    } else {
      console.log('nums[i] == nums[number], lets move on');
    }

    console.log('current number: ' + number);
  }
  console.log('this will be the result: ' + (number + 1));
  return number + 1;
}
