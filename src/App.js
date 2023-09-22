import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Adduser from "./components/cardUser/Adduser";
import Runtest from "./components/Runtest";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SysConf from "./components/SysConf";
import Admin from "./components/Admin";
import Reports from "./components/Reports";
import { useSelector } from "react-redux";
import ForgetPassword from "./components/ForgetPassword";
import ChangePassword from "./components/ChangePassword";
import NotFound from "./components/NotFound";
import TableUser from "./components/cardUser/TableUser";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <ToastContainer theme="colored" position="top-center" />

      <Routes>
        <Route
          path="/"
          element={!user ? <Login /> : <Navigate to="/accueil" replace />}
        />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route
          path="/reset-password/:activation_token"
          element={<ChangePassword />}
        />

        <Route
          path="/adduser"
          element={
            user && user.role === "super-admin" ? (
              <Adduser />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/tableuser"
          element={
            user && user.role === "super-admin" ? (
              <TableUser />
            ) : (
              <Navigate to="/" replace />
            )
          }
          
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
          element={
            user && user.role === "super-admin" ? (
              <Admin />
            ) : (
              <Navigate to="/" replace />
            )
          }
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
