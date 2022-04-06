import logo from "./img/logo.svg"

const App = () => {
  return (
    <>
      <nav className="container relative  mx-auto p-6">
        <div className="flex items-center justify-between border-b-2 border-gray-700 py-4 text-sm font-semibold text-gray-300">
          <img className="h-8" src={logo} alt="Workflow" />
        </div>
        <div className="hidden space-x-6 text-red-600 md:flex">
          <span className="text-gray-300 hover:text-gray-500" href="#">
            Price]
          </span>
          <span className="text-gray-300 hover:text-gray-500" href="#">
            Product
          </span>
          <span className="text-gray-300 hover:text-gray-500" href="#">
            About Us
          </span>
          <span className="text-gray-300 hover:text-gray-500" href="#">
            Contact
          </span>
        </div>
        <button className="focus:shadow-outline hidden  items-center justify-center rounded-full bg-gray-800 px-4 py-2 text-white focus:outline-none md:block">
          some
        </button>
      </nav>
    </>
  )
}
export default App
