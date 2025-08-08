document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  const burger = document.getElementById('burger');
  const nav = document.getElementById('drawer');
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  const applyIcon = name => {
    themeToggle.innerHTML = '<i data-feather="' + name + '"></i>';
    if (window.feather) feather.replace();
  };

  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved === 'dark' || (!saved && prefersDark)) {
    body.classList.add('dark-theme');
    applyIcon('sun');
  } else {
    body.classList.remove('dark-theme');
    applyIcon('moon');
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('nav-open');
      burger.classList.toggle('active');
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const isDark = body.classList.toggle('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      applyIcon(isDark ? 'sun' : 'moon');
    });
  }

  if (contactForm && msg) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = (formData.get('name') || '').trim();
      const email = (formData.get('email') || '').trim();
      const message = (formData.get('message') || '').trim();

      if (!name || !email || !message) {
        showMessage('❌ Please fill all fields.', '#ff4d4d');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showMessage('❌ Please enter a valid email address.', '#ff4d4d');
        return;
      }
      showMessage(`✅ Thanks ${name}, your message has been sent!`, '#4ade80');
      contactForm.reset();
    });

    function showMessage(text, color) {
      msg.textContent = text;
      msg.style.color = color;
      setTimeout(() => { msg.textContent = ''; }, 5000);
    }
  }
});
