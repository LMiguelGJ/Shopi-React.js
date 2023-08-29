import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { ShoppingCardContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";


const Navbar = () => {
    const context = useContext(ShoppingCardContext)
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full 
        py-5 px-8 text-lg font-medium bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-bold text-3xl">
                    <NavLink
                        to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furniture'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            {/* ---> */}
            <ul className="flex items-center gap-3">
                <li>
                    <NavLink className="text-black/60">
                        Luis@plazit.com
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/My-Account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/My-Order'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Order
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/My-Orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/Signing'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Signing
                    </NavLink>
                </li>
                <li>
                    <NavLink className=' flex justify-between items-center'>
                    <ShoppingBagIcon className="h-4 w-4 stroke-black/60 m-1" />
                    {context.count}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar