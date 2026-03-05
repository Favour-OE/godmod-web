import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

export const StarIcon: React.FC<IconProps> = ({ className, color = '#C9A84C' }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 3L13.4302 8.31181C13.6047 8.96 13.692 9.28409 13.8642 9.54905C14.0166 9.78349 14.2165 9.98336 14.451 10.1358C14.7159 10.308 15.04 10.3953 15.6882 10.5698L21 12L15.6882 13.4302C15.04 13.6047 14.7159 13.692 14.451 13.8642C14.2165 14.0166 14.0166 14.2165 13.8642 14.451C13.692 14.7159 13.6047 15.04 13.4302 15.6882L12 21L10.5698 15.6882C10.3953 15.04 10.308 14.7159 10.1358 14.451C9.98336 14.2165 9.78349 14.0166 9.54905 13.8642C9.28409 13.692 8.96 13.6047 8.31181 13.4302L3 12L8.31181 10.5698C8.96 10.3953 9.28409 10.308 9.54905 10.1358C9.78349 9.98336 9.98336 9.78349 10.1358 9.54905C10.308 9.28409 10.3953 8.96 10.5698 8.31181L12 3Z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const FireIcon: React.FC<IconProps> = ({ className, color = '#C9A84C' }) => (
  <svg 
    className={className}
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M16 2C12.5 7.5 11 14 13 18C10 14 9 10 9 6C5 10 6 17 10 21C9 17 10 13 12 10C10 13 11 17 14 20C13 17 15 13 16 10C17 13 19 17 18 20C21 17 22 13 20 10C22 13 23 17 21 21C25 17 26 10 22 6C22 10 21 14 18 18C20 14 18.5 7.5 16 2Z"
      fill={color}
    />
  </svg>
);

export const PeopleIcon: React.FC<IconProps> = ({ className, color = '#C9A84C' }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const BibleIcon: React.FC<IconProps> = ({ className, color = '#C9A84C' }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M6.5 2H20V22H6.5C5.11929 22 4 20.8807 4 19.5V4.5C4 3.11929 5.11929 2 6.5 2Z" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M8 7H16" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M8 11H14" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M8 15H12" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const PodcastIcon: React.FC<IconProps> = ({ className, color = '#C9A84C' }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10V13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13V10Z" 
      stroke={color} 
      strokeWidth="1.5"
    />
    <path 
      d="M13 10L15 10" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M13 13L15 13" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M9 10L10 10" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M9 13L10 13" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M4.15381 16C5.17341 16 5.99996 15.1734 5.99996 14.1538V9.99998C5.99996 6.68628 8.68624 4 11.9999 4C15.3136 4 17.9999 6.68628 17.9999 9.99998V14.1538C17.9999 15.1734 18.8265 16 19.8461 16" 
      stroke={color} 
      strokeWidth="1.5"
    />
    <path 
      d="M2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12V14C6 15.1046 5.10457 16 4 16C2.89543 16 2 15.1046 2 14V12Z" 
      stroke={color} 
      strokeWidth="1.5"
    />
    <path 
      d="M18 12C18 10.8954 18.8954 10 20 10C21.1046 10 22 10.8954 22 12V14C22 15.1046 21.1046 16 20 16C18.8954 16 18 15.1046 18 14V12Z" 
      stroke={color} 
      strokeWidth="1.5"
    />
    <path 
      d="M12 16V19" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

export const TestimonyIcon: React.FC<IconProps> = ({ className, color = '#C9A84C' }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M8 9H16" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M8 12.5H13.5" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M2 20C2 18.8954 2.89543 18 4 18H8C9.10457 18 10 18.8954 10 20V21C10 22.1046 9.10457 23 8 23H4C2.89543 23 2 22.1046 2 21V20Z" 
      stroke={color} 
      strokeWidth="1.5"
    />
    <path 
      d="M14 20C14 18.8954 14.8954 18 16 18H20C21.1046 18 22 18.8954 22 20V21C22 22.1046 21.1046 23 20 23H16C14.8954 23 14 22.1046 14 21V20Z" 
      stroke={color} 
      strokeWidth="1.5"
    />
    <path 
      d="M12 2V8" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M8 4L12 2L16 4" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const ReelsIcon: React.FC<IconProps> = ({ className, color = '#C9A84C' }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M15 10L18 12L15 14V10Z" 
      fill={color}
    />
    <path 
      d="M2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H5C3.34315 5 2 6.34315 2 8Z" 
      stroke={color} 
      strokeWidth="1.5"
    />
    <circle 
      cx="8" 
      cy="12" 
      r="1.5" 
      fill={color}
    />
  </svg>
);

export const ShoutIcon: React.FC<IconProps> = ({ className, color = '#C9A84C' }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M11 5L6 9H2V15H6L11 19V5Z" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M23 9L19 5V19L23 15V9Z" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M16 9L19 12L16 15V9Z" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const CultureIcon: React.FC<IconProps> = ({ className, color = '#C9A84C' }) => (
  <svg 
    className={className}
    viewBox="0 0 50.8 50.8" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M-30.774 9.717a3.88 3.88 0 0 1-3.88 3.88 3.88 3.88 0 0 1-3.879-3.88 3.88 3.88 0 0 1 3.88-3.88 3.88 3.88 0 0 1 3.879 3.88zm2.642 11.123c-6.987-7.02-18.925 4.03-10.172 11.413l13.09 12.713 4.791-4.653m-3.935-15.86c2.142-7.487 13.331-7.019 14.803.599.429 2.106-.187 4.601-1.633 6.135-1.954 1.872-3.881 3.77-5.835 5.642l-6.05-5.902c-2.462-3.171-1.285-5.85-1.285-6.473zm4.332-14.732a3.88 3.88 0 0 0 3.88 3.88 3.88 3.88 0 0 0 3.879-3.88 3.88 3.88 0 0 0-3.88-3.88 3.88 3.88 0 0 0-3.879 3.88z" 
      stroke={color} 
      strokeWidth="3.175" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      transform="scale(-1 1)"
    />
  </svg>
);

export const CrossIcon: React.FC<IconProps> = ({ className, color = '#C9A84C' }) => (
  <svg 
    className={className}
    viewBox="0 0 512 512" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M446.503,141.994H320.017V0H192.015v141.994H49.497v128.01h142.518V512h128.002V269.996l142.486,0.008v-128.01H446.503z M430.503,237.996H288.017V480h-64.001V237.996H81.497v-64.001h142.518V31.992h64.001v142.002h142.486V237.996z" 
      fill={color}
    />
  </svg>
);
