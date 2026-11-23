/* ===== Portfolio App v2.0 ===== */

const TYPING_MESSAGES = [
    'Hello, I\'m SAHIL...',
    'Full Stack Developer...',
    'Building digital experiences...',
    'Discord bots & web apps...',
    'Type "help" in the CLI below!'
];

const PROJECTS = [
    {
        title: 'SAVAGE Discord GAME Bot',
        description: 'SAVAGE is a Discord Economy bot with Games and moderation features built with Python Language. Includes Discord newly Features also Crossing over 30,000+ Users.',
        status: 'Active',
        tech: ['Python', 'discord.py', 'SQLite', 'REST API'],
        github: 'https://github.com/Savage404E/SAVAGE-BOT',
        server: 'https://discord.gg/besavage'
    },
    {
        title: 'SAVAGE GAME WEBSITE',
        description: 'A website for the SAVAGE Discord Bot, featuring server rules, pictures, FAQs, and bot information.',
        status: 'Completed',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/Savage404E/SAVAGE-WEBSITE',
        website: 'https://savage404e.github.io/SAVAGE-WEBSITE/'
    },
    {
        title: 'My Portfolio Website',
        description: 'My portfolio contains information about contact, projects, skills, and experience.',
        status: 'Completed',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/Savage404E/Sahil-Portfolio',
        website: 'https://savage404e.github.io/Sahil-Portfolio/'
    },
    {
        title: 'Overall Internet intelligent System (OIIS)',
        description: 'JARVIS-style personal AI assistant. Talks, listens, and runs tasks for you — search the web, control apps, automate workflows, fetch info, and manage your digital life from one smart command center.',
        status: 'In Progress',
        tech: ['Python', 'AI / LLM', 'Voice', 'Automation'],
        github: 'https://github.com/Savage404E',
    }
];

const SKILLS = [
    { name: 'Python', category: 'backend', icon: 'fab fa-python' },
    { name: 'HTML', category: 'frontend', icon: 'fab fa-html5' },
    { name: 'CSS', category: 'frontend', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', category: 'frontend', icon: 'fab fa-js' },
    { name: 'TypeScript', category: 'frontend', icon: 'fas fa-code' },
    { name: 'PostgreSQL', category: 'backend', icon: 'fas fa-database' },
    { name: 'MongoDB', category: 'backend', icon: 'fas fa-leaf' },
    { name: 'Docker', category: 'tools', icon: 'fab fa-docker' },
    { name: 'Redis', category: 'backend', icon: 'fas fa-server' },
    { name: 'GitHub', category: 'tools', icon: 'fab fa-github' },
    { name: 'Git', category: 'tools', icon: 'fab fa-git-alt' },
    { name: 'AI Tools', category: 'tools', icon: 'fas fa-robot' },
    { name: 'AWS', category: 'tools', icon: 'fab fa-aws' },
    { name: 'CI/CD', category: 'tools', icon: 'fas fa-code-branch' }
];

const EXPERIENCE = [
    {
        date: '2024 — 2027',
        title: 'Bachelor of Computer Science',
        desc: 'Studying computer science fundamentals, programming, data structures, and software development.'
    },
    {
        date: '2024 — 2026',
        title: 'Full Stack Developer',
        org: 'Personal Projects',
        desc: "I'm a full-stack developer who builds web apps from the user interface down to the server and database."
    },
    {
        date: '2026 — Present',
        title: 'Python & AI/ML Developer',
        org: 'Learning & Personal Projects',
        desc: 'Learning to integrate artificial intelligence and machine learning models into software applications using Python, while also building Python-based applications.'
    },
    {
        date: 'December 27, 2023 at 12:21 PM — Present',
        title: 'SAVAGE Discord Community',
        org: 'Founder · 25,000+ members',
        desc: 'A community connecting people across countries to share their talents in art, video editing, music, gaming, streaming, and festival events.',
        links: [
            { label: 'JOIN', url: 'https://discord.gg/besavage' },
            { label: 'JOIN', url: 'https://discord.gg/savage-1189460443736055828' }
        ]
    }
];

/* ===== Scroll & Cursor ===== */
class ScrollEffects {
    constructor() {
        this.progress = document.getElementById('scrollProgress');
        this.glow = document.getElementById('cursorGlow');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const h = document.documentElement.scrollHeight - window.innerHeight;
            const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
            if (this.progress) this.progress.style.width = `${pct}%`;
        });

        if (this.glow && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.addEventListener('mousemove', (e) => {
                this.glow.style.left = `${e.clientX}px`;
                this.glow.style.top = `${e.clientY}px`;
            });
        }

        document.querySelectorAll('.section-reveal').forEach((el) => {
            const obs = new IntersectionObserver(([e]) => {
                if (e.isIntersecting) {
                    el.classList.add('visible');
                    obs.unobserve(el);
                }
            }, { threshold: 0.08 });
            obs.observe(el);
        });
    }
}

