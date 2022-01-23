import React from "react";
import icon1 from '../img/icon-1.webp'
import icon2 from '../img/icon-2(1).webp'
import icon3 from '../img/icon-3(1).webp'
import icon4 from '../img/icon-4(1).webp'
import icon5 from '../img/icon-5.webp'
import icon6 from '../img/icon-6.webp'
import icon7 from '../img/icon-7.webp'
 
const Form = () => {
  return (
    <>
      <div>
        <div className="sind bg-warning py-4" id="form">
          <h2 className="fw-bold text-center pb-4">
            SIND SIE INTERESSIERT? MELDEN SIE SICH AN!
          </h2>
          <div className="kub" />
        </div>
        <div className="pt-3 sind-img img-form">
          <div className="container pt-5">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="card  border-5 border-muted p-4 mb-5 rounded border-2 p-2">
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <h5 className="text-center">Anmeldeformular:</h5>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name">Vor- und Nachname</label>
                      <div className="inp">
                        <input type="text" id="name" className="form-control" />
                        <img src={icon1} alt='icon1' className="icon2" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="tel">Telefon</label>
                      <div className=" inp">
                        <input type="tel" id="tel" className="form-control" />
                        <img src={icon2} alt='icon2' className="icon2" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="agentur">Name der Agentur</label>
                      <div className="inp">
                        <input
                          type="text"
                          id="agentur"
                          className="form-control"
                        />
                        <img src={icon3} alt='icon3' className="icon2" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email">E-mail</label>
                      <div className="inp">
                        <input
                          type="text"
                          id="email"
                          className="form-control"
                        />
                        <img src={icon4} alt='icon4' className="icon2" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="adresse">Adresse der Agentur</label>
                      <div className="inp">
                        <input
                          type="text"
                          id="adresse"
                          className="form-control"
                        />
                        <img src={icon5} alt='icon5' className="icon2" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="web">Webseite</label>
                      <div className="inp">
                        <input type="text" id="web" className="form-control" />
                        <img src={icon6} alt='icon6' className="icon2" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="reis">Reisepassnummer</label>
                      <div className="inp">
                        <input type="text" id="reis" className="form-control" />
                        <img src={icon7} alt='icon7' className="icon2" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name">Bequeme Reisezeit</label>
                      <select id="select" value='salect' className="form-select">
                        <option selected value>
                          Auswählen
                        </option>
                        <option value="16.03-22.03.2022">
                          16.03-22.03.2022
                        </option>
                        <option value="08.06-14.06.2022">
                          08.06-14.06.2022
                        </option>
                        <option value="03.08-09.08.2022">
                          03.08-09.08.2022
                        </option>
                        <option value="02.11-08.11.2022">
                          02.11-08.11.2022
                        </option>
                      </select>
                    </div>
                    <div className="col-md-12 text-center">
                      <button className="btn btn-warning fw-bold w-100">
                        SENDEN
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center fw-bold mb-5">
                MÖCHTEN SIE IHRE INFOREISE SCHON BEZAHLEN?
              </h2>
            </div>
            <div className="col-md-6 offset-3">
              <div className="row">
                <div className="col-md-6">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <button className="btn btn-warning w-100 fw-bold">
                    KLICKEN SIE HIER!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
