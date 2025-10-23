import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

const ProjectDetail = () => {
  const { projectName } = useParams<{ projectName: string }>();

  // Project data - you can expand this with more details
  const projects = {
    'momentum': {
      title: 'Momentum',
      date: 'Oct 2024 - Jan 2025',
      overview: 'An intelligent investment platform designed for the Indian stock market that transforms complex NSE/BSE data, earnings reports, and market news into actionable insights through a beautifully designed interface. Features real-time earnings tracking, AI-powered stock discovery, and automated portfolio synchronization with Indian brokers like Zerodha, Upstox, Angel One, and Groww.',
      background: 'Building this project required understanding Indian market structure (NSE/BSE), broker APIs, and SEBI regulations. The platform needed to deliver institutional-grade insights while remaining accessible at ₹30/month, striking the perfect balance between free broker apps and expensive Bloomberg terminals.',
      architecture: 'Built with React 18 and TypeScript for the frontend, leveraging Vite for fast builds and Tailwind CSS with custom glass morphism design system. Uses shadcn/ui component library with 60+ reusable components following atomic design principles. State management through TanStack Query with scroll-triggered animations using Intersection Observer API. Production deployment on Vercel with CI/CD via GitHub Actions.',
      challenges: 'The main challenge was achieving pixel-perfect replication of sophisticated animations and micro-interactions while adapting all content for Indian markets. Implementing a real-time SVG clock required precise trigonometric calculations. Creating smooth scroll-reveal animations demanded careful performance optimization. Balancing glass morphism aesthetics with accessibility required extensive design iteration.',
      results: 'Successfully delivered a production-ready platform with 6 complete pages and 60+ components. The platform demonstrates advanced React patterns including custom hooks, compound components, and performance optimization. Key learnings include mastering Tailwind\'s utility-first approach, implementing complex SVG animations, and creating scalable component architectures for localized markets.',
      tools: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Radix UI', 'TanStack Query', 'Recharts', 'Lucide React', 'Vercel'],
      links: {
        website: 'https://momentum-drab-five.vercel.app',
        github: 'https://github.com/Ganesh5050/Momentum'
      }
    },
    'axion': {
      title: 'Axion',
      date: 'October 2024',
      overview: 'An AI-first workspace platform website featuring 15+ fully responsive pages, advanced dropdown navigation systems, and a comprehensive showcase of solutions and products. The platform demonstrates enterprise-grade UI/UX design with smooth animations, intuitive navigation, and a complete information architecture for showcasing AI-powered workspace tools across recruiting, consulting, sales, marketing, and finance solutions.',
      background: 'Building this project required deep understanding of modern web design patterns and user experience principles. The platform needed to deliver a pixel-perfect, professional appearance while maintaining excellent performance and accessibility. Special attention was given to creating reusable component architecture and ensuring seamless navigation across all pages with consistent branding.',
      architecture: 'Built with React 18 and TypeScript for type-safe development, the platform uses Vite for lightning-fast build times and hot module replacement. The component library leverages shadcn/ui built on Radix UI primitives for accessible components. React Router v6 handles client-side routing for smooth transitions. Tailwind CSS provides utility-first styling with custom design tokens, while Vercel\'s edge network ensures global performance.',
      challenges: 'The main challenge was implementing custom hover-based dropdown menus with precise timing controls to prevent premature closing. Creating 15+ unique pages with consistent design language while maintaining code reusability required careful component abstraction. Ensuring pixel-perfect responsive design across mobile, tablet, and desktop breakpoints demanded meticulous attention to layout details and spacing.',
      results: 'Successfully deployed a production-ready website with 108 files and 16,665+ lines of code. The platform features seamless navigation with custom dropdown menus, 5 solution pages, 4 product pages, and comprehensive user flows for demo requests, authentication, and content exploration. The site achieves excellent Core Web Vitals scores and demonstrates mastery of modern React patterns and professional UI/UX implementation.',
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Radix UI', 'React Router v6', 'Vite', 'Lucide Icons', 'Vercel'],
      links: {
        website: 'https://axion-pi-six.vercel.app',
        github: 'https://github.com/Ganesh5050/Axion'
      }
    },
    'owl-ai': {
      title: 'Owl AI',
      date: 'October 2024 - January 2025',
      overview: 'Owl AI is a comprehensive AI-powered coding assistant platform designed to accelerate developer workflow with real-time context awareness and semantic understanding. The platform features 12 fully-functional pages, dynamic theme switching with custom backgrounds, and a modern responsive design optimized for all devices.',
      background: 'Building this project required creating a production-ready marketing website that showcases AI coding capabilities while implementing a unique theme-switching experience. The platform needed to balance visual appeal with performance optimization and maintain brand consistency across all pages.',
      architecture: 'Built with React 18 and TypeScript for type safety, the platform uses Vite for lightning-fast builds and hot module replacement. The frontend leverages shadcn/ui components for consistent UI patterns, Tailwind CSS for styling, and next-themes for seamless dark/light mode transitions. React Router handles client-side routing across 12 pages, while custom hooks manage scroll animations and theme state.',
      challenges: 'The main challenge was implementing dynamic background image switching based on theme selection while maintaining smooth transitions and optimal performance. Creating a reusable component architecture with shadcn/ui required careful planning to ensure consistency. Optimizing the production build to achieve a 136 KB gzipped bundle while including full-page backgrounds and animations required strategic code-splitting and image optimization.',
      results: 'The platform successfully delivers a production-ready website with zero linting errors and excellent performance metrics. The unique theme-switching feature (dark mode with owl imagery, light mode with forest scenes) creates an engaging user experience. Deployed on Vercel with automatic CI/CD from GitHub, the site achieves fast load times and responsive design across all devices. Key metrics: 100% lighthouse accessibility score, 123 KB JS bundle (gzipped), fully responsive from 320px to 4K displays.',
      tools: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'React Router', 'next-themes', 'Lucide Icons', 'Vercel'],
      links: {
        website: 'https://owl-omega.vercel.app',
        github: 'https://github.com/Ganesh5050/Owl'
      }
    },
    'gen.work': {
      title: 'gen.work',
      date: 'October 2024 - January 2025',
      overview: 'gen.work is a production-ready AI workforce platform featuring autonomous, policy-aware agents that automate and handle the busywork behind enterprise operations teams. The platform includes 13 fully functional pages, a complete admin dashboard, AI-powered task execution, and real-time analytics. It showcases pixel-perfect UI design with advanced animations and interactive components.',
      background: 'Building this enterprise-grade platform required deep understanding of modern web architecture, AI integration patterns, and enterprise security practices. The project demanded pixel-perfect implementation matching production reference designs while maintaining performance, accessibility, and scalability. Special attention was given to creating a seamless user experience across all devices with sophisticated animations and micro-interactions.',
      architecture: 'The platform uses a modern full-stack architecture with React 18 and TypeScript on the frontend, powered by Vite for blazing-fast development. The backend runs on Node.js with Express, featuring JWT authentication, bcrypt password hashing, and comprehensive API endpoints. Supabase PostgreSQL provides the database layer with Row Level Security (RLS) policies. The frontend implements advanced patterns including React Hook Form for validation, TanStack Query for data fetching, Framer Motion for animations, and custom components for interactive workflows. The entire stack is containerized with Docker and deployed on Vercel with CI/CD pipelines via GitHub Actions.',
      challenges: 'The main challenges included creating pixel-perfect clones of complex UI designs with intricate animations, implementing a sophisticated mega-menu dropdown system, building animated workflow diagrams with rotating elements and pulsing states, integrating multiple third-party services (OpenAI, email, analytics, live chat), and ensuring seamless state management across 60+ components. Performance optimization for heavy animations while maintaining 60fps required careful use of GPU acceleration and component memoization. Additionally, implementing a complete authentication system with admin dashboard, full CRUD operations for tasks and workspaces, and comprehensive error handling across the entire stack presented significant architectural decisions.',
      results: 'Successfully delivered a production-ready platform with 147 files and 33,000+ lines of code. The application features 13 fully functional pages, complete backend API with 8 route groups, Supabase integration with 4 database schemas, email notification system, Google Analytics integration, and live chat support. The platform demonstrates enterprise-grade security with JWT auth, rate limiting, CORS, and Helmet protection. Key metrics include: responsive design across all screen sizes, automated CI/CD pipeline with GitHub Actions, comprehensive documentation (5+ markdown guides), and full Vercel deployment configuration. The project strengthened skills in advanced React patterns, TypeScript best practices, API design, database modeling, animation techniques, and DevOps workflows.',
      tools: ['React 18', 'TypeScript', 'Node.js', 'Express', 'Supabase PostgreSQL', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'OpenAI API', 'JWT Auth', 'Nodemailer', 'Docker', 'Vercel'],
      links: {
        website: 'https://genwork.vercel.app',
        github: 'https://github.com/Ganesh5050/Gen.work'
      }
    },
    'writeeasy---ai-powered-api-documentation-platform': {
      title: 'WriteEasy - AI-Powered API Documentation Platform',
      date: 'September 2025 - January 2026',
      overview: 'WriteEasy is a comprehensive API documentation and development platform that streamlines the entire API lifecycle. Users can create and manage API specifications, automatically generate SDKs in multiple languages, and interact with an AI assistant powered by Google Gemini for instant help. The platform features a modern, responsive UI with real-time updates and seamless authentication via email/password and OAuth providers.',
      background: 'Built to address the complexity and time-consuming nature of creating and maintaining API documentation, WriteEasy emerged from the need for a unified platform that combines documentation generation, SDK creation, and AI assistance. Traditional API documentation tools often lack integration with modern AI capabilities and require manual updates. This project solves these problems by providing an all-in-one solution with intelligent automation and a developer-friendly interface.',
      architecture: 'The application follows a modern full-stack architecture with a React/TypeScript frontend deployed on Vercel and a Node.js/Express backend on Render. Supabase serves as the PostgreSQL database with built-in authentication and Row-Level Security (RLS) policies for data protection. The AI chat feature integrates Google Gemini 2.0 Flash with automatic retry logic for high availability. The frontend uses React Router for navigation, Context API for state management, and shadcn/ui components for a polished, accessible interface.',
      challenges: 'The primary challenge was integrating multiple authentication providers (email/password, Google, GitHub, Microsoft, Discord) while maintaining security through JWT tokens and RLS policies. Additionally, transitioning from OpenAI to Google Gemini required adapting the API integration and implementing retry logic to handle server overload issues. Managing CORS configurations across development and production environments while ensuring seamless frontend-backend communication required careful environment variable management and testing across multiple deployment platforms.',
      results: 'Successfully deployed a production-ready SaaS application with full authentication, AI chat capabilities, and demo request management. The project demonstrated proficiency in full-stack development, API integration, cloud deployment, and security best practices. Key learnings included implementing resilient AI integrations with fallback mechanisms, managing complex state across distributed systems, and optimizing database queries with proper indexing and RLS policies for scalability.',
      tools: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'Google Gemini AI', 'JWT', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'OAuth 2.0', 'Vercel', 'Render'],
      links: {
        website: 'https://write-easy.vercel.app',
        github: 'https://github.com/Ganesh5050/WriteEasy'
      }
    },
    'gkp-basketball-club-website': {
      title: 'GKP Basketball Club Website',
      date: 'Aug 2025 - Sep 2025',
      overview: 'A comprehensive basketball club website featuring training schedules, image gallery, QR code generator, and WhatsApp integration for seamless communication between coaches and players.',
      background: 'Developing this website required understanding the specific needs of a basketball club community. The platform needed to serve as a digital hub for training schedules, showcase club activities through photo galleries, and provide easy communication channels for coaches and players.',
      architecture: 'Built with ReactJS and TypeScript for robust frontend development, using Vite for fast development and optimized builds. Tailwind CSS provides responsive design while Framer Motion adds engaging animations. The site integrates WhatsApp API for direct communication and includes SEO optimization for better discoverability.',
      challenges: 'The main challenge was creating an intuitive user experience that serves both coaches and players effectively. Implementing WhatsApp integration while maintaining responsive design across all devices required careful API management and mobile optimization.',
      results: 'The website successfully serves as a comprehensive digital platform for the basketball club, featuring training schedules, image gallery, QR code generator, and WhatsApp integration. The mobile-optimized design ensures accessibility for all club members.',
      tools: ['ReactJS', 'TypeScript', 'Vite', 'Tailwind CSS', 'Git', 'GitHub', 'Vercel', 'Responsive Design', 'UI/UX Design', 'SEO Optimization', 'WhatsApp Integration', 'Framer Motion'],
      links: {
        website: 'https://gkp-basketball-club.vercel.app',
        github: 'https://github.com/Ganesh5050/gkp-basketball-club'
      }
    },
    'sakivihar-swimming-club-website': {
      title: 'SakiVihar Swimming Club Website',
      date: 'Jun 2025 - Jul 2025',
      overview: 'A modern swimming club website featuring coach profiles, photo gallery, YouTube video background, and Google Maps integration to provide comprehensive information about the club and its facilities.',
      background: 'Creating this swimming club website required showcasing the club\'s facilities and coaching expertise effectively. The platform needed to attract potential members while providing existing members with easy access to schedules, coach information, and club updates.',
      architecture: 'Developed using React.js and TypeScript for type safety and maintainability. Tailwind CSS ensures responsive design while Framer Motion provides smooth animations including a professional loading screen. The site integrates YouTube API for video backgrounds and Google Maps for location services.',
      challenges: 'Implementing YouTube video backgrounds while maintaining performance across different devices was challenging. Creating an engaging photo gallery and coach profiles that effectively showcase the club\'s offerings required careful UI/UX design.',
      results: 'The website successfully attracts new members through its modern design and comprehensive information. The integration of YouTube videos, Google Maps, and WhatsApp chat widget provides multiple engagement channels for potential swimming club members.',
      tools: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'Vite', 'Git/GitHub', 'UI/UX Design', 'Vercel Deployment'],
      links: {
        website: 'https://sakivihar-swimming-club.vercel.app',
        github: 'https://github.com/Ganesh5050/sakivihar-swimming-club'
      }
    },
    'tradepro': {
      title: 'TradePro',
      date: 'Dec 2024',
      overview: 'TradePro is a comprehensive full-stack real-time stock trading simulation and learning platform designed to provide users with hands-on experience in financial markets without real financial risk.',
      background: 'Building TradePro required creating a sophisticated trading environment that mimics real market conditions while providing educational value. The platform needed to handle real-time data processing, complex financial calculations, and user portfolio management.',
      architecture: 'The system employs a React frontend with TypeScript for type safety and real-time updates, connected to a Node.js backend with Express.js for API management. MongoDB handles user data and trading history, while WebSocket connections provide real-time market data updates.',
      challenges: 'The primary challenge was implementing accurate market simulation while maintaining real-time performance. Managing complex financial calculations and ensuring data consistency across multiple user sessions required careful architecture design.',
      results: 'TradePro successfully provides users with a realistic trading experience, featuring real-time market data, portfolio tracking, and educational resources. The platform demonstrates effective integration of financial APIs and real-time data processing.',
      tools: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'WebSocket', 'Express.js', 'Chart.js', 'Tailwind CSS'],
      links: {
        website: 'https://tradepro.example.com',
        github: 'https://github.com/Ganesh5050/tradepro'
      }
    },
    'marketplace-blockchain': {
      title: 'Marketplace Blockchain',
      date: 'Nov 2024',
      overview: 'A secure and transparent online marketplace built on blockchain technology, enabling peer-to-peer transactions with smart contract automation and decentralized trust mechanisms.',
      background: 'Creating a blockchain-based marketplace required understanding complex cryptographic principles and smart contract development. The platform needed to provide security, transparency, and decentralization while maintaining user-friendly interfaces.',
      architecture: 'The system uses Ethereum blockchain with Solidity smart contracts for transaction logic, Web3.js for blockchain interaction, and a React frontend for user interface. IPFS handles decentralized file storage for product images and metadata.',
      challenges: 'Implementing secure smart contracts while ensuring gas efficiency was the primary challenge. Managing user onboarding to blockchain technology and handling transaction fees required careful UX design and educational components.',
      results: 'The marketplace successfully demonstrates decentralized commerce with automated escrow, transparent transaction history, and reduced intermediary costs. Users can trade with confidence through smart contract automation.',
      tools: ['Ethereum', 'Solidity', 'Web3.js', 'JavaScript', 'React', 'IPFS', 'MetaMask', 'Truffle'],
      links: {
        website: 'https://marketplace-blockchain.example.com',
        github: 'https://github.com/Ganesh5050/marketplace-blockchain'
      }
    },
    'enterprise-platform': {
      title: 'Enterprise Platform',
      date: 'Oct 2024',
      overview: 'A premium scalable office management system with enterprise-level UI/UX, designed to streamline business operations through integrated workflow management and advanced analytics.',
      background: 'Developing an enterprise platform required understanding complex business workflows and scalability requirements. The system needed to handle multiple departments, user roles, and large-scale data processing while maintaining performance.',
      architecture: 'Built with React and TypeScript for robust frontend development, the platform uses Framer Motion for smooth animations and Tailwind CSS for responsive design. The backend architecture supports microservices for scalability and maintainability.',
      challenges: 'Managing complex user permissions and role-based access control was challenging. Ensuring smooth animations and responsive design across different devices while maintaining enterprise-level performance required careful optimization.',
      results: 'The platform successfully provides enterprise-grade functionality with intuitive user experience. Advanced analytics and workflow automation help businesses improve efficiency and decision-making processes.',
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      links: {
        website: 'https://office-show.vercel.app/',
        github: 'https://github.com/Ganesh5050/Office-FLow'
      }
    },
    'regalytics-ui---compliance-management-platform': {
      title: 'Regalytics UI - Compliance Management Platform',
      date: 'Sep 2025 - Nov 2025',
      overview: 'Enterprise Financial Compliance CRM platform with React/TypeScript frontend and Node.js/Express backend. Integrated n8n workflow automation for KYC processes, real-time data synchronization, and comprehensive CRM features.',
      background: 'Developing this compliance management platform required understanding complex financial regulations and KYC (Know Your Customer) processes. The system needed to handle sensitive financial data while providing seamless workflow automation and real-time synchronization across multiple departments.',
      architecture: 'Built with React and TypeScript for robust frontend development, the platform uses Node.js and Express.js for the backend API. n8n workflow automation handles KYC processes, while PostgreSQL and SQLite manage data persistence. Docker ensures consistent deployment, and the platform is deployed on Railway and Vercel with PWA capabilities for mobile access.',
      challenges: 'Implementing secure KYC workflow automation while maintaining compliance with financial regulations was the primary challenge. Managing real-time data synchronization across multiple systems and ensuring PWA functionality across different devices required careful architecture design and testing.',
      results: 'The platform successfully automates KYC processes and provides comprehensive CRM functionality for financial compliance. Real-time data synchronization and PWA capabilities ensure accessibility across all devices, while the integrated workflow automation significantly reduces manual processing time.',
      tools: ['React', 'TypeScript', 'Node.js', 'Express.js', 'n8n', 'PostgreSQL', 'SQLite', 'Docker', 'Railway', 'Vercel', 'REST APIs', 'WebSockets', 'PWA', 'Responsive Design'],
      links: {
        website: 'https://regalytics.vercel.app/',
        github: 'https://github.com/Ganesh5050/Regalytics'
      }
    }
  };

  const project = projects[projectName as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-accent hover:underline">← Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link to="/" className="text-accent hover:underline mb-8 inline-block">
          ← Back to projects
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
            {project.title}
          </h1>
          <p className="text-muted-foreground text-lg">{project.date}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Overview
              </h2>
              <p className="text-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {project.overview}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Background
              </h2>
              <p className="text-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {project.background}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Architecture
              </h2>
              <p className="text-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {project.architecture}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Challenges
              </h2>
              <p className="text-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {project.challenges}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Result & Takeaways
              </h2>
              <p className="text-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {project.results}
              </p>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Timeline
              </h3>
              <p className="text-foreground" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {project.date}
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Tools
              </h3>
              <div className="space-y-2">
                {project.tools.map((tool) => (
                  <p key={tool} className="text-foreground" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                    {tool}
                  </p>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Links
              </h3>
              <div className="space-y-3">
                <a 
                  href={project.links.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Website →
                </a>
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:underline"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub →
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
