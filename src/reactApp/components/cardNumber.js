import React, { useState } from "react";
import icon1 from "../img/icon-1.webp";
import icon2 from "../img/icon-6.webp";

const Cardnumber = () => {
  const [open, setOpen] = useState(false);

  function handlerOpen() {
    setOpen(true);
  }
  function handlerClose() {
    setOpen(false);
  }
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="p-2 bg-light">
              <div className="row">
                <div className="col-md-2">
                  <div className="rela">
                    <p className="fw-bold text-center number">1</p>
                    <span className="tag">TAG</span>
                  </div>
                </div>
                <div className="col-md-10">
                  <p className="fw-bold pt-2">
                    ANKUNFT UND TASCHKENT CITY TOUR
                  </p>
                  <p className="mb-3 text-num">
                    Ankuft in Taschkent. Transfer zum Hotel, wo Sie sich mit
                    anderen Teilnehmern treffen. Danach ist die Entdeckung der
                    usbekischen Hauptstadt Taschkent. Gegen Abend Transfer zum
                    Bahnhof und Anstieg an Bord des Schnellzuges „Afrosiob“.
                    Abfahrt nach Buchara um 18:45. Ankunft um 22:34. Transfer
                    zum Hotel.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="p-2 pb-5 bg-light">
              <div className="row">
                <div className="col-md-2">
                  <div className="rela">
                    <p className="fw-bold text-center number">2</p>
                    <span className="tag">TAG</span>
                  </div>
                </div>
                <div className="col-md-10">
                  <p className="fw-bold pt-2">BUCHARAS AUTHENTIZITÄT ERLEBEN</p>
                  <p className="mb-3 text-num">
                    Frühstück im Hotel. Heute besuchen Sie die Denkmäler von
                    antiker Welt der Geschichte Usbekistans.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="p-2 bg-light">
              <div className="row">
                <div className="col-md-2">
                  <div className="rela">
                    <p className="fw-bold text-center number">3</p>
                    <span className="tag">TAG</span>
                  </div>
                </div>
                <div className="col-md-10">
                  <p className="fw-bold py-2 m-0">
                    BESUCH IN EINER TYPISCH USBEKISCHEN FAMILIE IM DORF MITAN
                  </p>
                  <p className="mb-3 text-num">
                    Fahrt ins Dorf Mitan von Buchara. Erleben Sie usbekische
                    Gastfreundschaft. Kontakt mit Einheimischen. Danach ist die
                    Fahrt nach Samarkand.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="p-2 pb-4 bg-light">
              <div className="row">
                <div className="col-md-2">
                  <div className="rela">
                    <p className="fw-bold text-center number">4</p>
                    <span className="tag">TAG</span>
                  </div>
                </div>
                <div className="col-md-10">
                  <p className="fw-bold pt-2">ENTDECKUNG VON SAMARKAND</p>
                  <p className="mb-3 text-num">
                    Heute erleben Sie die älteste und bekannteste Stadt
                    Usbekistans. Geniessen Sie die Magie der Türkis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="p-2 bg-light">
              <div className="row">
                <div className="col-md-2">
                  <div className="rela">
                    <p className="fw-bold text-center number">5</p>
                    <span className="tag">TAG</span>
                  </div>
                </div>
                <div className="col-md-10">
                  <p className="fw-bold pt-2">WORKSHOP IN SAMARKAND</p>
                  <p className="mb-3 text-num">
                    An diesem Tag haben Sie Möglichkeit, alle Informationen über
                    die Reiseangebote in Usbekistan bekommen. Nach dem Workshop
                    weitere Entdeckungen in Samarkand.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="p-2 bg-light pb-4">
              <div className="row">
                <div className="col-md-2">
                  <div className="rela">
                    <p className="fw-bold text-center number">6</p>
                    <span className="tag">TAG</span>
                  </div>
                </div>
                <div className="col-md-10">
                  <p className="fw-bold pt-2">FAHRT NACH TASCHKENT</p>
                  <p className="mb-3 text-num">
                    Heute fahren Sie von Samarkand durch die “Hungersteppe” nach
                    Taschkent. Die Möglichkeit noch eine Seite von Usbekistan zu
                    entdecken.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="p-2 bg-light">
              <div className="row">
                <div className="col-md-2">
                  <div className="rela">
                    <p className="fw-bold text-center number">7</p>
                    <span className="tag">TAG</span>
                  </div>
                </div>
                <div className="col-md-10">
                  <p className="fw-bold pt-2">GUTEN FLUG!</p>
                  <p className="mb-3 text-num">
                    Transfer zum Flughafen. Heimflug.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <button
              id="open1"
              className="btn btn-warning text-num fw-bold"
              onClick={handlerOpen}
            >
              AUSFÜHRLICHES PROGRAMM HERUNTERLADEN
            </button>
          </div>
        </div>
      </div>
      <div className={open ? "active1" : "noactive1"} id="modal-container1">
        <div className="modal-container1" id="container1">
          <div className="popup1">
            <div className="text-end">
              <button
                id="close1"
                className="border-0 fs-5 p-1"
                onClick={handlerClose}
              >
                x
              </button>
            </div>
            <div className="row">
              <div className="col-md-12 mb-3 text-center">
                <p className="text-black">
                  Bestellen Sie hier einen Anruf und wir werden Sie zurückrufen:
                </p>
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="name">Vor- und Nachname</label>
                <div className="inp">
                  <input type="text" id="name" className="form-control" />
                  <img src={icon1} alt="icon1" className="icon2" />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="name">Phone</label>
                <div className="inp">
                  <input type="text" id="name" className="form-control" />
                  <img src={icon2} alt="icon2" className="icon2" />
                </div>
              </div>
              <div className="col-md-12">
                <button className="btn w-100">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardnumber;
