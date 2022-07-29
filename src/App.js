import './App.scss';
import Home from './pages/home/Home'
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import Login from './pages/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import Profile from './components/profile/Profile'
import Signup from './components/signup/Signup';
import {Routes,Route } from "react-router-dom"



function App() {
  const user = true;
  return (
    <div className="App">
      <Routes>
        <Route exact path="/"  element={ <Home />}/>
        <Route path="/register" element={ <Register/>} />
        <Route path="/login" element={ <Login />} />
        <Route path="/movies" element={ <Home type="movies" />} />
        <Route path="/series" element={ <Home type="series" /> } />
        <Route path="/watch" element={  <Watch />} />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/profile" element={ <Profile/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
