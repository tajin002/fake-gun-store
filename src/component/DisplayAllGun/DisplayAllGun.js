import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const DisplayAllGun = ({countIncrease}) => {
    const [guns, setGuns] = useState([])
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl text-center mt-5'>Welcome To Gun <span className='text-4xl text-warning'>Fake</span> Store</h1>
            <p className='mt-5 px-20'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero odit, a cumque illum in distinctio voluptas ad quisquam eum ullam? Voluptatibus omnis deleniti vero enim, nihil repellat et, sunt illum, aliquid totam odio. Quas, delectus. Ea, sed enim. Quam sequi deleniti odio dolorum modi nulla provident, sunt ratione aut repellendus ut placeat maxime laudantium. Consequatur pariatur reiciendis expedita, laudantium mollitia aliquam totam officiis magni, repellendus suscipit earum, consequuntur illum quos.</p>

            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10'> 
            {
                    guns.map(gun => <SingleGun gun={gun} countIncrease={countIncrease} />)
            }
            </div>
        </div>
    );
};

export default DisplayAllGun;