// src/components/Projects/ProjectCard.jsx
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Github } from 'lucide-react';

const languageColors = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Python: '#3776AB',
  'C++': '#00599C',
  Java: '#007396',
};

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur" />
      
      <div className="relative glass rounded-2xl p-6 h-full flex flex-col">
        {/* Project Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {project.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-1">
                {project.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                {project.language && (
                  <>
                    <span 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: languageColors[project.language] || '#6366f1' }}
                    />
                    {project.language}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 flex-grow line-clamp-3">
          {project.description || 'No description available'}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            {project.stars}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="w-4 h-4" />
            {project.forks}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
          
          {project.homepage && (
            <motion.a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};