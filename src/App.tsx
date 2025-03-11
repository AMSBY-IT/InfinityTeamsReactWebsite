import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CandidateList from "./Pages/CandidateList";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import Protected from "./Protected";



const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={
            
            <Protected><CandidateList /></Protected> 
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    );
  };

export default App;