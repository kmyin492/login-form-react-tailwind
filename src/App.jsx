import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Loginform from './LoginForm'
import Home from './Home'

 

export default function App(){
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Loginform />
    },

      {
        path:'/home',
        element:<Home />,
      }
  ])
  return(

    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}