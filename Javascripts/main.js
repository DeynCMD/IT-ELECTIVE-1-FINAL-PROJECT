import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIqgpL03ljnD4XQB5EBlz2QAEOZek-YrI",
  authDomain: "requisition-system-cdada.firebaseapp.com",
  projectId: "requisition-system-cdada",
  storageBucket: "requisition-system-cdada.appspot.com",
  messagingSenderId: "505367608184",
  appId: "1:505367608184:web:b8d9bb9c5c2c3cc4fd668d",
  measurementId: "G-04FVGG7BQ8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  const currentPage = window.location.pathname.split("/").pop();

  if (!user && currentPage !== "login.html" && currentPage !== "admin-login.html") {
    window.location.href = "login.html";
  }

  if (user && (currentPage === "login.html" || currentPage === "admin-login.html")) {
    window.location.href = "admin.html";
  }
});

window.logout = function () {
  signOut(auth).then(() => {
    alert("Logged out successfully");
    window.location.href = "login.html";
  });
};
