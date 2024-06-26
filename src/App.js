import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Membershipform from "./Pages/Client/NewMember/Membershipform";
import Payment from "./Pages/Client/NewMember/Payment";
import Existing from "./Pages/Client/ExistingMember/Existing";
import Membershipform2 from "./Pages/Client/NewMember/Membershipform2";
import Submittedform from "./Pages/Client/NewMember/Submittedform";
import Submittedpayment from "./Pages/Client/NewMember/Submittedpayment";
import Login from "./Pages/Client/ExistingMember/Login";

import AdminGC from "./Pages/Admin/AdminGC";
import AdminAO from "./Pages/Admin/AdminAO";
import AdminCEO from "./Pages/Admin/AdminCEO";
import AdminOB from "./Pages/Admin/AdminOB";
import AdminMC from "./Pages/Admin/AdminMC";

import Home from "./Pages/Admin/Home";
import Analysis from "./Pages/Admin/Analysis";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Membershipform />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/updateform" element={<Existing />} />
          <Route path="/membershipform2" element={<Membershipform2 />} />
          <Route path="/submitted" element={<Submittedform />} />

          <Route path="/login" element={<Login />} />
          <Route path="/submittedpayment" element={<Submittedpayment />} />

          {/* Admin */}

          <Route path="/admin" element={<Home />} />
          <Route path="/admingc" element={<AdminGC />} />
          <Route path="/adminmc" element={<AdminMC />} />
          <Route path="/adminao" element={<AdminAO />} />
          <Route path="/adminceo" element={<AdminCEO />} />
          <Route path="/adminob" element={<AdminOB />} />

          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
