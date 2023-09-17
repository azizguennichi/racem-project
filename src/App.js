import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Adduser from "./components/Adduser";
import Runtest from "./components/Runtest";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SysConf from "./components/SysConf";
import Admin from "./components/Admin";
import Sequence from "./components/Sequence";
import Reports from "./components/Reports";
import { useSelector } from "react-redux";
import ForgetPassword from "./components/ForgetPassword";
import ChangePassword from "./components/ChangePassword";
import NotFound from "./components/NotFound";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/mot-de-passe-oublie"
          element={
            <Navbar>
              <ForgetPasswordPage />
            </Navbar>
          }
        />
        <Route
          path="/reset-password/:activation_token"
          element={<Navbar child={<ChangePasswordPage />} />}
        />
        <Route path="/change" element={<NavRigas />} />
        <Route path="/adduser" element={<NavRigas child={<Adduser />} />} />
        <Route path="/menu" element={<NavRigas child={<Menu />} />} />
        <Route
          path="/accueil"
          element={<NavRigas child={<Menu child={<Runtest />} />} />}
        />
        <Route
          path="/system"
          element={<NavRigas child={<Menu child={<SysConf />} />} />}
        />
      </Routes> */}
      <ToastContainer theme="colored" position="top-center" />

      <Routes>
        <Route
          path="/"
          element={!user ? <Login /> : <Navigate to="/adduser" replace />}
        />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route
          path="/reset-password/:activation_token"
          element={<ChangePassword />}
        />
        <Route
          path="/adduser"
          element={user ? <Adduser /> : <Navigate to="/" replace />}
        />
        <Route
          path="/accueil"
          element={user ? <Runtest /> : <Navigate to="/" replace />}
        />
        <Route
          path="/system"
          element={user ? <SysConf /> : <Navigate to="/" replace />}
        />
        <Route
          path="/admin"
          element={user ? <Admin /> : <Navigate to="/" replace />}
        />
        <Route
          path="/sequence"
          element={user ? <Sequence /> : <Navigate to="/" replace />}
        />
        <Route
          path="/reports"
          element={user ? <Reports /> : <Navigate to="/" replace />}
        />
        <Route
          path="*"
          element={user ? <NotFound /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
