import './App.css';
import Calculadora from './componentes/Calculadora';
import logo from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <img className='logo' src={ logo } alt='Calculadora React logo'/>
      <Calculadora />
    </div>
  );
}

export default App;
