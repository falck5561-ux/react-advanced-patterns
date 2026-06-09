import React, { useState } from 'react';

// El HOC recibe un componente (WrappedComponent) como argumento
export const withAuth = (WrappedComponent) => {
  // Retorna un nuevo componente funcional
  return (props) => {
    // Simulamos un estado de autenticación (falso por defecto)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    if (!isAuthenticated) {
      return (
        <div style={{ padding: '20px', border: '1px solid #ff4d4f', borderRadius: '8px', maxWidth: '400px' }}>
          <h3 style={{ color: '#ff4d4f' }}>Acceso Denegado 🔒</h3>
          <p>Necesitas iniciar sesión para ver este componente.</p>
          <button onClick={() => setIsAuthenticated(true)}>Iniciar Sesión</button>
        </div>
      );
    }

    // Si está autenticado, renderiza el componente original y le pasa sus props
    return (
      <div style={{ padding: '20px', border: '1px solid #52c41a', borderRadius: '8px', maxWidth: '400px' }}>
        <button onClick={() => setIsAuthenticated(false)} style={{ marginBottom: '15px' }}>
          Cerrar Sesión
        </button>
        <WrappedComponent {...props} />
      </div>
    );
  };
};