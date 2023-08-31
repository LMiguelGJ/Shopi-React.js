/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { initializeLocalStorage } from "./useLocalStorage";

export const ShoppingCardContext = createContext()

export const ShoppingCardProvider = (context) => {
    const {parsedAccount, parseSignOut} = initializeLocalStorage(({}, true))

    // My  account
    const [account, setAccount] = useState({})

    // Sign out
    const [signOut, setSignOut] = useState(false)

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

    // Get product by Category 
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=48')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return items
        }
        }

        useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
        }, [items, searchByTitle, searchByCategory])

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
            setSearchByCategory,
            searchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut,
            parsedAccount,
            parseSignOut
        }}>
            {context.children}
        </ShoppingCardContext.Provider>
    )
}