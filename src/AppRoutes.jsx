import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Rating } from "./pages/Rating.jsx";
import { Thanks } from "./pages/Thanks.jsx";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/rating" element={<Rating />} />
      </Routes>
    </Router>
  )
}                                  