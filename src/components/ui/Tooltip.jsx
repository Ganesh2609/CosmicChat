import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Tooltip component that appears on hover
 */
export default function Tooltip({ 
  children, 
  content, 
  position = 'top',
  delay = 0.5,
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  
  // Show tooltip after delay
  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    
    setTimeoutId(id);
  };
  
  // Hide tooltip and clear timeout
  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setIsVisible(false);
  };
  
  // Position classes
  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };
  
  // Arrow positions
  const arrows = {
    top: 'bottom-[-6px] left-1/2 ml-[-6px] border-l-transparent border-r-transparent border-b-transparent',
    bottom: 'top-[-6px] left-1/2 ml-[-6px] border-l-transparent border-r-transparent border-t-transparent',
    left: 'right-[-6px] top-1/2 mt-[-6px] border-t-transparent border-b-transparent border-r-transparent',
    right: 'left-[-6px] top-1/2 mt-[-6px] border-t-transparent border-b-transparent border-l-transparent',
  };
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className={`
              absolute z-50 px-2 py-1 
              text-sm text-white bg-dark-400 dark:bg-dark-100
              rounded shadow-lg whitespace-nowrap
              ${positions[position]}
              ${className}
            `}
          >
            {content}
            <span className={`
              absolute w-0 h-0
              border-solid border-[6px]
              border-dark-400 dark:border-dark-100
              ${arrows[position]}
            `} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}