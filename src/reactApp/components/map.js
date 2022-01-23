import React from 'react';
import uzMap from '../img/uz-map.webp'

const Map = () => {
    return (
        <div>
      <div className="container">
  <div className="row">
    <div className="col-md-12 text-center">
      <h2 className="fw-bold mb-3">PROGRAMMVERLAUF DER SCHNUPPERREISE</h2>
      <h4>7 TAGE / 6 NÄCHTE</h4>
      <h4 className="mb-3">TASCHKENT - BUCHARA - DORF MITAN - SAMARKAND - TASCHKENT</h4>
      <div className="col-md-10 offset-md-1">
        <img src={uzMap} alt='map' className="img-fluid" />
      </div>
    </div>
  </div>
</div>

        </div>
    );
}

export default Map;
