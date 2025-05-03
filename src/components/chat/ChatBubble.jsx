// src/components/chat/ChatBubble.jsx
import { motion } from 'framer-motion';
import { formatMessageTime } from '../../utils/formatTime';

/**
 * Chat bubble component for displaying messages
 */
export default function ChatBubble({ 
  message, 
  isUser = false, 
  showAvatar = true,
  avatar = null,
  status = 'sent', // 'sent', 'delivered', 'read'
}) {
  // Animation variants
  const variants = isUser 
    ? {
        hidden: { x: 20, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
      }
    : {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
      };

  // Status indicators
  const statusIcons = {
    sent: (
      <svg className="w-4 h-4 text-light-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    ),
    delivered: (
      <svg className="w-4 h-4 text-light-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    ),
    read: (
      <svg className="w-4 h-4 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    ),
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} max-w-[85%] items-end gap-2`}>
        {/* Avatar */}
        {showAvatar && avatar && (
          <div className="flex-shrink-0">
            {avatar}
          </div>
        )}
        
        {/* Message content */}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          <div className={`
            ${isUser ? 'chat-bubble-user' : 'chat-bubble-received'}
            relative overflow-hidden group
          `}>
            <p className="whitespace-normal break-words leading-normal">{message.content}</p>
            
            {/* Time tooltip on hover */}
            <div className="
              absolute bottom-1 right-2 opacity-0 group-hover:opacity-100
              text-xs text-white/70 dark:text-white/70 transition-opacity duration-200
            ">
              {formatMessageTime(message.timestamp)}
            </div>
          </div>
          
          {/* Message status (only for user messages) */}
          {isUser && (
            <div className="flex items-center mt-1 text-xs text-light-500 dark:text-light-400">
              <span className="mr-1">{formatMessageTime(message.timestamp)}</span>
              {statusIcons[status]}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}