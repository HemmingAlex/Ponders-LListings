import React from 'react'

function Modal({source, alt}) {
    return (
        <div className="w-screen h-screen bg-white fixed inset-0 flex">

<img className="m-auto" src={source} alt={alt} width={600} height={600} />
            
        </div>
    )
}

export default Modal;
