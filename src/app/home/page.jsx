'use client'
import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function page() {
    const [toggle, setToggle] = useState(true);

    const Toggle = () => {
        setToggle(!toggle);
    }
  return (
    <div className='container-fluid'>
       <div className="row">
       { toggle && <div className="col-lg-2 bg-secondary vh-100">
            <Sidebar />
          </div>}
          <div className="col-lg-10">
            <Header Toggle={Toggle}/>
          </div>
       </div>
    </div>
  )
}

export default page