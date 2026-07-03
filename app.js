// MOCK DATABASE USING LOCALSTORAGE
const SEED_EVENTS = [
  {
    id: '1',
    title: 'UNITEN Tech Hackathon 2026',
    category: 'Competition',
    description: 'Join the biggest 24-hour coding competition at UNITEN. Build innovative solutions for campus sustainability.',
    event_date: '2026-07-15',
    start_time: '09:00',
    end_time: '18:00',
    venue: 'COIT Lab 1 & 2',
    image_url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    requested_by_name: 'Tech Club',
    status: 'approved',
    registrations: 45,
    scorun: 4
  },
  {
    id: '2',
    title: 'Resume Building & Interview Skills Workshop',
    category: 'Workshop',
    description: 'Prepare for your internship! Learn how to craft a standout resume and ace your technical interviews with industry experts.',
    event_date: '2026-07-22',
    start_time: '14:00',
    end_time: '16:00',
    venue: 'Library Auditorium',
    image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    requested_by_name: 'Career Center',
    status: 'approved',
    registrations: 120,
    scorun: 2
  },
  {
    id: '3',
    title: 'Campus Mental Wellness Talk',
    category: 'Talk',
    description: 'A candid conversation about student mental health, stress management, and building resilience during exam season.',
    event_date: '2026-07-28',
    start_time: '10:00',
    end_time: '11:30',
    venue: 'Dewan Utama',
    image_url: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&q=80&w=800',
    requested_by_name: 'Student Welfare Office',
    status: 'approved',
    registrations: 78,
    scorun: 0
  },
  {
    id: '4',
    title: 'SRC Committee Recruitment Interviews',
    category: 'Hiring',
    description: 'We are looking for passionate students to join the Student Representative Council (SRC) for the upcoming term. Sign up for your interview slot now!',
    event_date: '2026-07-20',
    start_time: '09:00',
    end_time: '17:00',
    venue: 'Student Activity Center Meeting Room',
    image_url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800',
    requested_by_name: 'Student Representative Council',
    status: 'approved',
    registrations: 34,
    scorun: 1
  }
];

const TRANSLATIONS = {
  en: {
    nav_submit: "Submit Event", nav_my_events: "My Events", nav_admin: "Admin Dashboard", nav_logout: "Logout",
    role_student: "STUDENT", role_committee: "COMMITTEE", role_admin: "ADMIN",
    discover_title: "Discover Events", discover_subtitle: "Find and join what's happening at UNITEN",
    filter_all: "All", filter_workshop: "Workshop", filter_competition: "Competition", filter_talk: "Talk", filter_social: "Social", filter_sports: "Sports", filter_hiring: "Hiring", filter_other: "Other",
    empty_events: "No events found", empty_events_sub: "There are no approved events in this category yet.",
    login_title: "Get Started", login_sub: "Join UNIEvent Prototype", lbl_name: "Full Name", lbl_role: "Role", btn_enter: "Enter Prototype",
    about_event: "About this event", btn_register: "Register Now",
    admin_title: "Admin Dashboard", admin_sub: "Review and manage event submissions", needs_approval: "Needs Approval", recently_decided: "Recently Decided",
    my_events_title: "My Events", my_events_sub: "Track the status of your submissions", btn_submit_new: "Submit New Event",
    submit_title: "Submit Event", submit_sub: "Fill in the details for your event. It will be reviewed by an admin.",
    lbl_title: "Event Title", lbl_category: "Category", lbl_desc: "Description", lbl_date: "Date", lbl_venue: "Venue", lbl_start: "Start Time", lbl_end: "End Time", lbl_image: "Image URL (Optional)", btn_submit_approval: "Submit for Approval",
    lbl_location_type: "Location Type", loc_physical: "Physical", loc_online: "Online", lbl_platform: "Online Platform", platform_other: "Other",
    filter_month_all: "All Months", month_01: "January", month_02: "February", month_03: "March", month_04: "April", month_05: "May", month_06: "June", month_07: "July", month_08: "August", month_09: "September", month_10: "October", month_11: "November", month_12: "December",
    lbl_date_start: "Date & Start", add_location: "Add Event Location", ph_offline: "e.g. Offline location", ph_virtual: "Platform", add_desc: "Add Description", ph_desc: "Offline location or virtual link", event_options: "Event Options", require_approval: "Require Approval", scorun_points: "SCORUN Points", btn_create_event: "Create Event", submit_success_title: "Submitted successfully", submit_success_sub: "Your event is now awaiting admin approval.", ph_event_name: "Event Name", card_going: "going", card_view: "View &rarr;", image_url_notice: "We only accept online image URLs. Direct image file uploads are not supported.", btn_back: "Back to Events", btn_cancel_register: "Cancel Registration", admin_bypass: "Admins bypass approval", btn_processing: "Processing..."
  },
  my: {
    nav_submit: "Hantar Acara", nav_my_events: "Acara Saya", nav_admin: "Papan Pemuka Admin", nav_logout: "Log Keluar",
    role_student: "PELAJAR", role_committee: "JAWATANKUASA", role_admin: "ADMIN",
    discover_title: "Teroka Acara", discover_subtitle: "Cari dan sertai aktiviti di UNITEN",
    filter_all: "Semua", filter_workshop: "Bengkel", filter_competition: "Pertandingan", filter_talk: "Ceramah", filter_social: "Sosial", filter_sports: "Sukan", filter_hiring: "Pengambilan", filter_other: "Lain-lain",
    empty_events: "Tiada acara dijumpai", empty_events_sub: "Tiada acara yang diluluskan dalam kategori ini.",
    login_title: "Mula Sekarang", login_sub: "Sertai Prototaip UNIEvent", lbl_name: "Nama Penuh", lbl_role: "Peranan", btn_enter: "Masuk Prototaip",
    about_event: "Tentang acara ini", btn_register: "Daftar Sekarang",
    admin_title: "Papan Pemuka Admin", admin_sub: "Semak dan urus penyertaan acara", needs_approval: "Perlu Kelulusan", recently_decided: "Keputusan Terkini",
    my_events_title: "Acara Saya", my_events_sub: "Jejak status penyertaan anda", btn_submit_new: "Hantar Acara Baru",
    submit_title: "Hantar Acara", submit_sub: "Isi butiran acara anda. Ia akan disemak oleh admin.",
    lbl_title: "Tajuk Acara", lbl_category: "Kategori", lbl_desc: "Penerangan", lbl_date: "Tarikh", lbl_venue: "Tempat", lbl_start: "Masa Mula", lbl_end: "Masa Tamat", lbl_image: "URL Imej (Pilihan)", btn_submit_approval: "Hantar untuk Kelulusan",
    lbl_location_type: "Jenis Lokasi", loc_physical: "Fizikal", loc_online: "Dalam Talian", lbl_platform: "Platform Dalam Talian", platform_other: "Lain-lain",
    filter_month_all: "Semua Bulan", month_01: "Januari", month_02: "Februari", month_03: "Mac", month_04: "April", month_05: "Mei", month_06: "Jun", month_07: "Julai", month_08: "Ogos", month_09: "September", month_10: "Oktober", month_11: "November", month_12: "Disember",
    lbl_date_start: "Tarikh & Mula", add_location: "Tambah Lokasi Acara", ph_offline: "cth. Lokasi fizikal", ph_virtual: "Platform", add_desc: "Tambah Penerangan", ph_desc: "Lokasi fizikal atau pautan maya", event_options: "Pilihan Acara", require_approval: "Perlukan Kelulusan", scorun_points: "Mata SCORUN", btn_create_event: "Cipta Acara", submit_success_title: "Dihantar dengan berjaya", submit_success_sub: "Acara anda kini menunggu kelulusan admin.", ph_event_name: "Nama Acara", card_going: "hadir", card_view: "Lihat &rarr;", image_url_notice: "Kami hanya menerima URL gambar dalam talian. Muat naik fail gambar secara langsung tidak disokong.", btn_back: "Kembali ke Acara", btn_cancel_register: "Batal Pendaftaran", admin_bypass: "Admin mengecualikan kelulusan", btn_processing: "Memproses..."
  }
};

