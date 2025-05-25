import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeadmasterDashboard from "./pages/headmaster/dashboard";

// ... existing code ...

function App() {
  return (
    <Router>
      <Routes>
        {/* ... other routes ... */}
        <Route path="/dashboard" element={<HeadmasterDashboard />} />
        <Route path="/headmaster/dashboard" element={<HeadmasterDashboard />} />
      </Routes>
    </Router>
  );
}

export default App; 