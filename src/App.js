import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import OutletComponent from "./Components/Outlet/Outlet";
import Seller from "./Components/Seller/Seller";
import AddSeller from "./Components/Seller/AddSeller";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signUpPage" element={<SignUp />} />

          <Route path="/" element={<OutletComponent />}>
            <Route exact path="Products" element={<Seller />} />
            <Route exact path="Products" element={<AddSeller />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
