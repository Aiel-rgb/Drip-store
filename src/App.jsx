import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-light-gray-3 m-0">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App