import "./App.css";
import AppRouter from "./AppRouter";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
