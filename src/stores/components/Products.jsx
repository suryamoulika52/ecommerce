import React from 'react';
import Mobiles from './Mobiles';
import Computers from './Computers';
import Furniture from './Furniture';
import AC from './AC';
import Kitchen from './Kitchen';
import Men from './Men';
import Woman from './Woman';
import Watch from './Watch';
const Products = () => {
    return (  
<div>
<Mobiles/>
<Computers/>
<Watch/>
      <Men/>
      <Woman/>
      <Furniture/>
      <AC/>
      <Kitchen/>
</div>
    );
}
 
export default Products;
