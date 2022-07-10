import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/Layout/PrivateRoute";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Discussion from "./Pages/Discussion";
import Login from "./Pages/Login";
import Members from "./Pages/Members";
import Register from "./Pages/Register";

function App() {

  const [user, setUser] = useState({})
  return (
    <Routes>
      <Route path='/' element={<Login setUser={setUser} user={user} />} />
      <Route path='/register' element={<Register setUser={setUser} user={user} />} />
      <Route path='/about' element={<About setUser={setUser} user={user} />} />
      <Route path='/members' element={<Members setUser={setUser} user={user} />} />
      <Route path='/discussion' element={<PrivateRoute user={user}><Discussion setUser={setUser} user={user} /></PrivateRoute>} />
      <Route path='/courses' element={<Courses setUser={setUser} user={user} />} />
    </Routes>
  );
}

export default App;
