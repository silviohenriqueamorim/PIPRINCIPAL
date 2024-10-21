import React, { useEffect, useRef } from 'react';
import './searchBar.css';

interface SearchBarProps {
  onPositionChange: (x: number, y: number, width: number) => void;
  onFocusChange: (isFocused: boolean) => void; // Novo prop para o foco
}

const SearchBar: React.FC<SearchBarProps> = ({ onPositionChange, onFocusChange }) => {
  const searchBarRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const updatePositionAndWidth = () => {
        if (searchBarRef.current) {
            const rect = searchBarRef.current.getBoundingClientRect();
            onPositionChange(rect.x, rect.y, rect.width);
        }
    };

    updatePositionAndWidth();
    window.addEventListener('resize', updatePositionAndWidth);

    return () => {
        window.removeEventListener('resize', updatePositionAndWidth);
    };
}, [onPositionChange]);


  return (
    <form
      className="form-inline ml-auto flex-grow-1 scroll-container formi"
      style={{ paddingLeft: "10px" }}
      ref={searchBarRef}
      onFocus={() => onFocusChange(true)} // Define o foco como verdadeiro
      onBlur={() => onFocusChange(false)} // Define o foco como falso
    >
      <input className="searchBar form-control" type="text" placeholder="Search" id='searchBar'/>
    </form>
  );
};

export default SearchBar;