/* ===== Navigation ===== */
class Navigation {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.menuToggle = document.getElementById('menuToggle');
        this.navMenu = document.getElementById('navMenu');
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        this.navLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const id = link.getAttribute('href').slice(1);
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                this.navMenu?.classList.remove('open');
            });
        });

        const sections = document.querySelectorAll('section[id]');
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                    if (!activeLink) return;
                    this.navLinks.forEach((l) => l.classList.remove('active'));
                    activeLink.classList.add('active');
                }
            });
        }, { threshold: 0.35, rootMargin: '-80px 0px' });
        sections.forEach((s) => obs.observe(s));

        this.menuToggle?.addEventListener('click', () => {
            this.navMenu?.classList.toggle('open');
        });

        this.themeToggle?.addEventListener('change', () => {
            const lightTheme = this.themeToggle.checked;
            document.body.classList.toggle('light-theme', lightTheme);
            localStorage.setItem('theme', lightTheme ? 'light' : 'dark');
        });

        const lightTheme = localStorage.getItem('theme') === 'light';
        if (this.themeToggle) {
            this.themeToggle.checked = lightTheme;
        }
        document.body.classList.toggle('light-theme', lightTheme);

    }
}

/* ===== Typing Hero ===== */
class TypingAnimation {
    constructor() {
        this.el = document.getElementById('typingText');
        if (!this.el) return;
        this.messages = TYPING_MESSAGES;
        this.msgIdx = 0;
        this.charIdx = 0;
        this.deleting = false;
        this.type();
    }

    type() {
        const current = this.messages[this.msgIdx];
        if (this.deleting) {
            this.el.textContent = current.substring(0, this.charIdx - 1);
            this.charIdx--;
        } else {
            this.el.textContent = current.substring(0, this.charIdx + 1);
            this.charIdx++;
        }

        let speed = this.deleting ? 40 : 80;
        if (!this.deleting && this.charIdx === current.length) {
            speed = 2200;
            this.deleting = true;
        } else if (this.deleting && this.charIdx === 0) {
            this.deleting = false;
            this.msgIdx = (this.msgIdx + 1) % this.messages.length;
            speed = 400;
        }
        setTimeout(() => this.type(), speed);
    }
}

/* ===== Stats Counter ===== */
class StatsCounter {
    constructor() {
        this.cards = document.querySelectorAll('.stat-number');
        this.init();
    }

    init() {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.animate(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        this.cards.forEach((c) => obs.observe(c));
    }

    animate(el) {
        const target = parseInt(el.dataset.target, 10);
        const duration = 2000;
        const start = performance.now();
        const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = Math.floor(eased * target);
            el.textContent = target >= 1000 ? val.toLocaleString() + '+' : val + (target === 999 ? '+' : '');
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target >= 1000 ? target.toLocaleString() + '+' : target + (target === 999 ? '+' : '');
        };
        requestAnimationFrame(tick);
    }
}

