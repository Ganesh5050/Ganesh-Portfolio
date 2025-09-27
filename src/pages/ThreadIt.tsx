import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Code, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const ThreadIt = () => {
  const [overviewRef, overviewInView] = useIntersectionObserver();
  const [timelineRef, timelineInView] = useIntersectionObserver();
  const [toolsRef, toolsInView] = useIntersectionObserver();
  const [linksRef, linksInView] = useIntersectionObserver();

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={goBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
          
          <div className="text-xl font-semibold text-foreground">
            ThreadIt
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight">
            ThreadIt
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time collaborative code editor with integrated chat and version control
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-6">
        <div 
          ref={overviewRef}
          className={`max-w-4xl mx-auto fade-in-up ${overviewInView ? 'in-view' : ''}`}
        >
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-accent" />
            Overview
          </h2>
          <div className="portfolio-card space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              ThreadIt is a sophisticated code collaboration platform that enables real-time editing, 
              integrated chat, and version control for distributed development teams. Built with modern 
              web technologies, it provides a seamless experience for developers working together on 
              complex projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-accent">Key Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Real-time collaborative editing with conflict resolution</li>
                  <li>• Integrated chat and video calling</li>
                  <li>• Git integration and version control</li>
                  <li>• Syntax highlighting for 20+ languages</li>
                  <li>• Live cursor tracking and user presence</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-accent">Architecture</h3>
                <p className="text-muted-foreground">
                  Built with a microservices architecture using React for the frontend, 
                  Node.js for the backend, and Socket.io for real-time communication. 
                  The system uses Redis for session management and PostgreSQL for data persistence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 px-6">
        <div 
          ref={timelineRef}
          className={`max-w-4xl mx-auto fade-in-up ${timelineInView ? 'in-view' : ''}`}
        >
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-accent" />
            Timeline
          </h2>
          <div className="portfolio-card">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-accent mt-2"></div>
                <div>
                  <h3 className="font-semibold">Phase 1: Foundation (Months 1-2)</h3>
                  <p className="text-muted-foreground">Set up the basic architecture, authentication system, and core editor functionality.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-accent mt-2"></div>
                <div>
                  <h3 className="font-semibold">Phase 2: Real-time Features (Months 3-4)</h3>
                  <p className="text-muted-foreground">Implemented WebSocket connections, live cursor tracking, and conflict resolution algorithms.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-accent mt-2"></div>
                <div>
                  <h3 className="font-semibold">Phase 3: Collaboration Tools (Months 5-6)</h3>
                  <p className="text-muted-foreground">Added chat functionality, video calling integration, and user presence indicators.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-accent mt-2"></div>
                <div>
                  <h3 className="font-semibold">Phase 4: Git Integration (Months 7-8)</h3>
                  <p className="text-muted-foreground">Integrated version control, branch management, and merge conflict resolution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 px-6">
        <div 
          ref={toolsRef}
          className={`max-w-4xl mx-auto fade-in-up ${toolsInView ? 'in-view' : ''}`}
        >
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
            <Code className="w-8 h-8 text-accent" />
            Tools & Technologies
          </h2>
          <div className="portfolio-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-accent">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Monaco Editor', 'Socket.io Client'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-accent">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'Socket.io', 'Redis', 'PostgreSQL'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-accent">DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'AWS', 'GitHub Actions', 'Nginx'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
            <Zap className="w-8 h-8 text-accent" />
            Performance Metrics
          </h2>
          <div className="portfolio-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-accent">Challenges</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Implementing efficient conflict resolution for concurrent edits</li>
                  <li>• Managing WebSocket connections for large teams</li>
                  <li>• Optimizing real-time synchronization performance</li>
                  <li>• Handling merge conflicts in collaborative environments</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-accent">Results & Takeaways</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Achieved sub-100ms latency for real-time updates</li>
                  <li>• Successfully handled 50+ concurrent users</li>
                  <li>• Reduced merge conflicts by 80% with smart algorithms</li>
                  <li>• Improved team productivity by 40%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-12 px-6">
        <div 
          ref={linksRef}
          className={`max-w-4xl mx-auto fade-in-up ${linksInView ? 'in-view' : ''}`}
        >
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
            <ExternalLink className="w-8 h-8 text-accent" />
            Links
          </h2>
          <div className="portfolio-card">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/80 transition-colors">
                <Github className="w-4 h-4" />
                Source Code
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/80 transition-colors">
                <ExternalLink className="w-4 h-4" />
                Documentation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreadIt;
