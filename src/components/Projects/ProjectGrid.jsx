// src/components/Projects/ProjectGrid.jsx
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { FeaturedProjectCard } from './FeaturedPorjectsCard.jsx';
import { useGitHub } from '../../hooks/useGitHub.js';
import { featuredProjects } from '../../data/projects.js';

export const ProjectGrid = () => {
  const { repos, loading } = useGitHub('khan-1291');

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center"
          >
            Featured Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      )}

      {/* GitHub Repos Section */}
      {repos.length > 0 && (
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center"
          >
            More from GitHub
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};