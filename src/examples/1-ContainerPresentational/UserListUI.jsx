import React from 'react';

// Este componente NO hace peticiones, solo recibe datos por "props" y los pinta.
export const UserListUI = ({ users, isLoading, error }) => {
  if (isLoading) return <p>Cargando usuarios...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (users.length === 0) return <p>No hay usuarios.</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', maxWidth: '400px' }}>
      <h3>Lista de Usuarios</h3>
      <ul style={{ textAlign: 'left' }}>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};