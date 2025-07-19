import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import NotFound from './Components/NotFound/NotFound'
import Contact from './Components/Contact/Contact'

function App() {

  let routes =createBrowserRouter([
    { path: '/', element: <Layout /> ,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About />},
      { path: '/portfolio', element: <Portfolio />},
      { path: '/contact', element: <Contact />},
      { path: '*', element: <NotFound /> },
    ]},
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
