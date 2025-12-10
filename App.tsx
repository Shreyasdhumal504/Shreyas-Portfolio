import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  MapPin, 
  Mail, 
  Linkedin, 
  Github, 
  ChevronDown, 
  Cpu, 
  Download, 
  ExternalLink, 
  Send,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

import Navbar from './components/Navbar';
import StarBackground from './components/StarBackground';
import SolarSystem from './components/SolarSystem';
import Section from './components/Section';
import { 
  PERSONAL_INFO, 
  EXPERIENCE_DATA, 
  EDUCATION_DATA, 
  PROJECTS_DATA, 
  SKILLS_DATA, 
  AFFILIATIONS_DATA, 
  INTERESTS 
} from './constants';

const App: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Offset calculation for fixed header (80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Formspree to handle form submissions
      const response = await fetch("https://formspree.io/f/mqarddvp", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: "New Message from Portfolio Website", // Custom subject line for Formspree
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-neon-cyan/30 selection:text-white relative">
      <StarBackground />
      <SolarSystem />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 z-10">
        {/* Floating Planet Element (Maintained as stylistic foreground element) */}
        <motion.div 
          className="absolute right-0 top-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-neon-purple/20 to-transparent rounded-full blur-[60px]"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan text-sm font-medium tracking-wide">
                SYSTEM ONLINE
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold font-orbit mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                {PERSONAL_INFO.name.split(' ')[0]}
              </span>
              <br />
              <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                {PERSONAL_INFO.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
              {PERSONAL_INFO.tagline}
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                onClick={(e) => handleScroll(e, '#projects')}
                className="px-8 py-3 bg-neon-cyan text-space-900 font-bold rounded hover:bg-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer"
              >
                View Mission Log <Rocket size={20} />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="px-8 py-3 border border-slate-500 hover:border-neon-purple hover:text-neon-purple rounded transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                Establish Contact
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden md:flex justify-center"
          >
             {/* Abstract Drone/Satellite visual */}
             <div className="relative w-80 h-80">
                <motion.div 
                  className="absolute inset-0 border-2 border-dashed border-slate-700 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-4 border border-slate-600 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                 <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Rocket size={120} className="text-slate-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
                </motion.div>
             </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="text-slate-500 hover:text-white transition-colors cursor-pointer">
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <Section id="about" className="bg-space-800/30 backdrop-blur-sm">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative w-64 h-64 mx-auto md:mx-0">
               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple p-1 animate-spin-slow">
                 <div className="w-full h-full rounded-full bg-space-900" />
               </div>
               <div className="absolute inset-1 rounded-full overflow-hidden bg-slate-800 flex items-center justify-center">
                 {/* Profile Image */}
                 <img src="https://github.com/Shreyasdhumal504.png" alt="Shreyas Dhumal" className="object-cover w-full h-full" />
               </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
               <span className="h-px w-12 bg-neon-purple"></span>
               <span className="text-neon-purple font-orbit tracking-widest uppercase text-sm">Briefing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Navigating the Future of <span className="text-neon-cyan">Flight</span></h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              {PERSONAL_INFO.summary}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Cpu size={18} className="text-neon-orange" /> Education
              </h3>
              <div className="space-y-4 border-l-2 border-slate-700 pl-4">
                {EDUCATION_DATA.map((edu, idx) => (
                   <div key={idx}>
                     <p className="text-white font-medium">{edu.degree}</p>
                     <p className="text-sm text-slate-400">{edu.institution}</p>
                     <p className="text-xs text-neon-cyan">{edu.year}</p>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="backdrop-blur-sm">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold font-orbit mb-4">Mission Timeline</h2>
           <div className="h-1 w-20 bg-neon-cyan mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Center Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 transform md:-translate-x-1/2 ml-4 md:ml-0"></div>

          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-space-900 border-2 border-neon-cyan rounded-full flex items-center justify-center z-10 transform -translate-x-[2px] md:-translate-x-1/2">
                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 w-full md:w-[45%]">
                <div className="bg-space-800/80 p-6 rounded-lg border border-white/5 hover:border-neon-cyan/30 transition-colors backdrop-blur-md">
                  <span className="text-neon-cyan text-sm font-mono block mb-1">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-slate-400 font-medium mb-4">{exp.company}</h4>
                  <ul className="space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-neon-purple rounded-full flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-gradient-to-b from-space-900/90 to-space-800/90 backdrop-blur-sm">
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold font-orbit mb-4">Technical Arsenal</h2>
           <p className="text-slate-400">Tools and technologies deployed in the field</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-space-900/70 p-6 rounded-xl border border-slate-800 hover:border-neon-orange/50 transition-all shadow-lg backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-300 text-sm rounded border border-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="backdrop-blur-sm">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <div className="flex items-center gap-2 mb-2">
               <span className="h-px w-12 bg-neon-cyan"></span>
               <span className="text-neon-cyan font-orbit tracking-widest uppercase text-sm">Portfolio</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
           </div>
           <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white transition-colors mt-4 md:mt-0">
             View All on GitHub <ExternalLink size={16} />
           </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-space-800/60 rounded-xl overflow-hidden border border-white/5 hover:border-neon-cyan/50 transition-all duration-300 backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-neon-purple uppercase tracking-wider">{project.category}</span>
                  <Cpu className="text-slate-600 group-hover:text-neon-cyan transition-colors" size={20} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-xs font-mono text-slate-500 bg-black/30 px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Affiliations & Interests */}
      <Section id="affiliations" className="bg-space-800/20 backdrop-blur-sm">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Citizen Science */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-orbit">Affiliations & Citizen Science</h3>
            <div className="space-y-4">
              {AFFILIATIONS_DATA.map((affil) => (
                <div key={affil.id} className="flex items-center gap-4 bg-space-900/60 p-4 rounded-lg border border-slate-700 backdrop-blur-md">
                  <div className="p-3 bg-slate-800 rounded-full text-neon-orange">
                     {affil.icon === 'Telescope' && <Download size={20} />} 
                     {affil.icon === 'Rocket' && <Rocket size={20} />}
                     {affil.icon === 'Globe' && <ExternalLink size={20} />}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{affil.organization}</h4>
                    <p className="text-neon-cyan text-sm">{affil.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-orbit">Interests</h3>
            <div className="grid grid-cols-2 gap-4">
              {INTERESTS.map((interest, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-6 bg-space-900/60 border border-slate-800 rounded-xl hover:bg-space-800 transition-colors backdrop-blur-md"
                >
                  <interest.icon className="w-8 h-8 text-neon-purple mb-3" />
                  <span className="text-slate-300 font-medium">{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-orbit mb-4">Establish Comms</h2>
            <p className="text-slate-400">Ready to collaborate on the next aerospace breakthrough?</p>
          </div>

          <div className="bg-space-800/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
             <div className="grid md:grid-cols-2 gap-8 mb-8 border-b border-white/10 pb-8">
               <div className="flex flex-col gap-4">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                    <div className="p-2 bg-neon-cyan/10 rounded-lg text-neon-cyan"><Mail size={20} /></div>
                    <span>{PERSONAL_INFO.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="p-2 bg-neon-purple/10 rounded-lg text-neon-purple"><MapPin size={20} /></div>
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
               </div>
               <div className="flex gap-4 items-center justify-start md:justify-end">
                 <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-700 hover:bg-[#0077b5] rounded-full transition-colors text-white">
                   <Linkedin size={24} />
                 </a>
                 <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-700 hover:bg-black rounded-full transition-colors text-white">
                   <Github size={24} />
                 </a>
               </div>
             </div>

             <form className="space-y-4" onSubmit={handleSubmit}>
               <div className="grid md:grid-cols-2 gap-4">
                 <div className="space-y-1">
                   <label className="text-sm text-slate-400">Name</label>
                   <input 
                    type="text" 
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full bg-space-900/80 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:outline-none transition-colors" 
                    placeholder="Commander Shepard" 
                    required 
                  />
                 </div>
                 <div className="space-y-1">
                   <label className="text-sm text-slate-400">Email</label>
                   <input 
                    type="email" 
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full bg-space-900/80 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:outline-none transition-colors" 
                    placeholder="shepard@alliance.nav" 
                    required 
                  />
                 </div>
               </div>
               <div className="space-y-1">
                 <label className="text-sm text-slate-400">Message</label>
                 <textarea 
                  rows={4} 
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full bg-space-900/80 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:outline-none transition-colors" 
                  placeholder="Transmission content..." 
                  required
                ></textarea>
               </div>
               
               <button 
                  type="submit" 
                  disabled={isSubmitting || submitStatus === 'success'}
                  className={`w-full font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 ${
                    submitStatus === 'success' 
                      ? 'bg-green-600 text-white cursor-default' 
                      : submitStatus === 'error'
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gradient-to-r from-neon-cyan to-blue-500 text-space-900 hover:opacity-90'
                  }`}
                >
                 {isSubmitting ? (
                   <>Transmitting... <Loader2 className="animate-spin" size={18} /></>
                 ) : submitStatus === 'success' ? (
                   <>Transmission Received <CheckCircle size={18} /></>
                 ) : submitStatus === 'error' ? (
                   <>Transmission Failed - Try Again <AlertCircle size={18} /></>
                 ) : (
                   <>Send Transmission <Send size={18} /></>
                 )}
               </button>
             </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-space-900/80 border-t border-white/5 py-8 text-center text-slate-500 text-sm relative z-10 backdrop-blur-md">
        <p>&copy; {new Date().getFullYear()} Shreyas Satish Dhumal. All systems nominal.</p>
        <p className="mt-2 text-xs opacity-50">Designed with React & Tailwind</p>
      </footer>
    </div>
  );
};

export default App;