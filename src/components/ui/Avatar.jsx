// src/components/ui/Avatar.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Avatar component with status indicator
 */
export default function Avatar({ src, alt, size = 'md', status = null, showStatus = true }) {
  const [error, setError] = useState(false);
  
  // Generate a placeholder with initials if image fails to load or isn't provided
  const generatePlaceholder = () => {
    const initials = alt
      .split(' ')
      .map(word => word[0])
      .slice(0, 2)
      .join('');
    
    return initials;
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };
  
  // Status badge classes
  const statusClasses = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500',
    dnd: 'bg-red-500',
    group: 'bg-primary-500',
  };
  
  return (
    <div className="relative inline-block">
      {error || !src ? (
        <div 
          className={`${sizeClasses[size]} rounded-full flex items-center justify-center bg-primary-200 text-primary-700 font-medium`}
        >
          {generatePlaceholder()}
        </div>
      ) : (
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={src}
          alt={alt}
          className={`${sizeClasses[size]} rounded-full object-cover border-2 border-light-300 dark:border-dark-100`}
          onError={() => setError(true)}
        />
      )}
      
      {showStatus && status && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${statusClasses[status]} border-2 border-light-200 dark:border-dark-300`}
        />
      )}
    </div>
  );
}