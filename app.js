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

const TRANSLATIONS = {
  en: {
    nav_submit: "Submit Event", nav_my_events: "My Events", nav_admin: "Admin Dashboard", nav_logout: "Logout",
    role_student: "STUDENT", role_committee: "COMMITTEE", role_admin: "ADMIN",
    discover_title: "Discover Events", discover_subtitle: "Find and join what's happening at UNITEN",
    filter_all: "All", filter_workshop: "Workshop", filter_competition: "Competition", filter_talk: "Talk", filter_social: "Social", filter_sports: "Sports", filter_other: "Other",
    empty_events: "No events found", empty_events_sub: "There are no approved events in this category yet.",
    login_title: "Get Started", login_sub: "Join UNIEvent Prototype", lbl_name: "Full Name", lbl_role: "Role", btn_enter: "Enter Prototype",
    about_event: "About this event", btn_register: "Register Now",
    admin_title: "Admin Dashboard", admin_sub: "Review and manage event submissions", needs_approval: "Needs Approval", recently_decided: "Recently Decided",
    my_events_title: "My Events", my_events_sub: "Track the status of your submissions", btn_submit_new: "Submit New Event",
    submit_title: "Submit Event", submit_sub: "Fill in the details for your event. It will be reviewed by an admin.",
    lbl_title: "Event Title", lbl_category: "Category", lbl_desc: "Description", lbl_date: "Date", lbl_venue: "Venue", lbl_start: "Start Time", lbl_end: "End Time", lbl_image: "Image URL (Optional)", btn_submit_approval: "Submit for Approval"
  },
  ms: {
    nav_submit: "Hantar Acara", nav_my_events: "Acara Saya", nav_admin: "Papan Pemuka Admin", nav_logout: "Log Keluar",
    role_student: "PELAJAR", role_committee: "JAWATANKUASA", role_admin: "ADMIN",
    discover_title: "Teroka Acara", discover_subtitle: "Cari dan sertai aktiviti di UNITEN",
    filter_all: "Semua", filter_workshop: "Bengkel", filter_competition: "Pertandingan", filter_talk: "Ceramah", filter_social: "Sosial", filter_sports: "Sukan", filter_other: "Lain-lain",
    empty_events: "Tiada acara dijumpai", empty_events_sub: "Tiada acara yang diluluskan dalam kategori ini.",
    login_title: "Mula Sekarang", login_sub: "Sertai Prototaip UNIEvent", lbl_name: "Nama Penuh", lbl_role: "Peranan", btn_enter: "Masuk Prototaip",
    about_event: "Tentang acara ini", btn_register: "Daftar Sekarang",
    admin_title: "Papan Pemuka Admin", admin_sub: "Semak dan urus penyertaan acara", needs_approval: "Perlu Kelulusan", recently_decided: "Keputusan Terkini",
    my_events_title: "Acara Saya", my_events_sub: "Jejak status penyertaan anda", btn_submit_new: "Hantar Acara Baru",
    submit_title: "Hantar Acara", submit_sub: "Isi butiran acara anda. Ia akan disemak oleh admin.",
    lbl_title: "Tajuk Acara", lbl_category: "Kategori", lbl_desc: "Penerangan", lbl_date: "Tarikh", lbl_venue: "Tempat", lbl_start: "Masa Mula", lbl_end: "Masa Tamat", lbl_image: "URL Imej (Pilihan)", btn_submit_approval: "Hantar untuk Kelulusan"
  }
};

let currentUser = JSON.parse(localStorage.getItem('uni_user') || 'null');
let isDarkMode = localStorage.getItem('uni_theme') === 'dark';
let currentLang = localStorage.getItem('uni_lang') || 'en';

function applyTheme() {
  if (isDarkMode) document.body.classList.add('dark-mode');
  else document.body.classList.remove('dark-mode');
}

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[currentLang][key]) {
      el.textContent = TRANSLATIONS[currentLang][key];
    }
  });
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('uni_theme', isDarkMode ? 'dark' : 'light');
  applyTheme();
  
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    const sunIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    const moonIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    btn.innerHTML = isDarkMode ? sunIcon : moonIcon;
    btn.classList.remove('pop-anim');
    void btn.offsetWidth; 
    btn.classList.add('pop-anim');
    setTimeout(() => btn.classList.remove('pop-anim'), 400);
  }
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'ms' : 'en';
  localStorage.setItem('uni_lang', currentLang);
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) btn.textContent = currentLang.toUpperCase();
  applyLang();
  
  // Re-render JS dynamic strings if functions exist
  if(typeof renderEvents === 'function' && document.getElementById('events-grid')) renderEvents();
  if(typeof renderEvent === 'function' && document.getElementById('event-content')) renderEvent();
}

function initDB() {
  if (!localStorage.getItem('uni_events')) localStorage.setItem('uni_events', JSON.stringify(SEED_EVENTS));
  if (!localStorage.getItem('uni_rsvps')) localStorage.setItem('uni_rsvps', JSON.stringify([]));
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
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
  if (currentUser) renderNav();
  return true;
}

function renderNav() {
  const navContainer = document.getElementById('navbar-container');
  if (!navContainer || !currentUser) return;

  let linksHtml = '';
  if (currentUser.role === 'committee') {
    linksHtml = `
      <a href="submit.html" class="nav-link" data-i18n="nav_submit">${TRANSLATIONS[currentLang].nav_submit}</a>
      <a href="my-events.html" class="nav-link" data-i18n="nav_my_events">${TRANSLATIONS[currentLang].nav_my_events}</a>
    `;
  } else if (currentUser.role === 'admin') {
    linksHtml = `
      <a href="admin.html" class="nav-link" data-i18n="nav_admin">${TRANSLATIONS[currentLang].nav_admin}</a>
    `;
  }

  const sunIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const moonIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  const initial = currentUser.name.charAt(0).toUpperCase();

  navContainer.innerHTML = `
    <nav class="navbar">
      <div class="nav-container">
        <a href="index.html" class="nav-brand">UNI<span>Event</span></a>
        <div class="nav-right">
          <div class="nav-links">
            ${linksHtml}
          </div>
          
          <!-- Controls -->
          <div style="display: flex; align-items: center; gap: 0.25rem; border-left: 1px solid var(--border-color); padding-left: 1rem; margin-left: 0.5rem;">
            <button id="lang-toggle-btn" onclick="toggleLang()" class="lang-toggle" title="Toggle Language" style="font-weight: 700; font-size: 0.85rem; color: var(--text-muted); width: 2.5rem; height: 2.5rem; border-radius: 50%; transition: all 0.2s; display: flex; align-items: center; justify-content: center;">
              ${currentLang.toUpperCase()}
            </button>
            <button id="theme-toggle-btn" onclick="toggleTheme()" class="theme-toggle" title="Toggle Dark Mode">
              ${isDarkMode ? sunIcon : moonIcon}
            </button>
          </div>

          <!-- Improved User Profile -->
          <div class="user-profile-improved">
            <div class="avatar">${initial}</div>
            <div class="user-details">
              <span class="user-name">${currentUser.name}</span>
              <span class="role-badge role-${currentUser.role}" data-i18n="role_${currentUser.role}">${TRANSLATIONS[currentLang]['role_' + currentUser.role]}</span>
            </div>
            <div class="user-dropdown">
              <button onclick="handleLogout()" class="dropdown-item" style="color: #EF4444;" data-i18n="nav_logout">${TRANSLATIONS[currentLang].nav_logout}</button>
            </div>
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
  // Initialize translations on load
  setTimeout(applyLang, 0);
});
