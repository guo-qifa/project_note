

// var maxSubArray = function(nums) {
//   let ar = [];
//   for(let i = 0; i < nums.length; i++) {
//     let cur = nums[i];
//     let max = cur;
//     let arr = [];
//     arr.push(max);
//     for(let j = i + 1; j < nums.length; j++) {
//       var cu = nums[j];
//       if(max + cu > max) {
//         max += cu;
//         arr.push(max);
//       }
//       max += cu;

//     }
//     arr.sort((a, b) => b - a);
//     ar.push(arr[0]);
//   }
//   ar.sort((a, b) => b - a);
//   return ar[0];
// };

// var arr = [-2,1,-3,4,-1,2,1,-5,4]

// console.log(maxSubArray(arr));


// var groupAnagrams = function (strs) {
//   let ar = [];
  
//   for (let i = 0; i < strs.length; i++) {
//     let arr = [];
//     let cur = strs[i];
    
//     arr.push(cur);
    
//     strs.splice(i, 1);
//     for (let j = 0; j < strs.length; j++) {
//       let com = strs[j];
//       let count = 0;
//       if(cur == com) {
       
//         arr.push(com);
//         strs.splice(j, 1);
//         j--;
//         continue;
//       }
     
//       for (let v = 0; v < cur.length; v++) {

        
//         if (com.indexOf(cur[v]) > -1) {
//           count++;
//         }
//         if(count == cur.length) {
//           if(com.length == cur.length) {
            
//               var obj1 = {};
//               var obj = {};
//               for(var n = 0; n < cur.length; n++) {
                
//                 if(obj[cur[n]]) {
//                   obj[cur[n]] += 1;
//                 } else {
//                   obj[cur[n]] = 1;
//                 }
//               }
//               for (var m = 0; m < com.length; m++) {
//                 if(obj1[com[m]]) {
//                   obj1[com[m]] += 1;
//                 } else {
//                   obj1[com[m]] = 1;
//                 }
//               }
//               var flag = true;
//               for(var key in obj) {
//                 if(obj[key] != obj1[key]) {
//                   flag = false;
//                 }
//               }
//               if(flag) {
//                 arr.push(com);
//                 strs.splice(j, 1);
//                 j--;
//               }
              
            
//           }
          
//         }

//       }
      
//     }
//     i--;
//     ar.push(arr);
//   }

//   return ar;



// };

// [["rat"],["mig"],["paw"],["dad"],["len"],["bog"],["day","day"]]
// var arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
// var arr = ["tea","and","ace","ad","eat","dans"]
// var arr = ['dis','sid','sid']
// console.log(groupAnagrams(arr))


// var rotate = function (matrix) {
//   var arr = [];
//   var n = matrix.length;
//   for (var i = 0; i < matrix.length; i++) {
//     var cur = matrix[i];
//     for (var j = 0; j < cur.length; j++) {
//       arr.push(cur[j]);
//     }
//   }
//   for (var i = 0; i < matrix.length; i++) {
//     var cur = matrix[i];
//     for (var j = 0; j < cur.length; j++) {
//       cur[j] = arr[(n - j -1) * n + i ];
//     }
//   }
//   return matrix
// };
// var matrix =
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
// console.log(rotate(matrix));

// var permuteUnique = function (nums) {
//   var arr = [];
//   var ar = [];
//   function xxx(arr) {
//     for (var i = 0, len = nums.length; i < len; i++) {
//       if (arr.length == len - 1) {
//         if (arr.indexOf(i) < 0) {
//           var a = arr.concat(i);

//           ar.push(a);
//         }
//         continue;
//       }
//       if (arr.indexOf(i) < 0) {
//         xxx(arr.concat(i));
//       }
//     }
//   }
//   xxx(arr);
//   var y = [];
//   for (var k = 0; k < ar.length; k++) {
//     var cur = ar[k];
//     var yy = [];
//     for (var v = 0; v < cur.length; v++) {
//       var c = cur[v];
//       yy.push(nums[c]);
//     }
//     y.push(yy);
//   }
//   var obj = {};
//   for (var i = 0; i < y.length; i++) {
//     var cur = y[i].join('');
//     if (!obj[cur]) {
//       obj[cur] = cur;
//     } else {
//       y.splice(i, 1);
//       i--;
//     }
//   }
//   return y;
// };










