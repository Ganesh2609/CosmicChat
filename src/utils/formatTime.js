import { format, isToday, isYesterday, formatDistanceToNow } from 'date-fns';

/**
 * Format message timestamp in a user-friendly way
 * - Today: "HH:MM AM/PM"
 * - Yesterday: "Yesterday at HH:MM AM/PM"
 * - This week: "Day at HH:MM AM/PM"
 * - Older: "MM/DD/YYYY at HH:MM AM/PM"
 */
export const formatMessageTime = (timestamp) => {
  const date = new Date(timestamp);
  
  if (isToday(date)) {
    return format(date, 'h:mm a');
  } else if (isYesterday(date)) {
    return `Yesterday at ${format(date, 'h:mm a')}`;
  } else if (date > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) {
    return format(date, 'EEEE') + ` at ${format(date, 'h:mm a')}`;
  } else {
    return format(date, 'MM/dd/yyyy') + ` at ${format(date, 'h:mm a')}`;
  }
};

/**
 * Format last seen time in a user-friendly way
 * - Just now: "Active now"
 * - Within 1 hour: "Active X minutes ago"
 * - Today: "Last seen today at HH:MM AM/PM"
 * - Yesterday: "Last seen yesterday at HH:MM AM/PM"
 * - This week: "Last seen on Day at HH:MM AM/PM"
 * - Older: "Last seen on MM/DD/YYYY"
 */
export const formatLastSeen = (timestamp) => {
  // Check if timestamp is valid before proceeding
  if (!timestamp || !(timestamp instanceof Date) || isNaN(timestamp.getTime())) {
    return ''; // Return empty string or some default text for invalid dates
  }
  
  const date = new Date(timestamp);
  
  // Rest of your function remains the same...
}