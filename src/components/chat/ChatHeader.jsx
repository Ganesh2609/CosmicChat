import Avatar from '../ui/Avatar';
import { formatLastSeen } from '../../utils/formatTime';
import IconButton from '../ui/IconButton';

/**
 * Chat header with contact info and actions
 */
export default function ChatHeader({ contact }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-light-400 dark:border-dark-200">
      {/* Contact info */}
      <div className="flex items-center">
        <Avatar
          src={contact.avatar}
          alt={contact.name}
          status={contact.status}
          size="md"
        />
        <div className="ml-3">
          <h2 className="font-semibold">{contact.name}</h2>
          <p className="text-xs text-light-500 dark:text-light-400">
            {contact.status === 'online' 
              ? 'Online' 
              : formatLastSeen(contact.lastSeen)
            }
          </p>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="flex items-center gap-2">
        {/* Video call button */}
        <IconButton
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          }
          variant="ghost"
          ariaLabel="Video call"
        />
        
        {/* Voice call button */}
        <IconButton
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          }
          variant="ghost"
          ariaLabel="Voice call"
        />
        
        {/* Settings button */}
        <IconButton
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          }
          variant="ghost"
          ariaLabel="More options"
        />
      </div>
    </div>
  );
}