import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Header from "./components/header";
import Homepage from "./pages/Homepage";
import Coinpage from "./pages/Coinpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";


function App() {
  return (
   
      <>
      <Header />
     
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins/:id" element={<Coinpage />} />
      </Routes>

    <Footer/>
    </>
      
 
  );
}

export default App;
