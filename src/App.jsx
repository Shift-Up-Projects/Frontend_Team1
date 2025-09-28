import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Profile from "./pages/Profile";
import Add_ctivity from "./pages/Add_ctivity";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-activity" element={<Add_ctivity />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
