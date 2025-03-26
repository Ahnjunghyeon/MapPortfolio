import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import MapStar from "./components/projects/MapStar";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/mapstar" element={<MapStar />} />{" "}
        {/* 경로 확인 */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
