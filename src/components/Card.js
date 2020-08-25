import React from 'react';


const Card =({id,name,email})=>{

    return(

        <div className='  bg-light-green tc w6 dib    br3 pa2 ma2  grow bw shadow-5'>
            <img alt='robots'  src={`https://robohash.org/${id}`} />
            <div>
                <h2 className='f3'> {name} </h2>
                <p className='f4'>{email} </p>
            </div>
        </div>

   );
 }

export default Card;
