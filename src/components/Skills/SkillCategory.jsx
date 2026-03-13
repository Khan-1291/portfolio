// src/components/Skills/SkillCategory.jsx
import { motion } from 'framer-motion';

const skillCategories = {
  Frontend: [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'HTML5/CSS3', level: 95 },
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'REST APIs', level: 85 },
    { name: 'GraphQL', level: 60 },
  ],
  Database: [
    { name: 'MongoDB', level: 80 },
    { name: 'Firebase', level: 85 },
    { name: 'Mongoose', level: 80 },
  ],
  Tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'Postman', level: 80 },
    { name: 'Figma', level: 70 },
  ],
};

export const SkillCategory = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {Object.entries(skillCategories).map(([category, skills], catIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: catIndex * 0.1 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            {category}
          </h3>
          
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {skill.name}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};