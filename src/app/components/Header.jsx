import React from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";

function Header({ Toggle }) {
    return (
        <div className='container-fluid'>
            <div className='row d-flex justify-content between flex-wrap'>
                <div className="col-lg-4  shadow-lg py-4"><span><TiThMenuOutline onClick={Toggle} /></span></div>
                <div className="col-lg-4 shadow-lg py-4">q</div>
                <div className="col-lg-4 shadow-lg py-4"><div className='text-end'><FaUserAlt /></div></div>
            </div>
            <div className='row g-4 py-2 flex-wrap'>
                <div className="col-lg-6 px-2 shadow-lg">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis magni iusto rerum sapiente aperiam earum fugit eius officia. Cum nesciunt odit soluta ab quisquam, officiis voluptatem eligendi iusto laboriosam.</p>
                </div>
                <div className="col-lg-6 shadow-lg">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis magni iusto rerum sapiente aperiam earum fugit eius officia. Cum nesciunt odit soluta ab quisquam, officiis voluptatem eligendi iusto laboriosam.</p>
                </div>
            </div>
        </div>
    )
}

export default Header