// var str = [1,2,3,4,5];
// var count = 0;
// function arrange(s){
//  for(var i=0,length=str.length; i<length; i++) {
//   if(s.length == length - 1) {
//    if(s.indexOf(str[i]) < 0) {
//     count++;
//     console.log("组合"+count+"="+s + str[i]);
//    }
//    continue;
//   }
//   if(s.indexOf(str[i]) < 0) {
//    arrange(s+str[i]);
//   }
//  }
// }
// arrange("");

// var permute = function (nums) {
//   var arr = [];
//   var ar = [];
//   function xxx(arr) {
//     for (var i = 0, len = nums.length; i < len; i++) {
//       if (arr.length == len - 1) {
//         if (arr.indexOf(nums[i]) < 0) {
//           ar.push(arr.concat(nums[i]));
//         }
//         continue;
//       }
//       if (arr.indexOf(nums[i]) < 0) {
//         xxx(arr.concat(nums[i]));
//       }
//     }
//   }
//   xxx(arr);
//   return ar;
// };
// var nums = [1, 0, -3];
// console.log(permute(nums));





// var firstMissingPositive = function(nums) {
//     nums.sort((a, b) => a-b);
//     var count = 0;
//     for(var i = 0; i < nums.length; i++) {
//       var cur = nums[i];
//       if(cur == count + 1) {
//         count++;
//       } else if(cur > count+1){
//         return count + 1;
//       }
//     }
//     return count + 1;
// };

// var nums = [-1,2,3,4];
// console.log(firstMissingPositive(nums));


// var isValidSudoku = function(board) {

//   for(var i = 0; i < 9; i++) {
//     var obj = {};
//     var ob = {};
//     var o = {};
//     for(var j = 0; j < 9; j++) {
//       var cur = board[i][j];
//       var l_cur = board[j][i];

//       if(cur != '.'){
//         // 列
//         if(obj[cur]) {
//           return false;
//         } else {
//           obj[cur] = cur;
//         }

//       }
//       if(l_cur != '.'){
//         // 行
//         if(ob[l_cur]) {
//           return false;
//         } else {
//           ob[l_cur] = l_cur;
//         }
//       }
//     }
//   }

//   for(var i = 0; i <9; i += 3) {
//     for(var j = 0; j < 9; j += 3) {
//       var obj = {};
//       for(var v = 0; v < 3; v++) {

//         for(var o = 0; o < 3; o++) {
//           var cur = board[j+o][i+v];
//           if(cur != '.') {
//             if(obj[cur]) {
//               return false;
//             } else {
//               obj[cur] = cur;
//             }
//           }
//         }
//       }
//     }

//   }

//   return true;
// };

// var arr = [
// [".",".",".",".","5",".",".","1","."],
// [".","4",".","3",".",".",".",".","."],
// [".",".",".",".",".","3",".",".","1"],
// ["8",".",".",".",".",".",".","2","."],
// [".",".","2",".","7",".",".",".","."],
// [".","1","5",".",".",".",".",".","."],
// [".",".",".",".",".","2",".",".","."],
// [".","2",".","9",".",".",".",".","."],
// [".",".","4",".",".",".",".",".","."]]
// console.log(isValidSudoku(arr));






// var longestValidParentheses = function (s) {

//   var arr = [];
//   var key = null;
//   var obj = {
//     '(': ')'
//   }
//   var count = 0;
//   for (var i = 0; i < s.length; i++) {
//     // var cur_i = s[i];
//     key = s.charAt(i);
//     if(obj[key] ) {
//       arr.push(key);
//     } else if(obj[arr.pop()] == key) {
//       // if(arr.length == 0 ) {
//       //   count+= 2;
//       // }
//       count += 2;
//     }
//   }
//   // var len = arr.length;
//   // count = count - len*2;
//   return count;
// }

// var s = "()(()";
// console.log(longestValidParentheses(s));

// var nu = [1, 2, 3];
// var nextPermutation = function (nums) {
//   var first = nums[0];

//   // if(first[0] == nums[0]) {

