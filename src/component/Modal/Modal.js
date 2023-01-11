import React from 'react';

const Modal = ({modalData, setModalData}) => {
    //  console.log(modalData)
    const {img, name , category, capacity} = modalData
    return (
        <div>    
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label onClick={()=>setModalData()} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={img} alt="" />
                    <h3 className="text-lg font-bold">{name}</h3>
                    <h4>{category}</h4>
                    <h4>{capacity}</h4>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            </div>
            </div>
        </div>
    );
};

export default Modal;