"use client"
import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import Popup from 'reactjs-popup';

const Modal = () => (
  <Popup
    trigger={<li>see all features</li>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> <h2>features</h2> </div>
        <div className="content">
             <ul>
             <li><FaCircleCheck/>Lorem ipsum dolor sit amet consectetur nulla!</li>
             <li><FaCircleCheck/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nulla!</li>
             <li><FaCircleCheck/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
             <li><FaCircleCheck/>Lorem ipsum dolor sit amet  Libero, nulla!</li>
             <li><FaCircleCheck/>Lorem  adipisicing elit. Libero, nulla!</li>
             
             </ul>
        </div>
        <div className="actions">

          <button
            className="button btn-pink"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
);
export default Modal