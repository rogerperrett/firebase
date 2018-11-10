firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		// User is signed in.
        document.getElementById("user-div").style.display = "initial";
        document.getElementById("login-div").style.display = "none";
        document.getElementById("dashboard-div").style.display = "initial";
	} else {
		// No user is signed in.
        document.getElementById("user-div").style.display = "none";
        document.getElementById("login-div").style.display = "initial";
        document.getElementById("dashboard-div").style.display = "none";
	}
})

function login() {
	var userEmail = document.getElementById('inputEmail').value
	var userPass = document.getElementById('inputPassword').value
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		window.alert("Error: " + errorMessage);
		// ...
	});
}

function logout() {
	firebase.auth().signOut()
}