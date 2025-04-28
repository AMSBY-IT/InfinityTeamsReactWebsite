import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './component/LoginPage';
import SignupPage from './component/SignupPage';
import Protected from './Protected';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Protected>asas</Protected>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
