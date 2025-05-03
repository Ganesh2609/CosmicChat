export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };
  
  export const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { y: 20, opacity: 0, transition: { duration: 0.2 } }
  };
  
  export const slideInRight = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { x: 20, opacity: 0, transition: { duration: 0.2 } }
  };
  
  export const slideInLeft = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { x: -20, opacity: 0, transition: { duration: 0.2 } }
  };
  
  export const scale = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { scale: 0.9, opacity: 0, transition: { duration: 0.2 } }
  };
  
  export const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.4,
        type: 'spring',
        stiffness: 260,
        damping: 20
      } 
    },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.2 } }
  };
  