<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "AIzaSyAIxOyHoegDcNozKGrqYpNJksjcIgP6oH8",
    authDomain: "test-946e0.firebaseapp.com",
    projectId: "test-946e0",
    storageBucket: "test-946e0.appspot.com",
    messagingSenderId: "15035507996",
    appId: "1:15035507996:web:90593830cf1d4f9c6f06d9"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "test.html";
      })
      .catch(err => alert("Қате: " + err.message));
  }
</script>