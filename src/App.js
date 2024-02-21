import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
function App() {
  return (
    <div className='App'>
      <h1>React Router is a library in React.js that helps you manage navigation and routing within your web application. Think of it as a set of tools that allow you to create different "pages" or views in your application and control how users navigate between them.</h1>
      <p>To Add React Router in your application, run this in the terminal from the root directory of the application.</p>
      <pre><mark>npm i react-router-dom</mark></pre>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path="/Contact" element={<Contact/>} ></Route>
        <Route path='/About' element={<About/>} ></Route>    
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
