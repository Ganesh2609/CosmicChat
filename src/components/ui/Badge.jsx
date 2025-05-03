export default function Badge({ 
    children, 
    count = null, 
    variant = 'primary', 
    size = 'md',
    dot = false,
    className = '' 
  }) {
    // Variants
    const variants = {
      primary: 'bg-primary-500 text-white',
      secondary: 'bg-light-400 text-dark-400 dark:bg-dark-100 dark:text-light-200',
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-white',
      danger: 'bg-red-500 text-white',
    };
    
    // Sizes
    const sizes = {
      sm: dot ? 'w-2 h-2' : 'min-w-[1.25rem] h-5 text-xs px-1',
      md: dot ? 'w-3 h-3' : 'min-w-[1.5rem] h-6 text-sm px-1.5',
      lg: dot ? 'w-4 h-4' : 'min-w-[1.75rem] h-7 text-base px-2',
    };
    
    return (
      <div className="relative inline-flex">
        {children}
        
        <div className={`
          absolute -top-2 -right-2 rounded-full
          ${variants[variant]} 
          ${sizes[size]}
          ${dot ? '' : 'flex items-center justify-center'}
          ${className}
        `}>
          {!dot && count !== null && count}
        </div>
      </div>
    );
  }