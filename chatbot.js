// ========================================
//  INTERACTIVE PORTFOLIO CHATBOT
//  Recruiter-focused Q&A assistant
// ========================================

(function () {
    'use strict';

    // =============================================
    //  KNOWLEDGE BASE
    // =============================================
    const PROFILE = {
        name: 'Ajitha Rajkumar CSM®',
        role: 'Project Manager | Digital Transformation & Process Automation',
        company: 'Jio Platforms Limited',
        experience: '3.8+',
        location: 'Mumbai, India (Open to Remote)',
        email: 'ajitharajkumar84@gmail.com',
        linkedin: 'https://www.linkedin.com/in/ajitha-rajkumar/',
        github: 'https://github.com/Ajitha-Rajkumar',
        resumeFile: 'Ajitha_Rajkumar_Resume.pdf',
        status: 'Actively looking for new opportunities',
        workMode: 'On-site',
        relocation: 'Yes, open to relocation',
        targetRoles: 'Project Manager, Delivery Manager, Product Manager, Scrum Master, PMO / Program Management, AI & Digital Transformation PM',
    };

    const EDUCATION = [
        { degree: 'PGDM — Data Science & Analytics', institution: 'Great Lakes Institute of Management, Chennai', year: '2024–2026', status: 'Pursuing' },
        { degree: 'B.E. — Electronics & Telecommunications', institution: 'Don Bosco Institute of Technology, Mumbai', year: '2018–2022', cgpa: '8.69/10' },
    ];

    const ELEVATOR_PITCH = `I'm a CSM-certified Project Manager who has <strong>progressed through 5 roles</strong> in <strong>${PROFILE.experience} years</strong> at <strong>Jio Platforms</strong> — from delivery coordination to end-to-end program ownership. I've delivered with <strong>&lt;3% budget variance</strong> and <strong>reduced ticket volume by ~70%</strong> through workflow automation. Currently pursuing a <strong>PGDM in Data Science & Analytics</strong> from Great Lakes Institute of Management.`;

    const SKILLS = [
        { name: 'Project & Delivery Management', detail: 'Agile methodology, milestone tracking, cross-functional coordination, end-to-end SDLC' },
        { name: 'Azure DevOps', detail: 'Sprint planning, feature tracking, project lifecycle management, delivery pipelines' },
        { name: 'BPMN & eTOM / TM Forum', detail: 'End-to-end process modeling, telecom operations mapping, enterprise architecture alignment' },
        { name: 'Programming & Scripting', detail: 'Python, C, SQL, Shell Scripting — data analysis, automation, and backend logic' },
        { name: 'Databases & Data Management', detail: 'MySQL, MongoDB — query optimization, schema design, data pipelines' },
        { name: 'Power BI & Data Analytics', detail: 'Dashboards, data-driven reporting, visualization, business intelligence' },
        { name: 'Testing & API Validation', detail: 'Manual Testing, Postman, Swagger — API testing, integration validation, defect triaging' },
        { name: 'Infrastructure Automation', detail: 'Fiber automation features, SIT delivery, Siteforge feature management' },
        { name: 'AI-Assisted Development', detail: 'Cursor IDE, Claude AI, GitHub Copilot — rapid prototyping, code generation, workflow acceleration' },
    ];

    const CERTIFICATIONS = [
        { name: 'Certified Scrum Master (CSM)', issuer: 'Scrum Alliance', detail: 'Industry Certification · Issued Dec 2025 · Expires Dec 2027 · ID: 001806637', link: 'https://www.scrumalliance.org/community/profile/001806637' },
        { name: 'Microsoft Power BI Data Analyst', issuer: 'Microsoft via Coursera', detail: 'Professional Certificate Specialization · Graded projects & assessments', link: 'https://www.coursera.org/account/accomplishments/specialization/70QBZ1MOQ1JQ' },
        { name: 'IBM Applied Software Engineering Fundamentals', issuer: 'IBM via Coursera', detail: 'Professional Certificate Specialization · Hands-on labs & assessments', link: 'https://www.coursera.org/account/accomplishments/specialization/UVDW0NL65AET' },
    ];

    const PROJECTS = [
        { name: 'Fiber Network Automation & Process Optimization', impact: 'Reduced ticket volume by ~70% through workflow automation and BPMN-based process design' },
        { name: 'SLA-Based Delivery & Governance Framework', impact: 'Improved SLA compliance with centralized tracking, RAID logs, and structured reporting' },
        { name: 'Business Process Documentation & Standardization', impact: 'Standardized workflows using eTOM framework, enabling faster onboarding and automation' },
        { name: 'Interactive Portfolio Chatbot', impact: 'Built an intelligent chatbot handling 22+ recruiter intents with conversational UX design' },
        { name: 'AI Business Process Analyzer', impact: 'Designing LLM-driven process analysis with prompt engineering for automated improvement suggestions' },
    ];

    // =============================================
    //  INTENT DEFINITIONS (20 recruiter questions)
    // =============================================
    const intents = [

        // --- A: Who Is This Person? ---
        {
            patterns: ['tell me about ajitha', 'tell me about yourself', 'who are you', 'about yourself', 'introduce', 'introduction', 'about you', 'about ajitha', 'who is ajitha', 'bio', 'background', 'summary', 'overview', 'profile'],
            response: () => ELEVATOR_PITCH,
            chips: ['Key skills', 'Projects', 'Education'],
        },
        {
            patterns: ['current role', 'current position', 'what do you do', 'designation', 'title', 'role now', 'your role', 'job title', 'what is your role', 'position'],
            response: () => `I'm currently a <strong>Project Manager</strong> at <strong>${PROFILE.company}</strong>, owning end-to-end delivery from requirements to post-production support. I've progressively grown through 5 roles since July 2022 — from Delivery Coordinator to full ownership of PAN-India telecom programs. Currently also pursuing <strong>PGDM in Data Science & Analytics</strong> from Great Lakes.`,
            chips: ['Experience', 'Projects', 'Education'],
        },
        {
            patterns: ['how many years', 'years of experience', 'experience years', 'total experience', 'work experience', 'how long'],
            response: () => `I have <strong>${PROFILE.experience} years</strong> of experience at <strong>${PROFILE.company}</strong>, delivering telecom digital transformation, workflow automation, and process optimization projects across SDLC in large-scale enterprise environments.`,
            chips: ['Current role', 'Key skills', 'Projects'],
        },
        {
            patterns: ['where do you work', 'current company', 'which company', 'employer', 'organization', 'where are you working'],
            response: () => `I've been working at <strong>${PROFILE.company}</strong> since July 2022 — one of India's largest digital platforms. As Project Manager, I manage PAN-India telecom projects covering fiber network automation, SLA governance, and process standardization with <strong>&lt;3% budget variance</strong>.`,
            chips: ['Current role', 'Projects', 'Experience'],
        },

        // --- B: What Can You Do? ---
        {
            patterns: ['key skills', 'skills', 'expertise', 'what can you do', 'technologies', 'tech stack', 'tools', 'what tools', 'competencies', 'strengths', 'capabilities'],
            response: () => {
                const list = SKILLS.map(s => `<li><strong>${s.name}</strong> — ${s.detail}</li>`).join('');
                return `Here are my core skills:<ul>${list}</ul>`;
            },
            chips: ['Certifications', 'Projects', 'Tell me about Ajitha'],
        },
        {
            patterns: ['certifications', 'certificates', 'certified', 'credentials', 'csm', 'scrum master certified', 'power bi certified', 'ibm certified'],
            response: () => {
                const list = CERTIFICATIONS.map(c => `<li><a href="${c.link}" target="_blank" rel="noopener noreferrer" style="color: var(--primary-light, #8B83FF); text-decoration: none; font-weight: 600;">${c.name}</a> — ${c.issuer}<br><small>${c.detail}</small></li>`).join('');
                return `I hold <strong>3 professional certifications</strong>:<ul>${list}</ul>`;
            },
            chips: ['Key skills', 'Projects', 'Why should we consider you?'],
        },
        {
            patterns: ['are you a scrum master', 'scrum master', 'agile experience', 'agile methodology', 'scrum experience', 'agile delivery'],
            response: () => `Yes — I'm a <strong>Certified Scrum Master (CSM)</strong> from Scrum Alliance. I drive Agile delivery through Sprint Planning, Sprint Goals, Backlog execution, Reviews, and Retrospectives. I use <strong>Azure DevOps</strong> for sprint management across all my projects at Jio.`,
            chips: ['Certifications', 'Key skills', 'Projects'],
        },

        // --- C: What Have You Done? ---
        {
            patterns: ['projects', 'what projects', 'worked on', 'project experience', 'portfolio', 'work done', 'deliverables', 'project list'],
            response: () => {
                const list = PROJECTS.map(p => `<li><strong>${p.name}</strong> — ${p.impact}</li>`).join('');
                return `I've delivered <strong>5 key projects</strong> as Project Manager at Jio Platforms:<ul>${list}</ul>`;
            },
            chips: ['Biggest achievement', 'AI experience', 'Key skills'],
        },
        {
            patterns: ['biggest achievement', 'best achievement', 'proudest moment', 'top achievement', 'greatest accomplishment', 'highlight', 'best result'],
            response: () => `My biggest achievement is the <strong>Fiber Network Automation</strong> project where I led process optimization that <strong>reduced ticket volume by ~70%</strong>, improved SLA adherence, and increased process standardization — all delivered on time with <strong>&lt;3% budget variance</strong>.`,
            chips: ['Projects', 'Why should we consider you?', 'Key skills'],
        },
        {
            patterns: ['fiber network', 'fiber automation', 'ticket reduction', 'automation project'],
            response: () => `<strong>Fiber Network Automation & Process Optimization</strong><br><br><strong>Problem:</strong> High ticket volume from manual workflows and delayed issue resolution.<br><strong>Solution:</strong> Automated repetitive workflows, designed BPMN-based process flows, and introduced governance tracking.<br><strong>Impact:</strong> <strong>~70% ticket volume reduction</strong>, improved SLA adherence, and increased process standardization.`,
            chips: ['Other projects', 'Key skills', 'Certifications'],
        },
        {
            patterns: ['sla', 'governance', 'delivery framework', 'sla tracking'],
            response: () => `<strong>SLA-Based Delivery & Governance Framework</strong><br><br><strong>Problem:</strong> No centralized SLA tracking, limited visibility, delayed escalations.<br><strong>Solution:</strong> Implemented SLA tracking framework with RAID logs and structured reporting cadence.<br><strong>Impact:</strong> Improved SLA compliance, increased stakeholder visibility, and reduced delivery delays.`,
            chips: ['Other projects', 'Biggest achievement', 'Key skills'],
        },
        {
            patterns: ['bpmn', 'process documentation', 'etom', 'standardization', 'business process'],
            response: () => `<strong>Business Process Documentation & Standardization</strong><br><br><strong>Problem:</strong> Unstructured processes, poor documentation, difficult onboarding.<br><strong>Solution:</strong> Created end-to-end BPMN process flows and standardized workflows using the eTOM framework.<br><strong>Impact:</strong> Improved process clarity, faster onboarding for new resources, and supported automation initiatives.`,
            chips: ['Other projects', 'Key skills', 'AI experience'],
        },
        {
            patterns: ['ai experience', 'artificial intelligence', 'ai projects', 'machine learning', 'ai work', 'ai skills'],
            response: () => `I have hands-on experience applying AI and intelligent automation:<ul><li><strong>Interactive Portfolio Chatbot</strong> — Built with JavaScript pattern matching, handling 22+ recruiter intents with conversational UX design.</li><li><strong>AI Business Process Analyzer</strong> (Ongoing) — Designing an LLM-driven process analysis system using Python, structured Excel input, and prompt engineering to generate improvement suggestions.</li><li><strong>AI-Assisted Development</strong> — Proficient with Cursor IDE, Claude AI, and GitHub Copilot for rapid prototyping and workflow acceleration.</li></ul>Currently pursuing <strong>PGDM in Data Science & Analytics</strong> from Great Lakes Institute of Management to deepen my AI/ML foundation.`,
            chips: ['Projects', 'Key skills', 'Education'],
        },
        {
            patterns: ['management style', 'leadership style', 'how do you manage', 'how do you lead', 'work style', 'approach'],
            response: () => `My management style is <strong>Agile and data-driven</strong>. I run structured sprints with clear goals, maintain RAID logs for risk visibility, and use Azure DevOps and Power BI for tracking. I focus on cross-functional collaboration and proactive escalation — delivering consistently with <strong>&lt;3% budget variance</strong>.`,
            chips: ['Key skills', 'Projects', 'Scrum Master'],
        },

        // --- D: Logistics ---
        {
            patterns: ['open to opportunities', 'looking for job', 'available', 'job search', 'new opportunities', 'open to work', 'actively looking', 'opportunity'],
            response: () => `Yes — I'm <strong>actively looking for new opportunities</strong>. I'm targeting roles in <strong>${PROFILE.targetRoles}</strong>. I'm open to <strong>on-site</strong> positions and <strong>open to relocation</strong>.`,
            chips: ['Target roles', 'Contact', 'Download resume'],
        },
        {
            patterns: ['target roles', 'what roles', 'looking for what', 'type of role', 'kind of job', 'what position', 'interested in'],
            response: () => `I'm targeting: <strong>${PROFILE.targetRoles}</strong> — in domains like telecom, digital transformation, AI/automation, or enterprise operations.`,
            chips: ['Tell me about Ajitha', 'Key skills', 'Contact'],
        },
        {
            patterns: ['resume', 'cv', 'download resume', 'download cv', 'your resume'],
            response: () => `You can download my resume here:<br><br><a href="${PROFILE.resumeFile}" download style="color: var(--primary-light, #8B83FF); text-decoration: underline; font-weight: 600;"><i class="fas fa-download"></i> Download Resume</a>`,
            chips: ['Tell me about Ajitha', 'Projects', 'Contact'],
        },
        {
            patterns: ['contact', 'reach you', 'get in touch', 'email', 'connect', 'linkedin', 'how to contact', 'phone'],
            response: () => `Here's how you can reach me:<ul><li><strong>Email:</strong> <a href="mailto:${PROFILE.email}" style="color: var(--primary-light, #8B83FF);">${PROFILE.email}</a></li><li><strong>LinkedIn:</strong> <a href="${PROFILE.linkedin}" target="_blank" rel="noopener noreferrer" style="color: var(--primary-light, #8B83FF);">linkedin.com/in/ajitha-rajkumar</a></li><li><strong>GitHub:</strong> <a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer" style="color: var(--primary-light, #8B83FF);">github.com/Ajitha-Rajkumar</a></li></ul>`,
            chips: ['Download resume', 'Tell me about Ajitha'],
        },

        // --- E: Standout ---
        {
            patterns: ['why should we consider', 'why hire', 'why you', 'what sets you apart', 'differentiator', 'stand out', 'unique', 'why should we hire', 'what makes you different', 'value add'],
            response: () => `Here's what sets me apart:<ul><li><strong>5 roles in ${PROFILE.experience} years</strong> — Progressed from Delivery Coordinator → Production Support → Business Analyst → Enterprise Architecture → End-to-End PM at Jio</li><li><strong>Proven delivery</strong> — 5 key projects, &lt;3% budget variance, ~70% ticket reduction</li><li><strong>Certified expertise</strong> — CSM + Power BI + IBM Software Engineering</li><li><strong>Process + Technology</strong> — Rare combination of BPMN/eTOM process knowledge with hands-on coding (Python, SQL) and Agile delivery using Azure DevOps</li><li><strong>Continuous learning</strong> — Pursuing PGDM in Data Science & Analytics from Great Lakes</li></ul>`,
            chips: ['Projects', 'Certifications', 'Contact'],
        },
        {
            patterns: ['passion', 'passionate about', 'what drives you', 'motivation', 'interest', 'what excites you'],
            response: () => `I'm passionate about <strong>bridging technology and business outcomes</strong>. I don't just manage projects — I build solutions. From automating fiber network workflows to building this interactive chatbot using JavaScript pattern matching, and designing an LLM-based process analyzer, I'm driven by the intersection of <strong>technology, process optimization, and measurable impact</strong>. Pursuing my PGDM in Data Science is the next step in deepening that capability.`,
            chips: ['AI experience', 'Projects', 'Education'],
        },

        // --- F: Education ---
        {
            patterns: ['education', 'qualification', 'degree', 'college', 'university', 'academic', 'pgdm', 'great lakes', 'don bosco', 'btech', 'engineering', 'mba', 'school', 'studied', 'graduation'],
            response: () => {
                const list = EDUCATION.map(e => {
                    let line = `<li><strong>${e.degree}</strong><br>${e.institution} | ${e.year}`;
                    if (e.status) line += ` <em>(${e.status})</em>`;
                    if (e.cgpa) line += `<br>CGPA: <strong>${e.cgpa}</strong>`;
                    return line + '</li>';
                }).join('');
                return `Here's my educational background:<ul>${list}</ul>`;
            },
            chips: ['Key skills', 'Experience', 'Certifications'],
        },

        // --- G: Experience Progression ---
        {
            patterns: ['experience', 'career progression', 'career growth', 'role progression', 'growth at jio', 'career path', 'journey', 'work history', 'career journey'],
            response: () => `I've had a <strong>progressive growth journey</strong> at Jio Platforms across 5 distinct phases:<ul><li><strong>Jul–Dec 2022:</strong> Delivery Coordinator — Managed SIT feature delivery, led scrum calls with dev/test teams</li><li><strong>Jan–Dec 2023:</strong> Production Support Lead — Resolved production tickets, achieved ~70% ticket reduction</li><li><strong>Jan–Jun 2024:</strong> Business Analyst — Documented as-is processes in Avolution Abacus using BPMN methodology</li><li><strong>Jul–Dec 2024:</strong> Enterprise Architecture — Collaborated with Solution Architects on eTOM/TM Forum system mapping</li><li><strong>Jan 2025–Present:</strong> Project Manager (E2E) — Full ownership from requirements to post-production support with &lt;3% budget variance</li></ul>`,
            chips: ['Education', 'Projects', 'Key skills'],
        },
    ];

    // =============================================
    //  GREETING & FALLBACK
    // =============================================
    const GREETING = `Hi! I'm Ajitha's portfolio assistant. Ask me anything about her experience, skills, or projects.`;

    const FALLBACKS = [
        `I'm not sure I understood that. Try asking about my <strong>skills</strong>, <strong>projects</strong>, <strong>certifications</strong>, or <strong>experience</strong>.`,
        `Could you rephrase that? I can help with questions about my <strong>background</strong>, <strong>achievements</strong>, or <strong>contact info</strong>.`,
        `I didn't catch that. Here are some things you can ask about:`,
    ];

    const DEFAULT_CHIPS = [
        'Tell me about Ajitha',
        'Key skills',
        'Projects',
        'Experience',
        'Education',
        'Certifications',
        'Contact',
    ];

    // =============================================
    //  PATTERN MATCHING ENGINE
    // =============================================
    let fallbackIndex = 0;

    function findIntent(input) {
        const cleaned = input.toLowerCase().replace(/[^\w\s]/g, '').trim();
        const words = cleaned.split(/\s+/);

        let bestMatch = null;
        let bestScore = 0;

        for (const intent of intents) {
            for (const pattern of intent.patterns) {
                const patternLower = pattern.toLowerCase();

                // Exact match
                if (cleaned === patternLower) return intent;

                // Check if input contains the full pattern
                if (cleaned.includes(patternLower)) {
                    const score = patternLower.length / cleaned.length + 0.5;
                    if (score > bestScore) {
                        bestScore = score;
                        bestMatch = intent;
                    }
                    continue;
                }

                // Word overlap scoring
                const patternWords = patternLower.split(/\s+/);
                let matchedWords = 0;
                for (const pw of patternWords) {
                    if (words.some(w => w === pw || w.includes(pw) || pw.includes(w))) {
                        matchedWords++;
                    }
                }

                if (matchedWords > 0) {
                    const score = matchedWords / patternWords.length;
                    if (score > bestScore) {
                        bestScore = score;
                        bestMatch = intent;
                    }
                }
            }
        }

        return bestScore >= 0.4 ? bestMatch : null;
    }

    function getResponse(input) {
        // Handle greetings
        const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy'];
        const cleaned = input.toLowerCase().trim();
        if (greetings.some(g => cleaned === g || cleaned.startsWith(g + ' '))) {
            return {
                text: `Hello! How can I help you learn about my background? Feel free to ask anything or pick a topic below.`,
                chips: DEFAULT_CHIPS,
            };
        }

        // Handle thanks
        const thanks = ['thank', 'thanks', 'thank you', 'thx', 'appreciate'];
        if (thanks.some(t => cleaned.includes(t))) {
            return {
                text: `You're welcome! Feel free to ask more or reach out directly.`,
                chips: ['Contact', 'Download resume'],
            };
        }

        const intent = findIntent(input);
        if (intent) {
            return {
                text: intent.response(),
                chips: intent.chips || [],
            };
        }

        // Fallback
        const fallback = FALLBACKS[fallbackIndex % FALLBACKS.length];
        fallbackIndex++;
        return {
            text: fallback,
            chips: DEFAULT_CHIPS,
        };
    }

    // =============================================
    //  UI BUILDER
    // =============================================
    function buildChatUI() {
        // Launcher button
        const launcher = document.createElement('button');
        launcher.className = 'chatbot-launcher';
        launcher.setAttribute('aria-label', 'Open chat');
        launcher.innerHTML = '<img src="laptop.png" alt="Chat" class="chatbot-launcher-img" />';

        // Chat window
        const chatWindow = document.createElement('div');
        chatWindow.className = 'chatbot-window';
        chatWindow.innerHTML = `
            <div class="chatbot-header">
                <div class="chatbot-header-info">
                    <div class="chatbot-header-avatar">
                        <img src="profile.jpg" alt="${PROFILE.name}" />
                    </div>
                    <div class="chatbot-header-text">
                        <h4>Portfolio Assistant</h4>
                        <span>Ask me about Ajitha</span>
                    </div>
                </div>
                <div class="chatbot-header-actions">
                    <button class="chatbot-clear" id="chatbotClear" aria-label="Clear chat" title="Start over">
                        <i class="fas fa-redo-alt"></i>
                    </button>
                    <button class="chatbot-close" aria-label="Close chat">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="chatbot-messages" id="chatbotMessages"></div>
            <div class="chatbot-chips" id="chatbotChips"></div>
            <div class="chatbot-input-area">
                <input type="text" class="chatbot-input" id="chatbotInput" placeholder="Ask a question..." autocomplete="off" />
                <button class="chatbot-send" id="chatbotSend" aria-label="Send">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        `;

        document.body.appendChild(launcher);
        document.body.appendChild(chatWindow);

        return { launcher, chatWindow };
    }

    // =============================================
    //  CHAT CONTROLLER
    // =============================================
    function initChatbot() {
        const { launcher, chatWindow } = buildChatUI();

        const messagesEl = chatWindow.querySelector('#chatbotMessages');
        const chipsEl = chatWindow.querySelector('#chatbotChips');
        const inputEl = chatWindow.querySelector('#chatbotInput');
        const sendBtn = chatWindow.querySelector('#chatbotSend');
        const closeBtn = chatWindow.querySelector('.chatbot-close');

        let isOpen = false;
        let hasGreeted = false;

        // Toggle chat
        function toggleChat() {
            isOpen = !isOpen;
            chatWindow.classList.toggle('open', isOpen);
            launcher.classList.toggle('hidden', isOpen);

            if (isOpen && !hasGreeted) {
                hasGreeted = true;
                addBotMessage(GREETING, DEFAULT_CHIPS);
            }

            if (isOpen) {
                setTimeout(() => inputEl.focus(), 300);
            }
        }

        // Clear / reset chat
        const clearBtn = chatWindow.querySelector('#chatbotClear');
        function clearChat() {
            messagesEl.innerHTML = '';
            chipsEl.innerHTML = '';
            addBotMessage(GREETING, DEFAULT_CHIPS);
        }

        launcher.addEventListener('click', toggleChat);
        closeBtn.addEventListener('click', toggleChat);
        clearBtn.addEventListener('click', clearChat);

        // Add user message
        function addUserMessage(text) {
            const msg = document.createElement('div');
            msg.className = 'chatbot-msg user';
            msg.textContent = text;
            messagesEl.appendChild(msg);
            scrollToBottom();
        }

        // Add bot message with typing effect
        function addBotMessage(html, chips) {
            // Show typing indicator
            const typing = document.createElement('div');
            typing.className = 'chatbot-typing';
            typing.innerHTML = '<span></span><span></span><span></span>';
            messagesEl.appendChild(typing);
            scrollToBottom();

            // Clear chips while typing
            chipsEl.innerHTML = '';

            setTimeout(() => {
                typing.remove();

                const msg = document.createElement('div');
                msg.className = 'chatbot-msg bot';
                msg.innerHTML = html;
                messagesEl.appendChild(msg);

                renderChips(chips || []);
                scrollToBottom();
            }, 600);
        }

        // Render quick-reply chips
        function renderChips(chipLabels) {
            chipsEl.innerHTML = '';
            chipLabels.forEach(label => {
                const chip = document.createElement('button');
                chip.className = 'chatbot-chip';
                chip.textContent = label;
                chip.addEventListener('click', () => handleInput(label));
                chipsEl.appendChild(chip);
            });
        }

        // Handle user input
        function handleInput(text) {
            const trimmed = text.trim();
            if (!trimmed) return;

            addUserMessage(trimmed);
            inputEl.value = '';

            const result = getResponse(trimmed);
            addBotMessage(result.text, result.chips);
        }

        // Send on button click
        sendBtn.addEventListener('click', () => handleInput(inputEl.value));

        // Send on Enter
        inputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleInput(inputEl.value);
            }
        });

        function scrollToBottom() {
            requestAnimationFrame(() => {
                messagesEl.scrollTop = messagesEl.scrollHeight;
            });
        }
    }

    // =============================================
    //  INIT ON DOM READY
    // =============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }

})();
