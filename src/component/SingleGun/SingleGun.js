import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    // console.log(props);
    const [modalData, setModalData] = useState({});
    const {name,bullet,action,img} = props.gun
    return (
        <div>
            <div className="card w-90 h-90 bg-base-100 shadow-xl mt-10 mb-10">
                <figure><img className='w-100 h-48' src={img} alt="img Gun" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <div className="card-actions">
                    <div className="badge badge-outline">{action}</div>
                    <div className="badge badge-outline">{bullet}</div>
                    <div className='mt-5'>
                        <button onClick={props.countIncrease} className="btn btn-warning mr-3">Add to card</button>

                        <label onClick={() => setModalData(props?.gun)} htmlFor="my-modal-3" className="btn modal-button">open modal</label>
                    </div>
                </div>
            </div>
            </div>
                {modalData && (
                <Modal modalData={modalData} setModalData= {setModalData} key = {modalData.id}></Modal>
      )}
        </div>
    );
};

export default SingleGun;