let currentUser = JSON.parse(localStorage.getItem('uni_user') || 'null');
let isDarkMode = localStorage.getItem('uni_theme') === 'dark';
let currentLang = localStorage.getItem('uni_lang') || 'en';
if (currentLang === 'ms') {
  currentLang = 'my';
  localStorage.setItem('uni_lang', 'my');
}
let authCarouselTimer = null;

function applyTheme() {
  const isDark = localStorage.getItem('uni_theme') === 'dark';
  if (isDark) {
    document.documentElement.classList.add('dark-mode');
    document.body.classList.add('dark-mode');
  } else {
    document.documentElement.classList.remove('dark-mode');
    document.body.classList.remove('dark-mode');
  }
}

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[currentLang][key]) {
      el.textContent = TRANSLATIONS[currentLang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[currentLang][key]) {
      el.placeholder = TRANSLATIONS[currentLang][key];
    }
  });
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('uni_theme', isDarkMode ? 'dark' : 'light');
  applyTheme();
  
  const btns = document.querySelectorAll('#theme-toggle-btn');
  btns.forEach(btn => {
    const sunIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    const moonIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    
    if(btn.tagName.toLowerCase() === 'button') {
        btn.innerHTML = isDarkMode ? sunIcon : moonIcon;
        btn.classList.remove('pop-anim');
        void btn.offsetWidth; 
        btn.classList.add('pop-anim');
        setTimeout(() => btn.classList.remove('pop-anim'), 400);
    }
  });
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'my' : 'en';
  localStorage.setItem('uni_lang', currentLang);
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) btn.textContent = currentLang.toUpperCase();
  
  // Just apply translations directly to DOM elements!
  // No need to re-render the whole grid (which causes skeleton drag/lag)
  applyLang();
}

function safeParseJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
  catch(e) { localStorage.removeItem(key); return fallback; }
}

function initDB() {
  if (!localStorage.getItem('uni_events')) {
    localStorage.setItem('uni_events', JSON.stringify(SEED_EVENTS));
  } else {
    // Migrate old events
    let events = safeParseJSON('uni_events', []);
    let updated = false;
    events.forEach(ev => {
      if (typeof ev.scorun === 'undefined') {
        const seed = SEED_EVENTS.find(s => s.id === ev.id);
        ev.scorun = seed ? seed.scorun : 0;
        updated = true;
      }
    });
    // Ensure the new seed event (id '4') is added
    if (!events.find(ev => ev.id === '4')) {
      const srcHiring = SEED_EVENTS.find(s => s.id === '4');
      if (srcHiring) {
        events.push(srcHiring);
        updated = true;
      }
    }
    if (updated) localStorage.setItem('uni_events', JSON.stringify(events));
  }
  
  if (!localStorage.getItem('uni_rsvps')) {
    localStorage.setItem('uni_rsvps', JSON.stringify([]));
  }
}

function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = `modern-toast toast-${type}`;
  
  let iconHtml = '';
  if (type === 'error' || type === 'warning') {
    iconHtml = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
  } else if (type === 'info') {
    iconHtml = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  } else {
    iconHtml = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
  }
  
  toast.innerHTML = `${iconHtml} <span>${message}</span>`;
  container.appendChild(toast);
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
  });
  
  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hiding');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 4000);
}

// --- ROUTING SYSTEM ---
const routes = {
  '': initDiscoverView,
  '#discover': initDiscoverView,
  '#login': initLoginView,
  '#admin': initAdminView,
  '#event': initEventView,
  '#my-events': initMyEventsView,
  '#submit': initSubmitView
};

function router() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const hash = window.location.hash.split('?')[0];
  const viewId = hash ? hash.substring(1) : 'discover';
  
  // Hide all views and reset animations
  document.querySelectorAll('.page-view').forEach(el => {
    el.classList.remove('active');
    el.classList.remove('animate-in');
  });
  
  // Show target view
  const targetView = document.getElementById('view-' + viewId);
  if (targetView) {
    targetView.classList.add('active');
    void targetView.offsetWidth; // Force reflow
    targetView.classList.add('animate-in');
  }
  
  // Toggle Navbar
  const navContainer = document.getElementById('navbar-container');
  const globalFooter = document.getElementById('global-footer');
  if (navContainer) navContainer.style.display = 'block';
  
  if (viewId === 'login') {
    if (globalFooter) globalFooter.style.display = 'none';
    document.body.classList.add('auth-page'); 
    renderNav();
  } else {
    if (globalFooter) globalFooter.style.display = 'block';
    document.body.classList.remove('auth-page');
    if (authCarouselTimer) {
      clearInterval(authCarouselTimer);
      authCarouselTimer = null;
    }
    checkAuth(true);
  }
  
  // Call init function
  const initFunc = routes[hash] || routes['#discover'];
  if (initFunc) initFunc();
  
  // Highlight active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === (hash || '#discover')) link.classList.add('active');
    else link.classList.remove('active');
  });
  
  setTimeout(applyLang, 0);
}

// Override checkAuth and logout from app.js to use hashes
function checkAuth(requireAuth = true) {
  const isAuthPage = window.location.hash.startsWith('#login');
  if (!currentUser && requireAuth && !isAuthPage) {
    window.location.hash = '#login';
    return false;
  }
  if (currentUser && isAuthPage) {
    window.location.hash = '#discover';
    return false;
  }
  renderNav();
  return true;
}

function handleLogout() {
  localStorage.removeItem('uni_user');
  currentUser = null;
  window.location.hash = '#login';
}

document.addEventListener('DOMContentLoaded', () => {
  initDB();
  
  // Always create nav container for SPA
  if (!document.getElementById('navbar-container')) {
    const navDiv = document.createElement('div');
    navDiv.id = 'navbar-container';
    navDiv.className = 'navbar';
    document.body.prepend(navDiv);
  }
  
  window.addEventListener('hashchange', router);
  
  // Initial route
  setTimeout(router, 10);
});

// --- DISCOVER VIEW ---
let activeCategory = 'All';
let activeMonth = 'all';

function initDiscoverView() {
  const currentMonthStr = (new Date().getMonth() + 1).toString().padStart(2, '0');
  activeMonth = currentMonthStr;
  
  const defaultBtn = document.querySelector(`.month-option[data-val="${activeMonth}"]`);
  if (defaultBtn) {
    document.querySelectorAll('.month-option').forEach(b => b.classList.remove('active'));
    defaultBtn.classList.add('active');
    const display = document.getElementById('month-display');
    if(display) {
       display.setAttribute('data-i18n', defaultBtn.getAttribute('data-i18n'));
       display.innerText = defaultBtn.innerText;
    }
  }
  
  renderEvents();

  document.querySelectorAll('.category-card').forEach(btn => {
    btn.onclick = (e) => {
      const card = e.currentTarget;
      document.querySelectorAll('.category-card').forEach(b => b.classList.remove('active'));
      card.classList.add('active');
      activeCategory = card.getAttribute('data-category');
      renderEvents();
    };
  });

  document.querySelectorAll('.month-option').forEach(btn => {
    btn.onclick = (e) => {
      document.querySelectorAll('.month-option').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeMonth = e.target.getAttribute('data-val');
      
      const display = document.getElementById('month-display');
      display.setAttribute('data-i18n', e.target.getAttribute('data-i18n'));
      display.innerText = e.target.innerText;
      
      applyLang(); 
      toggleMonthDropdown();
      renderEvents();
    };
  });
}

