import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";



export const AppRoutes = () => {
    return(
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  };
  