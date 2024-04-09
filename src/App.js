
import './App.css';
import Bar from './components/Bar/Bar';
import ContextProvider from './components/Context/Context';
import Main from './components/Main/Main';

function App() {
  return (
    <ContextProvider>
    <Bar/>
    <Main/>
    </ContextProvider>
  );
  
}

export default App;
