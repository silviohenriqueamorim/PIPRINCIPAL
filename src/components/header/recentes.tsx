import React from 'react';
import './searchBar.css';

interface RecentesProps {
    position: { x: number; y: number; width: number };
    recentes: string[];
    onSelect: (item: string) => void; // Prop para lidar com a seleção de um item
  }  

const Recentes: React.FC<RecentesProps> = ({ position, recentes, onSelect }) => {
  const { x, y, width } = position;

  return (
    <div
      className='recentes'
      style={{
        position: 'absolute',
        top: y + 40, // ajuste conforme necessário
        left: x,
        width: width - 32, // ajuste para padding
      }}
    >
      {recentes.map((item, index) => (
        <div key={index} onClick={() => onSelect(item)}>{item}</div> // Renderiza cada item do array
      ))}
    </div>
  );
};

export default Recentes;
