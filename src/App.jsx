import { createContext, useState } from "react"
import { Navbar, Hero, CarCatalogue, Footer } from "./section"
import './App.css'

export const SearchParametersContext = createContext({})

function App() {
  const [searchParameters, setSearchParameters] = useState({ 
    manufacturer: "", 
    year: 2022, 
    fuel: "", 
    limit: 10, 
    model: "" })
    
  return (
    <SearchParametersContext.Provider value={{ searchParameters, setSearchParameters }}>
      <Navbar />
      <Hero />
      <CarCatalogue />
      <Footer />
    </SearchParametersContext.Provider>
  )
}

export default App
