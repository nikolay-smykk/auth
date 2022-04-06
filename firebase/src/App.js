import { Card } from "./components/Cards"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-wrap px-4 ">
        <Card />
      </div>
      <Footer />
    </>
  )
}
export default App
