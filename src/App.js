import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const path = {
  main: "/",
  privacy: "/privacy",
  terms: "/terms",
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path={path.main} element={<Main />} />
        <Route path={path.privacy} element={<Privacy />} />
        <Route path={path.terms} element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
