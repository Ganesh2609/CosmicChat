import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import ChatContainer from '../chat/ChatContainer';

/**
 * Main layout component with responsive sidebar and chat area
 */
export default function MainLayout() {
  const [activeContact, setActiveContact] = useState(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  // Select contact handler
  const handleSelectContact = (contact) => {
    setActiveContact(contact);
    setIsMobileSidebarOpen(false);
  };
  
  return (
    <div className="flex h-screen bg-light-200 dark:bg-dark-300 text-dark-400 dark:text-light-200">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden absolute top-4 left-4 z-30">
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-2 rounded-lg bg-light-300 dark:bg-dark-200 shadow-md"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMobileSidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Sidebar - desktop & mobile */}
      <div className={`
        lg:w-80 bg-light-100 dark:bg-dark-400 z-20
        ${isMobileSidebarOpen ? 'w-full absolute inset-0' : 'hidden lg:block'}
      `}>
        <Sidebar 
          onSelectContact={handleSelectContact} 
          activeContactId={activeContact?.id}
        />
      </div>
      
      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {activeContact ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full"
          >
            <ChatContainer contact={activeContact} />
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center px-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-md"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
                <svg 
                  className="w-12 h-12 text-primary-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Welcome to Cosmic Chat</h2>
              <p className="text-light-500 dark:text-light-400 mb-6">
                Select a conversation from the sidebar to start chatting.
              </p>
              <p className="text-sm text-light-500 dark:text-light-400">
                <span role="img" aria-label="sparkles">✨</span> Featuring modern design, animations, and dark mode.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}