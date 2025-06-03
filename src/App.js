import { Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Homepage from './pages/Home';

function App() {
  return (
    <div className="Container">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
