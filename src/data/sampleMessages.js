export const contacts = [
    {
      id: 1,
      name: 'Alex Morgan',
      avatar: '/avatars/user-1.png',
      status: 'online',
      lastSeen: new Date(),
      isTyping: false,
    },
    {
      id: 2,
      name: 'Taylor Swift',
      avatar: '/avatars/user-2.png',
      status: 'online',
      lastSeen: new Date(),
      isTyping: true,
    },
    {
      id: 3,
      name: 'Jamie Chen',
      avatar: '/avatars/user-3.png',
      status: 'offline',
      lastSeen: new Date(Date.now() - 25 * 60 * 1000), // 25 minutes ago
      isTyping: false,
    },
    {
      id: 4,
      name: 'Sam Wilson',
      avatar: '/avatars/user-4.png',
      status: 'offline',
      lastSeen: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      isTyping: false,
    },
    {
      id: 5,
      name: 'Nova Team',
      avatar: '/avatars/group-1.png',
      status: 'group',
      members: ['Alex', 'Jamie', 'Sam', 'You'],
      isTyping: false,
    },
  ];
  
  export const sampleMessages = [
    {
      id: 'm1',
      contactId: 1,
      content: 'Hey there! Have you checked out the new design system?',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      isUser: false,
      status: 'read',
    },
    {
      id: 'm2',
      contactId: 1,
      content: 'Yes, it looks amazing! I especially love the new color palette and the micro-interactions.',
      timestamp: new Date(Date.now() - 1.8 * 60 * 60 * 1000),
      isUser: true,
      status: 'read',
    },
    {
      id: 'm3',
      contactId: 1,
      content: 'The animations are super smooth too. Did you implement them with Framer Motion?',
      timestamp: new Date(Date.now() - 1.7 * 60 * 60 * 1000),
      isUser: false,
      status: 'read',
    },
    {
      id: 'm4',
      contactId: 1,
      content: 'Yep! Framer Motion makes it so easy to add polish to the UI. I\'m thinking about adding some page transitions next.',
      timestamp: new Date(Date.now() - 1.6 * 60 * 60 * 1000),
      isUser: true,
      status: 'read',
    },
    {
      id: 'm5',
      contactId: 1,
      content: 'That would be awesome! Let me know if you need any help with that.',
      timestamp: new Date(Date.now() - 20 * 60 * 1000),
      isUser: false,
      status: 'read',
    },
    {
      id: 'm6',
      contactId: 1,
      content: 'I certainly will. Are you free for a quick call tomorrow to discuss the navigation flow?',
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      isUser: true,
      status: 'delivered',
    },
    {
      id: 'm7',
      contactId: 1,
      content: 'Absolutely! How about 2 PM?',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      isUser: false,
      status: 'read',
    },
    {
      id: 'm8',
      contactId: 2,
      content: 'Hey! Are we still meeting for coffee later?',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      isUser: false,
      status: 'read',
    },
    {
      id: 'm9',
      contactId: 2,
      content: 'Yes, definitely! Looking forward to it. ☕',
      timestamp: new Date(Date.now() - 3.9 * 60 * 60 * 1000),
      isUser: true,
      status: 'read',
    },
    {
      id: 'm10',
      contactId: 3,
      content: 'I just sent you the latest report. Can you take a look when you get a chance?',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      isUser: false,
      status: 'read',
    },
  ];
  
  // Get messages for a specific contact
  export const getMessagesByContact = (contactId) => {
    return sampleMessages.filter(message => message.contactId === contactId);
  };
  
  // Get a contact by ID
  export const getContactById = (contactId) => {
    return contacts.find(contact => contact.id === contactId);
  };
  
  // Add a new message (simulated)
  export const addMessage = (contactId, content, isUser = true) => {
    const newMessage = {
      id: `m${sampleMessages.length + 1}`,
      contactId,
      content,
      timestamp: new Date(),
      isUser,
      status: 'sent',
    };
    
    sampleMessages.push(newMessage);
    return newMessage;
  };