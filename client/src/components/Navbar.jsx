import React from "react";

//logo
import TokenTitanLogo from "../Images/TokenTitanLogo.png"

const Navbar = ()=>{
    return(
        <div className="nav">
        <img className="logo" src={TokenTitanLogo} alt="TokenTitanLogo" />
            <div className="nav-items">
                <p className="nav-item"><span className="Token">Home</span></p>
                <p className="nav-item">About</p>
                <p className="nav-item">How to buy</p>
                <p className="nav-item">Buy Now</p>
                <button className="join-btn connect-btn">Connect Wallet</button>
            </div>
        </div>
    );
}

export default Navbar;