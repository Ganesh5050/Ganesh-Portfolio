import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

// Import technology icons
import pythonIcon from '../assets/icons/pyhton-touch-icon-72x72.png';
import javaIcon from '../assets/icons/java-touch-icon-72x72.png';
import javascriptIcon from '../assets/icons/javascript-touch-icon-72x72.png';
import typescriptIcon from '../assets/icons/typescript-touch-icon-72x72.png';
import reactIcon from '../assets/icons/react-touch-icon-72x72.png';
import nodejsIcon from '../assets/icons/njs-touch-icon-72x72.png';
import dockerIcon from '../assets/icons/docker-touch-icon-72x72.png';
import mongodbIcon from '../assets/icons/mongo-touch-icon-72x72.png';
import postgresqlIcon from '../assets/icons/psql-touch-icon-72x72.png';
import gitIcon from '../assets/icons/git-touch-icon-72x72.png';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Terminal = ({ isOpen, onClose }: TerminalProps) => {
  const [output, setOutput] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  const [isAutoTyping, setIsAutoTyping] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentDirectory] = useState('~');
  const [terminalTabs, setTerminalTabs] = useState<Array<{id: number, content: string[], isActive: boolean}>>([]);
  const [activeTabId, setActiveTabId] = useState(0);
  const [isAboutSection, setIsAboutSection] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  about       - Display information about me',
      '  help        - Self-explanatory',
      '  skills      - Display my technical skills',
      '  projects    - List my most recent projects',
      '  work        - List a timeline of my work experience',
      '  github      - Visit my Github profile',
      '  linkedin    - View my LinkedIn profile',
      '  resume      - Open my resume',
      '  cd          - Change directory',
      '  ls          - List directory contents',
      '  pwd         - Print working directory',
      '  cat         - Display file contents',
      '  tree        - Display directory structure in a tree-like format',
      '',
      '[tab]: Trigger completion',
      '[ctrl+l]/clear: Clear terminal'
    ],
    work: () => [
      'EXPERIENCE',
      '==========',
      '',
      'Coming Soon - Professional work experience will be added here soon.'
    ],
    about: () => [
      'Hi, my name is Ganesh Panigrahi!',
      '',
      'I\'m a final year B.E. CSE student at SIES Graduate School of Technology (University of Mumbai), specializing in Internet of Things & Cyber Security Including Block Chain Technology.',
      'I\'m passionate about learning and exploring the intersections of the stock market and engineering.',
      'With proficiency in both web development and financial analysis, I possess a diverse skill set that combines technical expertise with financial acumen.',
      '',
      '• India | 🐙 Github | 🔗 LinkedIn | ✖ X | 📄 Resume | ✉ Email | ...files'
    ],
    github: () => [
      'Opening GitHub profile...',
      'github.com/Ganesh5050'
    ],
    linkedin: () => [
      'Opening LinkedIn profile...',
      'linkedin.com/in/ganesh-panigrahi50/'
    ],
    resume: () => [
      'Opening resume...',
      'resume.pdf'
    ],
    education: () => [
      'EDUCATION',
      '=========',
      '',
      '• B.E. - CSE - Internet of Things & Cyber Security Including Block Chain Technology',
      '  SIES Graduate School of Technology (University of Mumbai) (2022 – 2026)',
      '  CGPA: 8.43 / 10',
      '',
      '• 12th Grade',
      '  South Indians\' Welfare Society College (2022)',
      '',
      '• 10th Grade',
      '  St Jude\'s High School (2020)'
    ],
    research: () => [
      'CERTIFICATIONS',
      '==============',
      '',
      '• Financial Analyst Certification',
      '  - Professional certification in financial analysis',
      '',
      '• Real Estate Finance Virtual Job Simulation',
      '  - Completed virtual job simulation in real estate finance',
      '',
      '• SEBI Investor Awareness Test',
      '  - Date: 13 Aug, 2027',
      '  - Securities and Exchange Board of India certification'
    ],
    projects: () => [
      'FEATURED PROJECTS',
      '=================',
      '',
      '1. GKP Basketball Club Website',
      '   Comprehensive basketball club website with training schedules, image gallery, QR code generator, and WhatsApp integration',
      '   Built with: ReactJS, TypeScript, Vite, Tailwind CSS, Git, GitHub, Vercel, Responsive Design, UI/UX Design, SEO Optimization, WhatsApp Integration, Framer Motion',
      '   Features: Training schedules, image gallery, QR code generator, WhatsApp integration, mobile-optimized design, SEO optimization',
      '   Live: https://gkp-basketball-club.vercel.app',
      '',
      '2. SakiVihar Swimming Club Website',
      '   Modern swimming club website with coach profiles, photo gallery, YouTube video background, and Google Maps integration',
      '   Built with: React.js, TypeScript, Tailwind CSS, Framer Motion, Responsive Design, Vite, Git/GitHub, UI/UX Design, Vercel Deployment',
      '   Features: Coach profiles, photo gallery, YouTube video background, Google Maps integration, WhatsApp chat widget, mobile-optimized design',
      '   Live: https://sakivihar-swimming-club.vercel.app',
      '',
      '3. TradePro - Paper Trading Simulation',
      '   Full-stack real-time stock trading simulation and learning platform',
      '   Built with: React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, Node.js, Express.js, MongoDB, WebSockets',
      '   Features: Portfolio management, watchlists, leaderboards, live stock data, TradingView charts',
      '',
      '4. Marketplace Blockchain',
      '   Secure and transparent online marketplace built on blockchain technology',
      '   Built with: Ethereum, Solidity, Web3.js, Smart Contracts, JavaScript',
      '   Features: Peer-to-peer transactions, product listing, ownership tracking, cryptocurrency payments',
      '',
      '5. Enterprise-Grade Office & Product Management Platform',
      '   Premium, scalable architecture with enterprise-level UI/UX',
      '   Built with: React.js, Tailwind CSS, TypeScript, Framer Motion',
      '   Features: Staff management, product lifecycle tracking, facilities management, dark mode support',
      '',
      'Use \'cd projects\' and \'ls\' to explore project details.'
    ],
    skills: () => [
      'LANGUAGES & TOOLS',
      '=================',
      '',
      'ICONS_DISPLAY', // Special marker for icon display
      '',
      'Python | Java | JavaScript | TypeScript | React | Node.js',
      'Docker | MongoDB | PostgreSQL | Git'
    ],
    contact: () => [
      'CONTACT INFORMATION',
      '==================',
      '',
      'Email:     panigrahyganesh50@gmail.com',
      'LinkedIn:  linkedin.com/in/ganesh-panigrahi50/',
      'GitHub:    github.com/Ganesh5050'
    ],
    clear: () => {
      setOutput([]);
      return [];
    },
    ls: () => [
      'work/',
      'projects/',
      'education/',
      'certifications/',
      'skills/',
      'contact/'
    ],
    pwd: () => [
      currentDirectory
    ],
    cd: () => [
      'Usage: cd <directory>',
      'Available directories: work, projects, education, certifications, skills, contact'
    ],
    cat: () => [
      'Usage: cat <filename>',
      'Available files: about.txt, experience.txt, projects.txt, skills.txt'
    ],
    tree: () => [
      'portfolio/',
      '├── work/',
      '│   ├── nss-volunteer.txt',
      '│   ├── placement-coordinator.txt',
      '│   └── class-representative.txt',
      '├── projects/',
      '│   ├── tradepro.txt',
      '│   ├── marketplace-blockchain.txt',
      '│   └── enterprise-platform.txt',
      '├── education/',
      '│   ├── sies-gst.txt',
      '│   ├── siws.txt',
      '│   └── st-judes.txt',
      '├── certifications/',
      '│   ├── financial-analyst.txt',
      '│   ├── real-estate-finance.txt',
      '│   └── sebi-test.txt',
      '├── skills/',
      '│   └── expertise.txt',
      '└── contact/',
      '    └── info.txt'
    ]
  };

  const bootSequence = [
    'quantum (ganesh@dev) (gcc version 11.2.0)',
    '[0] 1: Enable Protected Mode',
    '[1] 1: Load line: root_IMAGE=boot/neural-core root=UUID=42C',
    '[2] 0: Boot registers',
    '[3] 0: CPU: Initialized neural registers',
    '[4] 0: Memory map',
    '[5] 0: System verification disabled',
    '[6] 0: Initializing memory probe...',
    '[7] 0: Found 0x00024 (V02 Intel )',
    '[8] 0: Available (12288K kernel code)',
    '[9] 0: Calibrating delay loop (skipped)... 3.50 BogoMIPS',
    '[10] 0: minimal: 301',
    '[11] 0: Initialized',
    '[12] 0: Validated',
    '[13] 0: Detected',
    '[14] 0: Device Listing',
    '[15] 0: 0x00 ID Device Class',
    '[16] 0: 2A0Z Neural Network Interface',
    '[17] 0: 24C4 Network Controller',
    '[18] 0: 5F3X System Peripherals',
    '[19] 0: 4F34 Quantum Processor',
    '[20] Ready, Press any key to continue...',
    ''
  ];

  const terminalPages = [
    {
      title: 'About',
      content: [
        'I\'m Ganesh Panigrahi, a third year at @Waterloo, studying Math and CS.',
        'Currently working at Fidelity on the AI/ML team,',
        'I\'m passionate about building software and financial services with AI.',
        'I\'ve always been interested in AI ethics, embedded systems, aviation, jazz,',
        'and building cool things with my hands, ears, heart, & brain.',
        '',
        'I\'ve also used Python, Go, GNU | Github | LinkedIn | X | Resume | Email | ...files',
        '',
        '* Recent',
        '* I\'ve been working on BetterSearch in my attempt to improve documentation search with AI',
        '* I developed Portfolio Optimizer, a financial analysis tool using modern portfolio theory',
        '* I helped build ML Monitor, a production ML model monitoring system',
        '',
        'Type help to see the list of available commands. (p.s. you can tab-complete!)',
        'To exit, type \'exit\'.',
        'To see my relevant experience, type \'experience\'.',
        ''
      ]
    },
    {
      title: 'Portfolio',
      content: [
        'ganesh@portfolio:~$ portfolio',
        '',
        'portfolio ~$',
        'Welcome to my portfolio.',
        'Here you can find my work, projects, and a little bit about me.',
        'You can use the following commands to navigate the site:',
        '',
        '* about: A brief bio.',
        '* experience: My professional experience.',
        '* education: My academic background.',
        '* projects: A list of my projects.',
        '* skills: My technical skills.',
        '* contact: How to reach me.',
        ''
      ]
    },
    {
      title: 'Experience',
      content: [
        'ganesh@portfolio:~$ experience',
        '',
        'EXPERIENCE',
        '==========',
        '',
        '• Fidelity Investments | AI Developer | Toronto, ON | May 2025 - Aug 2025',
        '  - Implemented LLM workflows for financial advisors',
        '  - Built with: Python, OpenAI API, LangChain, Docker, Azure',
        '  - Impact: Improved advisor efficiency by 35%',
        '',
        '• CASHIQ | Financial Engineer | Toronto, ON | Jan 2025 - June 2025', 
        '  - Built financial models for investment analysis',
        '  - Tools: Python, NumPy, Pandas, PostgreSQL',
        '  - Impact: Analyzed $10M+ in investment opportunities',
        ''
      ]
    },
    {
      title: 'Projects',
      content: [
        'ganesh@portfolio:~$ projects',
        '',
        'PROJECTS',
        '========',
        '',
        '1. BetterSearch',
        '   AI-powered documentation search engine with semantic understanding',
        '   Built with: TypeScript, Python, OpenAI, Vector Databases',
        '   GitHub: github.com/Ganesh5050/bettersearch',
        '',
        '2. Portfolio Optimizer',
        '   Investment portfolio optimization using modern portfolio theory',
        '   Built with: Python, NumPy, Pandas, Plotly',
        '   Features: Risk analysis, efficient frontier, backtesting',
        '',
        '3. ML Model Monitor',
        '   Production ML model monitoring and alerting system',
        '   Built with: Python, FastAPI, Docker, PostgreSQL',
        '   Features: Drift detection, performance tracking, automated alerts',
        '',
        'ganesh@portfolio:~$ help',
        '',
        'Available commands:',
        '  about       - Display information about me',
        '  help        - Self-explanatory',
        '  projects    - List my most recent projects',
        '  work        - List a timeline of my work experience',
        '  github      - Visit my Github profile',
        '  linkedin    - View my LinkedIn profile',
        '  resume      - Open my resume',
        '  cd          - Change directory',
        '  ls          - List directory contents',
        '  pwd         - Print working directory',
        '  cat         - Display file contents',
        '  tree        - Display directory structure in a tree-like format',
        '',
        '[tab]: Trigger completion',
        '[ctrl+l]/clear: Clear terminal',
        '',
        'ganesh@portfolio:~$ _'
      ]
    }
  ];

  useEffect(() => {
    if (isOpen && isBooting) {
      let i = 0;
      const bootTimer = setInterval(() => {
        if (i < bootSequence.length) {
          setOutput(prev => [...prev, bootSequence[i]]);
          i++;
        } else {
          clearInterval(bootTimer);
          setIsBooting(false);
          // Immediately continue with about section (white text for about)
          setIsAboutSection(true);
          typeText([
            'Hi, my name is Ganesh Panigrahi!',
            '',
            'I\'m a final year B.E. CSE student at SIES Graduate School of Technology (University of Mumbai),',
            'specializing in Internet of Things & Cyber Security Including Block Chain Technology.',
            'I\'m passionate about learning and exploring the intersections of the stock market and engineering.',
            'With proficiency in both web development and financial analysis, I possess a diverse skill set',
            'that combines technical expertise with financial acumen.',
            '',
            '• India | 🐙 Github | 🔗 LinkedIn | ✖ X | 📄 Resume | ✉ Email | ...files',
            '',
            'Languages & Tools',
            '=================',
            '',
            'Python | Java | C | C++ | JavaScript | TypeScript | React | Angular | Vue | Node.js',
            'Unity | AWS | Docker | Nginx | MongoDB | PostgreSQL | Redis | Kubernetes',
            'TensorFlow | PyTorch | LangChain | Git | Linux | Figma | OpenAI | Scikit-learn',
            'Ethereum | Solidity | Web3.js | Trading | GENAI | Financial Analysis',
            '',
            'Recents',
            '=======',
            '',
            
            '• I developed Enterprise Platform ,SakiVihar Swimming Club Website, GKP Basketball Club Website, Marketplace Blockchain these projects',
            '• I\'ve been working on TradePro in my attempt to improve stock trading simulation with AI',  
            '',
            'Type \'projects\' to see my projects.',
            'Type \'help\'/\'skills\'/\'work\' to see the list of available commands. (p.s., you can tab-complete!)',
            'Type \'about\' to repeat this output.',
            ''
          ]);
        }
      }, 100);

      return () => clearInterval(bootTimer);
    }
  }, [isOpen, isBooting]);

  const typeText = (text: string[], callback?: () => void) => {
    setIsTyping(true);
    let lineIndex = 0;
    let charIndex = 0;
    let currentText = '';
    
    const typeInterval = setInterval(() => {
      if (lineIndex < text.length) {
        const currentLine = text[lineIndex];
        
        if (charIndex < currentLine.length) {
          currentText += currentLine[charIndex];
          charIndex++;
        } else {
          // Line complete, move to next line
          currentText += '\n';
          lineIndex++;
          charIndex = 0;
        }
        
        setOutput(currentText.split('\n'));
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        if (callback) callback();
      }
    }, 5);
  };

  const typeTextFast = (text: string[], callback?: () => void) => {
    setIsTyping(true);
    let lineIndex = 0;
    let charIndex = 0;
    let currentText = '';
    
    const typeInterval = setInterval(() => {
      if (lineIndex < text.length) {
        const currentLine = text[lineIndex];
        
        if (charIndex < currentLine.length) {
          currentText += currentLine[charIndex];
          charIndex++;
        } else {
          // Line complete, move to next line
          currentText += '\n';
          lineIndex++;
          charIndex = 0;
        }
        
        setOutput(currentText.split('\n'));
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        if (callback) callback();
      }
    }, 2); // Faster typing speed (2ms instead of 5ms)
  };

  const typeTextSlow = (text: string[], callback?: () => void) => {
    setIsTyping(true);
    let lineIndex = 0;
    let charIndex = 0;
    let currentText = '';
    
    const typeInterval = setInterval(() => {
      if (lineIndex < text.length) {
        const currentLine = text[lineIndex];
        
        if (charIndex < currentLine.length) {
          currentText += currentLine[charIndex];
          charIndex++;
        } else {
          // Line complete, move to next line
          currentText += '\n';
          lineIndex++;
          charIndex = 0;
        }
        
        // Replace the last line with current text instead of adding new lines
        setOutput(prev => {
          const lines = currentText.split('\n');
          const newOutput = [...prev];
          // Replace the last few lines with our current typing progress
          newOutput.splice(-lines.length, lines.length, ...lines);
          return newOutput;
        });
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        if (callback) callback();
      }
    }, 50); // Slow typing speed (50ms per character)
  };

  const renderColoredText = (text: string) => {
    // Check if text is undefined or null
    if (!text || typeof text !== 'string') {
      return '';
    }

    // Special handling for icons display
    if (text === 'ICONS_DISPLAY') {
      const icons = [
        { name: 'Python', icon: pythonIcon },
        { name: 'Java', icon: javaIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'TypeScript', icon: typescriptIcon },
        { name: 'React', icon: reactIcon },
        { name: 'Node.js', icon: nodejsIcon },
        { name: 'Docker', icon: dockerIcon },
        { name: 'MongoDB', icon: mongodbIcon },
        { name: 'PostgreSQL', icon: postgresqlIcon },
        { name: 'Git', icon: gitIcon }
      ];

      return `
        <div class="grid grid-cols-5 gap-1 my-3">
          ${icons.map(tech => `
            <div class="flex flex-col items-center group cursor-pointer">
              <div class="tech-icon-container">
                <img src="${tech.icon}" alt="${tech.name}" class="tech-icon w-12 h-12 mb-1" />
              </div>
              <span class="text-xs text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">${tech.name}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Color patterns based on the reference
    const patterns = [
      { pattern: /Ganesh Panigrahi/g, color: 'text-purple-400' },
      { pattern: /SIES Graduate School of Technology (University of Mumbai)/g, color: 'text-purple-400' },
      { pattern: /stock market/g, color: 'text-green-400' },
      { pattern: /engineering/g, color: 'text-green-400' },
      { pattern: /GKP Basketball Club Website/g, color: 'text-green-400' },
      { pattern: /SakiVihar Swimming Club Website/g, color: 'text-blue-400' },
      { pattern: /TradePro/g, color: 'text-green-400' },
      { pattern: /Marketplace Blockchain/g, color: 'text-orange-400' },
      { pattern: /Enterprise Platform/g, color: 'text-green-400' },
      { pattern: /attempt/g, color: 'text-blue-400' },
      { pattern: /'help'/g, color: 'text-green-400' },
      { pattern: /'skills'/g, color: 'text-green-400' },
      { pattern: /'work'/g, color: 'text-green-400' },
      { pattern: /'projects'/g, color: 'text-green-400' },
      { pattern: /'about'/g, color: 'text-green-400' },
      // Specific letter coloring
      { pattern: /\bI\b/g, color: 'text-orange-400' },
      { pattern: /\bn\b/g, color: 'text-white' },
      { pattern: /\bia\b/g, color: 'text-green-400' }
    ];

    let result = text;
    patterns.forEach(({ pattern, color }) => {
      result = result.replace(pattern, `<span class="${color}">$&</span>`);
    });

    return result;
  };

  const createTerminalTabs = () => {
    // Start with first terminal (green hacker style)
    typeText([...bootSequence, ...terminalPages[0].content], () => {
      // Auto-type sequence for 3 terminals
      let currentTerminal = 0;
      const terminalInterval = setInterval(() => {
        currentTerminal++;
        
        if (currentTerminal < 3) {
          // Show next terminal
          setTimeout(() => {
            typeText([...bootSequence, ...terminalPages[currentTerminal].content]);
          }, 1000);
        } else {
          clearInterval(terminalInterval);
          
          // After 3rd terminal finishes, clear and show about section
          setTimeout(() => {
            setOutput([]);
            
            // Show about section first (white text)
            setTimeout(() => {
              setIsAboutSection(true);
              typeText([
                'Hi, my name is Ganesh Panigrahi!',
                '',
                'I\'m a final year B.E. CSE student at SIES Graduate School of Technology (University of Mumbai),',
                'specializing in Internet of Things & Cyber Security Including Block Chain Technology.',
                'I\'m passionate about learning and exploring the intersections of the stock market and engineering.',
                'With proficiency in both web development and financial analysis, I possess a diverse skill set',
                'that combines technical expertise with financial acumen.',
                '',
                '• India | 🐙 Github | 🔗 LinkedIn | ✖ X | 📄 Resume | ✉ Email | ...files',
                '',
                'Languages & Tools',
                '=================',
                '',
                'Python | Java | C | C++ | JavaScript | TypeScript | React | Angular | Vue | Node.js',
                'Unity | AWS | Docker | Nginx | MongoDB | PostgreSQL | Redis | Kubernetes',
                'TensorFlow | PyTorch | LangChain | Git | Linux | Figma | OpenAI | Scikit-learn',
                'Ethereum | Solidity | Web3.js | Trading | GENAI | Financial Analysis',
                '',
                'Recents',
                '=======',
                '',
                
                '• I developed Enterprise Platform ,SakiVihar Swimming Club Website, GKP Basketball Club Website, Marketplace Blockchain these projects',
                '• I\'ve been working on TradePro in my attempt to improve stock trading simulation with AI',  
                '',
                'Type \'projects\' to see my projects.',
                'Type \'help\'/\'skills\'/\'work\' to see the list of available commands. (p.s., you can tab-complete!)',
                'Type \'about\' to repeat this output.',
                ''
              ]);
            }, 500);
          }, 1500);
        }
      }, 2000);
    });
  };

  const switchTab = (tabId: number) => {
    setActiveTabId(tabId);
    setOutput(terminalTabs[tabId].content);
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    if (isOpen && !isBooting && !isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isBooting, isTyping]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    setOutput(prev => [...prev, `${currentDirectory}$ ${cmd}`]);

    if (trimmedCmd === 'exit') {
      onClose();
      return;
    }

    // Handle website redirects
    if (trimmedCmd === 'github') {
      typeTextSlow(['Opening GitHub profile...', 'github.com/Ganesh5050'], () => {
        setTimeout(() => {
          window.open('https://github.com/Ganesh5050', '_blank');
        }, 500);
      });
      return;
    }

    if (trimmedCmd === 'linkedin') {
      typeTextSlow(['Opening LinkedIn profile...', 'linkedin.com/in/ganesh-panigrahi50/'], () => {
        setTimeout(() => {
          window.open('https://www.linkedin.com/in/ganesh-panigrahi50/', '_blank');
        }, 500);
      });
      return;
    }

    if (trimmedCmd === 'resume') {
      typeTextSlow(['Opening resume...', 'resume.pdf'], () => {
        // You can add a resume PDF link here when available
      });
      return;
    }

    if (trimmedCmd === 'x' || trimmedCmd === 'twitter') {
      typeTextSlow(['Opening X (Twitter)...', 'x.com/home'], () => {
        setTimeout(() => {
          window.open('https://x.com/home', '_blank');
        }, 500);
      });
      return;
    }

    if (trimmedCmd === 'email' || trimmedCmd === 'mail') {
      typeTextSlow(['Opening email client...', 'ganeshpanigrahi50@gmail.com'], () => {
        setTimeout(() => {
          window.open('mailto:ganeshpanigrahi50@gmail.com', '_blank');
        }, 500);
      });
      return;
    }

    if (trimmedCmd in commands) {
      const result = (commands as any)[trimmedCmd]();
      if (result.length > 0) {
        setOutput(prev => [...prev, ...result, '']);
      }
    } else if (trimmedCmd.startsWith('projects ')) {
      const projectName = trimmedCmd.split(' ')[1];
      const projectDetails = getProjectDetails(projectName);
      setOutput(prev => [...prev, ...projectDetails, '']);
    } else if (trimmedCmd.startsWith('cd ')) {
      const dir = trimmedCmd.split(' ')[1];
      setOutput(prev => [...prev, `Changed directory to: ${dir}`, '']);
    } else if (trimmedCmd.startsWith('cat ')) {
      const file = trimmedCmd.split(' ')[1];
      setOutput(prev => [...prev, `Displaying contents of: ${file}`, 'File content would be displayed here...', '']);
    } else if (trimmedCmd === '') {
      setOutput(prev => [...prev, '']);
    } else {
      setOutput(prev => [...prev, `command not found: ${cmd}`, 'Type "help" for available commands.', '']);
    }
  };

  const getProjectDetails = (name: string) => {
    const projects: Record<string, string[]> = {
      'gkp-basketball-club-website': [
        'GKP Basketball Club Website',
        '===========================',
        '',
        'Comprehensive basketball club website with training schedules, image gallery, QR code generator, and WhatsApp integration',
        'Built with: ReactJS, TypeScript, Vite, Tailwind CSS, Git, GitHub, Vercel, Responsive Design, UI/UX Design, SEO Optimization, WhatsApp Integration, Framer Motion',
        'Features: Training schedules, image gallery, QR code generator, WhatsApp integration, mobile-optimized design, SEO optimization',
        'Live: https://gkp-basketball-club.vercel.app'
      ],
      'sakivihar-swimming-club-website': [
        'SakiVihar Swimming Club Website',
        '===============================',
        '',
        'Modern swimming club website with coach profiles, photo gallery, YouTube video background, and Google Maps integration',
        'Built with: React.js, TypeScript, Tailwind CSS, Framer Motion, Responsive Design, Vite, Git/GitHub, UI/UX Design, Vercel Deployment',
        'Features: Coach profiles, photo gallery, YouTube video background, Google Maps integration, WhatsApp chat widget, mobile-optimized design',
        'Live: https://sakivihar-swimming-club.vercel.app'
      ],
      tradepro: [
        'TradePro - Paper Trading Simulation',
        '===================================',
        '',
        'Full-stack real-time stock trading simulation and learning platform',
        'Built with: React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, Node.js, Express.js, MongoDB, WebSockets',
        'Features: Portfolio management, watchlists, leaderboards, live stock data, TradingView charts',
        'GitHub: github.com/Ganesh5050/tradepro'
      ],
      'marketplace-blockchain': [
        'Marketplace Blockchain - P2P Trading Platform',
        '============================================',
        '',
        'Secure and transparent online marketplace built on blockchain technology',
        'Built with: Ethereum, Solidity, Web3.js, Smart Contracts, JavaScript',
        'Features: Peer-to-peer transactions, product listing, ownership tracking, cryptocurrency payments',
        'GitHub: github.com/Ganesh5050/marketplace-blockchain'
      ],
      'enterprise-platform': [
        'Enterprise-Grade Office & Product Management Platform',
        '====================================================',
        '',
        'Premium, scalable architecture with enterprise-level UI/UX',
        'Built with: React.js, Tailwind CSS, TypeScript, Framer Motion',
        'Features: Staff management, product lifecycle tracking, facilities management, dark mode support',
        'GitHub: github.com/Ganesh5050/enterprise-platform'
      ]
    };

    return projects[name] || [
      `Project "${name}" not found.`,
      'Available projects: tradepro, marketplace-blockchain, enterprise-platform'
    ];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isBooting && !isTyping) {
      handleCommand(input);
      setInput('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black border border-green-500/30 rounded-lg w-full max-w-4xl h-[80vh] flex flex-col font-mono text-sm">
        {/* Terminal Header */}
        <div className="flex items-center justify-between p-3 border-b border-green-500/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-green-400" style={{ fontFamily: 'Source Code Pro, JetBrains Mono, monospace', fontWeight: 400 }}>Terminal</span>
          </div>
          <button 
            onClick={onClose}
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Content */}
        <div className="flex-1 p-4 overflow-hidden flex flex-col">
          <div 
            ref={outputRef}
            className={`flex-1 overflow-y-auto whitespace-pre-wrap mb-2 ${isAboutSection ? 'text-white' : 'text-green-400'}`}
            style={{ fontFamily: 'Source Code Pro, JetBrains Mono, monospace', fontWeight: 400 }}
          >
            {output.map((line, index) => (
              <div key={index} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: renderColoredText(line) }} />
            ))}
          </div>

          {/* Input Line */}
          {!isBooting && !isTyping && (
            <div className={`flex items-center ${isAboutSection ? 'text-white' : 'text-green-400'}`} style={{ fontFamily: 'Source Code Pro, JetBrains Mono, monospace', fontWeight: 400 }}>
              <span className="mr-2">ganesh@portfolio:~ $</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className={`flex-1 bg-transparent border-none outline-none ${isAboutSection ? 'text-white caret-white' : 'text-green-400 caret-green-400'}`}
                style={{ fontFamily: 'Source Code Pro, JetBrains Mono, monospace', fontWeight: 400 }}
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};