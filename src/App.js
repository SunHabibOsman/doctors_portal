import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Appoinment from './Pages/Appoinment/Appoinment';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} > </Route>
        <Route path='/about' element={<About></About>} > </Route>
        <Route path='/appointment' element={<Appoinment></Appoinment>} > </Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