//   // }
//   nums = nums.slice(1);
//   nums.sort((a, b) => b - a);
//   nums.unshift(first);
//   var max = null;
//   for (var i = 0; i < nums.length; i++) {
//     var cur = nums[i];
//     if (max <= cur) {
//       max = cur;
//     }
//   }
//   if (nums[0] == max) {
//       nums.sort((a, b) => a - b);


//   } else {

//   }
//   nu = nums.slice(0);
// };


// console.log(nextPermutation(nu))
// console.log(nu);





















// var findSubstring = function (s, words) {
//   var arr = [];
//   if (words.length == 0) return arr;
//   var len = words.length;
//   var w_len = words[0].length
//   var s_len = w_len*len;
//   for(var i = 0; i < s.length; i++ ) {
//     if(s.length - i < s_len) break;
//     var str = s.slice(i, i + s_len);
//     // s_arr.push(str); 
//     var clone = words.slice(0);
//     for(var j = 0; j < str.length; j+= w_len) {
//       var cur = str.slice(j, j + w_len);
//       var ind = clone.indexOf(cur);
//       if(ind == -1) break;
//       clone.splice(ind, 1);
//       if(clone.length == 0) {
//         arr.push(i);
//       }
//     }  
//   }
//   return arr;
// };


// var s = "lingmindraboofooowingdingbarrwingmonkeypoundcake";
// var arr = ["fooo","barr","wing","ding","wing"]
// console.log(findSubstring(s, arr));












// 没有完成

// var divide = function (dividend, divisor) {
//   var count = 0;
//   var flag1 = false;
//   var flag2 = false;
//   var flag = false;

//   if(dividend < 0 && divisor < 0) {
//     flag1 = true
//   } else if(dividend > 0 && divisor > 0) {
//     flag = true;
//   } else {
//     flag2 = true;
//   }
//   dividend = Math.abs(dividend);
//   divisor = Math.abs(divisor);
//   for (var i = 0; i < dividend; i += divisor) {
//     if (i + divisor <= dividend) {
//       count++;
//       if (count == 2147483648) break;
//     }
//   }

//   if(flag || flag1) {
//     return count -1;
//   } else if(flag2) {
//     return -count;
//   }


// };
// console.log(divide(-2147483648, -1));

// var removeDuplicates = function(nums) {
//   var obj = {};
//   var arr = [];
//   for(var i = 0; i < nums.length; i++){
//       if(obj[nums[i]]){
//           continue;
//       }else{
//           obj[nums[i]] = nums[i];
//           arr.push(nums[i])
//       }
//   }
//   return arr;
// };
// console.log(removeDuplicates([1,1,2]))

// var reverseKGroup = function (head, k) {
//   var arr = [];
//   while (head) {
//     if (head) {
//       arr.push(head.val);
//       head = head.next;
//     }
//   }
//   for (var i = 0; i < arr.length; i += k) {
//     var v = 0;
//     if (arr[i + k -1] != undefined) {
//       for (var j = k - 1+i; j >= Math.round((k - 1) / 2 + i); j--) {
//         if (arr[j] != undefined) {
//           var temp = null;
//           temp = arr[i+v];
//           arr[i+v] = arr[ j ];
//           arr[j] = temp;
//           v++;
//         }
//       } 
//     }else {
//       return arr;
//     }
//   }
//   return arr;
// };

// console.log(reverseKGroup(l, 4));
// var isValid = function (s) {
//   var obj = {
//     '(': ')',
//     '{': '}',
//     '[': ']'
//   };
//   var arr = [];
//   var key = null;
//   for(var i = 0; i < s.length;i++) {
//     key = s.charAt(i);
//     if(obj[key] ) {
//       arr.push(key);
//     } else if(arr.length == 0 || obj[arr.pop()] != key) {
//       return false
//     }
//   }
//   return arr.length == 0;
// }


// var isValid = function (s) {
//   var str = ['(', ')', '[', ']', '{', '}'];
//   if (s.length == 0) return true;
//   var arr = [];
//   if (s.length % 2 == 0) {
//     for (var i = 0; i < s.length; i++) {
//       var cur = s[i];
//       if(cur == '(' || cur == '{' || cur == '[') {
//         arr.push(cur);
//       } else {
//         if(cur == ')') {
//           var ind = arr.indexOf('(');
//           if(ind == -1) return false;
//           if(arr.length - ind == i -arr.length+1) {
//             // arr.splice(ind,1);
//           } else {
//             return false;
//           }