/* ===== Projects ===== */
class ProjectsManager {
    constructor() {
        this.grid = document.getElementById('projectsGrid');
        this.filters = document.querySelectorAll('.filter-btn');
        this.modal = document.getElementById('projectModal');
        this.modalBody = document.getElementById('modalBody');
        this.modalTitle = document.getElementById('modalTitle');
        this.activeFilter = 'all';
        this.init();
    }

    init() {
        this.render();
        this.filters.forEach((btn) => {
            btn.addEventListener('click', () => {
                this.filters.forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');
                this.activeFilter = btn.dataset.filter;
                this.filterCards();
            });
        });
        document.getElementById('modalClose')?.addEventListener('click', () => this.closeModal());
        this.modal?.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });
    }

    render() {
        if (!this.grid) return;
        this.grid.innerHTML = '';
        PROJECTS.forEach((p, i) => {
            const card = document.createElement('article');
            card.className = 'project-card';
            card.dataset.status = p.status;
            card.style.transitionDelay = `${i * 0.05}s`;
            card.innerHTML = `
                <div class="project-header">
                    <h3 class="project-title">${p.title}</h3>
                    <span class="project-status" data-status="${p.status}">${p.status}</span>
                </div>
                <p class="project-description">${p.description}</p>
                <div class="project-tech">${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}</div>
                <div class="project-links">
                    <a href="${p.github}" class="project-link" target="_blank" rel="noopener" onclick="event.stopPropagation()"><i class="fab fa-github"></i> Code</a>
                    ${p.website ? `<a href="${p.website}" class="project-link" target="_blank" rel="noopener" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i> Website</a>` : ''}
                    ${p.server ? `<a href="${p.server}" class="project-link" target="_blank" rel="noopener" onclick="event.stopPropagation()"><i class="fab fa-discord"></i> Server</a>` : ''}
                </div>
                <span class="view-hint"><i class="fas fa-expand"></i> click for details</span>
            `;
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.addEventListener('click', () => this.openModal(p));
            card.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    this.openModal(p);
                }
            });
            this.grid.appendChild(card);
        });
        this.observeCards();
    }

    filterCards() {
        document.querySelectorAll('.project-card').forEach((card) => {
            const show = this.activeFilter === 'all' || card.dataset.status === this.activeFilter;
            card.classList.toggle('hidden-card', !show);
        });
    }

    openModal(p) {
        if (!this.modal) return;
        this.modalTitle.textContent = `project@${p.title.replace(/\s+/g, '_').toLowerCase()}`;
        this.modalBody.innerHTML = `
            <span class="modal-status project-status" data-status="${p.status}">${p.status}</span>
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="modal-tech">${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}</div>
            <div class="modal-links">
                <a href="${p.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i> View on GitHub</a>
                ${p.website ? `<a href="${p.website}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Website</a>` : ''}
                ${p.server ? `<a href="${p.server}" target="_blank" rel="noopener"><i class="fab fa-discord"></i> Server</a>` : ''}
            </div>
        `;
        this.modal.hidden = false;
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.hidden = true;
        document.body.style.overflow = '';
    }

    observeCards() {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.project-card').forEach((c) => {
            c.style.opacity = '0';
            c.style.transform = 'translateY(24px)';
            c.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            obs.observe(c);
        });
    }
}

/* ===== Skills ===== */
class SkillsManager {
    constructor() {
        this.grid = document.getElementById('skillsGrid');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        if (!this.grid) return;
        this.grid.innerHTML = '';
        SKILLS.forEach((skill) => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            card.innerHTML = `
                <div class="skill-header">
                    <div class="skill-name-wrap">
                        <i class="${skill.icon} skill-icon"></i>
                        <span class="skill-name">${skill.name}</span>
                    </div>
                </div>
            `;
            this.grid.appendChild(card);
        });
    }
}

/* ===== Experience Timeline ===== */
class ExperienceTimeline {
    constructor() {
        this.container = document.getElementById('timeline');
        if (!this.container) return;
        EXPERIENCE.forEach((exp) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            // From Uiverse.io by Shoh2008 - https://uiverse.io/Shoh2008/red-mouse-25
            // MIT License, Copyright (c) Shoh2008 (c0der)
            item.innerHTML = `
                <div class="timeline-hourglass" aria-hidden="true"></div>
                <div class="timeline-date">${exp.date}</div>
                <div class="timeline-title">${exp.title}</div>
                ${exp.org ? `<div class="timeline-org">${exp.org}</div>` : ''}
                <p class="timeline-desc">${exp.desc}</p>
                ${exp.links ? `<div class="timeline-links">${exp.links.map((link, index) => `${index ? '<span aria-hidden="true">/</span>' : ''}<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join('')}</div>` : ''}
            `;
            this.container.appendChild(item);
        });
    }
}

