// src/components/Terminal/Terminal.jsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const Terminal = () => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const terminalRef = useRef(null);

  const commands = [
    { cmd: 'whoami', output: 'Zohaib Khan - MERN Stack Developer' },
    { cmd: 'location', output: 'Mardan, KPK, Pakistan' },
    { cmd: 'skills --list', output: 'React, Node.js, MongoDB, Express, TypeScript, Tailwind CSS' },
    { cmd: 'experience', output: '2+ years of web development' },
    { cmd: 'contact', output: 'Email: zohaib@example.com | GitHub: @khan-1291' },
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < commands.length) {
        setLines(prev => [...prev, { type: 'command', text: `$ ${commands[index].cmd}` }]);
        setTimeout(() => {
          setLines(prev => [...prev, { type: 'output', text: commands[index].output }]);
          index++;
        }, 500);
      } else {
        clearInterval(interval);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl mx-auto glass rounded-xl overflow-hidden font-mono text-sm"
    >
      {/* Terminal Header */}
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-slate-400 text-xs">zohaib@portfolio:~</span>
      </div>
      
      {/* Terminal Body */}
      <div ref={terminalRef} className="bg-slate-900 p-4 h-64 overflow-y-auto">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`mb-1 ${line.type === 'command' ? 'text-green-400' : 'text-slate-300'}`}
          >
            {line.text}
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-green-400 align-middle"
        />
      </div>
    </motion.div>
  );
};