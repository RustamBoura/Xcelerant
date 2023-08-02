import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './components/Main'
import Cars from './components/Cars';
import CarDetails from './components/CarDetails';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import WelcomeUser from './components/WelcomeUser';
import Reviews from './components/Reviews';
import Images from './components/Images';
import EachCar from './components/EachCar';


const App = () => {
  return (
    <Router>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/eachCar" element={<EachCar />} />
          <Route path="/signupform" element={<SignUpForm />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/welcomeuser" element={<WelcomeUser />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/images" element={<Images />} />
        </Routes>
    
    </Router>
  );
};

export default App;
