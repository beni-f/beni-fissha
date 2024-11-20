import HomePage from "./components/HomePage"
import NavLayout from "./components/NavLayout"
import AboutPage from "./components/AboutPage"
import ProjectPage from "./components/ProjectPage"
import { GlobalStyle } from "./components/styles/Global"
import React from 'react'


function App() {
  return (
    <>
      <GlobalStyle />
      <NavLayout />
      <HomePage />
      <AboutPage />
      <ProjectPage />
    </>
  )
}

export default App
