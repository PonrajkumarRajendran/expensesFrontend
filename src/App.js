import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home.component";
import Navigation from "./components/navigation/navigation.component";
import MonthlyReport from "./components/monthlyReport/monthlyreport.component";
import SignIn from "./components/authentication/signin/signin.component";
import SignUp from "./components/authentication/signup/signup.component";
import MiddlePage from "./components/middlepage/middlepage.component";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path=":token" element={<MiddlePage />} />
      </Route>
      <Route path="home/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="monthly_report" element={<MonthlyReport />} />
      </Route>
    </Routes>
  );
}

export default App;
