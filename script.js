// Dark/Light Mode Toggle
const darkToggle = document.getElementById('dark-toggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});
if (localStorage.getItem('darkMode') === 'true') document.body.classList.add('dark-mode');

// Language Toggle (English/Hindi)
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
  document.body.classList.toggle('hindi-active');
  localStorage.setItem('lang', document.body.classList.contains('hindi-active') ? 'hi' : 'en');
});
if (localStorage.getItem('lang') === 'hi') document.body.classList.add('hindi-active');

// Micro-Interactions (Fade In on Scroll)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('fade-in');
  });
});
document.querySelectorAll('.card, .test-item').forEach(el => observer.observe(el));

// Login/Register Modal
document.getElementById('login-btn').addEventListener('click', () => document.getElementById('login-modal').style.display = 'block');
document.querySelector('.close').addEventListener('click', () => document.getElementById('login-modal').style.display = 'none');
window.onclick = (e) => { if (e.target.id === 'login-modal') e.target.style.display = 'none'; };

// Form Submission (Simulated)
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted! (Simulated - Integrate with backend for real emails/payments)');
    // Simulate WhatsApp/Email Notification
    if (form.id === 'contact-form') alert('Notification sent via WhatsApp/Email!');
  });
});

// AI-Based Test Recommendations (Simple JS Logic)
function recommendTests(category) {
  const recs = {
    'UPSC': ['Prelims Mock 2025', 'CSAT Practice'],
    'SSC': ['CGL Quant Test', 'GK Quiz'],
    'Banking': ['IBPS PO Aptitude', 'SBI Reasoning']
  };
  const ul = document.getElementById('rec-list');
  ul.innerHTML = recs[category].map(test => `<li>${test}</li>`).join('');
}

// Live Scorecard (JS Calculator)
function calculateScore() {
  const score = parseInt(document.getElementById('user-score').value) || 0;
  const total = 100;
  const rank = score > 80 ? 'Top 10%' : score > 60 ? 'Average' : 'Needs Improvement';
  document.getElementById('score-result').innerHTML = `Score: ${score}/${total} | Predicted Rank: ${rank}`;
  // Simulate Notification
  alert(`Score updated! Check dashboard for graphs.`);
}

// Social Sharing (AddThis CDN - Add <script src="https://s7.addthis.com/js/300/addthis_widget.js"></script> in HTML)
function share(url, title) {
  if (window.addthis) addthis.layers.refresh();
}

// Dashboard Graphs (Using Chart.js - Add <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> in HTML)
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('progress-chart')) {
    const ctx = document.getElementById('progress-chart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: { labels: ['Week 1', 'Week 2', 'Week 3'], datasets: [{ label: 'Progress', data: [20, 50, 80], borderColor: '#007bff' }] },
      options: { responsive: true }
    });
  }
});

// Payment Simulation (Razorpay Placeholder)
document.getElementById('pay-btn')?.addEventListener('click', () => {
  alert('Payment Initiated! (Simulate Razorpay - Amount: ₹499 for Test Series)');
});
