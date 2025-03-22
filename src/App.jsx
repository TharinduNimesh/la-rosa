import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Service } from "./pages/service";
import { About } from "./pages/about";

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      {/* Add other routes here */}
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
export default App;
