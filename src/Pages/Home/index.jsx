import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSiteMenu from "../../Components/CheckoutSiteMenu";
import { ShoppingCardContext } from "../../Context";

function Home() {

    const context = useContext(ShoppingCardContext)

    const renderView = () => {
        if (context.searchByTitle?.length > 0) {
            if (context.filteredItems?.length > 0) {
                return (
                    context.filteredItems?.map(item => (
                        <Card key={item.id} data={item}/>
                    ))
                )
            } else {
                return (
                    <div>We do not have anything :(</div>
                )
            }
        } else {
            return (
                context.items?.map(item => (
                    <Card key={item.id} data={item}/>
                ))
            )
        }
    }

    return (
        <Layout>
            <div className="flex w-80 items-center justify-center 
                relative mb-4">
                    <h1 className=" font-medium text-2xl">Exclusive Products</h1>
            </div>
            <input 
            type="text" placeholder="Search a product"
            className=" rounded-lg border border-black w-80 mb-4 p-4 
            focus:outline-none" 
            onChange={(event) => context.setSearchByTitle(event.target.value)}
            ></input>
            <div className=" grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
                renderView()
            }
            </div>
            <ProductDetail></ProductDetail>
            <CheckoutSiteMenu></CheckoutSiteMenu>
        </Layout>
    )
}

export default Home