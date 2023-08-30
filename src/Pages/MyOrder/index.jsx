import { useContext } from 'react'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'
import { ShoppingCardContext } from '../../Context';

function MyOrder() {
  const context = useContext(ShoppingCardContext)
  console.log(context.order)
  return (
    <Layout>
      MyOrder
      <div className='flex flex-col w-80'>
        {
          context.order?.slice(-1)[0].product.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder