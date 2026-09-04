const SUPABASE_URL = "https://zxylnqmopokqmqomfmmz.supabase.co";
const SUPABASE_KEY = "sb_publishable_YxhoRW9CoiDIYl5Pxdy4ng_wk1qQOkI";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("create-btn").addEventListener("click", async () => {
  const memoryId = document.getElementById("input-memory-id").value.trim();
  const name1 = document.getElementById("input-name1").value.trim();
  const name2 = document.getElementById("input-name2").value.trim();
  const message = document.getElementById("input-message").value.trim();
  const memoryDate = document.getElementById("input-date").value;
  const songUrl = document.getElementById("input-song").value.trim();
  const photoUrls = document.getElementById("input-photos").value.trim();

  const resultMsg = document.getElementById("result-msg");

  if (!memoryId || !name1) {
    resultMsg.textContent = "⚠️ Memory ID and Name 1 are required.";
    resultMsg.style.color = "red";
    return;
  }

  const { data, error } = await supabaseClient
    .from("memories")
    .insert([
      {
        memory_id: memoryId,
        name1: name1,
        name2: name2,
        message: message,
        memory_date: memoryDate || null,
        song_url: songUrl || null,
        photo_urls: photoUrls || null
      }
    ]);

  if (error) {
    console.error(error);
    resultMsg.textContent = "❌ Error: " + error.message;
    resultMsg.style.color = "red";
    return;
  }

  resultMsg.textContent = `✅ Memory created!`;
  resultMsg.style.color = "green";

  // ===== Build the full memory URL =====
  // For now (local testing), we use the local address.
  // Later, once deployed, we'll change this to your real domain.
  const memoryUrl = `${window.location.origin}/memory.html?id=${memoryId}`;

  // ===== Generate and display the QR code =====
  const qrContainer = document.getElementById("qr-output");
  qrContainer.innerHTML = ""; // clear any old QR code

  const canvas = document.createElement("canvas");
  qrContainer.appendChild(canvas);

  QRCode.toCanvas(canvas, memoryUrl, { width: 200 }, function (err) {
    if (err) console.error(err);
  });

  // Show the link as text too, and make it clickable
  const linkText = document.createElement("p");
  linkText.innerHTML = `<a href="${memoryUrl}" target="_blank">${memoryUrl}</a>`;
  qrContainer.appendChild(linkText);
});
