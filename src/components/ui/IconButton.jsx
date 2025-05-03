import { motion } from 'framer-motion';

/**
 * Icon Button component with hover animation
 */
export default function IconButton({ 
  icon, 
  onClick, 
  ariaLabel, 
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '', 
  ...props 
}) {
  // Variants
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white',
    secondary: 'bg-light-300 hover:bg-light-400 text-dark-300 dark:bg-dark-200 dark:hover:bg-dark-100 dark:text-light-200',
    ghost: 'bg-transparent hover:bg-light-300/50 dark:hover:bg-dark-200/50 text-dark-300 dark:text-light-200',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  };
  
  // Sizes
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };
  
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        rounded-full flex items-center justify-center transition-colors
        ${className}
      `}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      {...props}
    >
      {icon}
    </motion.button>
  );
}