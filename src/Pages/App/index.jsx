import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoppingCardContext, ShoppingCardProvider } from "../../Context";
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signing from '../Signing'
import Navbar from '../../Components/Navbar'
import './App.css'
import { useContext } from 'react';

const AppRoutes = () => {
  const context = useContext(ShoppingCardContext)
  const hasUserAnAccount = Object.keys(context.account).length > 0 && context.signOut  ? true : false

  let routes = useRoutes([
    {path: '/', element: hasUserAnAccount ? <Home/> : <Navigate replace to={'/Signing'}/>},
    {path: '/clothes', element: hasUserAnAccount ? <Home/> : <Navigate replace to={'/Signing'}/>},
    {path: '/electronics', element: hasUserAnAccount ? <Home/> : <Navigate replace to={'/Signing'}/>},
    {path: '/furniture', element: hasUserAnAccount ? <Home/> : <Navigate replace to={'/Signing'}/>},
    {path: '/toys', element: hasUserAnAccount ? <Home/> : <Navigate replace to={'/Signing'}/>},
    {path: '/others', element: hasUserAnAccount ? <Home/> : <Navigate replace to={'/Signing'}/>},
    {path: '/My-Account', element: <MyAccount/>},
    {path: '/My-Order', element: <MyOrder/>},
    {path: '/My-Orders', element: <MyOrders/>},
    {path: '/My-Orders/last', element: <MyOrder/>},
    {path: '/My-Orders/:id', element: <MyOrder/>},
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
