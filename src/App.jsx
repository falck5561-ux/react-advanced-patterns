import { UserContainer } from './examples/1-ContainerPresentational/UserContainer';
import { ProtectedDashboard } from './examples/2-HOC/Dashboard';
import { MouseTracker } from './examples/3-RenderProps/MouseTracker';
import { HookExample } from './examples/4-CustomHooks/HookExample';
// Importamos el Provider y el Componente del Concepto 5
import { ThemeProvider } from './context/ThemeContext';
import { ThemeComponent } from './examples/5-ContextAPI/ThemeComponent';
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
      <ProtectedDashboard userRole="Administrador" />

      <hr style={{ margin: '30px 0' }}/>

      <h2>3. Render Props</h2>
      <MouseTracker render={(position) => (
        <div style={{ backgroundColor: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>
          <strong>Coordenadas en vivo:</strong>
          <p>X: {position.x} | Y: {position.y}</p>
        </div>
      )} />

      <hr style={{ margin: '30px 0' }}/>

      <h2>4. Custom Hooks</h2>
      <HookExample />

      <hr style={{ margin: '30px 0' }}/>

      <h2>5. Context API</h2>
      {/* Envolvemos nuestro componente con el Provider */}
      <ThemeProvider>
        <ThemeComponent />
      </ThemeProvider>
    </>
  );
}

export default App;