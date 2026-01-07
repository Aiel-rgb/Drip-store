import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import Produtos from "./pages/Produtos"


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 bg-light-gray-3 m-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos" element={<Produtos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App