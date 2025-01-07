
import React from 'react';

import { Link } from 'react-router-dom'
import { mobileData } from '../data/mobiles'
const Mobiles = () => {
    // here we restrict only 5 images on single line
    const firstFiveImages=mobileData.slice(0,5);
    return (  
        <>
        <div className="proTitle">
        <h2>Mobiles</h2>
      </div>
<div className='proSection'>
    {
        firstFiveImages.map((item)=>{
return(
    <div className='imgBox'>
        {/* obtain data from mobileData using item */}
        <Link to='/mobiles'>
        <img className='proImage'src={item.image}/>
        </Link>
    </div>
)
            }
        )
    }
</div>
</>
    );
}

 
export default Mobiles;