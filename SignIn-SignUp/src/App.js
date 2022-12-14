import { Routes, Route} from "react-router-dom"
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";


function App() {
  return (
    <Routes>
    <Route path="/" element={<SignIn/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
