import 'bootstrap/dist/css/bootstrap.min.css';
// import '@coreui/coreui/dist/css/coreui.min.css'
import TopBar from './components/topbar/Topbar'
import Donate from './pages/Donate/Donate';
import HospitalDash from './pages/Hospitalhome/HospitalDash';
import HospitalLogin from './pages/hospitalLogin/HospitalLogin';
import Hregister from './pages/hospitalRegister/Hregister';
import Profile from './pages/profile/Profile';
import Home from './pages/Userhome/Home';
import Ulogin from './pages/userlogin/Ulogin';
import Uregister from './pages/userregister/Uregister';

function App() {
  return (
    <div className="App">
      <TopBar/>
      {/* <Home/> */}
      {/* <Ulogin/> */}
      <Uregister/>
      {/* <Profile/> */}
      {/* <Donate/> */}
      {/* <HospitalLogin/> */}
      {/* <Hregister/> */}
    </div>
  );
}

export default App;