function toggleMonthDropdown() {
  const menu = document.getElementById('month-menu');
  const icon = document.getElementById('month-icon');
  if(!menu) return;
  menu.classList.toggle('show');
  if (menu.classList.contains('show')) {
    icon.style.transform = 'rotate(180deg)';
  } else {
    icon.style.transform = 'rotate(0)';
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('#month-dropdown')) {
    const menu = document.getElementById('month-menu');
    const icon = document.getElementById('month-icon');
    if(menu && menu.classList.contains('show')) {
        menu.classList.remove('show');
        icon.style.transform = 'rotate(0)';
    }
  }
  if (!e.target.closest('#category-dropdown')) {
    const menu = document.getElementById('category-menu');
    const icon = document.getElementById('category-icon');
    if(menu && menu.classList.contains('show')) {
        menu.classList.remove('show');
        icon.style.transform = 'rotate(0)';
    }
  }
  if (!e.target.closest('#scorun-dropdown')) {
    const menu = document.getElementById('scorun-menu');
    const icon = document.getElementById('scorun-icon');
    if(menu && menu.classList.contains('show')) {
        menu.classList.remove('show');
        icon.style.transform = 'rotate(0)';
    }
  }
  if (!e.target.closest('#platform-dropdown')) {
    const menu = document.getElementById('platform-menu');
    const icon = document.getElementById('platform-icon');
    if(menu && menu.classList.contains('show')) {
        menu.classList.remove('show');
        icon.style.transform = 'rotate(0)';
    }
  }
});

function updateCategoryCounts(events) {
  const counts = { 'All': events.length, 'Workshop': 0, 'Competition': 0, 'Talk': 0, 'Social': 0, 'Sports': 0, 'Hiring': 0, 'Other': 0 };
  events.forEach(e => {
    if(counts[e.category] !== undefined) counts[e.category]++;
  });
  for (const cat in counts) {
    const el = document.getElementById('count-' + cat);
    if(el) el.innerText = counts[cat];
  }
}

