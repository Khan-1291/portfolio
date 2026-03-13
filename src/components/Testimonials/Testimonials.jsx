import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Khan',
    role: 'Project Manager',
    company: 'Tech Solutions',
    image: 'https://i.pravatar.cc/150?img=11',
    content: 'Zohaib delivered exceptional work on our e-commerce platform. His attention to detail and problem-solving skills are outstanding. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Ali',
    role: 'Startup Founder',
    company: 'InnovateLab',
    image: 'https://i.pravatar.cc/150?img=5',
    content: 'Working with Zohaib was a great experience. He understood our requirements perfectly and delivered a beautiful, functional website ahead of schedule.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Muhammad Usman',
    role: 'Senior Developer',
    company: 'DevStudio',
    image: 'https://i.pravatar.cc/150?img=3',
    content: 'Zohaib has a bright future in web development. His code is clean, well-documented, and he follows best practices. A valuable team member!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Fatima Zahra',
    role: 'UI/UX Designer',
    company: 'DesignCraft',
    image: 'https://i.pravatar.cc/150?img=9',
    content: 'Collaborating with Zohaib was seamless. He translates designs into pixel-perfect implementations and suggests improvements that enhance user experience.',
    rating: 5,
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Quote Icon */}
        <Quote className="absolute -top-6 -left-6 w-16 h-16 text-indigo-500/20" />

        <div className="glass rounded-3xl p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full border-4 border-indigo-500/20 mb-4"
                />
                <h4 className="font-bold text-slate-900 dark:text-white">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {testimonials[current].role} at {testimonials[current].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-3 rounded-full glass hover:bg-indigo-500/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? 'w-8 bg-indigo-500'
                      : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-3 rounded-full glass hover:bg-indigo-500/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
