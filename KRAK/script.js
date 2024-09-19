// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "krakdemo-ccf21.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  // Signup
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      console.log('User signed up:', cred.user);
      signupForm.reset();
    }).catch(error => {
      console.error(error);
    });
  });
  
  // Login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    
    auth.signInWithEmailAndPassword(email, password).then(cred => {
      console.log('User logged in:', cred.user);
      loginForm.reset();
    }).catch(error => {
      console.error(error);
    });
  });
  
  // Add to Cart
  const addToCartButtons = document.querySelectorAll('#add-to-cart');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = e.target.getAttribute('data-product-id');
      const user = auth.currentUser;
  
      if (user) {
        db.collection('carts').add({
          userId: user.uid,
          productId: productId,
          quantity: 1
        }).then(() => {
          console.log('Item added to cart');
        }).catch(error => {
          console.error(error);
        });
      } else {
        console.log('User not logged in');
      }
    });
  });
  