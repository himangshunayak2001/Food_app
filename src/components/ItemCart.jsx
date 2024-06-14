import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { removeFromCart, incrementQty, decrementQty } from '../redux/slices/CartSlice';
const ItemCart = ({ id, name, img, price, qty }) => {
    const dispatch = useDispatch()
    return (
        <>
            <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
                <MdDelete
                    onClick={() => {
                        dispatch(removeFromCart({ id, img, name, price, qty }));
                        toast(`${name} Removed!`, {
                            icon: '👋',
                        });
                    }}
                    className='absolute right-7 text-gray-600 cursor-pointer' />
                <img src={img}
                    alt=""
                    className='w-[50px] h-[50px]'
                />

                <div className='leading-5' >
                    <h2 className='font-bold tetx-gray-800'>{name}</h2>
                    <div className='flex justify-between' >
                        <span className='text-green-500 font-bold'>₹{price}</span>
                        <div className='mt-2 flex justify-center items-center absolute right-7  gap-4'>
                            <FaMinus
                                onClick={() => qty >= 1 ? dispatch(decrementQty({ id })) : (qty = 0)}
                                className='p-1 rounded-sm mx-2 text-sm text-bold transition-all mb-5 ease-linear border border-gray-800  scale-150  hover:bg-red-300 text-gray-600' />
                            <span className='pb-2'>{qty}</span>
                            <FaPlus
                                onClick={() => qty > 1 ? dispatch(incrementQty({ id })) : (qty = 0)}
                                className='p-1 rounded-sm mx-2  text-sm text-bold transition-all mb-5 ease-linear  border border-gray-800  text-gray-600 hover:bg-green-300 scale-150' />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ItemCart