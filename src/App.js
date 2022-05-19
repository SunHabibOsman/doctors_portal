import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Appoinment from './Pages/Appoinment/Appoinment';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myappoinment from './Pages/Dashboard/Myappoinment';
import Myreview from './Pages/Dashboard/Myreview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './RequireAdmin';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} > </Route>
        <Route path='dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>} >
          <Route index element={<Myappoinment></Myappoinment>} ></Route>
          <Route path='myreview' element={<Myreview></Myreview>} ></Route>
          <Route path='myhistory' element={<MyHistory></MyHistory>} ></Route>
          <Route path='allusers' element={<RequireAdmin><Users></Users></RequireAdmin>} ></Route>
        </Route>
        <Route path='/about' element={<About></About>} > </Route>
        <Route path='/appointment' element={<RequireAuth>
          <Appoinment></Appoinment>
        </RequireAuth>} > </Route>

        <Route path='/login' element={<Login></Login>} > </Route>
        <Route path='/signup' element={<SignUp></SignUp>} > </Route>


      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
