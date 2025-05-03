// src/components/layout/Sidebar.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar from '../ui/Avatar';
import ThemeToggle from '../ui/ThemeToggle';
import { formatLastSeen } from '../../utils/formatTime';
import { contacts } from '../../data/sampleMessages';
import Badge from '../ui/Badge';

/**
 * Sidebar component with contact list
 */
export default function Sidebar({ onSelectContact, activeContactId }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter contacts based on search query
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="h-full flex flex-col border-r border-light-400 dark:border-dark-200">
      {/* Header with search and user */}
      <div className="p-4 border-b border-light-400 dark:border-dark-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-primary-500">Cosmic Chat</h1>
          <ThemeToggle />
        </div>
        
        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            className="input-field pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light-500 dark:text-light-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      {/* Contacts list */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          <h2 className="px-2 py-1 text-xs font-semibold text-light-500 dark:text-light-400 uppercase tracking-wider">
            Messages
          </h2>
          
          <AnimatePresence>
            {filteredContacts.length > 0 ? (
              <ul>
                {filteredContacts.map((contact) => (
                  <motion.li
                    key={contact.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      className={`
                        w-full flex items-center px-2 py-3 rounded-xl 
                        transition-colors duration-200 
                        ${activeContactId === contact.id 
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500' 
                          : 'hover:bg-light-300 dark:hover:bg-dark-200'
                        }
                      `}
                      onClick={() => onSelectContact(contact)}
                    >
                      <Badge
                        variant="primary"
                        dot={true}
                        className={contact.status === 'online' ? 'opacity-100' : 'opacity-0'}
                      >
                        <Avatar
                          src={contact.avatar}
                          alt={contact.name}
                          status={contact.status}
                          size="md"
                        />
                      </Badge>
                      
                      <div className="ml-3 text-left flex-1 min-w-0">
                        <h3 className="font-medium truncate">{contact.name}</h3>
                        <p className="text-xs text-light-500 dark:text-light-400 truncate">
                          {contact.isTyping ? (
                            <span className="text-primary-500 font-medium">Typing...</span>
                          ) : (
                            contact.status === 'offline' && formatLastSeen(contact.lastSeen)
                          )}
                        </p>
                      </div>
                      
                      {contact.id === 1 && (
                        <div className="flex flex-col items-end ml-1">
                          <span className="text-xs text-light-500 dark:text-light-400">2m</span>
                          <Badge count={3} size="sm" variant="primary" />
                        </div>
                      )}
                    </button>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <div className="py-8 text-center text-light-500 dark:text-light-400">
                <p>No contacts found</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* User profile */}
      <div className="p-4 border-t border-light-400 dark:border-dark-200 flex items-center">
        <Avatar
          src="/avatars/user-profile.png"
          alt="Your Name"
          size="md"
          status="online"
        />
        <div className="ml-3">
          <h3 className="font-medium">Your Name</h3>
          <p className="text-xs text-primary-500">Active</p>
        </div>
        <button className="ml-auto p-2 rounded-full hover:bg-light-300 dark:hover:bg-dark-200 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}