//           if(i == s.length -1) return true;
//           continue;
//         }
//         if(cur == '}') {
//           var ind = arr.indexOf('{');
//           if(ind == -1) return false;
//           if(arr.length - ind == i -arr.length+1) {
//             // arr.splice(ind,1);
//           } else {
//             return false;
//           }
//           if(i == s.length -1) return true;
//           continue;
//         }
//         if(cur == ']') {
//           var ind = arr.indexOf('[');

//           if(ind == -1) return false;

//           if(arr.length - ind == i -arr.length+1) {
//             // arr.splice(ind,1);
//           } else {
//             return false;
//           }
//           if(i == s.length -1) return true;
//           continue;
//         }
//       }
//     }
//   } else {
//     return false;
//   }
// };

//   var s = '([({}])){}';

// console.log(isValid(s));












// var l = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: null
//       }
//     }
//   }
// }

// var removeNthFromEnd = function (head, n) {
//   var ar = [];
//   while (head) {
//     ar.push(head.val);
//     head = head.next;
//   }
//   return ar.splice(ar.length - n, 1);
//   // var lb = null;
//   // for (var i = 0; i < ar.length; i++) {
//   //   lb = {
//   //     val: ar[i],
//   //     next: lb
//   //   }


//   // }
//   // return lb;
// };

// console.log(removeNthFromEnd(l, 1))















// var fourSum = function (nums, target) {
//   nums.sort((a, b) => a - b);
//   var pre = null;
//   var arr = [];
//   var count = 0;
//   for (var i = 0; i < nums.length; i++) {
//     if (pre != nums[i]) {
//       pre = nums[i];
//       count = 1;
//       arr.push(nums[i]);
//     } else {
//       count++;
//       if (count <= 4) {
//         arr.push(nums[i]);
//       }
//     }
//   }
//   nums = arr;
//   var result = [];
//   for (var i = 0; i < nums.length; i++) {
//     var cur = nums[i];
//     for (var j = i + 1; j < nums.length; j++) {
//       var cur_j = nums[j];
//       for (var u = j + 1; u < nums.length; u++) {
//         var cur_u = nums[u];
//         for (var v = nums.length - 1; v > u; v--) {
//           var cur_v = nums[v];
//           var total = cur + cur_j + cur_u + cur_v;
//           if (total == target) {
//             var ar = [cur, cur_j, cur_u, cur_v];
//             ar.sort((a, b) => a - b);
//             result.push(ar);
//           }
//         }
//       }
//     }
//   }
//   var obj = {};
//   var a = [];
//   for( var i =0;i< result.length;i++) {
//     var key = result[i].join('');
//      if(obj[key]) {
//        continue;
//      } else {
//        obj[key] = result[i];
//        a.push(result[i]);
//      }
//   }
//   return a;


// };
// var nums = [1, 0, -1, 0, -2, 2];
// console.log(fourSum(nums, 0));
    // if(u == v) break;
    // while (u < v && j < u && i < j) {
    //   var total = nums[j] + nums[v] + nums[u];
    //   if (total + cur > target) {
    //     v--;
    //   } else if (total + cur < target) {
    //     if (u + 1 < v && u + 1 != v) {
    //       u++;
    //       if(u + 1 == v) {
    //         j++;
    //         u = j + 1;
    //       }
    //     } else if (u + 1 == v && j + 1 != u) {
    //       j++;
    //       u = j + 1;
    //     }
    //   } else {
    //     var ar = [nums[i], nums[j], nums[u], nums[v]]
    //     // ar.push(nums[i]);
    //     // ar.push(nums[j]);
    //     // ar.push(nums[u]);
    //     // ar.push(nums[v]);
    //     u --;

    //     result.push(ar);

    //   }
    // }

////////////////////////////////////////////////////////



// var threeSumClosest = function (nums, target) {
//   nums.sort(function (a, b) { return a - b });
//   var len = nums.length;

//   var arr = [];
//   for (var v = 0; v < len; v++) {
//     var i = len - 1;
//     var j = v + 1;
//     while (v < j && j < i) {
//       if (i > j) {
//         var num = nums[v] + nums[j] + nums[i];
//         arr.push(num);
//         if (i == j + 1) {
//           j++;
//           i = len - 1
//         } else {
//           i--;
//         }

