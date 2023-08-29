import { XMarkIcon } from "@heroicons/react/24/solid"

const OrderCard = (pros) => {
    const { id, title, imageUrl, price, handleDelete } = pros
    return (
    <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
            <figure className="w-20 h-20">
                <img className="w-full h-full rounded-lg object-cover"
                src={imageUrl} alt={title}/>
            </figure>
            <p className="text-sm font-medium">{title}</p>
        </div>
        <div className="flex items-center gap-2">
            <p className="text-lg font-medium">{price}</p>
            <XMarkIcon onClick={() => handleDelete(id)} className="h-6 w-6 stroke-black/60 stroke-1
                fill-black cursor-pointer"/>
        </div>
    </div>)
}

export default OrderCard