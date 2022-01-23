import React from "react";
import img1 from '../img/1.png'
import img2 from '../img/3.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'
import img5 from '../img/5.png'
import zer1 from '../img/3.webp'
import zer2 from '../img/1.webp'
import zer3 from '../img/2(2).webp'

const Wie = () => {
  return (
    <>
      <div>
        <div className="wie bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mb-4">
                <h2 className="fw-bold">WIE KANN MAN SICH ANMELDEN?</h2>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-2 mb-3 offset-md-1 text-center">
                    <img src={img1} alt='img1' className="img-fluid mb-3" />
                    <p>
                      Sie melden sich per E-Mail an, wobei Sie das Formular für
                      die Teilnahme ausfüllen und schicken. Füllen Sie bitte die
                      Pflichtfelder aus, um die Herunterladung zu starten:
                    </p>
                  </div>
                  <div className="col-md-2 mb-3 text-center">
                    <img src={img2} alt='img2' className="img-fluid mb-3" />
                    <p>
                      Wir rufen Sie an, sobald wir Ihre Anfrage bekommen, um
                      Ihre Registrierung zu bestätigen.
                    </p>
                  </div>
                  <div className="col-md-2 mb-3 text-center">
                    <img src={img3} alt='img3' className="img-fluid mb-3" />
                    <p>
                      Sie überweisen den Betrag für die Reise, um Ihre Teilnahme
                      zu garantieren.
                    </p>
                  </div>
                  <div className="col-md-2 mb-3 text-center">
                    <img src={img4} alt='img4' className="img-fluid mb-3" />
                    <p>
                      Wir schicken Ihnen die Bestätigung und dadurch garantieren
                      die Buchung.
                    </p>
                  </div>
                  <div className="col-md-2 mb-3 text-center">
                    <img src={img5} alt='img5' className="img-fluid mb-3" />
                    <p>
                      Der Reisefahrer und Ihr deutschsprechender Reiseleiter
                      erwartet Sie am Flughafen. Willkommen in Usbekistan.
                    </p>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className=" text-center">
                      <a href="#form" className="p-0 m-0 nav-link text-white">
                        <button className="btn fw-bold text-uppercase">
                          Formular ausfüllen
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="zertifkate py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mb-4">
                <h2 className="fw-bold">ZERTIFIKATE UND LIZENZEN</h2>
              </div>
              <div className="col-md-6 offset-md-3">
                <div className="row">
                  <div className="col-md-4">
                    <img src={zer1} alt='zer1' className="img-fluid" />
                  </div>
                  <div className="col-md-4">
                    <img src={zer2} alt='zer2' className="img-fluid" />
                  </div>
                  <div className="col-md-4">
                    <img src={zer3} alt='zer3' className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wie;