function renderEvents() {
  const grid = document.getElementById('events-grid');
  if(!grid) return;
  let allEvents = JSON.parse(localStorage.getItem('uni_events') || '[]').filter(e => e.status === 'approved');
  allEvents.sort((a, b) => {
    const dateA = new Date(a.event_date ? a.event_date.split(' to ')[0] : '');
    const dateB = new Date(b.event_date ? b.event_date.split(' to ')[0] : '');
    return dateA - dateB;
  });

  const monthEvents = allEvents.filter(e => {
    const eventMonth = e.event_date ? e.event_date.split('-')[1] : null;
    return activeMonth === 'all' || eventMonth === activeMonth;
  });

  updateCategoryCounts(monthEvents);

  const filtered = monthEvents.filter(e => activeCategory === 'All' || e.category === activeCategory);

  grid.innerHTML = Array(6).fill().map(() => `
    <div class="card" style="padding: 0; overflow: hidden; height: 100%;">
      <div class="skeleton" style="width: 100%; height: 14rem; border-radius: 0;"></div>
      <div style="padding: 1.5rem;">
        <div class="skeleton" style="width: 30%; height: 1.5rem; margin-bottom: 1rem;"></div>
        <div class="skeleton" style="width: 80%; height: 1.75rem; margin-bottom: 1rem;"></div>
        <div class="skeleton" style="width: 60%; height: 1.25rem; margin-bottom: 0.5rem;"></div>
        <div class="skeleton" style="width: 50%; height: 1.25rem;"></div>
      </div>
    </div>
  `).join('');

  setTimeout(() => {
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="animate-in" style="grid-column: 1 / -1; padding: 5rem 1rem; text-align: center; opacity: 0;">
          <div style="width: 72px; height: 72px; border-radius: 50%; background: var(--hover-bg); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--text-muted);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M11 8v6"></path><path d="M8 11h6"></path></svg>
          </div>
          <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;" data-i18n="empty_events">No events found</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 280px; margin: 0 auto;" data-i18n="empty_events_sub">There are no approved events in this category yet.</p>
        </div>
      `;
      applyLang();
      return;
    }
    
    grid.innerHTML = filtered.map((event, index) => {
      const count = event.registrations || 0;
      const dateStr = formatEventDateRangeShort(event.event_date);
      const timeStr = event.start_time ? event.start_time.slice(0,5) : null;
      
      return `
        <a href="#event?id=${event.id}" class="card animate-in" style="animation-delay: ${index * 0.05}s; opacity: 0; display: block; text-decoration: none;">
          <div class="event-img-wrapper">
            ${event.image_url 
              ? `<img src="${event.image_url}" alt="${event.title}" class="event-img" onerror="this.onerror=null; this.outerHTML='<div class=\\'event-img event-img-placeholder\\'><svg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.5\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\' ry=\\'2\\'></rect><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'></circle><polyline points=\\'21 15 16 10 5 21\\'></polyline></svg></div>';">` 
              : `<div class="event-img event-img-placeholder"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></div>`}
          </div>
          <div class="event-content">
            <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem; flex-wrap: wrap;">
              <span class="badge badge-cat-${event.category.toLowerCase()}">${event.category}</span>
              ${event.scorun > 0 ? `<span class="badge" style="background: var(--accent-glow); color: var(--accent); font-weight: 700;">${event.scorun} SCORUN</span>` : ''}
            </div>
            <h3 class="event-title" style="margin-top: 0; color: var(--text-main);">${event.title}</h3>
            <div class="event-meta">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>${dateStr}${timeStr ? ' · ' + timeStr : ''}</span>
            </div>
            <div class="event-meta" style="margin-bottom: 0;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 180px;">${event.venue}</span>
            </div>
            <div class="event-card-footer">
              <div class="attendee-chip">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span><strong>${count}</strong> going</span>
              </div>
              <span class="view-link">View &rarr;</span>
            </div>
          </div>
        </a>
      `;
    }).join('');
  }, 400);
}

// --- LOGIN VIEW ---
let loginActiveRole = 'student';

let authCarouselIndex = 0;

function initAuthCarousel() {
  const dots = document.querySelectorAll('.auth-dot');
  const track = document.querySelector('.auth-carousel-track');

  if (!dots.length || !track) return;

  // Clear any existing timer to avoid duplicates
  if (authCarouselTimer) {
    clearInterval(authCarouselTimer);
  }

  // Click handler for dots
  dots.forEach(dot => {
    dot.onclick = () => {
      const targetIndex = parseInt(dot.getAttribute('data-slide') || '0', 10);
      if (targetIndex === authCarouselIndex) return;
      
      // Reset timer on manual click
      startAutoplay();
      goToSlide(targetIndex);
    };
  });

  function goToSlide(index) {
    authCarouselIndex = index;
    
    // Slide the track
    track.style.transform = `translateX(-${authCarouselIndex * 100}%)`;

    // Remove active and animating classes immediately from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
      dot.classList.remove('animating');
    });

    // Update active and animating class on dots
    const activeDot = dots[authCarouselIndex];
    if (activeDot) {
      activeDot.classList.add('active');
      void activeDot.offsetWidth; // force browser layout reflow to reset transition
      activeDot.classList.add('animating');
    }
  }

  function startAutoplay() {
    if (authCarouselTimer) clearInterval(authCarouselTimer);
    authCarouselTimer = setInterval(() => {
      let nextIndex = (authCarouselIndex + 1) % 3;
      goToSlide(nextIndex);
    }, 5000); // auto-slide every 5 seconds
  }

  // Set initial active state correctly
  dots.forEach((dot, idx) => {
    if (idx === authCarouselIndex) {
      dot.classList.add('active');
      void dot.offsetWidth; // force layout reflow
      dot.classList.add('animating');
    } else {
      dot.classList.remove('active');
      dot.classList.remove('animating');
    }
  });

  // Set initial position
  track.style.transform = `translateX(-${authCarouselIndex * 100}%)`;

  // Start autoplay
  startAutoplay();
}

function initLoginView() {
  checkAuth(false);
  initAuthCarousel();
  
  const form = document.getElementById('signup-form');
  if(form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value.trim();
        if (!name) return;
        const fakeUser = { id: 'user_' + Date.now(), name, role: loginActiveRole };
        localStorage.setItem('uni_user', JSON.stringify(fakeUser));
        currentUser = fakeUser;
        window.location.hash = '#discover';
      };
  }

  document.querySelectorAll('.auth-role-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.auth-role-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loginActiveRole = btn.getAttribute('data-val');
    };
  });
}

// --- ADMIN VIEW ---
function initAdminView() {
  if (!checkAuth()) return;
  if (currentUser.role !== 'admin') {
    window.location.hash = '#discover';
    return;
  }
  loadAdminData();
}

function loadAdminData() {
  const allEvents = JSON.parse(localStorage.getItem('uni_events') || '[]');
  const pending = allEvents.filter(e => e.status === 'pending');
  const decided = allEvents.filter(e => e.status !== 'pending').slice(0, 10);
  renderPending(pending);
  renderDecided(decided);
}

function renderPending(events) {
  const container = document.getElementById('pending-list');
  if(!container) return;
  if (events.length === 0) {
    container.innerHTML = `
      <div style="padding: 4rem 1rem; text-align: center; background: var(--card-bg); border-radius: 1.25rem; border: 1px dashed var(--border-color); display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <div style="color: var(--amber); margin-bottom: 1.25rem; opacity: 0.9; width: 64px; height: 64px; background: rgba(217, 164, 65, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;" data-i18n="all_caught_up">All caught up!</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;" data-i18n="no_pending_events">There are no events waiting for approval.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = events.map(ev => `
    <div class="card animate-in" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;" id="ev-card-${ev.id}">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;">
        <div style="flex: 1; min-width: 0;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="badge badge-cat-${ev.category.toLowerCase()}">${ev.category}</span>
          </div>
          <h3 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.25rem; color: var(--text-main);"><a href="#event?id=${ev.id}" style="color: inherit; text-decoration: none;">${ev.title}</a></h3>
          <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; flex-wrap: wrap; gap: 0.5rem;">
            <span>By <strong>${ev.requested_by_name || 'Unknown'}</strong></span>
            <span>&bull;</span>
            <span>${formatEventDateRangeShort(ev.event_date)}</span>
            <span>&bull;</span>
            <span>${ev.venue}</span>
          </div>
        </div>
        ${ev.image_url ? `<img src="${ev.image_url}" style="width: 56px; height: 56px; border-radius: 0.5rem; object-fit: cover; flex-shrink: 0;">` : ''}
      </div>
      <p style="font-size: 0.875rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.6;">${ev.description}</p>
      
      <div id="reject-form-${ev.id}" style="display: none;">
        <textarea id="reject-reason-${ev.id}" class="form-control" rows="2" placeholder="Reason for rejection (required)" style="margin-bottom: 0.5rem; font-size: 0.9rem;"></textarea>
        <div style="display: flex; gap: 0.5rem;">
          <button onclick="submitReject('${ev.id}')" class="btn" style="flex: 1; background: #EF4444; color: white; font-size: 0.875rem;">Confirm Reject</button>
          <button onclick="cancelReject('${ev.id}')" class="btn btn-outline" style="flex: 1; font-size: 0.875rem;">Cancel</button>
        </div>
      </div>

      <div id="action-btns-${ev.id}" style="display: flex; gap: 0.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
        <button onclick="handleDecision('${ev.id}', 'approved')" class="btn btn-primary" style="flex: 1; font-size: 0.9rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Approve
        </button>
        <button onclick="showRejectForm('${ev.id}')" class="btn btn-outline" style="flex: 1; color: #EF4444; border-color: rgba(239,68,68,0.3); font-size: 0.9rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          Reject
        </button>
      </div>
    </div>
  `).join('');
}

function renderDecided(events) {
  const container = document.getElementById('decided-list');
  if(!container) return;
  if (events.length === 0) {
    container.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--gray-500);">No recent history.</div>`;
    return;
  }
  container.innerHTML = events.map(ev => `
    <div class="card" style="padding: 1rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
      <div style="min-width: 0;">
        <h4 style="font-weight: 600; font-size: 0.95rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--text-main);"><a href="#event?id=${ev.id}" style="color: inherit; text-decoration: none;">${ev.title}</a></h4>
        <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem;">By ${ev.requested_by_name || 'Unknown'} &bull; ${formatEventDateRangeShort(ev.event_date)}</div>
      </div>
      <span class="badge badge-${ev.status}" style="flex-shrink: 0;">${ev.status}</span>
    </div>
  `).join('');
}

function handleDecision(id, status, reason = null) {
  const card = document.getElementById(`ev-card-${id}`);
  if (card) {
    card.style.transition = 'all 0.3s ease';
    card.style.transform = 'scale(0.95)';
    card.style.opacity = '0';
  }
  setTimeout(() => {
    const events = JSON.parse(localStorage.getItem('uni_events') || '[]');
    const idx = events.findIndex(e => e.id === id);
    if (idx !== -1) {
      events[idx].status = status;
      events[idx].reject_reason = reason;
      localStorage.setItem('uni_events', JSON.stringify(events));
      if (status === 'approved') {
        showToast('Event approved successfully', 'success');
      } else {
        showToast('Event rejected', 'error');
      }
      loadAdminData();
    }
  }, 300);
}

function showRejectForm(id) {
  document.getElementById(`reject-form-${id}`).style.display = 'block';
  document.getElementById(`action-btns-${id}`).style.display = 'none';
  document.getElementById(`reject-reason-${id}`).focus();
}

function cancelReject(id) {
  document.getElementById(`reject-form-${id}`).style.display = 'none';
  document.getElementById(`action-btns-${id}`).style.display = 'flex';
}

function submitReject(id) {
  const reason = document.getElementById(`reject-reason-${id}`).value.trim();
  if (!reason) {
    showToast('Please enter a rejection reason', 'error');
    document.getElementById(`reject-reason-${id}`).focus();
    return;
  }
  handleDecision(id, 'rejected', reason);
}

// --- EVENT VIEW ---
function initEventView() {
  if (!checkAuth(false)) return;
  const hashParts = window.location.hash.split('?');
  if (hashParts.length < 2) {
      window.location.hash = '#discover';
      return;
  }
  const params = new URLSearchParams(hashParts[1]);
  const eventId = params.get('id');
  if (!eventId) {
    window.location.hash = '#discover';
    return;
  }
  renderEvent(eventId);
}

function renderEvent(eventId) {
  const events = JSON.parse(localStorage.getItem('uni_events') || '[]');
  const ev = events.find(e => e.id === eventId);
  const container = document.getElementById('event-content');
  if (!container) return;
  if (!ev) {
    container.innerHTML = `
      <div style="text-align: center; padding: 6rem 2rem; background: var(--card-bg); border-radius: 1.25rem; border: 1px dashed var(--border-color); margin: 2rem auto; max-width: 600px;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--hover-bg); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--text-muted);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        </div>
        <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.5rem;">Event Not Found</h2>
        <p style="color: var(--text-muted); margin-bottom: 2rem;">The event you are looking for doesn't exist or has been removed.</p>
        <a href="#discover" class="btn btn-primary" style="display: inline-flex;">Back to Discover</a>
      </div>
    `;
    return;
  }

  const dateStr = formatEventDateRange(ev.event_date);
  const timeStr = (ev.start_time ? ev.start_time.slice(0,5) : '') + (ev.end_time ? ' - ' + ev.end_time.slice(0,5) : '');
  const isRSVPd = hasRSVPd(eventId);

  const locIcon = ev.location_type === 'online' 
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>` 
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

  container.innerHTML = `
    <!-- Back to Discover Button -->
    <div style="max-width: 1000px; margin: 0 auto 1.5rem;">
      <a href="#discover" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--text-muted); text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: color 0.2s;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        <span data-i18n="btn_back">${TRANSLATIONS[currentLang]?.btn_back || 'Back to Events'}</span>
      </a>
    </div>

    <div style="display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: start; max-width: 1000px; margin: 0 auto;">
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div style="aspect-ratio: 16/9; background: var(--hover-bg); border-radius: 1rem; overflow: hidden; position: relative;">
          ${ev.image_url 
            ? `<img src="${ev.image_url}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.outerHTML='<div style=\\'width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: var(--border-color);\\'><svg width=\\'64\\' height=\\'64\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.5\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\' ry=\\'2\\'></rect><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'></circle><polyline points=\\'21 15 16 10 5 21\\'></polyline></svg></div>';">`
            : `<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: var(--border-color);"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></div>`}
        </div>
 
        <div>
          <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap;">
            <span class="badge badge-cat-${ev.category.toLowerCase()}">${ev.category}</span>
            ${ev.scorun > 0 ? `<span class="badge" style="background: var(--accent-glow); color: var(--accent); font-weight: 700;">${ev.scorun} SCORUN</span>` : ''}
          </div>
          <h1 style="font-size: 2rem; font-weight: 800; color: var(--text-main); margin-bottom: 1.5rem; line-height: 1.2;">${ev.title}</h1>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; padding: 1.5rem; background: var(--card-bg); border-radius: 1rem; border: 1px solid var(--border-color);">
            <div style="display: flex; gap: 1rem;">
              <div style="width: 40px; height: 40px; border-radius: 0.5rem; background: var(--hover-bg); display: flex; align-items: center; justify-content: center; color: var(--amber);">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <div>
                <div style="font-weight: 600; color: var(--text-main); margin-bottom: 0.15rem;">${dateStr}</div>
                <div style="font-size: 0.85rem; color: var(--text-muted);">${timeStr}</div>
              </div>
            </div>
            
            <div style="display: flex; gap: 1rem;">
              <div style="width: 40px; height: 40px; border-radius: 0.5rem; background: var(--hover-bg); display: flex; align-items: center; justify-content: center; color: var(--amber);">
                ${locIcon}
              </div>
              <div>
                <div style="font-weight: 600; color: var(--text-main); margin-bottom: 0.15rem;">${ev.location_type === 'online' ? ev.platform : 'Location'}</div>
                <div style="font-size: 0.85rem; color: var(--text-muted);">${ev.venue}</div>
              </div>
            </div>
          </div>
 
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: var(--text-main);" data-i18n="about_event">About this event</h3>
          <p style="color: var(--text-muted); line-height: 1.7; font-size: 1rem;">${ev.description}</p>
        </div>
      </div>
 
      <div style="position: sticky; top: 2rem;">
        <div class="card" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem;">
          <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin: 0;">Registration</h3>
          
          <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-muted);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <span style="font-size: 0.95rem;">Attendees</span>
            </div>
            <strong style="font-size: 1.1rem; color: var(--text-main);">${ev.registrations || 0}</strong>
          </div>
          
          <button id="rsvp-btn" onclick="toggleRSVP('${eventId}')" class="btn ${isRSVPd ? 'btn-outline' : 'btn-primary'}" style="width: 100%; justify-content: center; padding: 0.875rem;" ${!currentUser ? 'disabled title="Please login to register"' : ''}>
            ${isRSVPd 
              ? (TRANSLATIONS[currentLang]?.btn_cancel_register || 'Cancel Registration') 
              : (TRANSLATIONS[currentLang]?.btn_register || 'Register Now')}
          </button>
          
          ${!currentUser ? '<p style="text-align: center; font-size: 0.8rem; color: var(--text-muted); margin: 0;"><a href="#login" style="color: var(--amber); text-decoration: none;">Login</a> to register</p>' : ''}
          ${currentUser && currentUser.role === 'admin' ? `<p style="text-align: center; font-size: 0.8rem; color: var(--amber); margin: 0;">${TRANSLATIONS[currentLang]?.admin_bypass || 'Admins bypass approval'}</p>` : ''}
        </div>
      </div>
    </div>
  `;
}

function hasRSVPd(eventId) {
  if (!currentUser) return false;
  const rsvps = JSON.parse(localStorage.getItem('uni_rsvps') || '[]');
  return rsvps.some(r => r.event_id === eventId && r.user_id === currentUser.id);
}

function toggleRSVP(eventId) {
  if (!currentUser) return;
  const btn = document.getElementById('rsvp-btn');
  btn.style.opacity = '0.7';
  btn.innerHTML = `<span class="spin" style="margin-right: 0.5rem;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg></span> ${TRANSLATIONS[currentLang]?.btn_processing || 'Processing...'}`;

  setTimeout(() => {
    let rsvps = JSON.parse(localStorage.getItem('uni_rsvps') || '[]');
    let events = JSON.parse(localStorage.getItem('uni_events') || '[]');
    const evIdx = events.findIndex(e => e.id === eventId);
    
    if (hasRSVPd(eventId)) {
      rsvps = rsvps.filter(r => !(r.event_id === eventId && r.user_id === currentUser.id));
      if (evIdx !== -1) {
        events[evIdx].registrations = Math.max(0, (events[evIdx].registrations || 0) - 1);
      }
      showToast('Registration cancelled', 'info');
    } else {
      rsvps.push({ event_id: eventId, user_id: currentUser.id, timestamp: new Date().toISOString() });
      if (evIdx !== -1) {
        events[evIdx].registrations = (events[evIdx].registrations || 0) + 1;
      }
      showToast('Successfully registered for event!');
    }
    
    localStorage.setItem('uni_rsvps', JSON.stringify(rsvps));
    localStorage.setItem('uni_events', JSON.stringify(events));
    renderEvent(eventId);
  }, 500);
}

