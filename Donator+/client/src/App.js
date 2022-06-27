import 'bootstrap/dist/css/bootstrap.min.css';
// import '@coreui/coreui/dist/css/coreui.min.css'
import TopBar from './components/topbar/Topbar'
import Home from './pages/Userhome/Home';
import Ulogin from './pages/userlogin/Ulogin';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Ulogin/>
    </div>
  );
}

export default App;