//       }


//     }
//   }
//   var obj = {};
//   var ar = [];
//   for (var i = 0; i < arr.length; i++) {
//     var cha = arr[i];
//     if (!obj[cha]) {
//       obj[cha] = cha;
//       ar.push(obj[cha]);
//     }
//   }
//   ar.sort(function (a, b) { return a - b });
//   var min = null;
//   var ins = 0;
//   for(var i= 0;i<ar.length;i++) {
//     var nu = Math.abs(ar[i] - target);
//     if (min >= nu) {
//       min = nu;
//       ins = i;
//     } 
//     if(min == null) min = nu;
//     if(min == 0) break;

//   }

//   return ar[ins];
// };

// console.log(threeSumClosest([-1, 2, 1, -4], 1))



// [70,-65,-24,-80,76,-46,-30,-100,-53,0,-81,-64,-51,-72,-73,
//   -84,100,-38,-63,-46,-31,-96,35,-33,37,-29,-20,94,48,-18,
//   6,63,-83,61,-50,-50,66,75,-6,-21,41,-62,75,66,87,9,85,64,
//   71,44,98,-68,73,-97,-49,89,34,-51,38,-64,-32,83,-44,-15,36,
//   1,20,29,-10,-37,-9,-49,-8,50,-82,-36,-20,63,30,-11,3,33,-82,
//   -82,-20,51,78,71,65,-99,0,-58,53,-17,31,15,-7,-91,43,14,-23,
//   91,97,-87,-81,39,85,-34,50,87,-46,81,83,8,9,20,19,-100,-37,
//   -42,-2,31,-44,-91,83,40,-44,48,-58,-17,-45,-31,-80,-46,-14,67,
//   35,-70,29,-4,-69,73,30,-72,43,87,59,84,-81,-88,-84,-78,17,96,
//   39,-92,-76,19,51,-26,11,-13,63,41,93,5,-48,-26,63,44,53,42,-66,
//   -100,17,-42,4,-65,-17,77,66,-51]  
//   , 143











// var letterCombinations = function (digits) {
//   var arr1 = digits.split('');
//   var strall = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
//   var arr = [];
//   var result = []
//  for(var i = 0;i< arr1.length;i++) {
//    var cur = arr1[i];
//    arr.push(strall[Number(cur) - 2]);
//  }
//   for (let i = 0; i < arr.length; i+=2) {
//     if(arr.length%2 == 0) {
//       result = fn(result, arr[i], arr[i+1]);
//     }
//     if(arr.length%2 == 1) {
//       if(i == arr.length - 1) {
//         result = fn(result, arr[i],);
//       } else {
//         result = fn(result, arr[i], arr[i+1]);
//       }
//     }
//   }
//   return result;
// }

// function fn(ar, str1, str2) {
//   let arr = [];

//   if (ar.length == 0) {
//     for (var i = 0; i < str1.length; i++) {
//       if(str2) {
//         for (var j = 0; j < str2.length; j++) {
//           arr.push(str1[i] + str2[j]);
//         }
//       } else {
//         arr.push(str1[i]);
//       }

//     }
//   } else {
//     for (var x = 0; x < ar.length; x++) {
//       for (var i = 0; i < str1.length; i++) {
//         if( str2) {
//           for (var j = 0; j < str2.length; j++) {
//             arr.push(ar[x] + str1[i] + str2[j]);
//           }
//         } else {
//           arr.push(ar[x] + str1[i]);
//         }

//       }
//     }
//   }


//   return arr;
// };


//  console.log(letterCombinations('7'));
// console.log(arr);
// console.log(fn(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"], 'jhl'));

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */


