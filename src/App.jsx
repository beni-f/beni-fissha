import HomeLayout from "./components/HomeLayout"
import NavLayout from "./components/NavLayout"
import { GlobalStyle } from "./components/styles/Global"


function App() {
  return (
    <>
      <GlobalStyle />
      <NavLayout />
      <HomeLayout />
    </>
  )
}

export default App
