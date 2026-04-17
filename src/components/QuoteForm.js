import React from "react";

const QuoteForm = () => {
    return (
        <>
            <div className="form">
                <div className="request">
                    <h5>REQUEST A FREE QUOTATION! </h5>
                    <p>Guaranteed Response within One Business Day!</p>
                </div>
                <div className="Business">
                    <input type="text" id="fname" name="fname" placeholder="your Full Name"></input>
                    <input type="text" id="email" name="email" placeholder="your email "></input>
                    <input type="tel" id="phone" name="phone" placeholder="123-45-678"></input>
                    <textarea name="Describe" id="requirement" placeholder="Describe your requirement"></textarea>
                    <button>submit now</button>
                </div>
            </div>
        </>
    );
};

export default QuoteForm;
