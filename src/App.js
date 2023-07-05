import './App.css';
import './Custom.css'
import { Main } from './Components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes, useLocation } from "react-router-dom"
import { routes } from './Utils/Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map(route => <Route key={route.path} exact element={route.component} path={route.path} />)}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
