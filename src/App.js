import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Membershipform from "./Pages/Client/NewMember/Membershipform";
import Payment from "./Pages/Client/NewMember/Payment";
import Existing from "./Pages/Client/ExistingMember/Existing";
import Membershipform2 from "./Pages/Client/NewMember/Membershipform2";
import Submittedform from "./Pages/Client/NewMember/Submittedform";
import Submittedpayment from "./Pages/Client/NewMember/Submittedpayment";
import Login from "./Pages/Client/ExistingMember/Login";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/membershipform" element={<Membershipform />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/updateform" element={<Existing />} />
          <Route path="/membershipform2" element={<Membershipform2 />} />
          <Route path="/submitted" element={<Submittedform />} />

          <Route path="/login" element={<Login />} />
          <Route path="/submittedpayment" element={<Submittedpayment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