/* ===== Command Palette ===== */
class CommandPalette {
    constructor() {
        this.overlay = document.getElementById('cmdPaletteOverlay');
        this.input = document.getElementById('cmdPaletteInput');
        this.list = document.getElementById('cmdPaletteList');
        this.selected = 0;
        this.commands = [
            { cmd: 'home', desc: 'Go to hero section', action: () => this.go('home') },
            { cmd: 'about', desc: 'View stats', action: () => this.go('about') },
            { cmd: 'projects', desc: 'Browse projects', action: () => this.go('projects') },
            { cmd: 'skills', desc: 'View skills', action: () => this.go('skills') },
            { cmd: 'experience', desc: 'Work timeline', action: () => this.go('experience') },
            { cmd: 'github', desc: 'Open GitHub', action: () => window.open('https://github.com/Savage404E', '_blank') },
            { cmd: 'discord', desc: 'Join Discord server', action: () => window.open('https://discord.gg/besavage', '_blank') },
            { cmd: 'theme', desc: 'Toggle light/dark', action: () => document.getElementById('themeToggle')?.click() },
            { cmd: 'terminal', desc: 'Focus CLI', action: () => window.portfolioCLI?.focus() },
            { cmd: 'clear', desc: 'Clear CLI output', action: () => window.portfolioCLI?.runCommand('clear') }
        ];
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.overlay?.hidden ? this.open() : this.close();
            }
            if (e.key === 'Escape') this.close();
        });
        this.overlay?.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.close();
        });
        this.input?.addEventListener('input', () => this.filter());
        this.input?.addEventListener('keydown', (e) => this.handleKeys(e));
    }

    open() {
        this.overlay.hidden = false;
        this.input.value = '';
        this.selected = 0;
        this.filter();
        setTimeout(() => this.input?.focus(), 50);
    }

    close() {
        this.overlay.hidden = true;
    }

    go(id) {
        this.close();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    filter() {
        const q = (this.input?.value || '').toLowerCase();
        const matches = this.commands.filter(
            (c) => c.cmd.includes(q) || c.desc.toLowerCase().includes(q)
        );
        this.list.innerHTML = matches.map((c, i) => `
            <li class="cmd-palette-item ${i === 0 ? 'selected' : ''}" data-idx="${i}">
                <span>${c.cmd}</span>
                <span>${c.desc}</span>
            </li>
        `).join('');
        this.filtered = matches;
        this.selected = 0;
        this.list.querySelectorAll('.cmd-palette-item').forEach((item) => {
            item.addEventListener('click', () => {
                const idx = parseInt(item.dataset.idx, 10);
                this.filtered[idx]?.action();
                this.close();
            });
        });
    }

    handleKeys(e) {
        const items = this.list?.querySelectorAll('.cmd-palette-item');
        if (!items?.length) return;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.selected = (this.selected + 1) % items.length;
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.selected = (this.selected - 1 + items.length) % items.length;
        } else if (e.key === 'Enter') {
            e.preventDefault();
            this.filtered[this.selected]?.action();
            this.close();
            return;
        } else return;
        items.forEach((el, i) => el.classList.toggle('selected', i === this.selected));
    }
}

