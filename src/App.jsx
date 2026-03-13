import { motion } from 'framer-motion';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { HeroSection } from './components/Hero/HeroSection';
import { StorySection } from './components/About/StorySection';
import { GitHubStats } from './components/Projects/GitHubStats';
import { ProjectGrid } from './components/Projects/ProjectGrid';
import { SkillCategory } from './components/Skills/SkillCategory';
import { ContactForm } from './components/Contact/ContactForm';
import { CodeShowcase } from './components/CodeShowcase/CodeShowcase';
//import { Terminal } from './components/Terminal/Terminal.jsx';
import { Testimonials } from './components/Testimonials/Testimonials.jsx';
import { ContributionGraph } from './components/GitHub/ContributionGraph.jsx';
import { BlogSection } from './components/Blog/BlogSection.jsx';
//import { ScrollProgress } from './components/ScrollProgress/ScrollProgress.jsx';
import { useGitHub } from './hooks/useGitHub';

function App() {
  const { stats } = useGitHub('khan-1291');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
    
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Terminal Section 
      <section className="py-24 bg-slate-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Interactive <span className="gradient-text">Terminal</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Type commands to learn more about me
            </p>
          </motion.div>
          <Terminal />
        </div>
      </section>*/}

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              My journey from curiosity to code
            </p>
          </motion.div>
          <StorySection />
        </div>
      </section>

      {/* Code Showcase Section */}
      <section className="py-24 bg-slate-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Code <span className="gradient-text">Showcase</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Clean, production-ready code snippets
            </p>
          </motion.div>
        <CodeShowcase />
        </div>
      </section>

      {/* GitHub Contributions Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Coding <span className="gradient-text">Activity</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              My GitHub contribution graph and stats
            </p>
          </motion.div>
          <ContributionGraph/>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Live GitHub repositories with real-time stats
            </p>
          </motion.div>
          <GitHubStats stats={stats} />
          <ProjectGrid />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Technologies I work with daily
            </p>
          </motion.div>
          <SkillCategory />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              What people say about working with me
            </p>
          </motion.div>
          <Testimonials />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlogSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Let&apos;s collaborate on your next project
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;