// var threeSumClosest = function (nums, target) {
//   nums.sort(function (a, b) { return a - b });
//   var len = nums.length;
//   var arr = [];
//   for (var v = 0; v < len; v++) {
//     var i = len - 1;
//     var j = v + 1;
//     if (nums[v] > 0) break;
//     while (v < j && j < i && nums[j] >= 0) {
//       if (i > j) {
//         var num = nums[v] + nums[j] + nums[i];
//         arr.push(num);
//         if (i == j + 1) {
//           j++;
//           i = len - 1
//         } else {
//           i--;
//         }
//       }
//     }
//   }
//   var obj = {};
//   for (var i = 0; i < arr.length; i++) {
//     var cha = arr[i];
//     if (!obj[cha]) obj[cha] = cha;
//   }
//   var ar = [];
//   for (var key in obj) {
//     ar.push(obj[key]);
//   }
//   ar.sort(function (a, b) { return a - b });
//   var ar1 = {};
//   var ar2 = [];
//   ar.forEach((item, index) => {
//     var nu = Math.abs(item - target);
//     ar1[nu] = index;
//     ar2.push(nu);
//   });
//   ar2.sort(function (a, b) { return a - b });
//   return ar[ar1[ar2[0]]];
// };

// console.log(threeSumClosest([0, 2, 1, -3], 1))


// function pre_filter(nums) {
//   nums.sort((a, b) => a-b);
//   let result = [];
//   let prenum = null;
//   let count = 0;
//   for( let i = 0; i < nums.length; i++) {
//     if(prenum == nums[i]) {
//       count++;
//       if(nums[i] == 0) {
//         if(count <= 3) {
//           result.push(nums[i]);
//         }
//       } else {
//         if(count <= 2) {
//           result.push(nums[i]);
//         }
//       }
//     } else {
//       prenum = nums[i];
//       result.push(nums[i]);
//       count = 1;
//     }
//   }


//   return result;
// }
// let num = [-1, -2,-1,-1,-2,-2,0,0,0,0,1,1,1,1,2,2,2,3,3,3]
// console.log(pre_filter(num))
// var threeSum = function (nums) {
//   nums.sort(function (a, b) { return a - b });
//   var obj = {};
//   var result = [];
//   for (let v = 0; v < nums.length; v++) {
//     var cur = nums[v];
//     if (cur > 0) break;
//     var len = nums.length;
//     var i = len - 1;
//     var j = v + 1;
//     while (j < i && v < j && nums[i]>=0) {
//       var num = nums[i] + nums[j];
//       if (num < -cur) {
//         j++;
//       } else if (num > -cur) {
//         i--;
//       } else {

//         var arr = [cur, nums[i], nums[j]];
//         arr.sort(function (a, b) { return a - b });
//         var key = arr.join(',');
//         if (!obj[key]) {
//           obj[key] = key;
//           result.push(arr);
//         }
//         i--;
//         j++;
//       }
//     }


//   }
//   return result;

// }


// var nums = [-1, 0, 1, 2, -1, -4];
// console.log(threeSum(nums));
// function cb(a, b, c) {
  //   var arr = [a, b, c];
  //   arr.sort(function (a, b) { return a - b });
  //   var key = arr.join(',');
  //   if (obj[key]) return;
  //   obj[key] = key;
  //   // if(index1 == index2 || index2 || index3) return;
  //   ar.push(arr);
  // }
// function t(total, nums, cb, index1) {


//   var len = nums.length;
//   var i = len - 1;
//   var j = 0;
//   var num;
//   while (j < len && i >= 0) {
//     index2 = i;
//     index3 = j;
//     num = nums[i] + nums[j];
//     if (num < total) {
//       j++;
//     } else if (num > total) {
//       i--;
//     } else {
//       if (index1 == index2 || index2 == index3 || index1 == index3) {

//       } else {
//         cb(-total, nums[i], nums[j]);
//       }

//       // console.log(nums[i], nums[j])
//       i--;
//       j++;
//     }
//   }
// }
// var threeSum = function (nums) {
//   // if(nums.length == 1 && nums[0] == 0) return [];
//   if (nums.length == 1) return [];
//   var arr = [];
//   for (var i = 0; i < nums.length; i++) {
//     var cur_i = nums[i];
//     for (var j = i + 1; j < nums.length; j++) {
//       var cur_j = nums[j];
//       for (var k = j + 1; k < nums.length; k++) {
//         var cur_k = nums[k];
//         var ar = [];
//         if (cur_i + cur_j + cur_k == 0) {
//           ar.push(cur_i);
//           ar.push(cur_j);
//           ar.push(cur_k);
//           arr.push(ar);
//         }
//       }
//     }
//   }
//   for (var i = 0; i < arr.length; i++) {
//     var cur_a = arr[i];
//     for (var x = i + 1; x < arr.length; x++) {
//       var arr_x = arr[x];
//       var index1 = cur_a.indexOf(arr_x[0]);
//       var index2 = cur_a.indexOf(arr_x[1]);
//       var index3 = cur_a.indexOf(arr_x[2]);
//       if (i == x) break;
//       if (index1 == -1 || index2 == -1 || index3 == -1) {

