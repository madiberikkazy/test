// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Сіз жіберген жаңа конфигурация
const firebaseConfig = {
  apiKey: "AIzaSyAIxOyHoegDcNozKGrqYpNJksjcIgP6oH8",
  authDomain: "test-946e0.firebaseapp.com",
  projectId: "test-946e0",
  storageBucket: "test-946e0.firebasestorage.app", // Түзетілді
  messagingSenderId: "15035507996",
  appId: "1:15035507996:web:90593830cf1d4f9c6f06d9",
  measurementId: "G-BGHCR53Q2N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };