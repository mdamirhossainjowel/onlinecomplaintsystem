
import './App.css';
import Header from './component/Shared/Header';
import Home from './component/Shared/Home';
import { Routes, Route} from "react-router-dom";
import Complaint from './component/Complaint';
import Notices from './component/Notices';
import Contactus from './component/Contactus';
import Profile from './component/Profile';
import Login from './component/Shared/Login';
import Footer from './component/Shared/Footer';
import Registration from './component/Shared/Registration';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
