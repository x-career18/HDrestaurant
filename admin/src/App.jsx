import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeAdmin from "./pages/home/HomeAdmin";
import HomeManager from "./pages/home/HomeManager";
import HomeEmployee from "./pages/home/HomeEmployee";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        {!user && <Route path="/" element={<Login />} />}
        {user && user.role === "manager" && (
          <Route path="/" element={<HomeManager />} />
        )}
        {user && user.role === "admin" && (
          <Route path="/" element={<HomeAdmin />} />
        )}
        {user && user.role === "employee" && (
          <Route path="/" element={<HomeEmployee />} />
        )}
        <Route path="*" element={<NotFound />} />
        {!user && <Route path="/register" element={<Register />} />}
      </Routes>
    </Router>
  );
}

export default App;
