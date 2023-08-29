import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCardProvider } from "../../Context";
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signing from '../Signing'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/My-Account', element: <MyAccount/>},
    {path: '/My-Order', element: <MyOrder/>},
    {path: '/My-Orders', element: <MyOrders/>},
    {path: '/My-Orders/last', element: <MyOrder/>},
    {path: '/*', element: <NotFound/>},
    {path: '/Signing', element: <Signing/>},
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCardProvider>
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
    </ShoppingCardProvider>
  )
}

export default App
