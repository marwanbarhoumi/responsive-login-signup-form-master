import { Route,  Routes } from "react-router-dom";
import LoginForm from "./components/loginform";
import SignForm from "./components/signup";

function App() {
  return (
    <div className="page">
   
        <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="/signup" element={<SignForm/>}/>
        </Routes>
      
      
    </div>
  );
}

export default App;
