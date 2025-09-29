import { useState, useEffect } from 'react';
import { ExternalLink, Mail, Github, Terminal, ArrowUpRight, Sun, Moon, Briefcase, GraduationCap, Microscope, Folder, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Terminal as TerminalComponent } from '@/components/Terminal';
import companyLogo from '@/assets/company-logo.jpg';
import siesLogo from '@/assets/logos/sies-logo.png';
import siwsLogo from '@/assets/logos/siws-logo.png';
import stJudesLogo from '@/assets/logos/st-judes-logo.png';
import { Link } from 'react-router-dom';
import { GridBackground } from '@/components/GridBackground';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const Index = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [typewriterText1, setTypewriterText1] = useState('');
  const [typewriterText2, setTypewriterText2] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isHoveringTerminal, setIsHoveringTerminal] = useState(false);
  const [glitchText, setGlitchText] = useState('');

  // Intersection observer refs for animations
  const [heroRef, heroInView] = useIntersectionObserver();
  const [expRef, expInView] = useIntersectionObserver();
  const [eduRef, eduInView] = useIntersectionObserver();
  const [hobbiesRef, hobbiesInView] = useIntersectionObserver();
  const [resRef, resInView] = useIntersectionObserver();
  const [projRef, projInView] = useIntersectionObserver();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'experience', 'education', 'activities', 'hobbies', 'research', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect for green text
  useEffect(() => {
    const text1 = "Software Engineer";
    const text2 = "ML, web, and backend systems";
    
    let index1 = 0;
    let index2 = 0;
    
    const typewriter1 = setInterval(() => {
      if (index1 < text1.length) {
        setTypewriterText1(text1.slice(0, index1 + 1));
        index1++;
      } else {
        clearInterval(typewriter1);
        // Start second typewriter after first completes
        setTimeout(() => {
          const typewriter2 = setInterval(() => {
            if (index2 < text2.length) {
              setTypewriterText2(text2.slice(0, index2 + 1));
              index2++;
            } else {
              clearInterval(typewriter2);
            }
          }, 50);
        }, 200);
      }
    }, 80);

    return () => {
      clearInterval(typewriter1);
    };
  }, []);

  // Live clock effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Glitch effect for terminal button
  useEffect(() => {
    if (!isHoveringTerminal) {
      setGlitchText('');
      return;
    }

    const glitchCharacters = [
      '_', '^', '#', '-', '}', '*', '!', 'C', 'Z', '(', '.', ')', '/', 'L', '~', '`', '@', '$', '%', '&', '+', '=', '[', ']', '{', '}', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '?', '!', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω',
      'Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω',
      '∞', '∅', '∈', '∉', '⊂', '⊃', '∪', '∩', '∧', '∨', '¬', '→', '↔', '∀', '∃', '∇', '∂', '∫', '∑', '∏', '√', '±', '×', '÷', '≤', '≥', '≠', '≈', '≡',
      '♠', '♣', '♥', '♦', '♡', '♢', '♤', '♧', '★', '☆', '◆', '◇', '●', '○', '■', '□', '▲', '△', '▼', '▽', '◄', '►', '◀', '▶',
      '☀', '☁', '☂', '☃', '☄', '★', '☆', '☇', '☈', '☉', '☊', '☋', '☌', '☍', '☎', '☏', '☐', '☑', '☒', '☓', '☔', '☕', '☖', '☗', '☘', '☙', '☚', '☛', '☜', '☝', '☞', '☟',
      '☠', '☡', '☢', '☣', '☤', '☥', '☦', '☧', '☨', '☩', '☪', '☫', '☬', '☭', '☮', '☯', '☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷',
      '☸', '☹', '☺', '☻', '☼', '☽', '☾', '☿', '♀', '♂', '♁', '♃', '♄', '♅', '♆', '♇', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏',
      '♐', '♑', '♒', '♓', '♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟', '♠', '♡', '♢', '♣', '♤', '♥', '♦', '♧',
      '♨', '♩', '♪', '♫', '♬', '♭', '♮', '♯', '♰', '♱', '♲', '♳', '♴', '♵', '♶', '♷', '♸', '♹', '♺', '♻', '♼', '♽', '♾', '♿',
      '⚀', '⚁', '⚂', '⚃', '⚄', '⚅', '⚆', '⚇', '⚈', '⚉', '⚊', '⚋', '⚌', '⚍', '⚎', '⚏', '⚐', '⚑', '⚒', '⚓', '⚔', '⚕', '⚖', '⚗',
      '⚘', '⚙', '⚚', '⚛', '⚜', '⚝', '⚞', '⚟', '⚠', '⚡', '⚢', '⚣', '⚤', '⚥', '⚦', '⚧', '⚨', '⚩', '⚪', '⚫', '⚬', '⚭', '⚮', '⚯',
      '⚰', '⚱', '⚲', '⚳', '⚴', '⚵', '⚶', '⚷', '⚸', '⚹', '⚺', '⚻', '⚼', '⚽', '⚾', '⚿', '⛀', '⛁', '⛂', '⛃', '⛄', '⛅', '⛆', '⛇',
      '⛈', '⛉', '⛊', '⛋', '⛌', '⛍', '⛎', '⛏', '⛐', '⛑', '⛒', '⛓', '⛔', '⛕', '⛖', '⛗', '⛘', '⛙', '⛚', '⛛', '⛜', '⛝', '⛞', '⛟',
      '⛠', '⛡', '⛢', '⛣', '⛤', '⛥', '⛦', '⛧', '⛨', '⛩', '⛪', '⛫', '⛬', '⛭', '⛮', '⛯', '⛰', '⛱', '⛲', '⛳', '⛴', '⛵', '⛶', '⛷',
      '⛸', '⛹', '⛺', '⛻', '⛼', '⛽', '⛾', '⛿', '✀', '✁', '✂', '✃', '✄', '✅', '✆', '✇', '✈', '✉', '✊', '✋', '✌', '✍', '✎', '✏',
      '✐', '✑', '✒', '✓', '✔', '✕', '✖', '✗', '✘', '✙', '✚', '✛', '✜', '✝', '✞', '✟', '✠', '✡', '✢', '✣', '✤', '✥', '✦', '✧',
      '✨', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '✱', '✲', '✳', '✴', '✵', '✶', '✷', '✸', '✹', '✺', '✻', '✼', '✽', '✾', '✿',
      '❀', '❁', '❂', '❃', '❄', '❅', '❆', '❇', '❈', '❉', '❊', '❋', '❌', '❍', '❎', '❏', '❐', '❑', '❒', '❓', '❔', '❕', '❖', '❗',
      '❘', '❙', '❚', '❛', '❜', '❝', '❞', '❟', '❠', '❡', '❢', '❣', '❤', '❥', '❦', '❧', '❨', '❩', '❪', '❫', '❬', '❭', '❮', '❯',
      '❰', '❱', '❲', '❳', '❴', '❵', '❶', '❷', '❸', '❹', '❺', '❻', '❼', '❽', '❾', '❿', '➀', '➁', '➂', '➃', '➄', '➅', '➆', '➇',
      '➈', '➉', '➊', '➋', '➌', '➍', '➎', '➏', '➐', '➑', '➒', '➓', '➔', '➕', '➖', '➗', '➘', '➙', '➚', '➛', '➜', '➝', '➞', '➟',
      '➠', '➡', '➢', '➣', '➤', '➥', '➦', '➧', '➨', '➩', '➪', '➫', '➬', '➭', '➮', '➯', '➰', '➱', '➲', '➳', '➴', '➵', '➶', '➷',
      '➸', '➹', '➺', '➻', '➼', '➽', '➾', '➿', '⠀', '⠁', '⠂', '⠃', '⠄', '⠅', '⠆', '⠇', '⠈', '⠉', '⠊', '⠋', '⠌', '⠍', '⠎', '⠏',
      '⠐', '⠑', '⠒', '⠓', '⠔', '⠕', '⠖', '⠗', '⠘', '⠙', '⠚', '⠛', '⠜', '⠝', '⠞', '⠟', '⠠', '⠡', '⠢', '⠣', '⠤', '⠥', '⠦', '⠧',
      '⠨', '⠩', '⠪', '⠫', '⠬', '⠭', '⠮', '⠯', '⠰', '⠱', '⠲', '⠳', '⠴', '⠵', '⠶', '⠷', '⠸', '⠹', '⠺', '⠻', '⠼', '⠽', '⠾', '⠿',
      '⡀', '⡁', '⡂', '⡃', '⡄', '⡅', '⡆', '⡇', '⡈', '⡉', '⡊', '⡋', '⡌', '⡍', '⡎', '⡏', '⡐', '⡑', '⡒', '⡓', '⡔', '⡕', '⡖', '⡗',
      '⡘', '⡙', '⡚', '⡛', '⡜', '⡝', '⡞', '⡟', '⡠', '⡡', '⡢', '⡣', '⡤', '⡥', '⡦', '⡧', '⡨', '⡩', '⡪', '⡫', '⡬', '⡭', '⡮', '⡯',
      '⡰', '⡱', '⡲', '⡳', '⡴', '⡵', '⡶', '⡷', '⡸', '⡹', '⡺', '⡻', '⡼', '⡽', '⡾', '⡿', '⢀', '⢁', '⢂', '⢃', '⢄', '⢅', '⢆', '⢇',
      '⢈', '⢉', '⢊', '⢋', '⢌', '⢍', '⢎', '⢏', '⢐', '⢑', '⢒', '⢓', '⢔', '⢕', '⢖', '⢗', '⢘', '⢙', '⢚', '⢛', '⢜', '⢝', '⢞', '⢟',
      '⢠', '⢡', '⢢', '⢣', '⢤', '⢥', '⢦', '⢧', '⢨', '⢩', '⢪', '⢫', '⢬', '⢭', '⢮', '⢯', '⢰', '⢱', '⢲', '⢳', '⢴', '⢵', '⢶', '⢷',
      '⢸', '⢹', '⢺', '⢻', '⢼', '⢽', '⢾', '⢿', '⣀', '⣁', '⣂', '⣃', '⣄', '⣅', '⣆', '⣇', '⣈', '⣉', '⣊', '⣋', '⣌', '⣍', '⣎', '⣏',
      '⣐', '⣑', '⣒', '⣓', '⣔', '⣕', '⣖', '⣗', '⣘', '⣙', '⣚', '⣛', '⣜', '⣝', '⣞', '⣟', '⣠', '⣡', '⣢', '⣣', '⣤', '⣥', '⣦', '⣧',
      '⣨', '⣩', '⣪', '⣫', '⣬', '⣭', '⣮', '⣯', '⣰', '⣱', '⣲', '⣳', '⣴', '⣵', '⣶', '⣷', '⣸', '⣹', '⣺', '⣻', '⣼', '⣽', '⣾', '⣿'
    ];
    const originalText = '/bin/sh';
    let glitchIndex = 0;
    
    const glitchInterval = setInterval(() => {
      if (glitchIndex < originalText.length) {
        const randomChar = glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)];
        setGlitchText(prev => prev + randomChar);
        glitchIndex++;
      } else {
        // Reset and start over
        setGlitchText('');
        glitchIndex = 0;
      }
    }, 100);

    return () => clearInterval(glitchInterval);
  }, [isHoveringTerminal]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-background relative transition-colors duration-300 ${isDarkMode ? '' : 'light'}`}>
      {/* Grid background effect - Home page only */}
      <GridBackground />
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('intro')}
            className="text-xl font-semibold text-foreground hover:text-accent transition-colors cursor-pointer" 
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
          >
            Ganesh Panigrahi
          </button>
          
          <nav className="hidden md:flex items-center space-x-2 text-sm">
            <button
              onClick={() => scrollToSection('experience')}
              className={`portfolio-link transition-colors ${
                activeSection === 'experience' ? 'accent-text' : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.025em' }}
            >
              :: experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className={`portfolio-link transition-colors ${
                activeSection === 'education' ? 'accent-text' : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.025em' }}
            >
              :: education
            </button>
            <button
              onClick={() => scrollToSection('activities')}
              className={`portfolio-link transition-colors ${
                activeSection === 'activities' ? 'accent-text' : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.025em' }}
            >
              :: activities
            </button>
            <button
              onClick={() => scrollToSection('hobbies')}
              className={`portfolio-link transition-colors ${
                activeSection === 'hobbies' ? 'accent-text' : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.025em' }}
            >
              :: hobbies
            </button>
              <button
              onClick={() => scrollToSection('projects')}
              className={`portfolio-link transition-colors ${
                activeSection === 'projects' ? 'accent-text' : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.025em' }}
            >
              :: projects
              </button>
          </nav>

          <div className="flex items-center space-x-4 text-sm">
            <button 
              onClick={() => setIsTerminalOpen(true)}
              onMouseEnter={() => setIsHoveringTerminal(true)}
              onMouseLeave={() => setIsHoveringTerminal(false)}
              className="portfolio-link text-muted-foreground hover:text-foreground font-mono flex items-center gap-1 transition-all duration-300 bg-accent/10 px-2 py-1 rounded hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30"
              style={{ fontFamily: 'Source Code Pro, JetBrains Mono, monospace', fontWeight: 400 }}
            >
              <Terminal className="w-3 h-3" />
              &gt;_ {isHoveringTerminal && glitchText ? glitchText : '/bin/sh'}
            </button>
            <a href="https://www.linkedin.com/in/ganesh-panigrahi50/" target="_blank" rel="noopener noreferrer" className="portfolio-link text-muted-foreground hover:text-foreground">
              in
            </a>
            <a href="https://github.com/Ganesh5050" target="_blank" rel="noopener noreferrer" className="portfolio-link text-muted-foreground hover:text-foreground">
              gh
            </a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="portfolio-link text-muted-foreground hover:text-foreground">
              X
            </a>
            <button className="portfolio-link text-muted-foreground hover:text-foreground">
              *
            </button>
            <button 
              onClick={toggleTheme}
              className="portfolio-link text-muted-foreground hover:text-foreground transition-all duration-300 bg-accent/10 px-2 py-1 rounded hover:bg-accent/20"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="intro" 
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      >
        <div 
          ref={heroRef}
          className={`max-w-5xl mx-auto text-center space-y-8 fade-in-up ${heroInView ? 'in-view' : ''}`}
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            I am a <span className="accent-text italic font-medium" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, textDecoration: 'underline', textDecorationColor: isDarkMode ? 'white' : 'black' }}>{typewriterText1}</span> with experience building software across <span className="accent-text italic font-medium" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, textDecoration: 'underline', textDecorationColor: isDarkMode ? 'white' : 'black' }}>{typewriterText2}</span>
          </h1>
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-foreground/90" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            <p>
              I've worked on projects ranging from AI-powered applications to scalable web platforms, 
              focusing on creating elegant solutions to complex problems. Currently pursuing B.E. in 
              Computer Science Engineering at SIES Graduate School of Technology (University of Mumbai).
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-6 h-6 border-b-2 border-foreground/30 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center text-foreground flex items-center justify-center gap-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
            <Briefcase className="w-8 h-8 text-foreground" />
            Experience
          </h2>
          <div className="portfolio-card relative">
            <GlowingEffect disabled={false} proximity={50} spread={120} variant={isDarkMode ? "default" : "light"} />
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-background rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Coming Soon</h3>
                <p className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                  Professional work experience will be added here soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 relative z-10">
        <div 
          ref={eduRef}
          className={`max-w-4xl mx-auto fade-in-up ${eduInView ? 'in-view' : ''}`}
        >
          <h2 className="text-3xl font-semibold mb-12 text-center text-foreground flex items-center justify-center gap-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
            <GraduationCap className="w-8 h-8 text-foreground" />
            Education
          </h2>
          <div className="space-y-6">
            <div className="portfolio-card relative">
              <GlowingEffect disabled={false} proximity={50} spread={120} variant={isDarkMode ? "default" : "light"} />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-2">
                  <img src={siesLogo} alt="SIES Graduate School of Technology (University of Mumbai)" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>B.E. - CSE - Internet of Things & Cyber Security Including Block Chain Technology</h3>
                    <span className="text-sm text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>2022 - 2026</span>
                  </div>
                  <p className="accent-text font-medium mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>SIES Graduate School of Technology (University of Mumbai)</p>
                  <p className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                    CGPA: 8.43 / 10
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolio-card relative">
              <GlowingEffect disabled={false} proximity={50} spread={120} variant={isDarkMode ? "default" : "light"} />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-2">
                  <img src={siwsLogo} alt="South Indians' Welfare Society College" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>12th Grade</h3>
                    <span className="text-sm text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>2022</span>
                  </div>
                  <p className="accent-text font-medium mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>South Indians' Welfare Society College</p>
                </div>
              </div>
            </div>

            <div className="portfolio-card relative">
              <GlowingEffect disabled={false} proximity={50} spread={120} variant={isDarkMode ? "default" : "light"} />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-2">
                  <img src={stJudesLogo} alt="St Jude's High School" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>10th Grade</h3>
                    <span className="text-sm text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>2020</span>
                  </div>
                  <p className="accent-text font-medium mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>St Jude's High School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Curricular Activities Section */}
      <section id="activities" className="py-20 px-6 relative z-10">
        <div 
          ref={expRef}
          className={`max-w-4xl mx-auto fade-in-up ${expInView ? 'in-view' : ''}`}
        >
          <h2 className="text-3xl font-semibold mb-12 text-center text-foreground flex items-center justify-center gap-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
            <Users className="w-8 h-8 text-foreground" />
            Extra Curricular Activities
          </h2>
          <div className="space-y-6">
            <div className="portfolio-card relative">
              <GlowingEffect disabled={false} proximity={50} spread={120} variant={isDarkMode ? "default" : "light"} />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <img src={companyLogo} alt="Company" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>NSS Volunteer</h3>
                  </div>
                  <p className="accent-text font-medium mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>SIES Graduate School of Technology (University of Mumbai)</p>
                  <p className="text-white mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                    Participated in street plays and awareness campaigns for social causes. Contributed to community development and leadership initiatives.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Community Service', 'Leadership', 'Teamwork', 'Social Awareness'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted text-foreground text-sm rounded-md" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-card relative">
              <GlowingEffect disabled={false} proximity={50} spread={120} variant={isDarkMode ? "default" : "light"} />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <img src={companyLogo} alt="Company" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Training and Placement Coordinator</h3>
                  </div>
                  <p className="accent-text font-medium mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>SIES Graduate School of Technology (University of Mumbai)</p>
                  <p className="text-white mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                    Coordinated between students and recruiters for placement drives. Managed logistics and supported events.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Coordination', 'Event Management', 'Student Support', 'Recruitment'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted text-foreground text-sm rounded-md" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-card relative">
              <GlowingEffect disabled={false} proximity={50} spread={120} variant={isDarkMode ? "default" : "light"} />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <img src={companyLogo} alt="Company" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Class Representative</h3>
                  </div>
                  <p className="accent-text font-medium mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>SIES Graduate School of Technology (University of Mumbai)</p>
                  <p className="text-white mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                    Acted as liaison between faculty and students. Facilitated communication and represented student interests.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Student Representation', 'Communication', 'Leadership', 'Faculty Liaison'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted text-foreground text-sm rounded-md" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 px-6 relative z-10">
        <div 
          ref={hobbiesRef}
          className={`max-w-4xl mx-auto fade-in-up ${hobbiesInView ? 'in-view' : ''}`}
        >
          <h2 className="text-3xl font-semibold mb-12 text-center text-foreground flex items-center justify-center gap-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
            <Heart className="w-8 h-8 text-foreground" />
            Hobbies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basketball */}
          <div className="portfolio-card relative">
            <GlowingEffect disabled={false} proximity={50} spread={120} variant={isDarkMode ? "default" : "light"} />
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🏀</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Basketball</h3>
                  </div>
                  <p className="accent-text font-medium mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Passionate Player & Team Member</p>
                </div>
              </div>
            </div>

            {/* Swimming */}
          <div className="portfolio-card relative">
            <GlowingEffect disabled={false} proximity={50} spread={120} variant={isDarkMode ? "default" : "light"} />
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🏊</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Swimming</h3>
                  </div>
                  <p className="accent-text font-medium mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Regular Swimmer & Water Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-6 relative z-10">
        <div 
          ref={resRef}
          className={`max-w-4xl mx-auto fade-in-up ${resInView ? 'in-view' : ''}`}
        >
          <h2 className="text-3xl font-semibold mb-12 text-center text-foreground flex items-center justify-center gap-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
            <Microscope className="w-8 h-8 text-foreground" />
            Research
          </h2>
          <div className="portfolio-card relative">
            <GlowingEffect disabled={false} proximity={50} spread={120} variant={isDarkMode ? "default" : "light"} />
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-background rounded-full"></div>
              </div>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Coming Soon</h3>
                <p className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                  Research projects and publications will be added here soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div 
          ref={projRef}
          className={`max-w-6xl mx-auto fade-in-up ${projInView ? 'in-view' : ''}`}
        >
          <h2 className="text-3xl font-semibold mb-12 text-center text-foreground flex items-center justify-center gap-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
            <Folder className="w-8 h-8 text-foreground" />
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'GKP Basketball Club Website',
                description: 'Comprehensive basketball club website with training schedules, image gallery, QR code generator, and WhatsApp integration',
                tech: ['ReactJS', 'TypeScript', 'Vite', 'Tailwind CSS', 'Git', 'GitHub', 'Vercel', 'Responsive Design', 'UI/UX Design', 'SEO Optimization', 'WhatsApp Integration', 'Framer Motion']
              },
              {
                name: 'SakiVihar Swimming Club Website',
                description: 'Modern swimming club website with coach profiles, photo gallery, YouTube video background, and Google Maps integration',
                tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'Vite', 'Git/GitHub', 'UI/UX Design', 'Vercel Deployment']
              },
              {
                name: 'TradePro',
                description: 'Full-stack real-time stock trading simulation and learning platform',
                tech: ['React', 'TypeScript', 'Node.js', 'MongoDB']
              },
              {
                name: 'Marketplace Blockchain',
                description: 'Secure and transparent online marketplace built on blockchain technology',
                tech: ['Ethereum', 'Solidity', 'Web3.js', 'JavaScript']
              },
              {
                name: 'Enterprise Platform',
                description: 'Premium scalable office management system with enterprise-level UI/UX',
                tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
              }
            ].map((project, index) => (
              <Link 
                key={project.name} 
                to={`/project/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="portfolio-card cursor-pointer group hover:scale-105 transition-all duration-300 block relative"
                style={{
                  animationDelay: `${(index + 70) * 0.5}s`,
                  animation: projInView ? `fadeInUp 0.6s ease-out forwards` : 'none'
                }}
              >
                <GlowingEffect disabled={false} proximity={50} spread={120} variant={isDarkMode ? "default" : "light"} />
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:accent-text transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    {project.name}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <p className="text-white text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted text-foreground text-xs rounded" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border relative z-10 bg-background">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 8px rgba(34, 197, 94, 0.6), 0 0 16px rgba(34, 197, 94, 0.4)' }}></div>
            <span>Updated 7/29/2025</span>
          </div>
          <div>
            {currentTime.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
              minute: '2-digit', 
              second: '2-digit',
              timeZoneName: 'short'
          })}
          </div>
        </div>
      </footer>

      {/* Terminal Component */}
      <TerminalComponent 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />
    </div>
  );
};

export default Index;