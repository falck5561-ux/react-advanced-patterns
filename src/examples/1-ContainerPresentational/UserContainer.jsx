import React, { useState, useEffect } from 'react';
import { UserListUI } from './UserListUI';

export const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Aquí concentramos toda la lógica de obtención de datos
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Error al obtener los datos');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  // Le inyectamos los datos y estados al componente visual
  return <UserListUI users={users} isLoading={isLoading} error={error} />;
};