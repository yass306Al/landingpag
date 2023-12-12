
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};


firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();


function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          console.log('Login successful:', userCredential.user);
          
      })
      .catch((error) => {
          console.error('Login error:', error.message);
      });
}

// Show signup form
function signup() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          console.log('Signup successful:', userCredential.user);
          // Add your logic after successful signup
      })
      .catch((error) => {
          console.error('Signup error:', error.message);
      });
}

