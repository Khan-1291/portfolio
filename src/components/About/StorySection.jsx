import { motion } from 'framer-motion';
import { MapPin, Calendar, Mail, Download, FileText } from 'lucide-react';

export const StorySection = () => {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Commits', value: '500+' },
  ];

  const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/project2/cv/zohaib-khan-cv.pdf";
  link.download = "Zohaib-Khan-CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const handleViewCV = () => {
    // Open CV in new tab
    window.open('/cv/zohaib-khan-cv.pdf', '_blank');
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-8"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">
            ZK
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Zohaib Khan</h3>
            <p className="text-indigo-500 font-medium">MERN Stack Developer</p>
          </div>
        </div>
        
        <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            I'm a passionate MERN Stack Junior Web Developer based in Mardan, Khyber Pakhtunkhwa, 
            where tradition meets innovation. My journey in web development began with curiosity 
            and has evolved into a deep love for creating digital experiences that matter.
          </p>
          <p>
            I specialize in building full-stack applications using MongoDB, Express.js, React, and Node.js. 
            My approach combines technical expertise with creative vision, ensuring every project is both 
            functionally robust and visually stunning.
          </p>
          <p>
            When I'm not coding, you'll find me exploring the latest design trends, contributing to 
            open-source projects, or enjoying the scenic beauty of Khyber Pakhtunkhwa.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          {[
            { icon: MapPin, text: 'Mardan, KPK, Pakistan' },
            { icon: Calendar, text: '2+ Years Experience' },
            { icon: Mail, text: 'Available for hire' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <item.icon className="w-4 h-4" />
              {item.text}
            </div>
          ))}
        </div>

        {/* CV Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.button>

          <motion.button
            onClick={handleViewCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass font-semibold"
          >
            <FileText className="w-5 h-5" />
            View CV
          </motion.button>
        </div>
      </motion.div>

      {/* Right Content - Stats Grid */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};