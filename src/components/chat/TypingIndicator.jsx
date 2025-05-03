// src/components/chat/TypingIndicator.jsx
import { motion } from 'framer-motion';

/**
 * Typing indicator animation
 */
export default function TypingIndicator() {
  return (
    <div className="flex items-center py-2 px-4 rounded-full bg-light-300 dark:bg-dark-200 w-24 ml-2 mb-4">
      <div className="flex space-x-1.5">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0 }}
          className="w-2 h-2 rounded-full bg-light-500 dark:bg-light-400"
        />
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
          className="w-2 h-2 rounded-full bg-light-500 dark:bg-light-400"
        />
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
          className="w-2 h-2 rounded-full bg-light-500 dark:bg-light-400"
        />
      </div>
    </div>
  );
}