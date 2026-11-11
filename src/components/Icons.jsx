import React from 'react'

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Icon({ name, ...rest }) {
  const common = { viewBox: '0 0 24 24', ...base, ...rest }
  switch (name) {
    case 'briefcase':
      return (<svg {...common}><rect x="3" y="7" width="18" height="13" rx="2.5" /><path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7M3 12h18" /></svg>)
    case 'rocket':
      return (<svg {...common}><path d="M5 15c-1.5 1.5-2 6-2 6s4.5-.5 6-2" /><path d="M9 14.5C9 8 13 3.5 20 3.5c0 7-4.5 11-11 11" /><path d="M9 14.5 5 10.5C8 8 11 7 14 7M9.5 15l4 4c2.5-3 3.5-6 3.5-9" /><circle cx="15" cy="9" r="1.4" /></svg>)
    case 'cube':
      return (<svg {...common}><path d="M12 2.5 21 7v10l-9 4.5L3 17V7l9-4.5Z" /><path d="M3 7l9 4.5L21 7M12 11.5V21" /></svg>)
    case 'layers':
      return (<svg {...common}><path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="M3 13l9 5 9-5M3 17.5 12 22l9-4.5" /></svg>)
    case 'sparkle':
      return (<svg {...common}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="M19 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" /></svg>)
    case 'gem':
      return (<svg {...common}><path d="M6 3h12l3 6-9 12L3 9l3-6Z" /><path d="M3 9h18M9 3l-3 6 6 12 6-12-3-6M12 3v6" /></svg>)
    case 'phone':
      return (<svg {...common}><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M10.5 5.5h3M12 18.5h.01" /></svg>)
    case 'chat':
      return (<svg {...common}><path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.9 8.9 0 0 1-3.9-.9L3 21l1.9-5.6A8.4 8.4 0 0 1 4 11.5 8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5Z" /><path d="M8.5 11.5h.01M12.5 11.5h.01M16.5 11.5h.01" /></svg>)
    case 'sliders':
      return (<svg {...common}><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" /><circle cx="16" cy="6" r="2" /><circle cx="10" cy="12" r="2" /><circle cx="18" cy="18" r="2" /></svg>)
    case 'check':
      return (<svg {...common} strokeWidth={2.4}><path d="M4 12.5 9.5 18 20 6.5" /></svg>)
    case 'arrow-right':
      return (<svg {...common} strokeWidth={2}><path d="M5 12h14M13 6l6 6-6 6" /></svg>)
    case 'external':
      return (<svg {...common} strokeWidth={2}><path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" /></svg>)
    case 'play':
      return (<svg viewBox="0 0 24 24" fill="currentColor" {...rest}><path d="M8 5.5v13l11-6.5L8 5.5Z" /></svg>)
    case 'pause':
      return (<svg viewBox="0 0 24 24" fill="currentColor" {...rest}><rect x="7" y="5" width="3.5" height="14" rx="1.2" /><rect x="13.5" y="5" width="3.5" height="14" rx="1.2" /></svg>)
    case 'volume':
      return (<svg {...common}><path d="M4 9v6h3l5 4V5L7 9H4Z" /><path d="M16 9.5a3.5 3.5 0 0 1 0 5M18.5 7a7 7 0 0 1 0 10" /></svg>)
    case 'mute':
      return (<svg {...common}><path d="M4 9v6h3l5 4V5L7 9H4Z" /><path d="M16 10l5 4M21 10l-5 4" /></svg>)
    case 'menu':
      return (<svg {...common} strokeWidth={2}><path d="M4 7h16M4 12h16M4 17h16" /></svg>)
    case 'close':
      return (<svg {...common} strokeWidth={2}><path d="M6 6l12 12M18 6 6 18" /></svg>)
    case 'upload':
      return (<svg {...common}><path d="M12 16V4M7 9l5-5 5 5M5 20h14" /></svg>)
    case 'trash':
      return (<svg {...common}><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" /></svg>)
    case 'film':
      return (<svg {...common}><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18M3 15h18M8 4v16M16 4v16" /></svg>)
    case 'mail':
      return (<svg {...common}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></svg>)
    default:
      return null
  }
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.05 8.05 0 0 1 2.37 5.73c0 4.47-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.11.82.83-3.04-.2-.31a8.05 8.05 0 0 1-1.24-4.3c0-4.47 3.63-8.1 8.1-8.1Zm-2.4 3.86c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26 0 1.34.98 2.63 1.11 2.81.14.18 1.9 2.98 4.63 4.06 2.27.9 2.73.72 3.22.68.49-.05 1.58-.65 1.8-1.27.22-.63.22-1.16.16-1.27-.07-.11-.25-.18-.53-.32-.28-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.28-.14-1.16-.43-2.21-1.36-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.42.12-.56.12-.12.28-.31.42-.47.14-.16.18-.27.28-.45.09-.18.05-.34-.02-.48-.07-.14-.6-1.45-.83-1.98-.22-.53-.44-.46-.6-.46-.15 0-.33-.02-.5-.02Z" />
    </svg>
  )
}
