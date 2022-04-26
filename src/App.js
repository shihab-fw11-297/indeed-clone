import './App.css';

import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/home/Landing';
import { SignUp } from './Pages/authentication/SignUp';
import { Login } from './Pages/authentication/Login';
import { SearchResults } from './Pages/result/SearchResults';

function App() {
  return (
    <div className="App">
      <Routes>
       
        <Route path="/" element={<Landing />} /> 

        <Route path="/signup" element={<SignUp />} /> 

        <Route path="/login" element={<Login />} /> 
       
        <Route path="/results" element={<SearchResults />} /> 

      </Routes>
    </div>
  );
}

export default App;
