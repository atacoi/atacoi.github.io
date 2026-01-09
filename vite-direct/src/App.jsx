import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LinearAlgebra from "./LinearAlgebra";
import MainPage from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/linear-stuff" element={<LinearAlgebra />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
