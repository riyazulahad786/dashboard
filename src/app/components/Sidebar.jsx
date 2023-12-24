import React,{useState} from 'react'
import { AiFillApple } from "react-icons/ai";

function Sidebar() {
   
  return (
    <div>
        <div className='container-fluid py-2'>
           <div href='#' className='d-flex align-items-center text-center'>
            <div className='fs-5 text-center'>Amazon</div>
            </div>
             <hr/>
            <div className='text-white py-4'>
                <ul className='list-unstyled'>
                    <li className='py-2'> <AiFillApple /><span className='px-2'>Dashboard</span></li>
                    <li className='py-2'> <AiFillApple /><span className='px-2'>Dashboard</span></li>
                    <li className='py-2'> <AiFillApple /><span className='px-2'>Dashboard</span></li>
                    <li className='py-2'> <AiFillApple /><span className='px-2'>Dashboard</span></li>
                    <li className='py-2'> <AiFillApple /><span className='px-2'>Dashboard</span></li>
                    <li className='py-2'> <AiFillApple /><span className='px-2'>Dashboard</span></li>
                    <li className='py-2'> <AiFillApple /><span className='px-2'>Dashboard</span></li>
                    <li className='py-2'> <AiFillApple /><span className='px-2'>Dashboard</span></li>
                </ul>
            </div>
            <div className='user-section'>
              <div className='d-flex align-items-center justify-content-between '>
                <img src='/Profile.jpeg' className='img-fluid rounded-circle'/>
                <p className='px-1 fs-6 text-white'>Janny</p>
              </div>
            </div>
        </div>
      

    </div>
  )
}

export default Sidebar