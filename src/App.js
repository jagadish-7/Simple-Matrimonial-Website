
import { Routes, Route } from 'react-router-dom';
import './App.css';


import Frontend from './components/Frontend';
import Signup from './components/Signup';
import Login from './components/Login';
import Portfolio from './components/fcomponents/Portfolio';
import Admin from './components/Admin';
import Main from './Main';
import Dashboard from './components/Dashboard';
import Searchprofile from './components/dashboard/Searchprofile';
import Myprofile from './components/dashboard/Myprofile';
import Forget from './components/Forget';
import Reset from './components/Reset';




function App() {

  const user = localStorage.getItem("token");




  return (
    <>



      
      <Routes>

      {user && <Route path="/" exact element={<Dashboard />} />}
      {user && <Route path="/searchprofile" exact element={<Searchprofile />} />}
      {user && <Route path="/profile" exact element={<Myprofile />} />}


      {user && <Route path="/admin" exact element={<Main />} />}






        <Route path="/" element={<Frontend  title="Perfect Match" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/forget-password" element={<Forget />} />
        <Route path="/reset-password" element={<Reset />} />




        <Route path="/portfolio" element={<Portfolio />} />


      </Routes>



    </>
  );
}

export default App;
