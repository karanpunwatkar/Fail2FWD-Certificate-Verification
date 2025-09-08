import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.getElementById("checkBtn").addEventListener("click", async () => {
  const certId = document.getElementById("studentId").value.trim();
  const resultDiv = document.getElementById("result");

  if (!certId) {
    resultDiv.textContent = "⚠️ Please enter a Certificate ID.";
    return;
  }

  try {
    // Get the document directly from "certificates"
    const certRef = doc(db, "certificates", certId);
    const certSnap = await getDoc(certRef);

    if (certSnap.exists()) {
      const data = certSnap.data();
      resultDiv.innerHTML = `
        ✅ Certificate is <strong>${data.status}</strong><br>
        <strong>Name:</strong> ${data.name}<br>
        <strong>Email:</strong> ${data.email}<br>
        <strong>Course:</strong> ${data.course}<br>
        <strong>Issued On:</strong> ${data.issuedOn}
      `;
    } else {
      resultDiv.textContent = "❌ Certificate not found.";
    }
  } catch (error) {
    console.error(error);
    resultDiv.textContent = "⚠️ Error checking certificate.";
    
  }
});
