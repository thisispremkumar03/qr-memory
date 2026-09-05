<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>QR Memory — Admin</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body class="admin-body">

  <div class="admin-box">
    <h2>Create a New Memory</h2>

    <label>Memory ID (unique code)</label>
    <input type="text" id="input-memory-id" placeholder="e.g. ABC123" />

    <label>Name 1</label>
    <input type="text" id="input-name1" placeholder="e.g. Rahul" />

    <label>Name 2 (optional)</label>
    <input type="text" id="input-name2" placeholder="e.g. Priya" />

    <label>Message</label>
    <textarea id="input-message" rows="3" placeholder="Write the personal message..."></textarea>

    <label>Date</label>
    <input type="date" id="input-date" />

    <label>Song/Video URL (optional)</label>
    <input type="text" id="input-song" placeholder="https://..." />

    <label>Upload Photos (1–5 images)</label>
    <input type="file" id="input-photo-files" accept="image/*" multiple />
    <p id="upload-status" style="font-size:13px; color:#888; margin-top:6px;"></p>

    <button id="create-btn" class="cta-btn">Create Memory</button>

    <p id="result-msg"></p>
    <div id="qr-output"></div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>
  <script src="admin.js"></script>
</body>
</html>
