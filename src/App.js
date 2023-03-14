import { Route, Routes} from "react-router-dom";

import Homepage from "./Routes/Homepage";
import { Product } from "./Routes/ProductPage";

import "./Style.css";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<Product/>} />
      </Routes>
      
    </>
  );
}

export default App;