// --- MY EVENTS VIEW ---
function initMyEventsView() {
  if (!checkAuth()) return;
  if (currentUser.role !== 'committee') {
    window.location.hash = '#discover';
    return;
  }
  loadMyEvents();
}

function loadMyEvents() {
  const allEvents = JSON.parse(localStorage.getItem('uni_events') || '[]');
  const myEvents = allEvents.filter(e => e.requested_by === currentUser.id);
  const container = document.getElementById('my-events-list');
  if(!container) return;

  if (myEvents.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 4rem 1rem; text-align: center; background: var(--card-bg); border-radius: 1.25rem; border: 1px dashed var(--border-color);">
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">No Events Submitted</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">You haven't submitted any events for approval yet.</p>
        <a href="#submit" class="btn btn-primary" style="margin-top: 1.5rem;">Submit an Event</a>
      </div>
    `;
    return;
  }

  container.innerHTML = myEvents.map(ev => {
    let statusColor, statusIcon;
    if (ev.status === 'approved') { statusColor = '#10B981'; statusIcon = '<polyline points="20 6 9 17 4 12"></polyline>'; }
    else if (ev.status === 'rejected') { statusColor = '#EF4444'; statusIcon = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'; }
    else { statusColor = '#F59E0B'; statusIcon = '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>'; }

    return `
      <div class="card" style="padding: 1.5rem; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
          <span class="badge badge-cat-${ev.category.toLowerCase()}">${ev.category}</span>
          <div style="display: flex; align-items: center; gap: 0.35rem; font-size: 0.8rem; font-weight: 600; color: ${statusColor}; background: ${statusColor}15; padding: 0.25rem 0.6rem; border-radius: 1rem;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${statusIcon}</svg>
            ${ev.status.toUpperCase()}
          </div>
        </div>
        
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; line-height: 1.3;"><a href="#event?id=${ev.id}" style="color: inherit; text-decoration: none;">${ev.title}</a></h3>
        
        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem; font-size: 0.85rem; color: var(--text-muted);">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            ${formatEventDateRangeShort(ev.event_date)} &bull; ${ev.start_time.slice(0,5)}
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px;">${ev.venue}</span>
          </div>
        </div>
        
        ${ev.status === 'rejected' && ev.reject_reason ? `
          <div style="margin-top: auto; padding: 0.75rem; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 0.5rem; font-size: 0.8rem; color: #EF4444;">
            <strong style="display: block; margin-bottom: 0.25rem;">Admin Feedback:</strong>
            ${ev.reject_reason}
          </div>
        ` : `<div style="margin-top: auto;"></div>`}
      </div>
    `;
  }).join('');
}

// --- SUBMIT VIEW HELPER FUNCTIONS ---
window.toggleCategoryDropdown = function() {
  const menu = document.getElementById('category-menu');
  const icon = document.getElementById('category-icon');
  if(!menu) return;
  menu.classList.toggle('show');
  if (menu.classList.contains('show')) {
    icon.style.transform = 'rotate(180deg)';
  } else {
    icon.style.transform = 'rotate(0)';
  }
};

window.toggleScorunDropdown = function() {
  const menu = document.getElementById('scorun-menu');
  const icon = document.getElementById('scorun-icon');
  if(!menu) return;
  menu.classList.toggle('show');
  if (menu.classList.contains('show')) {
    icon.style.transform = 'rotate(180deg)';
  } else {
    icon.style.transform = 'rotate(0)';
  }
};

window.togglePlatformDropdown = function() {
  const menu = document.getElementById('platform-menu');
  const icon = document.getElementById('platform-icon');
  if(!menu) return;
  menu.classList.toggle('show');
  if (menu.classList.contains('show')) {
    icon.style.transform = 'rotate(180deg)';
  } else {
    icon.style.transform = 'rotate(0)';
  }
};

window.toggleLoc = function() {
  const isPhysical = document.getElementById('loc_physical').checked;
  const physicalWrap = document.getElementById('loc-physical-wrap');
  const onlineWrap = document.getElementById('loc-online-wrap');
  const physicalInput = document.getElementById('ev-venue-physical');
  const otherInput = document.getElementById('ev-venue-other');

  if (isPhysical) {
    physicalWrap.style.display = 'block';
    physicalInput.required = true;
    onlineWrap.style.display = 'none';
    otherInput.required = false;
  } else {
    physicalWrap.style.display = 'none';
    physicalInput.required = false;
    onlineWrap.style.display = 'flex';
    // Only require otherInput if platform is 'Other'
    const platformActiveBtn = document.querySelector('.platform-option.active');
    const isOtherPlatform = platformActiveBtn && platformActiveBtn.getAttribute('data-val') === 'Other';
    otherInput.required = isOtherPlatform;
  }
};

// --- CUSTOM DATE/TIME PICKER ENGINE ---
let customCurrentYear = new Date().getFullYear();
let customCurrentMonth = new Date().getMonth();
let currentPickerInputId = 'ev-date';
let currentTimeInputId = 'ev-start';
let selectedHours = { 'ev-start': '09', 'ev-end': '17', 'ev-start-time-multi': '09', 'ev-end-time-multi': '17' };
let selectedMinutes = { 'ev-start': '00', 'ev-end': '00', 'ev-start-time-multi': '00', 'ev-end-time-multi': '00' };

window.openCustomDatePicker = function(inputId, e) {
  if (e) e.stopPropagation();
  closeAllCustomPickers();
  currentPickerInputId = inputId;
  
  const popup = document.getElementById('custom-calendar-popup');
  const input = document.getElementById(inputId);
  if (popup && input) {
    document.body.appendChild(popup);
    const rect = input.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    popup.style.top = `${rect.bottom + scrollTop + 8}px`;
    popup.style.left = `${rect.left + scrollLeft}px`;
    
    popup.classList.remove('hidden');
    renderCustomCalendar();
  }
};

window.changeCustomMonth = function(offset, e) {
  if (e) e.stopPropagation();
  customCurrentMonth += offset;
  if (customCurrentMonth < 0) {
    customCurrentMonth = 11;
    customCurrentYear--;
  } else if (customCurrentMonth > 11) {
    customCurrentMonth = 0;
    customCurrentYear++;
  }
  renderCustomCalendar();
};

function renderCustomCalendar() {
  const display = document.getElementById('calendar-month-year-display');
  const grid = document.getElementById('calendar-days-grid');
  if (!display || !grid) return;
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  display.innerText = `${months[customCurrentMonth]} ${customCurrentYear}`;
  
  grid.innerHTML = '';
  
  const firstDayIndex = new Date(customCurrentYear, customCurrentMonth, 1).getDay();
  const lastDayDate = new Date(customCurrentYear, customCurrentMonth + 1, 0).getDate();
  
  for (let i = 0; i < firstDayIndex; i++) {
    const cell = document.createElement('div');
    cell.className = 'calendar-day-cell empty';
    grid.appendChild(cell);
  }
  
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();
  
  const inputVal = document.getElementById(currentPickerInputId).value;
  let activeD = null, activeM = null, activeY = null;
  if (inputVal) {
    const parts = inputVal.split('-');
    activeY = parseInt(parts[0], 10);
    activeM = parseInt(parts[1], 10) - 1;
    activeD = parseInt(parts[2], 10);
  }
  
  for (let d = 1; d <= lastDayDate; d++) {
    const cell = document.createElement('div');
    cell.className = 'calendar-day-cell';
    cell.innerText = d;
    
    const cellDate = new Date(customCurrentYear, customCurrentMonth, d);
    const dateCompare = new Date(todayYear, todayMonth, todayDate);
    
    if (currentPickerInputId === 'ev-end-date') {
      const startDateVal = document.getElementById('ev-start-date').value;
      if (startDateVal) {
        const startParts = startDateVal.split('-');
        const startDateObj = new Date(parseInt(startParts[0], 10), parseInt(startParts[1], 10) - 1, parseInt(startParts[2], 10));
        if (cellDate < startDateObj) {
          cell.classList.add('disabled');
        }
      }
    }
    
    if (cellDate < dateCompare && !cell.classList.contains('disabled')) {
      cell.classList.add('disabled');
    }
    
    if (!cell.classList.contains('disabled')) {
      cell.onclick = (e) => {
        e.stopPropagation();
        const formattedMonth = String(customCurrentMonth + 1).padStart(2, '0');
        const formattedDay = String(d).padStart(2, '0');
        const dateStr = `${customCurrentYear}-${formattedMonth}-${formattedDay}`;
        document.getElementById(currentPickerInputId).value = dateStr;
        closeAllCustomPickers();
      };
    }
    
    if (d === todayDate && customCurrentMonth === todayMonth && customCurrentYear === todayYear) {
      cell.classList.add('today');
    }
    if (d === activeD && customCurrentMonth === activeM && customCurrentYear === activeY) {
      cell.classList.add('active');
    }
    
    grid.appendChild(cell);
  }
}

window.openCustomTimePicker = function(inputId, e) {
  if (e) e.stopPropagation();
  closeAllCustomPickers();
  currentTimeInputId = inputId;
  
  const popup = document.getElementById('custom-time-popup');
  const input = document.getElementById(inputId);
  if (popup && input) {
    document.body.appendChild(popup);
    const rect = input.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    popup.style.top = `${rect.bottom + scrollTop + 8}px`;
    popup.style.left = `${rect.left + scrollLeft}px`;
    
    popup.classList.remove('hidden');
    renderCustomTimeCols(inputId);
  }
};

function renderCustomTimeCols(inputId) {
  const hourCol = document.getElementById('custom-hour-col');
  const minCol = document.getElementById('custom-minute-col');
  if (!hourCol || !minCol) return;
  
  hourCol.innerHTML = '';
  minCol.innerHTML = '';
  
  const currentHour = selectedHours[inputId] || '09';
  const currentMin = selectedMinutes[inputId] || '00';
  
  for (let h = 0; h < 24; h++) {
    const hStr = String(h).padStart(2, '0');
    const item = document.createElement('div');
    item.className = `time-item ${hStr === currentHour ? 'selected' : ''}`;
    item.innerText = hStr;
    item.onclick = (e) => {
      e.stopPropagation();
      selectedHours[inputId] = hStr;
      renderCustomTimeCols(inputId);
    };
    hourCol.appendChild(item);
    if (hStr === currentHour) {
      setTimeout(() => item.scrollIntoView({ block: 'center', behavior: 'smooth' }), 30);
    }
  }
  
  for (let m = 0; m < 60; m += 5) {
    const mStr = String(m).padStart(2, '0');
    const item = document.createElement('div');
    item.className = `time-item ${mStr === currentMin ? 'selected' : ''}`;
    item.innerText = mStr;
    item.onclick = (e) => {
      e.stopPropagation();
      selectedMinutes[inputId] = mStr;
      renderCustomTimeCols(inputId);
    };
    minCol.appendChild(item);
    if (mStr === currentMin) {
      setTimeout(() => item.scrollIntoView({ block: 'center', behavior: 'smooth' }), 30);
    }
  }
}

window.confirmCustomTime = function(e) {
  if (e) e.stopPropagation();
  const inputId = currentTimeInputId;
  const timeStr = `${selectedHours[inputId] || '09'}:${selectedMinutes[inputId] || '00'}`;
  document.getElementById(inputId).value = timeStr;
  closeAllCustomPickers();
};

window.closeAllCustomPickers = function() {
  document.getElementById('custom-calendar-popup')?.classList.add('hidden');
  document.getElementById('custom-time-popup')?.classList.add('hidden');
};

document.addEventListener('click', (e) => {
  if (!e.target.closest('#custom-calendar-popup') && 
      !e.target.closest('#ev-date') && 
      !e.target.closest('#ev-start-date') && 
      !e.target.closest('#ev-end-date')) {
    document.getElementById('custom-calendar-popup')?.classList.add('hidden');
  }
  if (!e.target.closest('#custom-time-popup') && 
      !e.target.closest('#ev-start') && 
      !e.target.closest('#ev-end') && 
      !e.target.closest('#ev-start-time-multi') && 
      !e.target.closest('#ev-end-time-multi')) {
    document.getElementById('custom-time-popup')?.classList.add('hidden');
  }
});

// --- EVENT DATE FORMATTING HELPERS ---
function formatEventDateRange(dateStr) {
  if (!dateStr) return '';
  if (!dateStr.includes(' to ')) {
    const dateObj = new Date(dateStr + 'T00:00:00');
    return dateObj.toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ms-MY', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  }
  
  const parts = dateStr.split(' to ');
  const startObj = new Date(parts[0] + 'T00:00:00');
  const endObj = new Date(parts[1] + 'T00:00:00');
  
  const startDay = startObj.getDate();
  const endDay = endObj.getDate();
  const startMonth = startObj.toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ms-MY', { month: 'long' });
  const endMonth = endObj.toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ms-MY', { month: 'long' });
  const startYear = startObj.getFullYear();
  const endYear = endObj.getFullYear();
  
  if (startYear === endYear) {
    if (startMonth === endMonth) {
      return `${startMonth} ${startDay} - ${endDay}, ${startYear}`;
    } else {
      return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`;
    }
  } else {
    return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;
  }
}

