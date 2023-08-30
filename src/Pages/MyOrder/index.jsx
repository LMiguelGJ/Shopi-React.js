import { useContext } from 'react'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'
import { ShoppingCardContext } from '../../Context';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function MyOrder() {
  const context = useContext(ShoppingCardContext)
  const currentPath =window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1)
  if (index === 'last') {index = context.order?.length - 1}

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 ">
        <Link to='/My-Orders' className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black 
                        cursor-pointer"></ChevronLeftIcon>
        </Link>
        <h1 className=" font-medium text-xl">My Order</h1>
      </div>
      <div className='flex flex-col w-80 gap-2 mt-6'>
        {
          context.order?.[index]?.product.map(product => (
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