//       } else {

//         if (index1 == index2 && index2 == index3) {
//           if (arr_x[0] == cur_a[0] && arr_x[1] == cur_a[1]) {
//             arr.splice(x, 1);
//             x--;
//           }
//         } else {
//           arr.splice(x, 1);
//           x--;
//         }

//         // }

//       }
//     }
//   }
//   return arr;
// };
// var nums = [-1, 0, 1, 2, -1, -4];
// console.log(threeSum([0, 0, 0, 0]));

// var longestCommonPrefix = function (strs) {
//   if (strs.length == 0) return '';
//   if (strs.length == 1) return strs[0];
//   var cur = strs[0];
//   var curr = strs[0][0];
//   var s = '';
//   var falg = false;
//   var len = strs.length;
//   for (var j = 0; j < cur.length; j++) {
//     var str = cur[j];


//     for (var i = 1; i < len; i++) {
//       // if(strs[i].length <= j) break;
//       // if(strs[i].length >= j) break;
//       if (strs[i][0] != curr) break;
//       if (strs[i][j] == str && strs[i][j]) {
//         falg = true;
//         if (i == strs.length - 1 && falg) {
//           s += str;
//         } else {
//           falg = false;
//         }
//         continue;
//       } else {
//         return s;
//       }
//     }
//   }
//   return s;
// };

// console.log(longestCommonPrefix(["aaa","aa","aaa"]));
























// var romanToInt = function (s) {
//   var num_arr = [1000, 500, 100, 50, 10, 5, 1];
//   var str = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
//   var res = 0;
//   for (var i = 0; i < s.length; i++) {
//     var cur = s[i];
//     var index = str.indexOf(cur);

//     var cur_num = num_arr[index];
//     if (num_arr[str.indexOf(s[i + 1])] <= cur_num) {
//       res += cur_num;
//     } else {
//       if (i + 1 == s.length) res += cur_num;
//       else res -= cur_num;
//     }

//   }
//   return res;
// };

// console.log(romanToInt('III'));









// var intToRoman = function (num) {
//   var num_arr = [1000,900,500,400,100,  90,  50,  40,   10,  9,   5,  4,   1];
//   var num_str = ['M','CM','D','CD','C','XC','L','XL',   'X','IX','V','IV','I'];
//   var res = '';
//   for(var i=0;i<num_arr.length;i++) {
//     var cur = num_arr[i];
//     if(num<cur) continue;
//     while(num>=cur) {
//       num = num - cur;
//       res += num_str[i];
//     }
//   }
//   return res;
// };
// console.log(intToRoman(8));














// var maxArea = function(height) {
//     var max = 0;
//     var num = 0;
//     for(var i=0;i<height.length-1;i++) {
//       var curr = height[i];
//       for(var j = height.length -1;j>=0;j--) {
//         var end = height[j];
//         if(i == j) continue;
//         if(curr < end) {
//           if( j>i ) {
//             if(max <= curr*(j-i)) {
//               max = curr*(j-i);
//             } 
//           }
//           if( j<i ) {
//             if(max <= curr*(i-j)) {
//               max = curr*(i-j);
//             } 
//           }


//         }
//         if(curr>=end) {
//           if( j>i ) {
//             if(max <= end*(j-i)) {
//               max = end*(j-i);
//             }
//           }
//           if( j<i ) {
//             if(max <= end*(i-j)) {
//               max = end*(i-j);
//             } 
//           }
//         }
//       }

//     }
//     return max;
// };

// console.log(maxArea([1,1]));



























//  var findNode = function createFindNode(currNode) {
//   return function(key){
//       //循环找到执行的节，如果没有返回本身
//       while (currNode.data != key) {
//           currNode = currNode.next;
//       }
//       return currNode;                
//   }
// }(headNode);
// console.log(findNode('arron2'));












