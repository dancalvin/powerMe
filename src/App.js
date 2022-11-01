import Header from "./Components/Base/Header";
import Footer from "./Components/Base/Footer";
import Index from "./Components/Index/Index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" index element={<Index />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
