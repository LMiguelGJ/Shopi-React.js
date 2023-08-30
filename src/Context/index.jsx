import { createContext, useEffect, useState } from "react";

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

    // Get Products
    const [items, setItems] = useState(null);

    // Get filter items 
    const [filteredItems, setFilteredItems] = useState(null);

    // Get product by title 
    const [searchByTitle, setSearchByTitle] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=48')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle]) 



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
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
        }}>
            {context.children}
        </ShoppingCardContext.Provider>
    )
}