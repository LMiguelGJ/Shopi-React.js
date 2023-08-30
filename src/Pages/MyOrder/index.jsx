import { useContext } from 'react'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'
import { ShoppingCardContext } from '../../Context';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function MyOrder() {
  const context = useContext(ShoppingCardContext)
  console.log(context.order)
  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative">
        <Link to='/My-Orders' className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black 
                        cursor-pointer"></ChevronLeftIcon>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80 gap-2 mt-6'>
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