function formatEventDateRangeShort(dateStr) {
  if (!dateStr) return '';
  if (!dateStr.includes(' to ')) {
    const dateObj = new Date(dateStr + 'T00:00:00');
    return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
  
  const parts = dateStr.split(' to ');
  const startObj = new Date(parts[0] + 'T00:00:00');
  const endObj = new Date(parts[1] + 'T00:00:00');
  
  const startDay = startObj.getDate();
  const endDay = endObj.getDate();
  const startMonth = startObj.toLocaleDateString('en-US', { month: 'short' });
  const endMonth = endObj.toLocaleDateString('en-US', { month: 'short' });
  const startYear = startObj.getFullYear();
  
  if (startMonth === endMonth) {
    return `${startMonth} ${startDay} - ${endDay}, ${startYear}`;
  } else {
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`;
  }
}

window.toggleDurationType = function() {
  closeAllCustomPickers();
  const isMulti = document.getElementById('dur_multi').checked;
  const singleWrap = document.getElementById('single-day-wrap');
  const multiWrap = document.getElementById('multi-day-wrap');
  const evDate = document.getElementById('ev-date');
  const evStart = document.getElementById('ev-start');
  const evEnd = document.getElementById('ev-end');
  const evStartDate = document.getElementById('ev-start-date');
  const evEndDate = document.getElementById('ev-end-date');
  
  if (!isMulti) {
    singleWrap.classList.remove('hidden-panel');
    multiWrap.classList.add('hidden-panel');
    evDate.required = true;
    evStart.required = true;
    evEnd.required = true;
    evStartDate.required = false;
    evEndDate.required = false;
  } else {
    singleWrap.classList.add('hidden-panel');
    multiWrap.classList.remove('hidden-panel');
    evDate.required = false;
    evStart.required = false;
    evEnd.required = false;
    evStartDate.required = true;
    evEndDate.required = true;
  }
};

// --- SUBMIT VIEW ---
function initSubmitView() {
  if (!checkAuth()) return;
  if (currentUser.role !== 'committee') {
    window.location.hash = '#discover';
    return;
  }
  
  // Reset selected picker values
  customCurrentYear = new Date().getFullYear();
  customCurrentMonth = new Date().getMonth();
  closeAllCustomPickers();
  
  // Ensure checkboxes and toggle states are synchronized on load
  const durMulti = document.getElementById('dur_multi');
  if (durMulti) durMulti.checked = false;
  toggleDurationType();
  const submitSection = document.getElementById('submit-section');
  const successSection = document.getElementById('success-section');
  if (submitSection && successSection) {
    submitSection.classList.remove('hidden');
    successSection.classList.add('hidden');
  }

  // Category dropdown options selection
  const categoryOptions = document.querySelectorAll('.category-option');
  categoryOptions.forEach(opt => {
    opt.onclick = (e) => {
      categoryOptions.forEach(o => o.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const val = e.currentTarget.getAttribute('data-val');
      document.getElementById('category-display').innerText = val;
      toggleCategoryDropdown();
    };
  });

  // SCORUN dropdown options selection
  const scorunOptions = document.querySelectorAll('.scorun-option');
  scorunOptions.forEach(opt => {
    opt.onclick = (e) => {
      scorunOptions.forEach(o => o.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const valText = e.currentTarget.innerText;
      document.getElementById('scorun-display').innerText = valText;
      toggleScorunDropdown();
    };
  });

  // Platform dropdown options selection
  const platformOptions = document.querySelectorAll('.platform-option');
  const venueOtherInput = document.getElementById('ev-venue-other');
  platformOptions.forEach(opt => {
    opt.onclick = (e) => {
      platformOptions.forEach(o => o.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const valText = e.currentTarget.innerText;
      const val = e.currentTarget.getAttribute('data-val');
      document.getElementById('platform-display').innerText = valText;
      
      if (val === 'Other') {
        venueOtherInput.style.display = 'block';
        venueOtherInput.required = true;
      } else {
        venueOtherInput.style.display = 'none';
        venueOtherInput.required = false;
        venueOtherInput.value = '';
      }
      
      togglePlatformDropdown();
    };
  });
  
  const evDesc = document.getElementById('ev-desc');
  const counter = document.getElementById('desc-counter');
  if (evDesc && counter) {
    evDesc.addEventListener('input', () => {
      counter.innerText = evDesc.value.length;
      if (evDesc.value.length >= 500) {
        counter.style.color = 'var(--amber)';
      } else {
        counter.style.color = 'var(--text-muted)';
      }
    });
  }

  const maxPart = document.getElementById('ev-max-participants');
  if (maxPart) {
    maxPart.addEventListener('input', (e) => {
      if (e.target.value !== '' && parseInt(e.target.value) < 1) {
        e.target.value = 1;
      }
    });
  }

  const form = document.getElementById('submit-form');
  if(form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      
      const locType = document.querySelector('input[name="loc_type"]:checked').value;
      let venueVal = '';
      let platformVal = null;

      if (locType === 'physical') {
        venueVal = document.getElementById('ev-venue-physical').value.trim();
      } else {
        const platformBtn = document.querySelector('.platform-option.active');
        platformVal = platformBtn ? platformBtn.getAttribute('data-val') : 'Google Meet';
        if (platformVal === 'Other') {
          venueVal = document.getElementById('ev-venue-other').value.trim();
        } else {
          venueVal = platformVal;
        }
      }

      const categoryBtn = document.querySelector('.category-option.active');
      const categoryVal = categoryBtn ? categoryBtn.getAttribute('data-val') : 'Workshop';

      const scorunBtn = document.querySelector('.scorun-option.active');
      const scorunVal = scorunBtn ? parseInt(scorunBtn.getAttribute('data-val') || '0', 10) : 0;
      
      const isMulti = document.getElementById('dur_multi').checked;
      let dateVal = '';
      let startTimeVal = '';
      let endTimeVal = '';
      
      if (!isMulti) {
        dateVal = document.getElementById('ev-date').value;
        startTimeVal = document.getElementById('ev-start').value;
        endTimeVal = document.getElementById('ev-end').value;
      } else {
        const startD = document.getElementById('ev-start-date').value;
        const endD = document.getElementById('ev-end-date').value;
        dateVal = `${startD} to ${endD}`;
        startTimeVal = document.getElementById('ev-start-time-multi').value;
        endTimeVal = document.getElementById('ev-end-time-multi').value;
      }

      const newEvent = {
        id: 'ev_' + Date.now(),
        title: document.getElementById('ev-title').value,
        category: categoryVal,
        description: document.getElementById('ev-desc').value,
        event_date: dateVal,
        start_time: startTimeVal,
        end_time: endTimeVal,
        location_type: locType,
        platform: platformVal,
        venue: venueVal,
        image_url: document.getElementById('ev-image').value,
        requested_by: currentUser.id,
        requested_by_name: currentUser.name,
        status: 'pending',
        registrations: 0,
        scorun: scorunVal
      };

      const events = JSON.parse(localStorage.getItem('uni_events') || '[]');
      events.push(newEvent);
      localStorage.setItem('uni_events', JSON.stringify(events));

      document.getElementById('submit-section').classList.add('hidden');
      document.getElementById('success-section').classList.remove('hidden');
    };
  }
}



function toggleMobileMenu() {
  const navContainer = document.querySelector('.nav-container');
  if (navContainer) {
    navContainer.classList.toggle('mobile-open');
  }
}

function updateThemeIcon() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if(themeBtn) {
    const isDark = localStorage.getItem('uni_theme') === 'dark';
    themeBtn.innerHTML = isDark 
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

function renderNav() {
  const container = document.getElementById('navbar-container');
  if (!container) return;
  
  if (!currentUser) {
    container.innerHTML = `
      <div class="nav-container">
        <div style="display: flex; align-items: center; gap: 2.5rem; height: 100%;">
          <a href="#discover" class="nav-brand">UNI<span>Event</span></a>
        </div>
        <div class="nav-right" style="display: flex; align-items: center; gap: 0.25rem;">
          <button id="lang-toggle-btn" class="nav-icon-btn" style="font-weight: 700; font-size: 0.9rem;" onclick="toggleLang()">${currentLang.toUpperCase()}</button>
          <button id="theme-toggle-btn" class="nav-icon-btn" onclick="toggleTheme()" aria-label="Toggle theme"></button>
          <a href="#login" class="btn btn-primary" style="padding: 0.5rem 1.2rem; font-size: 0.85rem; border-radius: 9999px; margin-left: 0.5rem;">Sign In</a>
        </div>
      </div>
    `;
    updateThemeIcon();
    return;
  }
  
  let roleBadge = '';
  if (currentUser.role === 'committee') {
    roleBadge = `<div class="badge i18n-grid" style="font-size: 0.65rem; padding: 0.2rem 0.4rem; background: var(--amber); color: #fff; font-weight: 700; border-radius: 4px; display: inline-grid; align-items: center; justify-content: center; line-height: normal;"><span data-i18n="role_committee" style="margin-top: 1px;">COMMITTEE</span><span class="hidden-longest" style="margin-top: 1px;">JAWATANKUASA</span></div>`;
  } else if (currentUser.role === 'admin') {
    roleBadge = `<div class="badge i18n-grid" style="font-size: 0.65rem; padding: 0.2rem 0.4rem; background: #EF4444; color: #fff; font-weight: 700; border-radius: 4px; display: inline-grid; align-items: center; justify-content: center; line-height: normal;"><span data-i18n="role_admin" style="margin-top: 1px;">ADMIN</span><span class="hidden-longest" style="margin-top: 1px;">ADMIN</span></div>`;
  } else {
    roleBadge = `<div class="badge i18n-grid" style="font-size: 0.65rem; padding: 0.2rem 0.4rem; font-weight: 700; border-radius: 4px; display: inline-grid; align-items: center; justify-content: center; line-height: normal;"><span data-i18n="role_student" style="margin-top: 1px;">STUDENT</span><span class="hidden-longest" style="margin-top: 1px;">PELAJAR</span></div>`;
  };

  let links = `<a href="#discover" class="nav-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><div class="i18n-grid"><span data-i18n="discover_title">Discover Events</span><span class="hidden-longest">Discover Events</span></div></a>`;
  
  if (currentUser.role === 'committee') {
    links += `<a href="#submit" class="nav-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg><div class="i18n-grid"><span data-i18n="nav_submit">Submit Event</span><span class="hidden-longest">Hantar Acara</span></div></a>`;
    links += `<a href="#my-events" class="nav-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg><div class="i18n-grid"><span data-i18n="nav_my_events">My Events</span><span class="hidden-longest">Acara Saya</span></div></a>`;
  }
  
  if (currentUser.role === 'admin') {
    links += `<a href="#admin" class="nav-link"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="21"></line></svg><div class="i18n-grid"><span data-i18n="nav_admin">Admin Dashboard</span><span class="hidden-longest">Papan Pemuka Admin</span></div></a>`;
  }

  container.innerHTML = `
    <div class="nav-container">
      <div style="display: flex; align-items: center; gap: 2.5rem; height: 100%;">
        <a href="#discover" class="nav-brand">UNI<span>Event</span></a>
        <div class="nav-links">${links}</div>
      </div>
      <div class="nav-right" style="display: flex; align-items: center; gap: 0.25rem;">
        <button id="lang-toggle-btn" class="nav-icon-btn" style="font-weight: 700; font-size: 0.9rem;" onclick="toggleLang()">${currentLang.toUpperCase()}</button>
        <button id="theme-toggle-btn" class="nav-icon-btn" onclick="toggleTheme()" aria-label="Toggle theme"></button>
        
        <div class="user-controls-wrapper" style="display: flex; align-items: center; gap: 0.25rem; margin-left: 0.25rem;">
          <!-- User Profile Component -->
          <div class="user-profile-menu" role="button" tabindex="0" aria-label="Open User Profile" style="display: flex; align-items: center; padding: 0 0.75rem 0 0.25rem; height: 40px; box-sizing: border-box; border-radius: 8px; cursor: pointer; transition: background-color 0.2s, box-shadow 0.2s;" onmouseover="this.style.backgroundColor='var(--hover-bg)'" onmouseout="this.style.backgroundColor='transparent'">
            <div class="avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
            <div class="user-details" style="display:flex; flex-direction:column; margin-left:0.5rem; justify-content: center;">
              <span class="user-name" style="font-weight: 600; font-size: 0.85rem; color: var(--text-main); line-height: 1;">${currentUser.name}</span>
              ${roleBadge}
            </div>
          </div>
          
          <!-- Logout Button Component -->
          <button onclick="handleLogout()" class="nav-logout-btn" aria-label="Logout" title="Logout" style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 8px; border: none; background: transparent; color: #EF4444; cursor: pointer; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='rgba(239, 68, 68, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" onmousedown="this.style.transform='scale(0.92)'" onmouseup="this.style.transform='scale(1)'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
          </button>
        </div>
        
        <button class="nav-icon-btn mobile-menu-btn" onclick="toggleMobileMenu()">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </div>
  `;
  
  updateThemeIcon();
}