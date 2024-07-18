import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Started from "./pages/Started";
import CreateAccount from "./pages/CreateAccount";
import SignUp from "./components/Register/SignUp";
import DateOfBirth from "./components/Register/DateOfBirth";
import TargetPage from "./pages/TargetPage";
import FitnessGoal from "./pages/FitnessGoal";
import Open from "./pages/Open";
import Matric from "./pages/Matric";
import Reminder from "./pages/Reminder";
import Display from "./pages/Display";



function App() {
  const [email , setgetEmail] = useState("tiddy@gmail.com")
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="https://fitness-ed93.vercel.app/started" element={<Started />}></Route>
        <Route path="/creating" element={<CreateAccount />}>
          <Route index element={<SignUp />}></Route>
          <Route path="date" element={<DateOfBirth />}></Route>
        </Route>
        <Route  path="/login" element={<Open setgetEmail={setgetEmail} />}></Route>
        <Route path="targer" element={<TargetPage />}></Route>
        <Route path="fitness" element={<FitnessGoal email={email} />}></Route>
        <Route path="matric" element={<Matric email={email}/>}></Route>
        <Route path="remeinder" element={<Reminder email={email}/>}></Route>
        <Route path="congratulations" element={<Display email={email} />}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
