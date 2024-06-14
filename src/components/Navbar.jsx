import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SeacrhSlice'
const Navbar = () => {

  const dispatch = useDispatch()
  return (
    <>
        <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
            <div>
                <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
                <h1 className='text-2xl font-bold'>Nayak Pizza</h1>
            </div>

            <div>
                <input 
                className='p-3 border my-2 border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]'
                type="search" 
                name="search" 
                placeholder='Search your food' 
                autoComplete='off' 
                onChange={(e) => dispatch(setSearch(e.target.value))}
                id="" />
            </div>
        </nav>
    </>
  )
}

export default Navbar