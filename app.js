// Sign in with Google
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    signInWithProvider(provider);
}

// Sign in with Facebook
function signInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    signInWithProvider(provider);
}

// Sign in with GitHub
function signInWithGitHub() {
    const provider = new firebase.auth.GithubAuthProvider();
    signInWithProvider(provider);
}

// Common function for signing in with a provider
function signInWithProvider(provider) {
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log(result.user);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Send OTP to the provided phone number
function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
            console.error(error);
        });
}

// Verify OTP
function verifyOTP() {
    const verificationCode = document.getElementById('verificationCode').value;

    window.confirmationResult.confirm(verificationCode)
        .then((result) => {
            console.log(result.user);
        })
        .catch((error) => {
            console.error(error);
        });
}
