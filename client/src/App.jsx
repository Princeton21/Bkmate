import "./App.css";
import AppRouter from "./AppRouter";
import Footer from "./Components/Footer/Footer";
import ScrollBar from "./Components/TopScroll/ScrollBar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ScrollBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
