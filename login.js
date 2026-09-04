const SUPABASE_URL = "https://zxylnqmopokqmqomfmmz.supabase.co";
const SUPABASE_KEY = "sb_publishable_YxhoRW9CoiDIYl5Pxdy4ng_wk1qQOkI";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("login-btn").addEventListener("click", async () => {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const msg = document.getElementById("login-msg");

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    msg.textContent = "❌ " + error.message;
    msg.style.color = "red";
    return;
  }

  msg.textContent = "✅ Logged in! Redirecting...";
  msg.style.color = "green";

  // Redirect to the admin page after successful login
  setTimeout(() => {
    window.location.href = "admin.html";
  }, 800);
});