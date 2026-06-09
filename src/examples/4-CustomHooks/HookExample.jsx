import React from 'react';
import { useFetch } from '../../hooks/useFetch';

export const HookExample = () => {
  // Usamos nuestro Custom Hook pasándole la URL que queremos
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

  if (isLoading) return <p>Cargando post...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '15px', backgroundColor: '#f6ffed', border: '1px solid #b7eb8f', borderRadius: '8px', maxWidth: '400px' }}>
      <h3 style={{ color: '#389e0d' }}>Post Destacado</h3>
      <strong>{data?.title}</strong>
      <p>{data?.body}</p>
    </div>
  );
};