import { createContext, useState } from "react";

export const ShoppingCardContext = createContext()

export const ShoppingCardProvider = (context) => {
    const [count, setCount] = useState(0);

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    // Product Detail · Show Product
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart · Add products to cart
    const [cartProduct, setCartProduct] = useState([]);
    
    // Shopping Cart · Order
    const [order, setOrder] = useState([])

    const [isCheckoutsitemenuOpen, setIsCheckoutsitemenuOpen] = useState(false);
    const openCheckoutSiteMenu = () => setIsCheckoutsitemenuOpen(true);
    const closeCheckoutSiteMenu = () => setIsCheckoutsitemenuOpen(false);

    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            setCartProduct,
            cartProduct,
            isCheckoutsitemenuOpen,
            openCheckoutSiteMenu,
            closeCheckoutSiteMenu,
            order,
            setOrder,
        }}>
            {context.children}
        </ShoppingCardContext.Provider>
    )
}