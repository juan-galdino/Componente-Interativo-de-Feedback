import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Thanks } from "./pages/Thanks.jsx";

export function AppRoutes(){
  return(
    <Router>
      <Routes>
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  )
}                                  