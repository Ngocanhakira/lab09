/* write functions that define the action for each event */
function validate() {
	var sid = document.getElementById("sid").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var uname = document.getElementById("uname").value;

	var errMsg = "";  // stores the error message
	var result = true;  // assumes no errors
	var pattern = /^[a-zA-Z ]+$/;  // regular expression for letters and spaces only

	// Rule 1: Check if all required inputs have value
	if (sid === "" || pwd1 === "" || pwd2 === "" || uname === "") {
		errMsg += "Please fill in all required fields.\n";
	}

	// Rule 2: Check if the user ID contains an @ symbol
	if (!sid.includes("@")) {
		errMsg += "User ID must contain an '@' symbol.\n";
	}

	// Rule 3: Check if password and retype password are the same
	if (pwd1 !== pwd2) {
		errMsg += "Passwords do not match.\n";
	}

	// Rule 4: Check if user name contains only letters and spaces
	if (!uname.match(pattern)) {
		errMsg += "User name contains invalid characters.\n";
	}

	// Display error message if any error(s) is/are detected
	if (errMsg !== "") {
		alert(errMsg);
		result = false;
	} 
	return result;
}

/* link HTML elements to corresponding event function */
function init() {
	/* link the variables to the HTML elements */
	var regForm = document.getElementById("regform");

	/* assigns functions to corresponding events */
	regForm.onsubmit = validate;
}

/* execute the initialization function once the window loads */
window.onload = init;