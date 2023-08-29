import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCardContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils' 
import './styles.css';
import { Link } from 'react-router-dom';


const CheckoutSiteMenu = () => {
    const context = useContext(ShoppingCardContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProduct.filter(product => product.id != id)
        context.setCartProduct(filteredProducts)
        context.setCount(filteredProducts.length)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            data: '18.08.23',
            product: context.cartProduct,
            totalProducts: context.cartProduct.length,
            totalPrice: totalPrice(context.cartProduct)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProduct([])
        console.log(context.order)
    }

    return (
        <aside 
        className={`${context.isCheckoutsitemenuOpen ? 'flex' : 'hidden'} product-detail flex-col fixed bg-white
        right-2 border border-black rounded-lg top-20`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon className="h-6 w-6 stroke-black/60 stroke-1
                fill-black cursor-pointer" onClick={() => context.closeCheckoutSiteMenu()}/>
            </div>
            <div className='px-6 overflow-y-auto flex-1'>
            {
                context.cartProduct.map(product => 
                    (<OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        handleDelete={handleDelete}
                        ></OrderCard>))
            }
            </div>
            <div className='px-6 py-6'>
                <p className='flex justify-between items-center'>
                    <span className=' font-normal text-2xl'>Total:</span>
                    <span className=' font-medium text-2xl'>${totalPrice(context.cartProduct)}</span>
                </p>
                <Link to='/My-Order/lasts'>
                    <button className='w-full bg-black py-3 mt-6 rounded-lg font-bold text-lg text-white' onClick={() => handleCheckout() }>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSiteMenu



