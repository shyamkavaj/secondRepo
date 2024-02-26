// import logo from './logo.svg';
import './App.css';
import LoginPage from './Page/LoginPage';
import Welcome from './Page/Welcome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoutes';
function App() {
  // var user_emailId = "user_emailId";   
  return (
    <div className="App">
      {/* <LoginPage />
      <Welcome/>
      { 
        console.log(localStorage.getItem(user_emailId))
      } */}
      <Router>
        <Routes>
          <Route path="/login" index element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/welcome" element={<Welcome />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
