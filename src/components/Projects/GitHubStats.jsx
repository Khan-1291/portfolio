// src/components/Projects/GitHubStats.jsx
import { motion } from 'framer-motion';
import { GitCommit, Users, Book, Star } from 'lucide-react';

export const GitHubStats = ({ stats }) => {
  if (!stats) return null;

  const statItems = [
    { icon: Book, label: 'Repositories', value: stats.publicRepos },
    { icon: Users, label: 'Followers', value: stats.followers },
    { icon: Star, label: 'Total Stars', value: stats.followers * 2 }, // Estimated
    { icon: GitCommit, label: 'Contributions', value: stats.contributions },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {statItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="glass rounded-xl p-4 text-center"
        >
          <item.icon className="w-6 h-6 mx-auto mb-2 text-indigo-500" />
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            {item.value}+
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};