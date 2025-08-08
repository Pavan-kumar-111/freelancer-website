document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    msg.innerText = "❌ Please fill all fields.";
    msg.style.color = "red";
    return;
  }

  msg.innerText = `✅ Thanks ${name}, your message has been sent!`;
  msg.style.color = "lime";
  this.reset();
});
