import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Layouts/Landing";
import Auth from "./views/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from "./views/Dasboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import About from "./views/About";
import PostContextProvider from "./contexts/PostsContext";
function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />}></Route>
            <Route
              exact
              path="/login"
              element={<Auth authRoute="login" />}
            ></Route>
            <Route
              exact
              path="/register"
              element={<Auth authRoute="register" />}
            ></Route>
            <Route exact path="/" element={<ProtectedRoute />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/about" element={<About />} />
            </Route>
          </Routes>
        </Router>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;
