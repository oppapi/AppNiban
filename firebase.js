import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKYKBzNhCgBbLKtZ2V1eaz3vthabuVRZM",
  authDomain: "appniban-83dda.firebaseapp.com",
  projectId: "appniban-83dda",
  storageBucket: "appniban-83dda.firebasestorage.app",
  messagingSenderId: "248366318531",
  appId: "1:248366318531:web:28113c6199be3a7ca5b376"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getProgrammeData() {
  try {
    const programmeCol = collection(db, "programme");
    const progSnapshot = await getDocs(programmeCol);

    const data = progSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // Store to local storage
    localStorage.setItem("programmeData", JSON.stringify(data));

    return data;

  } catch (err) {
    console.error(err);
    return [];
  }
}