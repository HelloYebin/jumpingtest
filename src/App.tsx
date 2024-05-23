import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SalesYear from "./routes/SalesYear";
import SalesMonth from "./routes/SalesMonth";
import Schedule from "./routes/Schedule";
import Products from "./routes/Products";
import Join from "./routes/Join";
import Members from "./routes/Members";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="flex">
          <div className="hidden sm:block">
            <Sidebar />
          </div>
          <div className="flex flex-1 flex-col h-full min-h-screen">
            <Navbar />
            <div className="h-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/members" element={<Members />} />
                <Route path="/join" element={<Join />} />
                <Route path="/sales_year" element={<SalesYear />} />
                <Route path="/sales_month" element={<SalesMonth />} />
                <Route path="/products" element={<Products />} />
                <Route path="/schedule" element={<Schedule />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
