import React, { useState } from 'react';

export const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    // Capturamos las coordenadas del ratón en la pantalla
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div 
      style={{ height: '200px', border: '2px dashed #1890ff', borderRadius: '8px', padding: '15px', maxWidth: '400px' }} 
      onMouseMove={handleMouseMove}
    >
      <p style={{ color: '#8c8c8c' }}>Pasa el ratón por esta caja...</p>
      
      {/* AQUÍ ESTÁ EL PATRÓN: Ejecutamos la prop "render" inyectándole nuestro estado */}
      {render(position)}
    </div>
  );
};