
function inPutAge(){
	
	var age = document.getElementById("age").value;
	
	if(age<18){
		document.getElementById("OldEnough").innerHTML="You are NOT old enough to vote.";
		document.getElementById("age").value="";
		document.getElementById("age").focus();
	}else if(age=>18){
		document.getElementById("OldEnough").innerHTML="Please Vote.";
	
	}
}