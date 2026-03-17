// ========================================
//  PORTFOLIO CHATBOT — Ajitha Rajkumar
//  Interactive bot with LIVE website control
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    //  KNOWLEDGE BASE
    // =============================================
    const PROFILE = {
        name: 'Ajitha Rajkumar',
        role: 'Project & Delivery Management Professional',
        company: 'Jio Platforms Limited',
        location: 'India',
        linkedin: 'https://www.linkedin.com/in/ajitha-rajkumar/',
        github: 'https://github.com/Ajitha-Rajkumar',
        email: 'ajitha.rajkumar@email.com',
        yearsAtJio: '3+',
        summary: 'A dedicated professional at Jio Platforms Limited with 3+ years of experience spanning SIT delivery, production support optimization, process documentation, and full feature delivery management.',
    };

    const SKILLS = [
        { name: 'Azure DevOps', desc: 'Project lifecycle management, sprint planning, feature tracking & delivery.' },
        { name: 'Avolution Abacus', desc: 'Enterprise architecture, process documentation, business process modeling.' },
        { name: 'eTOM / TM Forum', desc: 'Telecom operations mapping, business process alignment to industry standards.' },
        { name: 'Project & Delivery Management', desc: 'Agile methodology, milestone tracking, cross-functional team coordination.' },
        { name: 'Infrastructure Automation', desc: 'Fiber automation features, SIT delivery, Siteforge feature management.' },
        { name: 'Production Support', desc: 'Ticket resolution, issue triaging, process streamlining & UX improvement.' },
    ];

    const PROJECTS = [
        {
            name: 'Siteforge — Complete Feature Delivery',
            period: 'Aug 2024 — Present',
            tag: 'Current',
            desc: 'Handling end-to-end delivery of Siteforge features, managing the complete development lifecycle from requirements to production release using Azure DevOps.',
            highlights: [
                'Managing complete delivery of Siteforge features',
                'Coordinating with cross-functional teams for timely milestones',
                'Driving stakeholder alignment on requirements & release schedules',
            ],
            tech: ['Azure DevOps', 'Agile', 'Feature Delivery'],
        },
        {
            name: 'Jio Process Documentation & eTOM Mapping',
            period: '2024 — Aug 2024',
            tag: 'Documentation',
            desc: 'Documented Jio infrastructure automation processes using Avolution Abacus and mapped them to eTOM standards defined by TM Forum.',
            highlights: [
                'Created process documentation using Avolution Abacus',
                'Coordinated with solution architects across Jio to capture business process steps with impacted systems',
                'Mapped Jio processes to eTOM standards defined by TM Forum',
            ],
            tech: ['Avolution Abacus', 'eTOM', 'TM Forum'],
        },
        {
            name: 'One Fiber — Production Ticket Reduction',
            period: '2023 — 2024',
            tag: 'Operations',
            desc: 'Anchored the One Fiber production ticket reduction project, achieving a 70% reduction in support tickets by streamlining processes and improving user experience.',
            highlights: [
                'Anchored ticket reduction project for one full year',
                'Reduced 70% support tickets through process streamlining',
                'Monitored core fiber build links across the country',
            ],
            tech: ['Production Support', 'Process Optimization', 'UX'],
        },
        {
            name: 'P2B OSP Feature — SIT Delivery',
            period: '2022 — 2023',
            tag: 'SIT Delivery',
            desc: 'Managed the System Integration Testing (SIT) delivery of the P2B OSP feature, ensuring quality and readiness for production deployment.',
            highlights: [
                'Led SIT delivery of P2B OSP feature',
                'Coordinated testing cycles and defect management',
                'Facilitated triage calls across cross-functional teams',
            ],
            tech: ['SIT', 'Azure DevOps', 'Defect Management'],
        },
    ];

    const EXPERIENCE = [
        { period: 'Aug 2024 — Present', role: 'Delivery Manager', project: 'Siteforge Feature Delivery', desc: 'Handling complete end-to-end delivery of Siteforge features.' },
        { period: '2024 — Aug 2024', role: 'Process Documentation Lead', project: 'Jio Process Documentation & eTOM Mapping', desc: 'Documented processes using Avolution Abacus and coordinated with solution architects across Jio to map business processes to eTOM standards.' },
        { period: '2023 — 2024', role: 'Project Anchor', project: 'One Fiber — Production Ticket Reduction', desc: 'Anchored ticket reduction project, achieved 70% reduction in support tickets.' },
        { period: '2022 — 2023', role: 'SIT Delivery Coordinator', project: 'P2B OSP Feature — SIT Delivery', desc: 'Managed SIT delivery of P2B OSP feature.' },
    ];

    // =============================================
    //  ACTION ENGINE — Live website manipulations
    // =============================================
    const COLOR_THEMES = {
        purple:  { primary: '#6C63FF', dark: '#5A52D5', light: '#8B83FF', accent: '#FF6584', glow: 'rgba(108, 99, 255, 0.3)' },
        blue:    { primary: '#3B82F6', dark: '#2563EB', light: '#60A5FA', accent: '#F472B6', glow: 'rgba(59, 130, 246, 0.3)' },
        green:   { primary: '#10B981', dark: '#059669', light: '#34D399', accent: '#F59E0B', glow: 'rgba(16, 185, 129, 0.3)' },
        red:     { primary: '#EF4444', dark: '#DC2626', light: '#F87171', accent: '#8B5CF6', glow: 'rgba(239, 68, 68, 0.3)' },
        orange:  { primary: '#F97316', dark: '#EA580C', light: '#FB923C', accent: '#6366F1', glow: 'rgba(249, 115, 22, 0.3)' },
        pink:    { primary: '#EC4899', dark: '#DB2777', light: '#F472B6', accent: '#6C63FF', glow: 'rgba(236, 72, 153, 0.3)' },
        teal:    { primary: '#14B8A6', dark: '#0D9488', light: '#2DD4BF', accent: '#F43F5E', glow: 'rgba(20, 184, 166, 0.3)' },
        yellow:  { primary: '#EAB308', dark: '#CA8A04', light: '#FACC15', accent: '#8B5CF6', glow: 'rgba(234, 179, 8, 0.3)' },
        cyan:    { primary: '#06B6D4', dark: '#0891B2', light: '#22D3EE', accent: '#F43F5E', glow: 'rgba(6, 182, 212, 0.3)' },
    };

    let currentFontScale = 1;
    let particlesEnabled = true;
    const defaultColor = 'purple';
    let currentColor = defaultColor;

    const actions = {

        // --- Navigate to a section ---
        navigateTo(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Highlight the section briefly
                setTimeout(() => actions.highlightSection(sectionId), 600);
                return true;
            }
            return false;
        },

        // --- Highlight a section with a pulse ---
        highlightSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (!section) return;

            section.classList.add('chatbot-highlight');
            setTimeout(() => section.classList.remove('chatbot-highlight'), 2000);
        },

        // --- Change theme ---
        setTheme(theme) {
            const html = document.documentElement;
            html.setAttribute('data-theme', theme);
            localStorage.setItem('portfolio-theme', theme);

            // Update the theme icon in the navbar
            const themeIcon = document.getElementById('themeIcon');
            if (themeIcon) {
                if (theme === 'light') {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                    themeIcon.style.transform = 'rotate(360deg)';
                } else {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                    themeIcon.style.transform = 'rotate(0deg)';
                }
            }
        },

        toggleTheme() {
            const current = document.documentElement.getAttribute('data-theme');
            actions.setTheme(current === 'dark' ? 'light' : 'dark');
        },

        // --- Change accent color ---
        changeColor(colorName) {
            const color = COLOR_THEMES[colorName];
            if (!color) return false;

            currentColor = colorName;
            const root = document.documentElement;
            root.style.setProperty('--primary', color.primary);
            root.style.setProperty('--primary-dark', color.dark);
            root.style.setProperty('--primary-light', color.light);
            root.style.setProperty('--accent', color.accent);
            root.style.setProperty('--primary-glow', color.glow);

            // Flash the body to show the change
            document.body.classList.add('chatbot-color-transition');
            setTimeout(() => document.body.classList.remove('chatbot-color-transition'), 800);
            return true;
        },

        // --- Font size ---
        changeFontSize(direction) {
            if (direction === 'increase') {
                currentFontScale = Math.min(currentFontScale + 0.1, 1.5);
            } else if (direction === 'decrease') {
                currentFontScale = Math.max(currentFontScale - 0.1, 0.7);
            } else if (direction === 'reset') {
                currentFontScale = 1;
            }
            document.documentElement.style.fontSize = (currentFontScale * 100) + '%';
            return currentFontScale;
        },

        // --- Toggle particles ---
        toggleParticles(enable) {
            const container = document.getElementById('particles');
            if (!container) return;
            particlesEnabled = enable;
            container.style.display = enable ? 'block' : 'none';
        },

        // --- Open external link ---
        openLink(url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        },

        // --- Download resume ---
        downloadResume() {
            const link = document.createElement('a');
            link.href = 'Ajitha Rajkumar Resume.docx';
            link.download = 'Ajitha Rajkumar Resume.docx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },

        // --- Toggle section visibility ---
        toggleSection(sectionId, show) {
            const section = document.getElementById(sectionId);
            if (!section) return false;

            if (show) {
                section.style.display = '';
                section.style.opacity = '0';
                requestAnimationFrame(() => {
                    section.style.transition = 'opacity 0.5s ease';
                    section.style.opacity = '1';
                });
            } else {
                section.style.transition = 'opacity 0.5s ease';
                section.style.opacity = '0';
                setTimeout(() => section.style.display = 'none', 500);
            }

            // Update corresponding nav link visibility
            const navLink = document.querySelector(`a.nav-link[href="#${sectionId}"]`);
            if (navLink) {
                navLink.closest('li').style.display = show ? '' : 'none';
            }

            return true;
        },

        // --- Filter projects by tag ---
        filterProjects(tag) {
            const cards = document.querySelectorAll('.project-card');
            if (!tag || tag === 'all') {
                cards.forEach(card => {
                    card.style.display = '';
                    card.style.opacity = '0';
                    requestAnimationFrame(() => {
                        card.style.transition = 'opacity 0.4s ease';
                        card.style.opacity = '1';
                    });
                });
                return 'all';
            }

            const tagLower = tag.toLowerCase();
            let shown = 0;

            cards.forEach(card => {
                const cardTag = card.querySelector('.project-tag');
                const cardTitle = card.querySelector('h3');
                const match = (cardTag && cardTag.textContent.toLowerCase().includes(tagLower)) ||
                              (cardTitle && cardTitle.textContent.toLowerCase().includes(tagLower));

                if (match) {
                    card.style.display = '';
                    card.style.opacity = '0';
                    requestAnimationFrame(() => {
                        card.style.transition = 'opacity 0.4s ease';
                        card.style.opacity = '1';
                    });
                    shown++;
                } else {
                    card.style.transition = 'opacity 0.3s ease';
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });

            return shown;
        },

        // --- Reset all customizations ---
        resetAll() {
            // Reset color
            actions.changeColor('purple');
            // Reset font size
            currentFontScale = 1;
            document.documentElement.style.fontSize = '';
            // Reset particles
            actions.toggleParticles(true);
            // Show all sections
            document.querySelectorAll('section[id]').forEach(s => {
                s.style.display = '';
                s.style.opacity = '1';
            });
            // Show all nav links
            document.querySelectorAll('.nav-links li').forEach(li => li.style.display = '');
            // Show all project cards
            actions.filterProjects('all');
            // Reset theme to dark
            actions.setTheme('dark');
        },

        // --- Animate a specific element (bounce) ---
        bounceElement(selector) {
            const el = document.querySelector(selector);
            if (!el) return;
            el.classList.add('chatbot-bounce');
            setTimeout(() => el.classList.remove('chatbot-bounce'), 1000);
        },
    };

    // =============================================
    //  SECTION ID MAP — for navigation intents
    // =============================================
    const SECTION_MAP = {
        'home': 'hero', 'top': 'hero', 'hero': 'hero', 'start': 'hero', 'beginning': 'hero',
        'about': 'about', 'about me': 'about', 'about section': 'about', 'bio': 'about', 'profile': 'about',
        'skills': 'skills', 'skill': 'skills', 'expertise': 'skills', 'technologies': 'skills', 'tech': 'skills',
        'projects': 'projects', 'project': 'projects', 'work': 'projects', 'portfolio': 'projects',
        'experience': 'experience', 'career': 'experience', 'timeline': 'experience', 'journey': 'experience',
        'github': 'github', 'repos': 'github', 'repositories': 'github', 'github projects': 'github',
        'contact': 'contact', 'reach': 'contact', 'get in touch': 'contact', 'connect': 'contact', 'message': 'contact',
    };

    // =============================================
    //  INTENT PATTERNS & RESPONSES (with actions)
    // =============================================
    const intents = [

        // =======================
        //  INTERACTIVE COMMANDS
        // =======================

        // --- Navigate to section ---
        {
            patterns: ['go to', 'take me to', 'show me', 'navigate to', 'scroll to', 'jump to', 'open section', 'show section', 'move to'],
            response: (input) => {
                const target = findSectionFromInput(input);
                if (target) {
                    return `Navigating to the <strong>${target.replace('hero','Home')}</strong> section! ✨ I've highlighted it for you.`;
                }
                return `I can navigate you to any section! Try saying: <em>"go to projects"</em>, <em>"show me skills"</em>, or <em>"take me to contact"</em>.`;
            },
            action: (input) => {
                const target = findSectionFromInput(input);
                if (target) actions.navigateTo(target);
            },
            quickReplies: ['Go to Projects', 'Show Skills', 'Go to Contact'],
        },

        // --- Scroll to top ---
        {
            patterns: ['scroll to top', 'go to top', 'back to top', 'go home', 'go to home', 'show home'],
            response: () => `Scrolling back to the top! 🏠`,
            action: () => actions.navigateTo('hero'),
            quickReplies: ['About', 'Projects', 'Contact'],
        },

        // --- Switch to light mode ---
        {
            patterns: ['light mode', 'switch to light', 'enable light mode', 'turn on light', 'bright mode', 'day mode', 'white mode', 'light theme'],
            response: () => `Switched to <strong>Light Mode</strong> ☀️! The website now has a bright, clean look.`,
            action: () => actions.setTheme('light'),
            quickReplies: ['Dark Mode', 'Change Color', 'Reset'],
        },

        // --- Switch to dark mode ---
        {
            patterns: ['dark mode', 'switch to dark', 'enable dark mode', 'turn on dark', 'night mode', 'dark theme', 'black mode'],
            response: () => `Switched to <strong>Dark Mode</strong> 🌙! Easier on the eyes.`,
            action: () => actions.setTheme('dark'),
            quickReplies: ['Light Mode', 'Change Color', 'Reset'],
        },

        // --- Toggle theme ---
        {
            patterns: ['toggle theme', 'switch theme', 'change theme', 'toggle mode', 'change mode', 'swap theme'],
            response: () => {
                const current = document.documentElement.getAttribute('data-theme');
                const newTheme = current === 'dark' ? 'Light' : 'Dark';
                return `Theme toggled! Now in <strong>${newTheme} Mode</strong> ${newTheme === 'Light' ? '☀️' : '🌙'}`;
            },
            action: () => actions.toggleTheme(),
            quickReplies: ['Change Color', 'Font Size', 'Reset'],
        },

        // --- Change color ---
        {
            patterns: ['change color', 'change colour', 'set color', 'theme color', 'color to', 'make it', 'switch color', 'accent color'],
            response: (input) => {
                const color = findColorFromInput(input);
                if (color) {
                    const emoji = { purple: '💜', blue: '💙', green: '💚', red: '❤️', orange: '🧡', pink: '💗', teal: '🩵', yellow: '💛', cyan: '🩵' };
                    return `Color changed to <strong>${color.charAt(0).toUpperCase() + color.slice(1)}</strong> ${emoji[color] || '🎨'}! The entire website has been updated.`;
                }
                return `I can change the website's color! Available colors:<br>💜 Purple (default) • 💙 Blue • 💚 Green • ❤️ Red • 🧡 Orange • 💗 Pink • 🩵 Teal • 💛 Yellow • 🩵 Cyan<br><br>Try: <em>"change color to blue"</em>`;
            },
            action: (input) => {
                const color = findColorFromInput(input);
                if (color) actions.changeColor(color);
            },
            quickReplies: ['Blue', 'Green', 'Red', 'Pink', 'Reset Color'],
        },

        // --- Set specific color (shortcut) ---
        {
            patterns: ['make it blue', 'blue theme', 'blue color', 'color blue'],
            response: () => `Changed to <strong>Blue</strong> 💙! Fresh and professional look.`,
            action: () => actions.changeColor('blue'),
            quickReplies: ['Green', 'Red', 'Purple', 'Reset Color'],
        },
        {
            patterns: ['make it green', 'green theme', 'green color', 'color green'],
            response: () => `Changed to <strong>Green</strong> 💚! Fresh and energetic.`,
            action: () => actions.changeColor('green'),
            quickReplies: ['Blue', 'Red', 'Purple', 'Reset Color'],
        },
        {
            patterns: ['make it red', 'red theme', 'red color', 'color red'],
            response: () => `Changed to <strong>Red</strong> ❤️! Bold and striking.`,
            action: () => actions.changeColor('red'),
            quickReplies: ['Blue', 'Green', 'Purple', 'Reset Color'],
        },
        {
            patterns: ['make it pink', 'pink theme', 'pink color', 'color pink'],
            response: () => `Changed to <strong>Pink</strong> 💗! Vibrant and playful.`,
            action: () => actions.changeColor('pink'),
            quickReplies: ['Blue', 'Green', 'Purple', 'Reset Color'],
        },
        {
            patterns: ['make it orange', 'orange theme', 'orange color', 'color orange'],
            response: () => `Changed to <strong>Orange</strong> 🧡! Warm and creative.`,
            action: () => actions.changeColor('orange'),
            quickReplies: ['Blue', 'Green', 'Purple', 'Reset Color'],
        },
        {
            patterns: ['make it teal', 'teal theme', 'teal color', 'color teal'],
            response: () => `Changed to <strong>Teal</strong> 🩵! Cool and sophisticated.`,
            action: () => actions.changeColor('teal'),
            quickReplies: ['Blue', 'Green', 'Purple', 'Reset Color'],
        },
        {
            patterns: ['make it yellow', 'yellow theme', 'yellow color', 'color yellow'],
            response: () => `Changed to <strong>Yellow</strong> 💛! Bright and cheerful.`,
            action: () => actions.changeColor('yellow'),
            quickReplies: ['Blue', 'Green', 'Purple', 'Reset Color'],
        },
        {
            patterns: ['make it cyan', 'cyan theme', 'cyan color', 'color cyan'],
            response: () => `Changed to <strong>Cyan</strong> 🩵! Clean and modern.`,
            action: () => actions.changeColor('cyan'),
            quickReplies: ['Blue', 'Green', 'Purple', 'Reset Color'],
        },

        // --- Reset color ---
        {
            patterns: ['reset color', 'default color', 'original color', 'purple color', 'make it purple', 'color purple'],
            response: () => `Restored to the original <strong>Purple</strong> 💜 theme!`,
            action: () => actions.changeColor('purple'),
            quickReplies: ['Change Color', 'Toggle Theme', 'Reset All'],
        },

        // --- Increase font size ---
        {
            patterns: ['increase font', 'bigger text', 'larger text', 'make text bigger', 'bigger font', 'increase size', 'zoom in', 'enlarge text', 'font bigger', 'larger font'],
            response: () => {
                const pct = Math.round(currentFontScale * 100 + 10);
                return `Font size increased to <strong>${pct}%</strong> 🔍! Text is now larger and easier to read.`;
            },
            action: () => actions.changeFontSize('increase'),
            quickReplies: ['Bigger Text', 'Smaller Text', 'Reset Font'],
        },

        // --- Decrease font size ---
        {
            patterns: ['decrease font', 'smaller text', 'reduce text', 'make text smaller', 'smaller font', 'decrease size', 'zoom out', 'shrink text', 'font smaller'],
            response: () => {
                const pct = Math.round(currentFontScale * 100 - 10);
                return `Font size decreased to <strong>${pct}%</strong> 🔎! Text is now more compact.`;
            },
            action: () => actions.changeFontSize('decrease'),
            quickReplies: ['Bigger Text', 'Smaller Text', 'Reset Font'],
        },

        // --- Reset font size ---
        {
            patterns: ['reset font', 'default font', 'normal font', 'original font', 'reset size', 'normal size', 'default size', 'reset text size'],
            response: () => `Font size restored to <strong>100%</strong> (default)!`,
            action: () => actions.changeFontSize('reset'),
            quickReplies: ['Bigger Text', 'Change Color', 'Reset All'],
        },

        // --- Toggle particles ---
        {
            patterns: ['turn off particles', 'disable particles', 'hide particles', 'no particles', 'remove particles', 'stop particles'],
            response: () => `Particles have been <strong>turned off</strong>. The hero section is now cleaner.`,
            action: () => actions.toggleParticles(false),
            quickReplies: ['Turn On Particles', 'Change Color', 'Reset All'],
        },
        {
            patterns: ['turn on particles', 'enable particles', 'show particles', 'add particles', 'start particles'],
            response: () => `Particles are back <strong>on</strong>! ✨ Watch them float in the hero section.`,
            action: () => actions.toggleParticles(true),
            quickReplies: ['Turn Off Particles', 'Change Color', 'Go to Home'],
        },

        // --- Open LinkedIn ---
        {
            patterns: ['open linkedin', 'launch linkedin', 'go to linkedin', 'visit linkedin'],
            response: () => `Opening Ajitha's <strong>LinkedIn profile</strong> in a new tab! 🔗`,
            action: () => actions.openLink(PROFILE.linkedin),
            quickReplies: ['Open GitHub', 'Contact', 'About'],
        },

        // --- Open GitHub ---
        {
            patterns: ['open github', 'launch github', 'go to github profile', 'visit github'],
            response: () => `Opening Ajitha's <strong>GitHub profile</strong> in a new tab! 🐙`,
            action: () => actions.openLink(PROFILE.github),
            quickReplies: ['Open LinkedIn', 'GitHub Projects', 'Contact'],
        },

        // --- Download resume ---
        {
            patterns: ['download resume', 'get resume', 'save resume', 'download cv', 'get cv', 'download file'],
            response: () => `Downloading <strong>Ajitha's Resume</strong>... 📄 Check your downloads folder!`,
            action: () => actions.downloadResume(),
            quickReplies: ['About', 'Experience', 'Contact'],
        },

        // --- Hide section ---
        {
            patterns: ['hide section', 'hide the', 'remove section', 'close section'],
            response: (input) => {
                const target = findSectionFromInput(input);
                if (target && target !== 'hero') {
                    return `The <strong>${target}</strong> section has been hidden! You can say <em>"show ${target}"</em> to bring it back.`;
                }
                return `Which section would you like to hide? Try: <em>"hide skills"</em> or <em>"hide contact"</em>`;
            },
            action: (input) => {
                const target = findSectionFromInput(input);
                if (target && target !== 'hero') actions.toggleSection(target, false);
            },
            quickReplies: ['Show All Sections', 'Reset All'],
        },

        // --- Show section ---
        {
            patterns: ['show all sections', 'show all', 'restore sections', 'unhide all', 'show everything'],
            response: () => `All sections are now <strong>visible</strong> again! ✨`,
            action: () => {
                document.querySelectorAll('section[id]').forEach(s => {
                    s.style.display = '';
                    s.style.opacity = '1';
                });
                document.querySelectorAll('.nav-links li').forEach(li => li.style.display = '');
            },
            quickReplies: ['Go to Projects', 'Change Color', 'Help'],
        },

        // --- Filter projects ---
        {
            patterns: ['show current project', 'filter current', 'only current', 'show only current'],
            response: () => `Showing only the <strong>current project</strong> (Siteforge). Say <em>"show all projects"</em> to restore.`,
            action: () => {
                actions.filterProjects('current');
                actions.navigateTo('projects');
            },
            quickReplies: ['Show All Projects', 'Siteforge Details', 'Reset'],
        },
        {
            patterns: ['show all projects', 'all projects', 'restore projects', 'clear filter'],
            response: () => `All <strong>4 projects</strong> are now visible again!`,
            action: () => actions.filterProjects('all'),
            quickReplies: ['Filter Current', 'Go to Projects', 'Help'],
        },

        // --- Reset everything ---
        {
            patterns: ['reset all', 'reset everything', 'restore defaults', 'default settings', 'reset website', 'undo all', 'undo changes', 'reset'],
            response: () => `All customizations have been <strong>reset to defaults</strong>! 🔄<br>• Theme: Dark<br>• Color: Purple<br>• Font: 100%<br>• Particles: On<br>• All sections visible`,
            action: () => actions.resetAll(),
            quickReplies: ['Change Color', 'Toggle Theme', 'Help'],
        },

        // =======================
        //  KNOWLEDGE INTENTS
        // =======================

        // --- Greetings ---
        {
            patterns: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'howdy', 'what\'s up', 'sup'],
            response: () => `Hi there! 👋 I'm <strong>Ajitha's interactive portfolio assistant</strong>. I can tell you about her experience, projects, skills, and more — plus I can <strong>control this website live!</strong><br><br>Try saying <em>"change color to blue"</em> or <em>"go to projects"</em>!`,
            quickReplies: ['What Can You Do?', 'About Ajitha', 'Projects', 'Change Color'],
        },

        // --- About / Who ---
        {
            patterns: ['who is ajitha', 'who are you', 'tell me about ajitha', 'about ajitha', 'about you', 'about her', 'about yourself', 'introduce', 'introduction', 'about me', 'who is she', 'bio', 'background'],
            response: () => `<strong>${PROFILE.name}</strong> is a ${PROFILE.role} at <strong>${PROFILE.company}</strong> with ${PROFILE.yearsAtJio} years of experience.<br><br>${PROFILE.summary}<br><br>She has worked on key projects including Siteforge delivery, One Fiber ticket reduction (70% reduction!), Jio Process Documentation using Avolution Abacus, and P2B OSP SIT delivery.`,
            action: () => actions.navigateTo('about'),
            quickReplies: ['Skills', 'Projects', 'Experience', 'Contact'],
        },

        // --- Skills ---
        {
            patterns: ['skills', 'what skills', 'expertise', 'what can she do', 'capabilities', 'competencies', 'tools', 'tech stack', 'what does she know', 'strengths'],
            response: () => {
                let list = SKILLS.map(s => `<li><strong>${s.name}</strong> — ${s.desc}</li>`).join('');
                return `Here are Ajitha's key skills & expertise:<ul>${list}</ul>`;
            },
            action: () => actions.navigateTo('skills'),
            quickReplies: ['Azure DevOps', 'Avolution Abacus', 'eTOM', 'Projects'],
        },

        // --- Azure DevOps ---
        {
            patterns: ['azure devops', 'azure', 'devops', 'ado'],
            response: () => `<strong>Azure DevOps</strong> is one of Ajitha's core tools. She uses it for:<ul><li>Project lifecycle management & sprint planning</li><li>Feature tracking & delivery across all projects</li><li>Defect management & triage coordination</li></ul>She has used Azure DevOps across all her projects at Jio — from P2B OSP SIT delivery to the current Siteforge feature delivery.`,
            quickReplies: ['Siteforge', 'P2B OSP', 'All Skills'],
        },

        // --- Avolution Abacus ---
        {
            patterns: ['abacus', 'avolution', 'avolution abacus', 'enterprise architecture'],
            response: () => `<strong>Avolution Abacus</strong> is the enterprise architecture tool Ajitha used for the <strong>Jio Process Documentation</strong> project (2024 — Aug 2024).<br><br>She documented Jio infrastructure automation processes, working closely with solution architects across Jio to capture business process steps along with impacted systems, and mapped them to eTOM standards.`,
            quickReplies: ['eTOM', 'Process Documentation', 'Experience'],
        },

        // --- eTOM / TM Forum ---
        {
            patterns: ['etom', 'tm forum', 'telecom operations map', 'telecom standards', 'enhanced telecom'],
            response: () => `<strong>eTOM (Enhanced Telecom Operations Map)</strong> is an industry-standard framework defined by <strong>TM Forum</strong>.<br><br>Ajitha coordinated with solution architects across Jio to capture business process steps with impacted systems and mapped them to eTOM processes. This ensured Jio's processes align with global telecom industry best practices.`,
            quickReplies: ['Avolution Abacus', 'Process Documentation', 'Skills'],
        },

        // --- Projects (general) ---
        {
            patterns: ['projects', 'what projects', 'tell me about projects', 'what has she worked on', 'deliverables', 'what did she do'],
            response: () => {
                let list = PROJECTS.map(p => `<li><strong>${p.name}</strong> (${p.period}) — ${p.desc.substring(0, 80)}...</li>`).join('');
                return `Ajitha has delivered <strong>4 major projects</strong> at Jio Platforms Limited:<ul>${list}</ul>Which project would you like to know more about?`;
            },
            action: () => actions.navigateTo('projects'),
            quickReplies: ['Siteforge', 'Process Documentation', 'One Fiber', 'P2B OSP'],
        },

        // --- Siteforge ---
        {
            patterns: ['siteforge', 'site forge', 'current project', 'current work', 'what is she doing now', 'present project', 'latest project', 'working on now'],
            response: () => {
                const p = PROJECTS[0];
                let highlights = p.highlights.map(h => `<li>${h}</li>`).join('');
                return `<strong>${p.name}</strong><br>📅 ${p.period} | 🏷️ ${p.tag}<br><br>${p.desc}<br><br>Key highlights:<ul>${highlights}</ul>Technologies: ${p.tech.join(', ')}`;
            },
            quickReplies: ['Other Projects', 'Experience', 'Go to Projects'],
        },

        // --- Process Documentation ---
        {
            patterns: ['process documentation', 'documentation project', 'jio process', 'bpmn', 'process mapping', 'document'],
            response: () => {
                const p = PROJECTS[1];
                let highlights = p.highlights.map(h => `<li>${h}</li>`).join('');
                return `<strong>${p.name}</strong><br>📅 ${p.period} | 🏷️ ${p.tag}<br><br>${p.desc}<br><br>Key highlights:<ul>${highlights}</ul>Technologies: ${p.tech.join(', ')}`;
            },
            quickReplies: ['Avolution Abacus', 'eTOM', 'Other Projects'],
        },

        // --- One Fiber ---
        {
            patterns: ['one fiber', 'onefiber', 'ticket reduction', 'production ticket', 'support ticket', '70%', 'seventy percent'],
            response: () => {
                const p = PROJECTS[2];
                let highlights = p.highlights.map(h => `<li>${h}</li>`).join('');
                return `<strong>${p.name}</strong><br>📅 ${p.period} | 🏷️ ${p.tag}<br><br>${p.desc}<br><br>Key highlights:<ul>${highlights}</ul>🎯 <strong>Impact: 70% reduction in support tickets!</strong><br><br>Technologies: ${p.tech.join(', ')}`;
            },
            quickReplies: ['Other Projects', 'Experience', 'Achievements'],
        },

        // --- P2B OSP ---
        {
            patterns: ['p2b', 'osp', 'p2b osp', 'sit delivery', 'system integration testing', 'sit'],
            response: () => {
                const p = PROJECTS[3];
                let highlights = p.highlights.map(h => `<li>${h}</li>`).join('');
                return `<strong>${p.name}</strong><br>📅 ${p.period} | 🏷️ ${p.tag}<br><br>${p.desc}<br><br>Key highlights:<ul>${highlights}</ul>Technologies: ${p.tech.join(', ')}`;
            },
            quickReplies: ['Other Projects', 'Experience', 'Skills'],
        },

        // --- Experience ---
        {
            patterns: ['experience', 'career', 'work history', 'timeline', 'journey', 'roles', 'positions', 'work experience', 'career journey'],
            response: () => {
                let timeline = EXPERIENCE.map(e =>
                    `<li><strong>${e.period}</strong> — ${e.role}<br><em>${e.project}</em>: ${e.desc}</li>`
                ).join('');
                return `Here's Ajitha's career journey at <strong>Jio Platforms Limited</strong>:<ul>${timeline}</ul>All roles are within Jio Platforms Limited.`;
            },
            action: () => actions.navigateTo('experience'),
            quickReplies: ['Siteforge', 'One Fiber', 'Skills', 'Contact'],
        },

        // --- Current Role ---
        {
            patterns: ['current role', 'current position', 'what does she do', 'role now', 'designation', 'title'],
            response: () => `Ajitha is currently working as a <strong>Delivery Manager</strong> at <strong>Jio Platforms Limited</strong>, handling the complete end-to-end delivery of <strong>Siteforge features</strong> since August 2024.`,
            quickReplies: ['Siteforge', 'Past Projects', 'Skills'],
        },

        // --- Achievements ---
        {
            patterns: ['achievements', 'accomplishments', 'impact', 'results', 'key achievement', 'proud of'],
            response: () => `Here are Ajitha's standout achievements at Jio:<ul><li>🎯 <strong>70% reduction in support tickets</strong> — One Fiber project (2023–2024)</li><li>📋 <strong>End-to-end process documentation</strong> using Avolution Abacus mapped to eTOM standards</li><li>🤝 <strong>Cross-Jio coordination</strong> — worked with solution architects across the organization</li><li>🚀 <strong>Full feature delivery ownership</strong> — currently managing Siteforge delivery</li><li>📊 <strong>3+ years of consistent delivery</strong> across 4 major projects at Jio</li></ul>`,
            quickReplies: ['Projects', 'Experience', 'Skills'],
        },

        // --- Contact ---
        {
            patterns: ['contact', 'email', 'get in touch', 'connect', 'how to contact', 'reach out', 'talk to', 'hire'],
            response: () => `You can reach <strong>Ajitha Rajkumar</strong> through:<ul><li>📧 <strong>Email:</strong> ${PROFILE.email}</li><li>💼 <strong>LinkedIn:</strong> <a href="${PROFILE.linkedin}" target="_blank">linkedin.com/in/ajitha-rajkumar</a></li><li>🐙 <strong>GitHub:</strong> <a href="${PROFILE.github}" target="_blank">github.com/Ajitha-Rajkumar</a></li><li>📍 <strong>Location:</strong> ${PROFILE.location}</li></ul>Or use the <strong>contact form</strong> on this page!`,
            action: () => actions.navigateTo('contact'),
            quickReplies: ['Open LinkedIn', 'Open GitHub', 'Go to Contact'],
        },

        // --- LinkedIn ---
        {
            patterns: ['linkedin', 'linked in', 'linkedin profile', 'linkedin url'],
            response: () => `You can find Ajitha on LinkedIn here:<br><br>🔗 <a href="${PROFILE.linkedin}" target="_blank"><strong>linkedin.com/in/ajitha-rajkumar</strong></a><br><br>Feel free to connect! Or say <em>"open linkedin"</em> and I'll open it for you.`,
            quickReplies: ['Open LinkedIn', 'GitHub', 'Contact'],
        },

        // --- GitHub ---
        {
            patterns: ['github', 'git hub', 'github profile', 'repositories', 'repos', 'code', 'open source'],
            response: () => {
                const data = window.githubRepoData;
                if (data && data.repos) {
                    const originalRepos = data.repos.filter(r => !r.fork);
                    const repoList = originalRepos.slice(0, 5).map(r =>
                        `<li><strong>${r.name}</strong>${r.lang ? ` (${r.lang})` : ''} — ${r.desc || 'No description'}${r.pages ? ` — <a href="https://ajitha-rajkumar.github.io/${r.name}/" target="_blank">Live Site</a>` : ''}</li>`
                    ).join('');
                    return `Check out Ajitha's GitHub profile:<br><br>🐙 <a href="${PROFILE.github}" target="_blank"><strong>github.com/Ajitha-Rajkumar</strong></a><br><br>She has <strong>${data.total} public repositories</strong> (${data.original} original, ${data.forked} forked) across ${data.languages.join(', ')}.<br><br>Top original repos:<ul>${repoList}</ul>Say <em>"go to github"</em> to see the full GitHub section!`;
                }
                return `Check out Ajitha's GitHub profile:<br><br>🐙 <a href="${PROFILE.github}" target="_blank"><strong>github.com/Ajitha-Rajkumar</strong></a><br><br>Say <em>"go to github"</em> to see all repositories!`;
            },
            action: () => actions.navigateTo('github'),
            quickReplies: ['Open GitHub', 'Live Sites', 'Go to GitHub'],
        },

        // --- GitHub Live Sites ---
        {
            patterns: ['live site', 'live sites', 'live website', 'live demo', 'deployed', 'hosted', 'github pages', 'github io'],
            response: () => {
                const data = window.githubRepoData;
                if (data && data.repos) {
                    const liveSites = data.repos.filter(r => r.pages);
                    if (liveSites.length > 0) {
                        const list = liveSites.map(r =>
                            `<li>🌐 <strong>${r.name}</strong> — <a href="https://ajitha-rajkumar.github.io/${r.name}/" target="_blank">ajitha-rajkumar.github.io/${r.name}</a></li>`
                        ).join('');
                        return `Here are Ajitha's <strong>live websites</strong> hosted on GitHub Pages:<ul>${list}</ul>`;
                    }
                }
                return `Here are Ajitha's <strong>live websites</strong> hosted on GitHub Pages:<ul><li>🌐 <strong>Portfolio</strong> — <a href="https://ajitha-rajkumar.github.io/portfolio/" target="_blank">ajitha-rajkumar.github.io/portfolio</a></li><li>🤖 <strong>Embedded AI Project</strong> — <a href="https://ajitha-rajkumar.github.io/oaqjp-final-project-emb-ai/" target="_blank">ajitha-rajkumar.github.io/oaqjp-final-project-emb-ai</a></li></ul>`;
            },
            quickReplies: ['Go to GitHub', 'Projects', 'Contact'],
        },

        // --- Logistics / Shipping ---
        {
            patterns: ['logistics', 'shipping', 'shipping rates', 'logisticsshippingrates'],
            response: () => `<strong>LogisticsShippingRates</strong> is one of Ajitha's original GitHub repositories, built with <strong>Python</strong>.<br><br>It's an application for calculating logistics shipping rates with dynamic pricing models.<br><br>🔗 <a href="https://github.com/Ajitha-Rajkumar/LogisticsShippingRates" target="_blank">View on GitHub</a>`,
            quickReplies: ['Go to GitHub', 'Other Projects', 'Skills'],
        },

        // --- Company / Jio ---
        {
            patterns: ['jio', 'company', 'organization', 'where does she work', 'employer', 'jio platforms'],
            response: () => `Ajitha works at <strong>Jio Platforms Limited</strong>, one of India's largest technology companies. She has been with Jio for <strong>3+ years</strong> (since 2022), working across multiple critical projects in infrastructure automation and telecom operations.`,
            quickReplies: ['Experience', 'Projects', 'Current Role'],
        },

        // --- Location ---
        {
            patterns: ['location', 'where', 'based', 'city', 'country'],
            response: () => `Ajitha is based in <strong>India</strong>, working at <strong>Jio Platforms Limited</strong>.`,
            quickReplies: ['Contact', 'About Ajitha', 'LinkedIn'],
        },

        // --- Resume ---
        {
            patterns: ['resume', 'cv', 'curriculum vitae'],
            response: () => `You can download Ajitha's resume by clicking the <strong>"Download Resume"</strong> button in the About section, or say <em>"download resume"</em> and I'll start the download!<br><br><a href="Ajitha Rajkumar Resume.docx" download>📄 Click here to download</a>`,
            quickReplies: ['Download Resume', 'About Ajitha', 'Experience'],
        },

        // --- Education ---
        {
            patterns: ['education', 'degree', 'university', 'college', 'qualification', 'study', 'studied'],
            response: () => `I don't have specific education details available right now. You can check Ajitha's <a href="${PROFILE.linkedin}" target="_blank">LinkedIn profile</a> or download her <a href="Ajitha Rajkumar Resume.docx" download>resume</a> for full education details.`,
            quickReplies: ['Open LinkedIn', 'Download Resume', 'Skills'],
        },

        // --- Fiber / Telecom ---
        {
            patterns: ['fiber', 'fibre', 'telecom', 'telecommunications', 'network', 'infrastructure'],
            response: () => `Ajitha has extensive experience in <strong>telecom infrastructure</strong> at Jio:<ul><li><strong>One Fiber:</strong> Anchored production ticket reduction, achieving 70% ticket reduction</li><li><strong>P2B OSP:</strong> Managed SIT delivery for fiber automation</li><li><strong>eTOM Mapping:</strong> Aligned Jio processes to global telecom standards</li><li><strong>Siteforge:</strong> Currently delivering infrastructure features</li></ul>`,
            quickReplies: ['One Fiber', 'Siteforge', 'eTOM'],
        },

        // --- Agile ---
        {
            patterns: ['agile', 'scrum', 'sprint', 'methodology'],
            response: () => `Ajitha follows <strong>Agile methodology</strong> in her delivery management work. She uses <strong>Azure DevOps</strong> for sprint planning, feature tracking, and lifecycle management across all her projects at Jio Platforms Limited.`,
            quickReplies: ['Azure DevOps', 'Projects', 'Skills'],
        },

        // --- Thanks ---
        {
            patterns: ['thanks', 'thank you', 'thank', 'thx', 'appreciate', 'helpful', 'great'],
            response: () => `You're welcome! 😊 Glad I could help. Remember, I can also <strong>customize this website</strong> for you — try changing colors, themes, or navigating to different sections!`,
            quickReplies: ['Change Color', 'Toggle Theme', 'Contact'],
        },

        // --- Goodbye ---
        {
            patterns: ['bye', 'goodbye', 'see you', 'later', 'take care', 'exit', 'quit', 'close'],
            response: () => `Goodbye! 👋 Thanks for exploring Ajitha's portfolio. Feel free to come back anytime!`,
            quickReplies: ['Contact', 'LinkedIn'],
        },

        // --- What can you do (INTERACTIVE HELP) ---
        {
            patterns: ['what can you do', 'options', 'menu', 'commands', 'how to use', 'what do you know', 'capabilities', 'features', 'interactive'],
            response: () => `I'm an <strong>interactive assistant</strong> that can both answer questions AND control this website! Here's what I can do:<br><br>
🎨 <strong>Visual Controls:</strong>
<ul>
<li><em>"Change color to blue/green/red/pink..."</em> — Change the website's color scheme</li>
<li><em>"Light mode"</em> / <em>"Dark mode"</em> — Switch the theme</li>
<li><em>"Bigger text"</em> / <em>"Smaller text"</em> — Adjust font size</li>
<li><em>"Turn off particles"</em> — Toggle hero particles</li>
</ul>
🧭 <strong>Navigation:</strong>
<ul>
<li><em>"Go to projects"</em> / <em>"Show me skills"</em> — Navigate to any section</li>
<li><em>"Open LinkedIn"</em> / <em>"Open GitHub"</em> — Open links</li>
<li><em>"Download resume"</em> — Download the resume file</li>
</ul>
📋 <strong>Content:</strong>
<ul>
<li><em>"Show current project"</em> — Filter projects</li>
<li><em>"Hide contact"</em> — Hide/show sections</li>
<li><em>"Reset all"</em> — Restore defaults</li>
</ul>
💡 <strong>Knowledge:</strong>
<ul>
<li>Ask about Ajitha's skills, projects, experience, or achievements</li>
</ul>`,
            quickReplies: ['Change Color', 'Go to Projects', 'Toggle Theme', 'About Ajitha'],
        },

        // --- Help ---
        {
            patterns: ['help'],
            response: () => `I can help you learn about Ajitha's portfolio AND <strong>control this website live!</strong><br><br>
<strong>📌 Quick actions:</strong>
<ul>
<li>🎨 <em>"Change color to blue"</em></li>
<li>🌙 <em>"Switch to dark mode"</em></li>
<li>🔍 <em>"Make text bigger"</em></li>
<li>🧭 <em>"Go to projects"</em></li>
<li>📄 <em>"Download resume"</em></li>
<li>🔗 <em>"Open LinkedIn"</em></li>
<li>🔄 <em>"Reset all"</em></li>
</ul>
<strong>📋 Ask about:</strong> Skills, Projects, Experience, Contact, GitHub, Achievements`,
            quickReplies: ['What Can You Do?', 'Change Color', 'About Ajitha', 'Projects'],
        },
    ];

    // =============================================
    //  HELPER FUNCTIONS
    // =============================================
    function findSectionFromInput(input) {
        const cleaned = input.toLowerCase().replace(/[^\w\s]/g, '').trim();
        for (const [keyword, sectionId] of Object.entries(SECTION_MAP)) {
            if (cleaned.includes(keyword)) return sectionId;
        }
        return null;
    }

    function findColorFromInput(input) {
        const cleaned = input.toLowerCase();
        for (const color of Object.keys(COLOR_THEMES)) {
            if (cleaned.includes(color)) return color;
        }
        return null;
    }

    // =============================================
    //  MATCHING ENGINE
    // =============================================
    function findBestIntent(input) {
        const cleaned = input.toLowerCase().replace(/[^\w\s]/g, '').trim();
        const words = cleaned.split(/\s+/);

        let bestMatch = null;
        let bestScore = 0;

        for (const intent of intents) {
            let score = 0;

            for (const pattern of intent.patterns) {
                const patternWords = pattern.toLowerCase().split(/\s+/);

                // Exact full match
                if (cleaned === pattern.toLowerCase()) {
                    score = Math.max(score, 100);
                    continue;
                }

                // Full pattern contained in input
                if (cleaned.includes(pattern.toLowerCase())) {
                    score = Math.max(score, 80 + patternWords.length * 5);
                    continue;
                }

                // Word-level matching
                let wordMatches = 0;
                for (const pw of patternWords) {
                    if (words.some(w => w === pw || w.includes(pw) || pw.includes(w))) {
                        wordMatches++;
                    }
                }

                if (wordMatches > 0) {
                    const wordScore = (wordMatches / patternWords.length) * 60 + wordMatches * 5;
                    score = Math.max(score, wordScore);
                }
            }

            if (score > bestScore) {
                bestScore = score;
                bestMatch = intent;
            }
        }

        // Require a minimum confidence threshold
        if (bestScore >= 25 && bestMatch) {
            return bestMatch;
        }

        return null;
    }

    function getFallbackResponse() {
        const fallbacks = [
            `I'm not sure about that. I can help with Ajitha's <strong>skills</strong>, <strong>projects</strong>, <strong>experience</strong>, or <strong>contact</strong> details. I can also <strong>customize this website</strong> — try <em>"change color to blue"</em>!`,
            `Hmm, I don't have details on that topic. Try asking about Ajitha's <strong>projects at Jio</strong>, her <strong>skills</strong>, or try a website command like <em>"dark mode"</em> or <em>"go to projects"</em>!`,
            `I can answer questions about Ajitha's portfolio AND control this website live! Try: <em>"change color to green"</em>, <em>"go to skills"</em>, or ask about her <strong>experience</strong>!`,
        ];
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }

    // =============================================
    //  UI BUILDER
    // =============================================
    function buildChatbotUI() {
        // Launcher button
        const launcher = document.createElement('button');
        launcher.className = 'chatbot-launcher';
        launcher.id = 'chatbotLauncher';
        launcher.setAttribute('aria-label', 'Open chatbot');
        launcher.innerHTML = `
            <img src="laptop.png" alt="Chat" class="icon-chat launcher-img" />
            <i class="fas fa-times icon-close"></i>
            <span class="badge">1</span>
        `;

        // Chat window
        const chatWindow = document.createElement('div');
        chatWindow.className = 'chatbot-window';
        chatWindow.id = 'chatbotWindow';
        chatWindow.innerHTML = `
            <div class="chatbot-header">
                <div class="chatbot-avatar"><img src="laptop.png" alt="Bot" class="chatbot-avatar-img" /></div>
                <div class="chatbot-header-info">
                    <h4>Ajitha's Portfolio Bot</h4>
                    <p><span class="online-dot"></span> Online — I can control this website!</p>
                </div>
            </div>
            <div class="chatbot-messages" id="chatbotMessages"></div>
            <div class="chatbot-input">
                <input type="text" id="chatbotInput" placeholder="Try: change color to blue..." autocomplete="off">
                <button id="chatbotSend" aria-label="Send message"><i class="fas fa-paper-plane"></i></button>
            </div>
        `;

        document.body.appendChild(launcher);
        document.body.appendChild(chatWindow);

        return { launcher, chatWindow };
    }

    // =============================================
    //  CHAT FUNCTIONS
    // =============================================
    const { launcher, chatWindow } = buildChatbotUI();
    const messagesContainer = document.getElementById('chatbotMessages');
    const inputField = document.getElementById('chatbotInput');
    const sendBtn = document.getElementById('chatbotSend');

    let isOpen = false;
    let hasGreeted = false;

    function toggleChat() {
        isOpen = !isOpen;
        launcher.classList.toggle('active', isOpen);
        chatWindow.classList.toggle('open', isOpen);

        if (isOpen && !hasGreeted) {
            hasGreeted = true;
            // Remove badge
            const badge = launcher.querySelector('.badge');
            if (badge) badge.remove();
            // Welcome message
            setTimeout(() => {
                addBotMessage(
                    `Hi there! 👋 I'm <strong>Ajitha's interactive portfolio assistant</strong>.<br><br>I can tell you about her experience, projects, and skills — <strong>plus I can control this website live!</strong><br><br>🎨 Try: <em>"change color to blue"</em><br>🌙 Try: <em>"switch to light mode"</em><br>🧭 Try: <em>"go to projects"</em><br><br>What would you like to do?`,
                    ['What Can You Do?', 'About Ajitha', 'Change Color', 'Projects']
                );
            }, 400);
        }

        if (isOpen) {
            setTimeout(() => inputField.focus(), 400);
        }
    }

    function addBotMessage(html, quickReplies = [], actionFn = null) {
        // Show typing indicator first
        const typing = document.createElement('div');
        typing.className = 'typing-indicator';
        typing.innerHTML = `
            <div class="msg-avatar"><img src="laptop.png" alt="Bot" class="msg-avatar-img" /></div>
            <div class="typing-dots"><span></span><span></span><span></span></div>
        `;
        messagesContainer.appendChild(typing);
        scrollToBottom();

        // Replace with actual message after a brief delay
        const delay = Math.min(400 + html.length * 2, 1200);
        setTimeout(() => {
            typing.remove();

            const msg = document.createElement('div');
            msg.className = 'chat-message bot';
            msg.innerHTML = `
                <div class="msg-avatar"><img src="laptop.png" alt="Bot" class="msg-avatar-img" /></div>
                <div class="msg-bubble">${html}</div>
            `;
            messagesContainer.appendChild(msg);

            // Execute the action after showing the message
            if (actionFn) {
                setTimeout(() => actionFn(), 200);
            }

            // Quick replies
            if (quickReplies.length > 0) {
                const qrContainer = document.createElement('div');
                qrContainer.className = 'quick-replies';
                quickReplies.forEach(text => {
                    const btn = document.createElement('button');
                    btn.className = 'quick-reply-btn';
                    btn.textContent = text;
                    btn.addEventListener('click', () => {
                        handleUserInput(text);
                        // Remove quick replies after clicking
                        qrContainer.remove();
                    });
                    qrContainer.appendChild(btn);
                });
                messagesContainer.appendChild(qrContainer);
            }

            scrollToBottom();
        }, delay);
    }

    function addUserMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'chat-message user';
        msg.innerHTML = `
            <div class="msg-avatar"><i class="fas fa-user"></i></div>
            <div class="msg-bubble">${escapeHtml(text)}</div>
        `;
        messagesContainer.appendChild(msg);
        scrollToBottom();
    }

    function handleUserInput(text) {
        if (!text.trim()) return;

        addUserMessage(text);
        inputField.value = '';

        // Remove any existing quick replies
        const existingQR = messagesContainer.querySelectorAll('.quick-replies');
        existingQR.forEach(qr => qr.remove());

        // Find intent
        const intent = findBestIntent(text);

        if (intent) {
            // Build the action callback
            const actionFn = intent.action ? () => intent.action(text) : null;
            const response = typeof intent.response === 'function' ? intent.response(text) : intent.response;
            addBotMessage(response, intent.quickReplies || [], actionFn);
        } else {
            addBotMessage(getFallbackResponse(), ['Help', 'What Can You Do?', 'Projects', 'Change Color']);
        }
    }

    function scrollToBottom() {
        setTimeout(() => {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 50);
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // =============================================
    //  EVENT LISTENERS
    // =============================================
    launcher.addEventListener('click', toggleChat);

    sendBtn.addEventListener('click', () => {
        handleUserInput(inputField.value);
    });

    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleUserInput(inputField.value);
        }
    });

    // Close chat on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            toggleChat();
        }
    });

});
