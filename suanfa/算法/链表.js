
var l1 = {
  val: 1,
  next: null
}
var l2 = {
  val: 9,
  next:{
    val: 9,
    next: null
  } 
}


var addTwoNumbers = function (l1, l2) {
  var jinwei = 0;
  var curr = 0;
  var arr = []
  while(l1 || l2 || jinwei == 1) {
    var val1,val2;
    
      if(l1) {
        val1 = l1.val;
        l1 = l1.next;
      }else {
        val1 = 0
      }  
      if(l2) {
        val2 = l2.val;
        l2 = l2.next;
      }else {
        val2 = 0
      }  
    
    if(jinwei == 1) {
      curr = val1 + val2 + jinwei;
    } else {
      curr = val1+ val2;
    }
    
    
    if(curr>=10){
      curr = curr;
      jinwei = 1;
    } 
    else {
      curr = val1 + val2 + jinwei;
      jinwei = 0;
    }
    
    var ar = curr%10;
    
    arr.push(ar);
    
    
  }
  return arr;
  
  
};



console.log(addTwoNumbers(l1, l2));




























