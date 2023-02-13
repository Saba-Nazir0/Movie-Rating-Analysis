import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import AddUser from './components/AddUser';
import Rating from './components/Rating';
import Reports from './components/Reports';
import Details from './components/Details/Details';
import AddMovie from './components/Details/AddMovie';
import UpdateMovie from './components/Details/UpdateMovie';
import DeleteMovie from './components/Details/DeleteMovie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav ></Nav>
     <Routes>
      <Route path="/" element={<h1>Home Page</h1>}></Route>
      <Route path="/details" element={<Details />}></Route>
      <Route path="/add" element={<AddUser />}></Route>
      <Route path="/rating" element={<Rating />}></Route>
      <Route path="/reports" element={<Reports />}></Route>
      <Route path="/details/addmovie" element={<AddMovie />}></Route>
      <Route path="/details/updatemovie" element={<UpdateMovie />}></Route>
      <Route path="/details/deletemovie" element={<DeleteMovie />}></Route>
     </Routes>
     </BrowserRouter>
     <Footer />
     </div>
  );
}

export default App;
