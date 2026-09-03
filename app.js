// ===== SUPABASE CONNECTION =====
const SUPABASE_URL = "https://zxylnqmopokqmqomfmmz.supabase.co";
const SUPABASE_KEY = "sb_publishable_YxhoRW9CoiDIYl5Pxdy4ng_wk1qQOkI";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ===== STEP A: Read memory_id from the URL =====
// Example URL: memory.html?id=ABC123
const urlParams = new URLSearchParams(window.location.search);
const memoryId = urlParams.get("id");

// ===== STEP B: Fetch the matching memory + fill the page =====
async function loadMemory() {
  if (!memoryId) {
    console.error("No memory ID found in the URL. Add ?id=ABC123 to the link.");
    return;
  }

  const { data, error } = await supabaseClient
    .from("memories")
    .select("*")
    .eq("memory_id", memoryId)
    .single();

  if (error) {
    console.error("Could not load this memory:", error);
    return;
  }

  console.log("Loaded memory:", data);
  fillPage(data);
}

// ===== STEP C: Inject the data into the HTML =====
function fillPage(data) {
  document.getElementById("name1").textContent = data.name1 || "";
  document.getElementById("name2").textContent = data.name2 || "";
  document.getElementById("message").innerHTML = `"${data.message || ""}"`;

  if (data.memory_date) {
    document.getElementById("memory-date").textContent = "📅 " + data.memory_date;
  }

  if (data.song_url) {
    document.getElementById("song-link").href = data.song_url;
  } else {
    document.getElementById("song-box").style.display = "none";
  }

  // We'll wire up real photos in Step 9 — placeholder stays for now


    // ===== Display multiple photos =====
    if (data.photo_urls) {
      const photoWrap = document.getElementById("photo-wrap");
      photoWrap.innerHTML = ""; // clear the placeholder
  
      const urls = data.photo_urls.split(",").map(url => url.trim());
  
      urls.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Memory photo";
        img.className = "main-photo";
        photoWrap.appendChild(img);
      });
    }
}

loadMemory();