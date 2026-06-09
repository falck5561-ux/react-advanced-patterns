import { UserContainer } from './examples/1-ContainerPresentational/UserContainer';
import { ProtectedDashboard } from './examples/2-HOC/Dashboard';
import './App.css';

function App() {
  return (
    <>
      <h1>Patrones Avanzados en React</h1>
      <hr />
      
      <h2>1. Contenedor y Presentacional</h2>
      <UserContainer />
      
      <hr style={{ margin: '30px 0' }}/>

      <h2>2. Higher-Order Component (HOC)</h2>
      {/* Le pasamos un prop normal, el HOC se encarga de pasarlo al componente original */}
      <ProtectedDashboard userRole="Administrador" />
    </>
  );
}

export default App;