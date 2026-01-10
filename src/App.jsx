import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { Header, HeaderSimples } from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import Produtos from "./pages/Produtos"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"


function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        <main className="flex-1 bg-light-gray-3 m-0">
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/produtos" element={<Produtos />} />
            </Route>
            <Route path="/login" element={
              <>
                <HeaderSimples />
                <Login />
              </>
            } />
            <Route path="/cadastro" element={
              <>
                <HeaderSimples />
                <Cadastro />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App