var lengthOfLongestSubstring = function (s) {
  var str = '';
  if(!s) return 0;
  var n = 1;
  for (var i=0;i<s.length;i++) {
    var cur = s[i];
    if(str.indexOf(cur) == -1){
      str += cur;
      if(s.indexOf(str)>=0 && str.length > n) {
        n = str.length;
      }
    } else {
      str = str.substr(str.indexOf(cur)+1)
      str += cur;
    }
  }
  return n;
};

console.log(lengthOfLongestSubstring('dvdf'));