import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Register from './components/register/Register';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
