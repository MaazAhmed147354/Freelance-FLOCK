import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";

import { Home, Delivery, Account, Contact, Reviews } from "./pages";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/account" element={<Account />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
