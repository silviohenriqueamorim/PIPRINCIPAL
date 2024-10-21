import React from 'react';
import styles from './menu.module.css';

interface MenuProps {
  onClick: () => void; // Prop para lidar com o clique
}

const Menu: React.FC<MenuProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.menu}>
      {/* Botão SVG */}
      <button className={styles.svgButton} onClick={onClick} aria-label="Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
    </div>
  );
};

export default Menu;
