import React from 'react';
import styles from './HeroReel.module.css';

// Default icons (use public CDN SVGs). Feel free to replace with your own assets.
const DEFAULT_ICONS = [
  {
    name: 'Instagram',
    url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg',
    link: 'https://instagram.com/yourprofile',
  },
  {
    name: 'Twitter',
    url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg',
    link: 'https://twitter.com/yourprofile',
  },
  {
    name: 'LinkedIn',
    url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',
    link: 'https://linkedin.com/in/yourprofile',
  },
  {
    name: 'Facebook',
    url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg',
    link: 'https://facebook.com/yourpage',
  },
  {
    name: 'YouTube',
    url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg',
    link: 'https://youtube.com/yourchannel',
  },
];

/**
 * HeroReel component renders a central stage with social media icons revolving around it.
 * Props:
 *  - icons: array of {name, url, link} objects. If omitted, defaults are used.
 *  - rotationSpeed: CSS variable value for animation duration (e.g., '20s').
 *  - bgColor: optional background gradient string.
 */
export default function HeroReel({ icons = DEFAULT_ICONS, rotationSpeed = '20s', bgColor }) {
  const containerStyle = bgColor ? { background: bgColor } : {};
  return (
    <div className={styles.container} style={containerStyle}>
      <div className={styles.stage} />
      {icons.map((icon) => (
        <a
          key={icon.name}
          href={icon.link}
          className={styles.icon}
          style={{ '--rotation-speed': rotationSpeed }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={icon.url} alt={icon.name} />
        </a>
      ))}
    </div>
  );
}
