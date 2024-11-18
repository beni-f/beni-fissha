import { Theme } from "@radix-ui/themes"
import HomePage from "./components/HomePage"
import NavLayout from "./components/NavLayout"
import AboutPage from "./components/AboutPage"
import { GlobalStyle } from "./components/styles/Global"
import React from 'react'


function App() {
  return (
    <>
      <GlobalStyle />
      <NavLayout />
      <HomePage />
      <AboutPage />
    </>
  )
}

export default App
