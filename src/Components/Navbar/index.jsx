import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { ShoppingCardContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";


const Navbar = () => {
    const context = useContext(ShoppingCardContext)
    const activeStyle = 'underline underline-offset-4'

    const hasUserAnAccount = Object.keys(context.account).length > 0  ? true : false
    
    const renderView = () => {
        if (context.signOut || context.parseSignOut === true) {
            return (
                <><li>
                <NavLink className="text-black/60">
                {context.account?.email}
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
            </li></>
            )
        } else {
            return (
                <li>
                <NavLink
                    to='/Signing'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                    Signing
                </NavLink>
            </li>
            )
        }
    }

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full 
        py-5 px-8 text-lg font-medium bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-bold text-3xl">
                    <NavLink
                        to={`${hasUserAnAccount ? '/' : '/Signing'}`}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furniture'
                        onClick={() => context.setSearchByCategory('furniture')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        onClick={() => context.setSearchByCategory('toys')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            {/* ---> */}
            <ul className="flex items-center gap-3">
                {renderView()}
                <li>
                    <NavLink className=' flex justify-between items-center'>
                    <ShoppingBagIcon className="h-4 w-4 stroke-black/60 m-1" />
                    {context.cartProduct.length}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar