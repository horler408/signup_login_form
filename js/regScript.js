//Page Test
function alertName () {
	let name = prompt("What is your name?");
	alert("Hello " + name + ", nice to meet you!");	
}
//alertName();

//Password Validation
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-button');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-message');
const termsConditions = document.getElementById('terms-conditions');
const userType = document.getElementById('user-decision');
const userOption = document.getElementById('option');


//Password Confirmation
passwordInput.addEventListener('input', validPassword);
confirmPassword.addEventListener('blur', passwordMatch);
userType.addEventListener('change', toggleShow);
passwordInput.addEventListener('blur', passwordBlur);


//Function Declaration
function validPassword(e) {
	if (e.target.value.length >= 6 && e.target.value.length <= 20) {
		submitBtn.removeAttribute('disabled')
	}
	else {
		submitBtn.setAttribute('disabled', 'true');
	}
}


function passwordMatch() {
	if(passwordInput.value === confirmPassword.value && passwordInput.value != '') {
		passwordInput.style.border = 'thin solid green';
		confirmPassword.style.border = 'thin solid green';
		errorMsg.style.display = 'none';
	}
	else {
		passwordInput.style.border = 'thin solid red';
		confirmPassword.style.border = 'thin solid red';
		errorMsg.style.display = 'inline';
		submitBtn.setAttribute('disabled', 'true');
	}
}

function toggleShow (e) {
	if (e.target.value === 'YES') {
		userOption.style.display = 'block';
	}
	else {
		userOption.style.display = 'none';
	}
}

function passwordBlur () {
	if (confirmPassword.value === '') {
		submitBtn.setAttribute('disabled', 'true');
	}
	else {
		submitBtn.removeAttribute('disabled');	
	}
}
//Countries and State Library
populateCountries("country", "state");


//Terms and Conditions Checkbox
/*if (termsConditions.checked) {
	return true;
}
else {
	alert("You must agree to the terms and conditions");
	return false;
}
*/
/*if (!this.form.checkbox.checked) {
	alert("You must agree to the terms and conditions");
	return false;
}
else {
	return true;
}
*/
