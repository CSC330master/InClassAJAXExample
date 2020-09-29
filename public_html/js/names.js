//Sahar Al Seesi
//09/29/2020
//Client for name suggestions client/server application

const urlPrefix="http://35.231.37.179/";

//attach showHit to the keyup event of the text box with ID letters (check html file)  
document.getElementById("letters").addEventListener("keyup",showHint);

function showHint() {
	//if text box empty, don't show any hints
    if (this.value.length == 0) { 
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
    let AJAX = new XMLHttpRequest(); //create AJAX object
  	AJAX.onerror = function() {  //attach error even handler
		alert("Network error");
	}
	AJAX.onload = function() { //attach load event handler
		if (this.status == 200){ //if server resturn status 200 (success)
			console.log(this.responseText); //debugging
			//convert JSON string to an object and extract the names array from 
			// the object
			let names = JSON.parse(this.responseText).names;
			//initialze the string to be displayed to the empty string
			let namesStr = "";
			// iterate through the indices for the names array
			for (k in names)
				//concatinate names into namesStr
				namesStr = namesStr + " " + names[k];
			//display the generated namesStr	
		    document.getElementById("txtHint").innerHTML = namesStr;
		} //if	
		
		else{ //if status is not 200, display error
			alert("Server AJAX error");
			//debugging
			console.log(this.status);
			console.log(this.responseText);
		} //else
			
	}   //onload     
	//setup the connection parameters
	AJAX.open("GET",urlPrefix+"getNames?letters="+this.value);
	//send the request
	AJAX.send();
   } //else
}  //showhint
