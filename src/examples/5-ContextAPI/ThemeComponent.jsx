import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeComponent = () => {
  // Consumimos el contexto directamente sin recibir props
  const { theme, toggleTheme } = useTheme();

  // Estilos dinámicos basados en el tema global
  const styles = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
    color: theme === 'light' ? '#000000' : '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    maxWidth: '400px',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={styles}>
      <h3>Ejemplo de Context API 🎨</h3>
      <p>El tema global actual es: <strong>{theme}</strong></p>
      <button 
        onClick={toggleTheme}
        style={{ padding: '8px 12px', cursor: 'pointer' }}
      >
        Cambiar a modo {theme === 'light' ? 'Oscuro' : 'Claro'}
      </button>
    </div>
  );
};