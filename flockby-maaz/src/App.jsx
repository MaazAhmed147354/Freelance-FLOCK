import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        {/* Header always visible */}
        <Header />

        {/* Page content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/checkout" element={<Checkout />} /> */}
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
