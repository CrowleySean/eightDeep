import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./components/content/Content";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Homepage} />
      </Routes>
    </Router>
  );
}

export default App;
