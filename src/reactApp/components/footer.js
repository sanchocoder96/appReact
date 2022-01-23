import React from "react";
import logo from '../img/logo.webp'
const Footer = () => {
  return (
    <>
      <div className="bg-dark pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="chiz" />
            </div>
            <div className="col-md-3 py-4">
              <img src={logo} alt='logo' className="img-fluid logo" />
            </div>
            <div className="col-md-3 mt-5">
              <p className="text-white">
                Usbekistan, 140157, Samarkand
                <br />
                Kuk Saroy 1-place
              </p>
            </div>
            <div className="col-md-3 mt-5">
              <p className="text-white">
                <i className="fas fa-phone" aria-hidden="true" />
                +998(66) 231 05 48
              </p>
            </div>
            <div className="col-md-3 mt-5">
              <p className="text-white">
                <i className="fa fa-envelope" aria-hidden="true" />
                fuzuliy@silkroaddestinations.com
              </p>
            </div>
            <div className="col-md-12">
              <div className="chiz" />
            </div>
            <div className="col-md-12 text-center">
              <p className="text-white mt-4">
                © COPYRIGHT 2022 - SILK ROAD DESTINATIONS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
