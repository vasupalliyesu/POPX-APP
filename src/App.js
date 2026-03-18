import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Regiser from './pages/Register';
import Account from './pages/Account';
import "bootstrap-icons/font/bootstrap-icons.css";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Regiser/>}/>
        <Route path="/Account" element={<Account/>}/>
      </Routes>
    </Router>
  );
}
export default App;