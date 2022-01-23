import React, { useState } from "react";
import logo from "../img/logo.webp";
import amir from "../img/amir54.webp";
import fuzuliy from "../img/fuzuliy.jpeg";
import icon1 from "../img/icon-1.webp";
import icon2 from "../img/icon-5.webp";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  function handlerOpen() {
    setOpen(true);
  }
  function handlerClose() {
    setOpen(false);
  }

  function handlerOpen2() {
    setOpen2(true);
  }
  function handlerClose2() {
    setOpen2(false); 
  }

  return (
    <>
      <div className="icon-fixed text-center" target='http://localhost:3000/'>
        <a href='https://www.facebook.com/'>
          <i className="fab fa-facebook-f" aria-hidden="true" />
        </a>
        <a href='https://www.linkedin.com/' target='http://localhost:3000/'>
          <i className="fab fa-linkedin" aria-hidden="true" />
        </a>
        <a href='https://www.whatsapp.com/' target='http://localhost:3000/'>
          <i className="fab fa-whatsapp" aria-hidden="true" />
        </a>
        <a href='https://www.telegram.org/' target='http://localhost:3000/'>
          <i className="fab fa-telegram" aria-hidden="true" />
        </a>
        <a href='https://www.viber.com/' target='http://localhost:3000/'>
          <i className="fab fa-viber" aria-hidden="true" />
        </a>
        <a href='https://www.twitter.com/' target='http://localhost:3000/'>
          <i className="fab fa-twitter" aria-hidden="true" />
        </a>
      </div>

      <header>
        <nav>
          <div className="container pt-3">
            <div className="row">
              <div className="col-md-2 col-sm-3 col-3 mb-3">
                <img src={logo} alt="logo" className="img-fluid logo" />
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-3">
                <button className="btn yellow pad btn-sm-sm">
                  <a href="#form" className="nav-link text-dark p-0 m-0">
                    MELDEN SIE SICH AN
                  </a>
                </button>
                <button onClick={handlerOpen} id="open" className="btn yellow btn-sm-sm">
                  BESTELLEN SIE EINEN ANRUF
                </button>
              </div>
              <div className="col-md-3 mb-3 mb-3 d-none d-lg-block">
                <div className="header-text">
                  <p className="text-dark fw-bold fs-5">Haben Sie Fragen?</p>
                  <p className="text-dark fw-bold fs-5">
                    Kontaktieren Sie uns!
                  </p>
                  <p className="text-dark fw-bold">
                    Tel: <span className="fw-normal">998662310548</span>
                  </p>
                  <p className="text-dark fw-bold">
                    Email:{" "}
                    <span className="fw-normal">
                      fuzuliy@silkroaddestinations.com
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-3 text-center mb-3 d-none d-lg-block">
                <div className="row">
                  <div className="col-md-6  rel1 px-3">
                    <img
                      src={fuzuliy}
                      alt="fuzuliy"
                      className=" p-1 shadow-sm fuzuliy"
                    />
                    <p className="title1">Fuzuliy</p>
                  </div>
                  <div className="col-md-6  rel2 px-3">
                    <img
                      src={amir}
                      alt="amir"
                      className=" amir shadow-sm p-1"
                    />
                    <p className="title2">Amir</p>
                  </div>
                </div>
              </div>
              <div className="col-md-1 col-3 col-sm-3 text-end text-sm-end d-block d-lg-none">
                <i class="fa fa-bars mt-4 fs-2" aria-hidden="true" id="open2" onClick={handlerOpen2}></i>
              </div>
            </div>
          </div>
        </nav>
        <div className="banner">
          <div className="container banerText">
            <div className="row">
              <div className="col-md-12 text-white text-center pt-5">
                <h1 className="fw-bold">FAM Tour 2022 in Usbekistan</h1>
                <p className="fw-bold display-3">525</p>
                <p className="fs-5 fw-bold">
                  Inforeise in Usbekistan extra für die Reiseexperten, die
                  sichere <br />
                  Reise machen und gerne anderen sichere Reise anbieten wollen.
                </p>
              </div>
              <div className="col-md-4 offset-md-4 text-center">
                <div className="row">
                  <div className="col-md-6">
                    <div className="data">
                      <p>16.03.2022-22.03.2022</p>
                      <p>08.06.2022-14.06.2022</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="data">
                      <p>03.08.2022-09.08.2022</p>
                      <p>02.11.2022-08.11.2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      <div id="modal-container" className={open ? "active" : "noactive"}>
        <div className="modal-container" id="container">
          <div className="popup">
            <div className="text-end">
              <button
                id="close"
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

      <div id="modal-container2" className={open2 ? "active2" : "noactive2"}>
        <div className="modal-container2" id="container2">
          <div className="popup2">
            <div className="text-end">
              <button
                id="close2"
                className="border-0 fs-5 p-1"
                onClick={handlerClose2}
              >
                x
              </button>
            </div>
            <div className="header-text">
                  <p className="text-dark fw-bold fs-5">Haben Sie Fragen?</p>
                  <p className="text-dark fw-bold fs-5">
                    Kontaktieren Sie uns!
                  </p>
                  <p className="text-dark fw-bold">
                    Tel: <span className="fw-normal">998662310548</span>
                  </p>
                  <p className="text-dark fw-bold">
                    Email:{" "}
                    <span className="fw-normal">
                      fuzuliy@silkroaddestinations.com
                    </span>
                  </p>
                </div>
            <div className="row">
                  <div className="col-md-6  rel1 px-3">
                    <img
                      src={fuzuliy}
                      alt="fuzuliy"
                      className=" p-1 shadow-sm fuzuliy"
                    />
                    <p className="title1">Fuzuliy</p>
                  </div>
                  <div className="col-md-6  rel2 px-3">
                    <img
                      src={amir}
                      alt="amir"
                      className=" amir shadow-sm p-1"
                    />
                    <p className="title2">Amir</p>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
