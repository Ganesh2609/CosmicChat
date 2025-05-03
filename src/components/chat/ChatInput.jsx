// src/components/chat/ChatInput.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IconButton from '../ui/IconButton';

/**
 * Chat input component with emoji picker and attachments
 */
export default function ChatInput({ onSendMessage, isTyping = false }) {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  
  // Send message handler
  // Inside ChatInput.jsx, in the handleSendMessage function
  const handleSendMessage = () => {
    if (message.trim()) {
      // Clean up the message by normalizing whitespace
      const cleanMessage = message.trim().replace(/\s+/g, ' ');
      onSendMessage(cleanMessage);
      setMessage('');
    }
  };
  
  // Handle keypress (Enter to send)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Basic emoji list (expanded in real app)
  const emojis = ['😊', '👍', '❤️', '🎉', '🔥', '😂', '🤔', '👋', '🙏', '✨'];
  
  return (
    <div className="relative mt-2">
      {/* Emoji picker */}
      <AnimatePresence>
        {showEmojiPicker && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full mb-2 p-2 bg-white dark:bg-dark-200 rounded-xl shadow-lg flex flex-wrap gap-2 max-w-full border border-light-400 dark:border-dark-100"
          >
            {emojis.map((emoji, index) => (
              <button
                key={index}
                className="text-xl p-1.5 hover:bg-light-300 dark:hover:bg-dark-100 rounded-lg transition-colors"
                onClick={() => {
                  setMessage((prev) => prev + emoji);
                  setShowEmojiPicker(false);
                }}
              >
                {emoji}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Input area */}
      <div className="flex items-end gap-2">
        {/* Attachment button */}
        <IconButton
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          }
          variant="ghost"
          ariaLabel="Add attachment"
        />
        
        {/* Emoji button */}
        <IconButton
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          variant="ghost"
          ariaLabel="Add emoji"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        />
        
        {/* Text input */}
        <div className="relative flex-1">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="input-field min-h-[3rem] max-h-32 py-2.5 pr-12 resize-none"
            placeholder="Type a message..."
            rows={1}
          />
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="absolute left-4 top-0 mt-1 text-xs text-primary-500 font-medium">
              Someone is typing...
            </div>
          )}
        </div>
        
        {/* Send button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleSendMessage}
          disabled={!message.trim()}
          className={`
            p-3 rounded-xl bg-primary-500 text-white 
            ${!message.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-600 shadow-md hover:shadow-lg'} 
            transition-all
          `}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}