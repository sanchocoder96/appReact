import React from "react";
import icon1 from "../img/icon-1(1).webp";
import icon2 from "../img/icon-2.webp";
import icon3 from "../img/icon-3.webp";
import icon4 from "../img/icon-4.webp";
import icon5 from "../img/icon-5(1).webp";

const Warum = () => {
  return (
    <>
      <div className="warum py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="fw-bold mb-4">
                WARUM SIE FAM-TOUR NICHT VERPASSEN SOLLTEN?
              </h2>
            </div>
            <div className="col-md-12 bg-white p-3 mb-3">
              <div className="row">
                <div className="col-md-1">
                  <div>
                    <img src={icon1} alt="icon1" className />
                  </div>
                </div>
                <div className="col-md-10 ms-3">
                  <div>
                    <p className="fw-bold fs-5">
                      Bedingtes kostenloses Info Tour
                    </p>
                    <p className="fs-5">
                      Silk Road Destinations zahlt die Kosten für Internationale
                      Flüge, und Kosten von Inforeise, nach der Bedienung von 6
                      Kunden, die von dem Teilnehmer der Info Reise nach der
                      Rückkehr gesendet wurden, zurück.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 bg-white p-3 mb-3">
              <div className="row">
                <div className="col-md-1">
                  <div>
                    <img src={icon2} alt="icon2" className />
                  </div>
                </div>
                <div className="col-md-10 ms-3">
                  <div>
                    <p className="fw-bold fs-5">
                      Sonderpreis für den Mitkommenden
                    </p>
                    <p className="fs-5">
                      Sie können noch jemanden für solchen Preis mitbringen.
                      Sparen Sie bis zu 400 Euro für ihn/sie bei dieser Reise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 bg-white p-3 mb-3">
              <div className="row">
                <div className="col-md-1">
                  <div>
                    <img src={icon3} alt="icon3" className />
                  </div>
                </div>
                <div className="col-md-10 ms-3">
                  <div>
                    <p className="fw-bold fs-5">Warum mit uns?</p>
                    <p className="fs-5">
                      - 20 Jahre auf dem touristischen Markt Usbekistans. - Das
                      professionelle Team von Guides (französisch-,
                      italienisch-, deutsch-, englisch- und russischsprachigen
                      ). - Wir bieten qualitativ hochwertige Dienstleistungen. -
                      Individuelles Konzept für jeden Partner. - Zuverlässige
                      Partner in Zentralasien.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 bg-white p-3 mb-3">
              <div className="row">
                <div className="col-md-1">
                  <div>
                    <img src={icon4} alt="icon4" className />
                  </div>
                </div>
                <div className="col-md-10 ms-3">
                  <div>
                    <p className="fw-bold fs-5">
                      Ungewöhnliche Produkte-die Grundlage für Wachstum
                    </p>
                    <p className="fs-5">
                      Heben Sie sich von der Masse ab. Überraschen Sie Ihren
                      Markt mit ungewöhnlichen Lösungen und interessanten
                      Projekten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 bg-white p-3 mb-3">
              <div className="row">
                <div className="col-md-1">
                  <div>
                    <img src={icon5} alt="icon5" className />
                  </div>
                </div>
                <div className="col-md-10 ms-3">
                  <div>
                    <p className="fw-bold fs-5">
                      Was ist der Zweck der Info Reise?
                    </p>
                    <p className="fs-5">
                      Der Zweck des Projektes – während der Info Reise unserer
                      Mitglieder mit Tourismusindustrie Usbekistans bekannt zu
                      machen und unseren Partnern die Möglichkeiten unseres
                      Unternehmens zu zeigen. Unsere Info-Tour ist eine
                      Möglichkeit, Nützliches mit Vergnügen zu verbinden.
                      Schöner Urlaub und nützliche Kontakte und Wissen.
                    </p>
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

export default Warum;
