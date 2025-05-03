// src/components/chat/ChatContainer.jsx
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Avatar from '../ui/Avatar';
import ChatBubble from './ChatBubble';
import TypingIndicator from './TypingIndicator';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import { addMessage, getMessagesByContact } from '../../data/sampleMessages';

/**
 * Main chat container component
 */
export default function ChatContainer({ contact }) {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  
  // Load messages for the current contact
  useEffect(() => {
    if (contact) {
      const contactMessages = getMessagesByContact(contact.id);
      setMessages(contactMessages);
    }
  }, [contact]);
  
  // Scroll to bottom on new messages
  useEffect(() => {
    scrollToBottom();
  }, [messages, contact?.isTyping]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Send message handler
  const handleSendMessage = (content) => {
    const newMessage = addMessage(contact.id, content, true);
    setMessages([...messages, newMessage]);
    
    // Simulate response after delay
    if (contact.id !== 5) { // Don't auto-respond in group chats
      setTimeout(() => {
        const responses = [
          "Sounds good! 👍",
          "I see what you mean.",
          "That's interesting, tell me more.",
          "I'll get back to you on that.",
          "Great idea!"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const responseMsg = addMessage(contact.id, randomResponse, false);
        setMessages(prev => [...prev, responseMsg]);
      }, 2000 + Math.random() * 2000); // Random delay between 2-4 seconds
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      {/* Chat header */}
      <ChatHeader contact={contact} />
      
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-light-500 dark:text-light-400">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.div>
            <p className="font-medium">No messages yet</p>
            <p className="text-sm mt-1">Start the conversation!</p>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                message={message}
                isUser={message.isUser}
                showAvatar={!message.isUser}
                avatar={
                  !message.isUser && (
                    <Avatar
                      src={contact.avatar}
                      alt={contact.name}
                      size="sm"
                    />
                  )
                }
                status={message.status}
              />
            ))}
            
            {/* Typing indicator */}
            {contact.isTyping && <TypingIndicator />}
            
            {/* For auto scroll */}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
      
      {/* Input area */}
      <div className="p-4 border-t border-light-400 dark:border-dark-200">
        <ChatInput 
          onSendMessage={handleSendMessage} 
          isTyping={contact.isTyping}
        />
      </div>
    </div>
  );
}