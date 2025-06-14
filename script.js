function generateQR() {
  const url = document.getElementById("urlInput").value.trim();
  if (!url) {
    alert("කරුණාකර URL එකක් ඇතුළත් කරන්න.");
    return;
  }

  // අහඹු 6 අකුරු/අංක ID එකක්
  const id = Math.random().toString(36).substring(2, 8);
  
  // QR එක redirect වෙන්න තියන link එක
  const qrLink = `https://yourusername.github.io/qr-code-system/qr.html?id=${id}`;

  // QR එක පෙන්නවන්න
  const qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = '';
  new QRCode(qrDiv, {
    text: qrLink,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff"
  });

  // Developer console එකට JSON එකට copy කරන්න JSON object එක print කරන්න
  console.log("👇 qr_data.json ගොනුවට එකතු කරන්න👇");
  console.log(`"${id}": {\n  "status": "enabled",\n  "destination": "${url}"\n},`);

  // Optional: Show QR Link below the QR
  const linkText = document.createElement("p");
  linkText.innerHTML = `<strong>QR Link:</strong> <a href="${qrLink}" target="_blank">${qrLink}</a>`;
  qrDiv.appendChild(linkText);
}
