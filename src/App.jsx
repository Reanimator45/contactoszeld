import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Principal from "./pages/principal"
import Contactos from "./pages/contactos"
import './App.css'

function App() {


  const router = createBrowserRouter([

    {
      path: '/',
      element: <Principal />
    },
    {
      path: '/Contactos',
      element: <Contactos />
    },
    {
      path: '/',
      element: <h1>inicio</h1>
    }
  ])


  return (


    <RouterProvider router={router} />
  )
}

export default App

