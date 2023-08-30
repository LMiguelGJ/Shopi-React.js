import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCardContext } from "../../Context";
import { Link } from "react-router-dom";


function MyOrders() {
    const context = useContext(ShoppingCardContext)

    return (
        <>
            <Layout>
                <div className="flex w-80 items-center justify-center relative">
                    <h1>My Orders</h1>
                </div>
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/My-Orders/${index}`}>
                    <OrdersCard
                        totalPrice={order.totalPrice} 
                        totalProducts={order.totalProducts}>
                    </OrdersCard>
                    </Link>
                ))
            }
            </Layout>
        </>
    )
}

export default MyOrders
