import Home from "./Pages/Client/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Membershipform from "./Pages/Client/Membershipform";
import Payment from "./Pages/Client/Payment";
import Updateform from "./Pages/Client/Updateform";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membershipform" element={<Membershipform />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/updateform" element={<Updateform />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
