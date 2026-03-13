// src/components/GitHub/ContributionGraph.jsx
import { motion } from 'framer-motion';

export const ContributionGraph = () => {
  // Generate mock contribution data (replace with real GitHub API)
  const weeks = Array.from({ length: 52 }, (_, weekIndex) => 
    Array.from({ length: 7 }, (_, dayIndex) => ({
      date: new Date(Date.now() - (52 - weekIndex) * 7 * 24 * 60 * 60 * 1000 + dayIndex * 24 * 60 * 60 * 1000),
      count: Math.floor(Math.random() * 5), // 0-4 contributions
    }))
  );

  const getColor = (count) => {
    if (count === 0) return 'bg-slate-800';
    if (count === 1) return 'bg-emerald-900';
    if (count === 2) return 'bg-emerald-700';
    if (count === 3) return 'bg-emerald-500';
    return 'bg-emerald-400';
  };

  return (
    <div className="glass rounded-2xl p-6 overflow-x-auto">
      <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">
        GitHub Contributions
      </h3>
      <div className="flex gap-1 min-w-max">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((day, dayIndex) => (
              <motion.div
                key={dayIndex}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                className={`w-3 h-3 rounded-sm ${getColor(day.count)} hover:ring-2 ring-emerald-400 cursor-pointer`}
                title={`${day.count} contributions on ${day.date.toDateString()}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-4 text-xs text-slate-500">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map(level => (
          <div key={level} className={`w-3 h-3 rounded-sm ${getColor(level)}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};