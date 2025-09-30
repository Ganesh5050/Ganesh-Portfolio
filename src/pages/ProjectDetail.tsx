import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

const ProjectDetail = () => {
  const { projectName } = useParams<{ projectName: string }>();

  // Project data - you can expand this with more details
  const projects = {
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
