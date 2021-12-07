import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Todos from './Todos';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Todos />} />
          <Route exact path='/todo/:id' element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
