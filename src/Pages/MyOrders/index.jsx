import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCardContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
    const context = useContext(ShoppingCardContext)

    return (
        <>
            <Layout className='bg-red-100'>
            MyOrders
            {
                context.order.map((order, index) => {
                    <Link key={index} to={`/my-orders/${order.id}`}>
                    <OrdersCard
                     totalPrice={order.totalPrice} 
                     totalProducts={order.totalProducts}>
                     </OrdersCard>
                    </Link>
                })
            }
            </Layout>
        </>
    )
}

export default MyOrders
