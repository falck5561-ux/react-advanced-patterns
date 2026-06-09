import React from 'react';
import { withAuth } from './withAuth';

const Dashboard = ({ userRole }) => {
  return (
    <div>
      <h3>Panel de Control Abierto 🔓</h3>
      <p>Bienvenido al sistema. Tu rol actual es: <strong>{userRole}</strong></p>
      <p>Aquí verías información confidencial.</p>
    </div>
  );
};

// ¡Aquí ocurre la magia! Exportamos el componente envuelto por el HOC
export const ProtectedDashboard = withAuth(Dashboard);