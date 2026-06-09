import React from 'react';

export const HeavyComponent = () => {
  return (
    <div style={{ padding: '20px', background: '#fff1f0', border: '1px solid #ffa39e' }}>
      <h3>¡Hola! Soy un componente que se cargó después ⚡</h3>
      <p>Esto se cargó solo cuando el usuario lo pidió, ahorrando tiempo de carga inicial.</p>
    </div>
  );
};