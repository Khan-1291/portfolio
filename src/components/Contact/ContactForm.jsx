import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {

  const [state, handleSubmit] = useForm("mrbalajd");

  if (state.succeeded) {
    return (
      <p className="text-green-500 text-center">
        Message sent successfully! I'll get back to you soon.
      </p>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="glass rounded-3xl p-8 space-y-6"
    >

      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            name="name"
            required
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
            placeholder="Your name"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="email"
            name="email"
            required
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
            placeholder="your@email.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div className="relative">
        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
        <textarea
          name="message"
          required
          rows={5}
          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none"
          placeholder="Tell me about your project..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <motion.button
        type="submit"
        disabled={state.submitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30"
      >
        {state.submitting ? "Sending..." : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>

    </motion.form>
  );
};