/* ===== Interactive CLI ===== */
class InteractiveCLI {
    constructor() {
        this.dock = document.getElementById('cliDock');
        this.output = document.getElementById('cliOutput');
        this.form = document.getElementById('cliForm');
        this.input = document.getElementById('cliInput');
        this.history = [];
        this.historyIdx = -1;
        this.commands = {
            help: () => this.cmdHelp(),
            about: () => this.cmdAbout(),
            whoami: () => this.cmdAbout(),
            projects: () => this.cmdProjects(),
            skills: () => this.cmdSkills(),
            experience: () => this.cmdExperience(),
            github: () => { window.open('https://github.com/Savage404E', '_blank'); return 'Opening GitHub...'; },
            linkedin: () => { window.open('https://www.linkedin.com/in/sahil-kadam-473096383/', '_blank'); return 'Opening LinkedIn...'; },
            discord: () => { window.open('https://discord.gg/besavage', '_blank'); return 'Opening Discord server...'; },
            email: () => { window.location.href = 'mailto:sahil22kadam@gmail.com'; return 'Opening mail client...'; },
            clear: () => { this.output.innerHTML = ''; return null; },
            theme: () => { document.getElementById('themeToggle')?.click(); return 'Theme toggled.'; },
            home: () => { this.scroll('home'); return 'Navigating to home...'; },
            ls: () => this.cmdLs(),
            date: () => new Date().toString(),
            echo: (args) => args.join(' ') || '',
            sudo: () => 'Nice try. Visitor privileges only. 😄',
            hack: () => 'Access denied. But nice enthusiasm!',
            coffee: () => '☕ Brewing... 999 cups and counting.',
            neofetch: () => this.cmdNeofetch()
        };
        this.init();
    }

