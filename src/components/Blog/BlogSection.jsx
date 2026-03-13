// src/components/Blog/BlogSection.jsx
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable APIs with Node.js and Express',
    excerpt: 'Learn how to structure your Node.js applications for scalability and maintainability.',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Backend',
    image: '/blog/nodejs-api.jpg',
  },
  {
    id: 2,
    title: 'Mastering React Hooks: A Complete Guide',
    excerpt: 'Deep dive into useState, useEffect, and custom hooks with practical examples.',
    date: '2024-03-10',
    readTime: '12 min read',
    category: 'React',
    image: '/blog/react-hooks.jpg',
  },
  {
    id: 3,
    title: 'MongoDB Best Practices for MERN Stack',
    excerpt: 'Optimize your database queries and schema design for better performance.',
    date: '2024-03-05',
    readTime: '10 min read',
    category: 'Database',
    image: '/blog/mongodb.jpg',
  },
];

export const BlogSection = () => {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Sharing my knowledge and experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glass rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-indigo-500/30">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <span className="inline-flex items-center gap-2 text-indigo-500 font-medium text-sm group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};