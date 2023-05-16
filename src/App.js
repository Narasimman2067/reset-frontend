import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/welcome';
import LogIn from './components/login';
import SignUp from './components/signup';
import ForgetPassword from './components/forgetPassword';
import ResetPassword from './components/resetPassword';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/forget" element={<ForgetPassword/>}/>
        <Route path="/reset" element={<ResetPassword/>}/>
        
      </Routes>
    </div>
  );
}
export default App;
