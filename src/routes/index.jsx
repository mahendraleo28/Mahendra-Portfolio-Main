import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Skills from "../Components/Skills/Skills";
import Experience from "../Components/Experience/Experience";
import Education from "../Components/Education/Education";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";
import Landing from "../Components/Landing/Landing";
import Work from "../Components/Work/Work";



export const AppRoutes = () => {
    return(
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/exp" element={<Experience/>}/>
          <Route path="/edu" element={<Education/>}/>
          <Route path="/con" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/lan" element={<Landing/>}/>
          <Route path="/work" element={<Work/>}/>
        </Routes>
      </div>
    );
  };
  