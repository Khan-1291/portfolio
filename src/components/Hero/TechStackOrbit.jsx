// src/components/Hero/TechStackOrbit.jsx
import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', color: '#61DAFB', orbit: 1 },
  { name: 'Node.js', color: '#339933', orbit: 1 },
  { name: 'MongoDB', color: '#47A248', orbit: 1 },
  { name: 'Express', color: '#000000', orbit: 1 },
  { name: 'JavaScript', color: '#F7DF1E', orbit: 2 },
  { name: 'TypeScript', color: '#3178C6', orbit: 2 },
  { name: 'Tailwind', color: '#06B6D4', orbit: 2 },
  { name: 'Firebase', color: '#FFCA28', orbit: 2 },
  { name: 'Git', color: '#F05032', orbit: 3 },
  { name: 'GitHub', color: '#181717', orbit: 3 },
];

export const TechStackOrbit = () => {
  return (
    <div className="relative w-[500px] h-[500px] mx-auto">
      {/* Central Element */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/50 z-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="text-white font-bold text-lg">MERN</span>
      </motion.div>

      {/* Orbit Rings */}
      {[150, 220, 290].map((radius, index) => (
        <div
          key={radius}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300/20 dark:border-slate-600/20"
          style={{ width: radius * 2, height: radius * 2 }}
        />
      ))}

      {/* Orbiting Technologies */}
      {technologies.map((tech, index) => {
        const orbitRadius = tech.orbit === 1 ? 150 : tech.orbit === 2 ? 220 : 290;
        const duration = 20 + tech.orbit * 5;
        const delay = (index * 360) / technologies.filter(t => t.orbit === tech.orbit).length;

        return (
          <motion.div
            key={tech.name}
            className="absolute top-1/2 left-1/2"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              delay: -delay / 10,
            }}
            style={{
              width: orbitRadius * 2,
              height: orbitRadius * 2,
              marginLeft: -orbitRadius,
              marginTop: -orbitRadius,
            }}
          >
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: -360 }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
                delay: -delay / 10,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl glass flex items-center justify-center shadow-lg cursor-pointer group"
                style={{ borderColor: tech.color }}
              >
                <span 
                  className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 whitespace-nowrap bg-slate-800 text-white px-2 py-1 rounded"
                >
                  {tech.name}
                </span>
                <div 
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: tech.color }}
                />
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};