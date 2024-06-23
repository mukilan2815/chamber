import Home from "./Pages/Client/NewMember/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Membershipform from "./Pages/Client/NewMember/Membershipform";
import Payment from "./Pages/Client/NewMember/Payment";
import Updateform from "./Pages/Client/NewMember/Updateform";
import Membershipform2 from "./Pages/Client/NewMember/Membershipform2";
import Submittedform from "./Pages/Client/NewMember/Submittedform";
import Login from "./Pages/Client/ExistingMember/Login";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membershipform" element={<Membershipform />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/updateform" element={<Updateform />} />
          <Route path="/membershipform2" element={<Membershipform2 />} />
          <Route path="/submitted" element={<Submittedform />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
