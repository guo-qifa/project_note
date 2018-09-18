中位数
  var findMedianSortedArrays = function (nums1, nums2) {
    var t_num = nums1.concat(nums2);
    var t_len = t_num.length;

    var n_arr = left_right(t_num);
    console.log(n_arr)
    var ind = Math.floor(t_len / 2);
    console.log(ind, t_len)
    if (t_len % 2 == 0) {
      console.log(n_arr[ind], n_arr[ind + 1])
      return Number((Number(n_arr[ind]) + Number(n_arr[ind - 1])) / 2);
    } else {
      return Number((n_arr[ind]).toFixed(1));
    }

  };
  function left_right(arr) {
    if (arr.length < 2) return arr;
    var left = [];
    var right = [];
    var index = Math.floor(arr.length / 2);
    var mid = arr.splice(index, 1);
    for (var i = 0; i < arr.length; i++) {
      var cur = arr[i];
      if (cur <= mid[0]) {
        left.push(cur);
      } else {
        right.push(cur);
      }
    }
    return left_right(left).concat(mid, left_right(right));
  }

  console.log(findMedianSortedArrays([1, 2, 3], [2, 3, 4, 5]));