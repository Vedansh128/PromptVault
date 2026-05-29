import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AddPrompt from "./pages/AddPrompt";

function App() {
  return (
    <HashRouter>
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/add-prompt" element={<AddPrompt />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
