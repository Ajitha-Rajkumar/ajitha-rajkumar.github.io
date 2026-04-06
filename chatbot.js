// ========================================
//  AI-POWERED PORTFOLIO CHATBOT
//  Recruiter-focused Q&A assistant
// ========================================

(function () {
    'use strict';

    // =============================================
    //  KNOWLEDGE BASE
    // =============================================
    const PROFILE = {
        name: 'Ajitha Rajkumar',
        role: 'Project Manager | AI & Automation Enthusiast',
        company: 'Jio Platforms Limited',
        experience: '3.8+',
        location: 'Mumbai, India (Open to Remote)',
        email: 'ajitha.rajkumar@email.com',
        linkedin: 'https://www.linkedin.com/in/ajitha-rajkumar/',
        github: 'https://github.com/Ajitha-Rajkumar',
        resumeFile: 'Ajitha_Rajkumar_Resume.pdf',
        status: 'Actively looking for new opportunities',
        workMode: 'On-site',
        relocation: 'Yes, open to relocation',
        targetRoles: 'Project Manager, Delivery Manager, Product Manager, Scrum Master, PMO / Program Management, AI & Digital Transformation PM',
    };

    const ELEVATOR_PITCH = `I'm a CSM-certified Project Manager with <strong>${PROFILE.experience} years</strong> at <strong>Jio Platforms</strong>, specializing in telecom digital transformation and workflow automation. I've delivered <strong>5 key projects</strong> across PAN-India operations with <strong>&lt;3% budget variance</strong>, including a Fiber Network Automation initiative that <strong>reduced ticket volume by ~70%</strong>.`;

    const SKILLS = [
        { name: 'Azure DevOps', detail: 'Sprint planning, feature tracking, project lifecycle management' },
        { name: 'Project & Delivery Management', detail: 'Agile methodology, milestone tracking, cross-functional coordination' },
        { name: 'BPMN & Process Design', detail: 'End-to-end process flows, eTOM framework standardization' },
        { name: 'Infrastructure Automation', detail: 'Fiber automation features, SIT delivery, Siteforge feature management' },
        { name: 'Production Support', detail: 'Ticket resolution, issue triaging, process streamlining' },
        { name: 'Power BI & Data Analysis', detail: 'Dashboards, data-driven reporting, visualization' },
    ];

    const CERTIFICATIONS = [
        { name: 'Certified Scrum Master (CSM)', issuer: 'Scrum Alliance', detail: 'Issued Dec 2025 · Expires Dec 2027 · ID: 001806637', link: 'https://www.scrumalliance.org/community/profile/001806637' },
        { name: 'Microsoft Power BI Data Analyst', issuer: 'Microsoft', detail: 'Coursera Specialization', link: 'https://www.coursera.org/account/accomplishments/specialization/70QBZ1MOQ1JQ' },
        { name: 'IBM Applied Software Engineering Fundamentals', issuer: 'IBM', detail: 'Coursera Specialization', link: 'https://www.coursera.org/account/accomplishments/specialization/UVDW0NL65AET' },
    ];

    const PROJECTS = [
        { name: 'Fiber Network Automation & Process Optimization', role: 'Project Manager', impact: 'Reduced ticket volume by ~70% through workflow automation and BPMN-based process design', status: 'Current' },
        { name: 'SLA-Based Delivery & Governance Framework', role: 'PMO Analyst', impact: 'Improved SLA compliance with centralized tracking, RAID logs, and structured reporting', status: 'Completed' },
        { name: 'Business Process Documentation & Standardization', role: 'PMO Analyst', impact: 'Standardized workflows using eTOM framework, enabling faster onboarding and automation', status: 'Completed' },
        { name: 'AI-Powered Portfolio Chatbot', role: 'Creator', impact: 'Built an AI chatbot for recruiter engagement, demonstrating AI and product-thinking capability', status: 'Completed' },
        { name: 'AI Business Process Analyzer', role: 'Creator', impact: 'Designing AI-driven process analysis with automated improvement suggestions', status: 'Ongoing' },
    ];

    // =============================================
    //  INTENT DEFINITIONS (20 recruiter questions)
    // =============================================
    const intents = [

        // --- A: Who Is This Person? ---
        {
            patterns: ['tell me about ajitha', 'tell me about yourself', 'who are you', 'about yourself', 'introduce', 'introduction', 'about you', 'about ajitha', 'who is ajitha', 'bio', 'background', 'summary', 'overview', 'profile'],
            response: () => ELEVATOR_PITCH,
            chips: ['Key skills', 'Projects', 'Certifications'],
        },
        {
            patterns: ['current role', 'current position', 'what do you do', 'designation', 'title', 'role now', 'your role', 'job title', 'what is your role', 'position'],
            response: () => `I'm currently a <strong>Project Manager</strong> at <strong>${PROFILE.company}</strong>, leading telecom digital transformation and workflow automation projects across PAN-India operations using Agile/Scrum methodology.`,
            chips: ['Tell me about Ajitha', 'Projects', 'Experience'],
        },
        {
            patterns: ['how many years', 'years of experience', 'experience years', 'total experience', 'work experience', 'how long'],
            response: () => `I have <strong>${PROFILE.experience} years</strong> of experience at <strong>${PROFILE.company}</strong>, delivering telecom digital transformation, workflow automation, and process optimization projects across SDLC in large-scale enterprise environments.`,
            chips: ['Current role', 'Key skills', 'Projects'],
        },
        {
            patterns: ['where do you work', 'current company', 'which company', 'employer', 'organization', 'where are you working'],
            response: () => `I work at <strong>${PROFILE.company}</strong> — one of India's largest digital platforms. I manage PAN-India telecom projects covering fiber network automation, SLA governance, and process standardization with <strong>&lt;3% budget variance</strong>.`,
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
                const list = PROJECTS.map(p => `<li><strong>${p.name}</strong> (${p.role}) — ${p.impact} <em>[${p.status}]</em></li>`).join('');
                return `I've delivered <strong>5 key projects</strong>:<ul>${list}</ul>`;
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
            response: () => `I have hands-on AI experience through two projects:<ul><li><strong>AI-Powered Portfolio Chatbot</strong> — Built this chatbot to enable recruiter engagement through conversational AI, demonstrating product-thinking capability.</li><li><strong>AI Business Process Analyzer</strong> (Ongoing) — Designing an AI-driven process analysis system using structured Excel input and prompt engineering to generate automated improvement suggestions.</li></ul>`,
            chips: ['Projects', 'Key skills', 'Why should we consider you?'],
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
            response: () => `Here's what sets me apart:<ul><li><strong>Proven delivery</strong> — ${PROFILE.experience} years, 5 projects, &lt;3% budget variance, ~70% ticket reduction</li><li><strong>Certified expertise</strong> — CSM + Power BI + IBM Software Engineering</li><li><strong>AI builder, not just a user</strong> — Built an AI chatbot and designing an AI process analyzer</li><li><strong>Process + Technology</strong> — Rare combination of BPMN/eTOM process knowledge with hands-on Agile delivery using Azure DevOps</li></ul>`,
            chips: ['Projects', 'Certifications', 'Contact'],
        },
        {
            patterns: ['passion', 'passionate about', 'what drives you', 'motivation', 'interest', 'what excites you'],
            response: () => `I'm passionate about <strong>applying AI to real business problems</strong>. I don't just manage projects — I build solutions. From automating fiber network workflows to building this AI chatbot and designing a process analyzer, I'm driven by the intersection of <strong>technology, process optimization, and measurable impact</strong>.`,
            chips: ['AI experience', 'Projects', 'Tell me about Ajitha'],
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
        'Certifications',
        'Download resume',
        'Why should we consider you?',
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
