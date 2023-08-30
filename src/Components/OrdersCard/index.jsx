import { ChevronRightIcon } from "@heroicons/react/24/solid"

const OrdersCard = (pros) => {
    const { totalPrice, totalProducts } = pros
    return (
    <div className="flex justify-between items-center mb-3 w-80
    border border-black p-4 rounded-lg">
        <div className="flex justify-between w-full">
            <p className="flex flex-col font-medium text-lg">
            <span>01.02.23</span>
            <span>{totalProducts} articles</span>
            </p>
            <p className="flex justify-between items-center gap-2">
            <span className=" font-medium text-2xl">${totalPrice}</span>
            <ChevronRightIcon className="h-6 w-6 text-black 
            cursor-pointer"></ChevronRightIcon>
            </p>
        </div>
    </div>)
}

export default OrdersCard
