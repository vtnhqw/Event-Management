// MOCK DATABASE USING LOCALSTORAGE
const SEED_EVENTS = [
  {
    id: '1',
    title: 'UNITEN Tech Hackathon 2024',
    category: 'Competition',
    description: 'Join the biggest 24-hour coding competition at UNITEN. Build innovative solutions for campus sustainability.',
    event_date: '2024-08-15',
    start_time: '09:00',
    end_time: '18:00',
    venue: 'COIT Lab 1 & 2',
    image_url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    requested_by_name: 'Tech Club',
    status: 'approved',
    registrations: 45
  },
  {
    id: '2',
    title: 'Resume Building & Interview Skills Workshop',
    category: 'Workshop',
    description: 'Prepare for your internship! Learn how to craft a standout resume and ace your technical interviews with industry experts.',
    event_date: '2024-07-20',
    start_time: '14:00',
    end_time: '16:00',
    venue: 'Library Auditorium',
    image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    requested_by_name: 'Career Center',
    status: 'approved',
    registrations: 120
  }
];

let currentUser = JSON.parse(localStorage.getItem('uni_user') || 'null');
let isDarkMode = localStorage.getItem('uni_theme') === 'dark';

function applyTheme() {
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

const sunIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
const moonIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

function toggleTheme() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('uni_theme', isDarkMode ? 'dark' : 'light');
  applyTheme();
  
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    // Swap icon immediately
    btn.innerHTML = isDarkMode ? sunIcon : moonIcon;
    
    // Trigger pop animation
    btn.classList.remove('pop-anim');
    void btn.offsetWidth; // Trigger reflow to restart animation
    btn.classList.add('pop-anim');
    
    setTimeout(() => {
      btn.classList.remove('pop-anim');
    }, 400); // Remove class after animation ends
  }
}

function initDB() {
  if (!localStorage.getItem('uni_events')) {
    localStorage.setItem('uni_events', JSON.stringify(SEED_EVENTS));
  }
  if (!localStorage.getItem('uni_rsvps')) {
    localStorage.setItem('uni_rsvps', JSON.stringify([]));
  }
}

// Utility to show toast
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function checkAuth(requireAuth = true) {
  const isAuthPage = window.location.pathname.endsWith('login.html');
  
  if (!currentUser && requireAuth && !isAuthPage) {
    window.location.href = 'login.html';
    return false;
  }
  
  if (currentUser && isAuthPage) {
    window.location.href = 'index.html';
    return false;
  }

  if (currentUser) {
    renderNav();
  }
  return true;
}

function renderNav() {
  const navContainer = document.getElementById('navbar-container');
  if (!navContainer || !currentUser) return;

  let linksHtml = '';
  if (currentUser.role === 'committee') {
    linksHtml = `
      <a href="submit.html" class="nav-link">Submit Event</a>
      <a href="my-events.html" class="nav-link">My Events</a>
    `;
  } else if (currentUser.role === 'admin') {
    linksHtml = `
      <a href="admin.html" class="nav-link">Admin Dashboard</a>
    `;
  }

  navContainer.innerHTML = `
    <nav class="navbar">
      <div class="nav-container">
        <a href="index.html" class="nav-brand">UNI<span>Event</span></a>
        <div class="nav-right">
          <div class="nav-links">
            ${linksHtml}
          </div>
          <div class="user-profile">
            <div class="user-info">
              <span class="user-name">${currentUser.name}</span>
              <span class="role-badge role-${currentUser.role}">${currentUser.role}</span>
            </div>
            <button id="theme-toggle-btn" onclick="toggleTheme()" class="theme-toggle" title="Toggle Dark Mode">
              ${isDarkMode ? sunIcon : moonIcon}
            </button>
            <button onclick="handleLogout()" class="btn btn-outline" style="padding: 0.35rem 0.85rem; font-size: 0.85rem; border: none; box-shadow: none; margin-left: 0.5rem;">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  `;
}

function handleLogout() {
  localStorage.removeItem('uni_user');
  window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
  initDB();
  applyTheme();
  const isAuthPage = window.location.pathname.endsWith('login.html');
  if (!isAuthPage && !document.getElementById('navbar-container')) {
    const navDiv = document.createElement('div');
    navDiv.id = 'navbar-container';
    document.body.prepend(navDiv);
  }
});
