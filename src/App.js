import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Form from "./pages/Form";
import List from "./pages/List";
import Tabs from "./pages/Tabs";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<List />} />
        <Route path="/tabs" element={<Tabs />} />
      </Routes>
    </div>
  );
}

export default App;