    init() {
        this.form?.addEventListener('submit', (e) => {
            e.preventDefault();
            const cmd = this.input.value.trim();
            if (cmd) {
                this.history.push(cmd);
                this.historyIdx = this.history.length;
                this.runCommand(cmd);
            }
            this.input.value = '';
        });

        this.input?.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp' && this.history.length) {
                e.preventDefault();
                this.historyIdx = Math.max(0, this.historyIdx - 1);
                this.input.value = this.history[this.historyIdx] || '';
            } else if (e.key === 'ArrowDown' && this.history.length) {
                e.preventDefault();
                this.historyIdx = Math.min(this.history.length, this.historyIdx + 1);
                this.input.value = this.history[this.historyIdx] || '';
            }
        });

        document.getElementById('cliMinimize')?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMinimized();
        });

        document.getElementById('cliMaximize')?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.dock?.classList.toggle('expanded');
            this.updateCliControls();
        });

        document.getElementById('cliHeader')?.addEventListener('click', () => {
            if (this.dock?.classList.contains('minimized')) {
                this.open();
            }
        });

        this.updateCliControls();
    }

    open() {
        this.dock?.classList.remove('minimized');
        this.updateCliControls();
        const status = this.dock?.querySelector('.cli-status');
        if (status) status.textContent = '● live';
    }

    toggleMinimized() {
        if (this.dock?.classList.contains('minimized')) {
            this.open();
        } else {
            this.dock?.classList.add('minimized');
            this.dock?.classList.remove('expanded');
            this.updateCliControls();
            const status = this.dock?.querySelector('.cli-status');
            if (status) status.textContent = '● click to open';
        }
    }

    updateCliControls() {
        const btn = document.getElementById('cliMinimize');
        const icon = btn?.querySelector('i');
        const minimized = this.dock?.classList.contains('minimized');
        if (icon) icon.className = minimized ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
        if (btn) btn.title = minimized ? 'Open terminal' : 'Close terminal';
    }

    focus() {
        this.open();
        this.input?.focus();
        this.dock?.scrollIntoView({ behavior: 'smooth' });
    }

    runCommand(raw) {
        const parts = raw.trim().split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        this.print(`<span class="cmd-echo">visitor@SAHIL:~$ ${raw}</span>`, 'cli-line');

        const handler = this.commands[cmd];
        if (handler) {
            const result = handler(args);
            if (result !== null && result !== undefined) {
                this.print(result, typeof result === 'string' && result.includes('denied') ? 'error' : 'success');
            }
        } else if (cmd) {
            this.print(`Command not found: ${cmd}. Type <code>help</code> for available commands.`, 'error');
        }
        this.output.scrollTop = this.output.scrollHeight;
    }

    print(html, cls = 'cli-line') {
        const text = String(html).replace(/\n/g, '<br>');
        const line = document.createElement('div');
        line.className = `cli-line ${cls}`;
        line.style.whiteSpace = 'pre-wrap';
        line.innerHTML = text;
        this.output.appendChild(line);
    }

    scroll(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    cmdHelp() {
        return `Available commands:
  help, about, whoami, projects, skills, experience
  github, linkedin, discord, email, home, ls
  theme, clear, date, echo, neofetch
  sudo, hack, coffee  (easter eggs)`;
    }

    cmdAbout() {
        return `SAHIL — Full Stack Developer
Location: Pune, Maharashtra, India
Role: Creative Solutions & Automation
Status: ● Available for work
Community: 18,000+ Discord members`;
    }

    cmdProjects() {
        this.scroll('projects');
        return PROJECTS.map((p) => `  [${p.status}] ${p.title}`).join('\n');
    }

    cmdSkills() {
        this.scroll('skills');
        return SKILLS.map((s) => `  • ${s.name}`).join('\n');
    }

    cmdExperience() {
        this.scroll('experience');
        return EXPERIENCE.map((e) => `  ${e.date} — ${e.title} @ ${e.org}`).join('\n');
    }

    cmdLs() {
        return `home/  about/  projects/  skills/  experience/  cli/`;
    }

    cmdNeofetch() {
        return `       ███████╗ █████╗ ██╗   ██╗
       OS: Portfolio Linux v2.0
       Host: SAHIL-Dev-Machine
       Location: Pune, India
       Shell: interactive-bash
       Uptime: ${Math.floor(performance.now() / 1000)}s since load
       Projects: ${PROJECTS.length} | Skills: ${SKILLS.length}`;
    }
}

/* ===== Card tilt on hover ===== */
function initCardTilt() {
    if (window.matchMedia('(prefers-reduced-motion: reduce), (hover: none)').matches) return;

    document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.project-card:not(.hidden-card), .skill-card, .stat-card').forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const inBounds = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
            if (inBounds) {
                const cx = (x / rect.width - 0.5) * 8;
                const cy = (y / rect.height - 0.5) * -8;
                card.style.setProperty('--spot-x', `${x}px`);
                card.style.setProperty('--spot-y', `${y}px`);
                card.style.transform = `perspective(600px) rotateY(${cx}deg) rotateX(${cy}deg) translateY(-4px)`;
            } else {
                card.style.transform = '';
            }
        });
    });
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
    new ScrollEffects();
    new Navigation();
    new TypingAnimation();
    new StatsCounter();
    new ProjectsManager();
    new SkillsManager();
    new ExperienceTimeline();
    new CommandPalette();
    window.portfolioCLI = new InteractiveCLI();
    initCardTilt();

    document.getElementById('backToTop')?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('projectModal').hidden = true;
            document.body.style.overflow = '';
            document.getElementById('cmdPaletteOverlay').hidden = true;
        }
    });
});
