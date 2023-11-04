import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Layout from "./components/layout/Layout";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Help from "./components/pages/Help";
import Contact from "./components/pages/Contact";


const App = () => {
  
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/help" element= {<Help/>}/>
        <Route path="/contact" element= {<Contact/>}/>
      </Routes>
      <Layout>
        <h1>Hello React</h1>
      </Layout>
      <Footer/>
    </div>
  );
};
// Button Component banate hobe
export default App;