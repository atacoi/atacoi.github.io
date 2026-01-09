import { HashRouter, Routes, Route } from "react-router-dom";
import LinearAlgebra from "./LinearAlgebra";
import MainPage from "./MainPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/linear-stuff" element={<LinearAlgebra />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
