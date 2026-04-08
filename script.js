// ========================================
//  PORTFOLIO JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // ========== THEME TOGGLE ==========
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
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

    // ========== NAVBAR SCROLL EFFECT ==========
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        // Add scrolled class
        navbar.classList.toggle('scrolled', window.scrollY > 50);

        // Active link highlighting
        const scrollPos = window.scrollY + 150;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // ========== MOBILE NAV TOGGLE ==========
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });

    // ========== ANIMATED COUNTER ==========
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;

        statNumbers.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });

        countersAnimated = true;
    }

    // ========== SCROLL REVEAL ==========
    function addRevealClasses() {
        const elements = document.querySelectorAll(
            '.skill-card, .cert-card, .project-card, .timeline-item, .about-grid, .contact-grid, .github-card, .github-profile-banner'
        );
        elements.forEach(el => el.classList.add('reveal'));
    }
    addRevealClasses();

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');

                // Trigger counters when hero stats are visible
                if (entry.target.closest('.hero') || entry.target.classList.contains('hero')) {
                    animateCounters();
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Observe hero stats for counter animation
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                }
            });
        }, { threshold: 0.1 });
        statsObserver.observe(heroStats);
    }

    // Fallback: trigger counters after hero CSS animations complete
    setTimeout(animateCounters, 1500);

    // ========== FLOATING PARTICLES ==========
    const particlesContainer = document.getElementById('particles');

    function createParticles() {
        const count = 30;
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
            particle.style.animationDelay = (Math.random() * 10) + 's';
            particle.style.width = (Math.random() * 4 + 2) + 'px';
            particle.style.height = particle.style.width;

            // Random colors
            const colors = ['var(--primary)', 'var(--primary-light)', 'var(--accent)'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];

            particlesContainer.appendChild(particle);
        }
    }
    createParticles();

    // ========== SMOOTH SCROLL (fallback) ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== CONTACT FORM ==========
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        // Simulate sending
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
                contactForm.reset();
            }, 2500);
        }, 1500);
    });

    // ========== PARALLAX ON MOUSE MOVE (Hero) ==========
    const heroContent = document.querySelector('.hero-content');

    document.querySelector('.hero').addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        heroContent.style.transform = `translate(${x}px, ${y}px)`;
    });

    document.querySelector('.hero').addEventListener('mouseleave', () => {
        heroContent.style.transform = 'translate(0, 0)';
        heroContent.style.transition = 'transform 0.5s ease';
        setTimeout(() => {
            heroContent.style.transition = '';
        }, 500);
    });

    // ========== TRIGGER INITIAL COUNTER ==========
    // If hero stats are already visible on load
    setTimeout(() => {
        animateCounters();
    }, 1500);

    // ========== DYNAMIC GITHUB REPOS ==========
    const GITHUB_USERNAME = 'Ajitha-Rajkumar';

    const LANG_COLORS = {
        Python: '#3572A5', CSS: '#563d7c', HTML: '#e34c26',
        Shell: '#89e051', JavaScript: '#f1e05a', TypeScript: '#3178c6',
        Java: '#b07219', 'Jupyter Notebook': '#DA5B0B', Go: '#00ADD8',
        Ruby: '#701516', PHP: '#4F5D95', C: '#555555', 'C++': '#f34b7d',
        'C#': '#178600', Swift: '#ffac45', Kotlin: '#A97BFF', Rust: '#dea584',
    };

    function createRepoCard(repo, isForked) {
        const langColor = LANG_COLORS[repo.language] || '#8b8b8b';
        const hasPages = repo.has_pages;
        const pagesUrl = `https://${repo.owner.login}.github.io/${repo.name}/`;
        const updatedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short'
        });

        const card = document.createElement('div');
        card.className = `github-card${isForked ? ' forked' : ''}`;
        card.classList.add('reveal');

        card.innerHTML = `
            <div class="github-card-header">
                <div class="github-card-icon">
                    <i class="fas fa-${isForked ? 'code-branch' : 'book'}"></i>
                </div>
                ${repo.language ? `
                    <span class="github-lang">
                        <span class="lang-dot" style="background:${langColor}"></span> ${repo.language}
                    </span>
                ` : ''}
            </div>
            <h4><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></h4>
            <p>${repo.description || 'No description provided.'}</p>
            ${isForked ? `
                <div class="github-card-meta">
                    <span><i class="fas fa-code-branch"></i> Forked repository</span>
                </div>
            ` : ''}
            <div class="github-card-stats">
                ${repo.stargazers_count > 0 ? `<span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>` : ''}
                ${repo.forks_count > 0 ? `<span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>` : ''}
                <span><i class="fas fa-clock"></i> ${updatedDate}</span>
            </div>
            <div class="github-card-actions">
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="github-link">
                    <i class="fab fa-github"></i> Source Code
                </a>
                ${hasPages ? `
                    <a href="${pagesUrl}" target="_blank" rel="noopener noreferrer" class="github-link live">
                        <i class="fas fa-external-link-alt"></i> Live Site
                    </a>
                ` : ''}
            </div>
        `;

        return card;
    }

    async function loadGitHubRepos() {
        const originalGrid = document.getElementById('originalRepos');
        const forkedGrid = document.getElementById('forkedRepos');
        const profileStats = document.getElementById('githubStats');

        if (!originalGrid || !forkedGrid) return;

        try {
            const response = await fetch(
                `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
            );

            if (!response.ok) throw new Error('GitHub API request failed');

            const repos = await response.json();
            if (!Array.isArray(repos)) return;

            const original = repos.filter(r => !r.fork).sort((a, b) =>
                new Date(b.updated_at) - new Date(a.updated_at)
            );
            const forked = repos.filter(r => r.fork).sort((a, b) =>
                new Date(b.updated_at) - new Date(a.updated_at)
            );

            // Update profile stats
            const languages = [...new Set(repos.map(r => r.language).filter(Boolean))];
            if (profileStats) {
                profileStats.textContent = `${repos.length} public repositories \u2022 ${languages.join(' \u2022 ')}`;
            }

            // Store repo data globally for chatbot access
            window.githubRepoData = {
                total: repos.length,
                original: original.length,
                forked: forked.length,
                languages: languages,
                repos: repos.map(r => ({ name: r.name, desc: r.description, lang: r.language, url: r.html_url, fork: r.fork, pages: r.has_pages }))
            };

            // Render original repos
            originalGrid.innerHTML = '';
            original.forEach(repo => {
                const card = createRepoCard(repo, false);
                originalGrid.appendChild(card);
            });

            // Render forked repos
            forkedGrid.innerHTML = '';
            forked.forEach(repo => {
                const card = createRepoCard(repo, true);
                forkedGrid.appendChild(card);
            });

            // Apply reveal animations to new cards
            document.querySelectorAll('#originalRepos .github-card, #forkedRepos .github-card').forEach(el => {
                revealObserver.observe(el);
            });

        } catch (error) {
            console.warn('GitHub API fetch failed, showing fallback:', error);
            originalGrid.innerHTML = `
                <div class="github-loading github-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    Unable to load repositories. <a href="https://github.com/${GITHUB_USERNAME}" target="_blank">View on GitHub</a>
                </div>
            `;
            forkedGrid.innerHTML = '';
            if (profileStats) {
                profileStats.textContent = 'Visit GitHub profile to see all repositories';
            }
        }
    }

    // GitHub filter tabs
    const filterBtns = document.querySelectorAll('.github-filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            const originalLabel = document.getElementById('originalLabel');
            const forkedLabel = document.getElementById('forkedLabel');
            const originalGrid = document.getElementById('originalRepos');
            const forkedGrid = document.getElementById('forkedRepos');

            if (filter === 'all') {
                originalLabel.style.display = '';
                originalGrid.style.display = '';
                forkedLabel.style.display = '';
                forkedGrid.style.display = '';
            } else if (filter === 'original') {
                originalLabel.style.display = '';
                originalGrid.style.display = '';
                forkedLabel.style.display = 'none';
                forkedGrid.style.display = 'none';
            } else if (filter === 'forked') {
                originalLabel.style.display = 'none';
                originalGrid.style.display = 'none';
                forkedLabel.style.display = '';
                forkedGrid.style.display = '';
            }
        });
    });

    // Load repos
    loadGitHubRepos();

});
