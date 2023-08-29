import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css';
import { useContext } from 'react';
import { ShoppingCardContext } from '../../Context';

const ProductDetail = () => {
    const context = useContext(ShoppingCardContext)
    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed bg-white
        right-2 border border-black rounded-lg top-20`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XMarkIcon className="h-6 w-6 stroke-black/60 stroke-1
                fill-black cursor-pointer" onClick={() => context.closeProductDetail()
                }/>
            </div>
            <figure className='px-6'>
                <img className=' w-full h-full rounded-lg'
                src={context.productToShow.images ? context.productToShow.images[0] : ''} 
                alt={context.productToShow.title}></img>
            </figure>
            <p className='flex flex-col p-6'>
                <span className=' font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>${context.productToShow.title}</span>
                <span className='font-light text-xs'>${context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail



