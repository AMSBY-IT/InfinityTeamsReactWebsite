
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonalPage from "../Pages/onboarding/PersonalPage";
import ProfessionPage from "../Pages/onboarding/ProfessionPage";
import CVSkills from "../Pages/onboarding/CVSkills";
import Home from "../Pages/Home/Home";

import Register from "../Pages/auth/Register";
import LoginPage from '@/Components/LoginPage';


function Index() {
  return (
	<BrowserRouter>

	<Routes>
	  <Route path="/" element={<Home/>} />
	  <Route path="/404" element={<>4040 page</>} />
		<Route path="/auth/login" element={<LoginPage/>} />
		<Route path="/auth/register" element={<Register/>} />
		<Route path="/onboarding/personal" element={<PersonalPage/>} />
		<Route path="/onboarding/professional" element={<ProfessionPage/>} />
		<Route path="/onboarding/cv-skills" element={<CVSkills/>} />
	  <Route path="*" element={<Navigate replace to="/404" />} />
	</Routes>
  </BrowserRouter>
  )
}

export default Index