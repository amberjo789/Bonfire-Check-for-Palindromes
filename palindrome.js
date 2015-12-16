function palindrome(str) {
  
  str=str.toLowerCase();
  //getting rid of whitespaces in the string
  str=str.replace(/[\W_]/g,'');
  
  //create strArr filled with str chars
  var strArr = str.split("");
  
  //create revStrArr filled with chars from str
  //in reversed positions
  var revStrArr = str.split("").reverse();
 
  for(var i=strArr.length;i>0;i--) {
	    for(var j=revStrArr.length; j>0; j--) {
      if(strArr[i] == revStrArr[j]) {
	        i--;
	        }
	        else
	          return false;
	      }
	      return true;
	    }
}

palindrome("eye");
palindrome("not a palindrome");