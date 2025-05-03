import { motion } from 'framer-motion';

/**
 * Reusable Button component with animations
 */
export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = null, 
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  className = '',
  onClick,
  ...props 
}) {
  // Button variants
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn border border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20',
    ghost: 'btn bg-transparent hover:bg-light-300/50 dark:hover:bg-dark-200/50 text-dark-300 dark:text-light-200',
    danger: 'btn bg-red-500 hover:bg-red-600 text-white',
  };
  
  // Button sizes
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        flex items-center justify-center gap-2
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </motion.button>
  );
}