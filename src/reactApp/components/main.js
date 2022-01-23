import React from 'react';
import fam from '../img/fam-trip2.jpeg'

const Main = () => {
    return (
        <div>
      <main>
  <div className="container mt-4">
    <div className="row">
      <div className="col-md-6">
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="p-2 bg-light">
              <p className="fw-bold m-0 p-0">KOSTENLOSE REISE</p>
              <p className="mb-3 ps-2">Nach der erfolgreichen Tour schicken Sie uns 6 Reisenden und
                erhalten Sie Ihre
                Kosten (Flug-Economy, FAM-Kosten, Zugfahrt) zurück.
              </p>
              <p className="fw-bold">Bemerkung: <span className="fw-normal">
                  Der Teilnehmer bucht die internationalen Flüge auch selbst.</span></p>
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="p-2 bg-light">
              <p className="fw-bold m-0 p-0">1(SIE) + 1(IHR REISEPARTNER)</p>
              <p className="mb-3 ps-2">Wollen Sie nicht alleine verreisen? Bringen Sie Ihren Freund,
                Ihr Familienmitglied, Ihr Ehepaar für gleichen Preis mit.
              </p>
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="p-2 bg-light">
              <p className="fw-bold m-0 p-0">PROFI-GUIDE</p>
              <p className="mb-3 ps-2">Sie werden von Guides mit langjährigen Erfahrungen begleitet.</p>
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="p-2 bg-light">
              <p className="fw-bold m-0 p-0">ONE DAY - ONE TIME EXPERIENCE</p>
              <p className="mb-3 ps-2">Responsible Tourism Day im Dorf Mitan, Gewinner des
                Responsible Tourism Awards ToDo 2014.
              </p>
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="p-2 bg-light">
              <p className="fw-bold m-0 p-0">SICHERE REISE IM NEUEN REISEZIEL</p>
              <p className="mb-3 ps-2">Usbekistan in der Tabelle als eines der sichersten Länder der Welt.
              </p>
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="p-2 bg-light">
              <p className="fw-bold m-0 p-0">UNESCO - WELTERBEN</p>
              <p className="mb-3 ps-2">Sie besuchen die Städte wie Samarkand und Buchara, die man gesehen
                haben muss.</p>
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="p-2 bg-light">
              <p className="fw-bold m-0 p-0">REISE MIT SILK ROAD DESTINATIONS</p>
              <p className="mb-3 ps-2">Seit 20 Jahren lang (Beginn ihrer Tätigkeit), der Reiseanbieter der
                zufriedenen Touristen in Usbekistan,
                Turkmenistan, Tadschikistan und Kirgisistan.
              </p>
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="p-2 bg-light">
              <p className="fw-bold m-0 p-0">REICHE INFORMATIONSQUELLE</p>
              <p className="mb-3 ps-2">Bei Ihrer Teilnahme an Workshop bekommen Sie von unserem Team
                Präsentationen, Karten, Programmen für Ihr zukünftiges Geschäft.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="text-center my-4">
          <h2 className="fw-bold">FAM TOUR VIDEO</h2>
        </div>
        <div className="text-center">
          <img src={fam} alt='fam' className="img-fluid img-youtbe" />
        </div>
        <div className="ps-4">
          <div className="p-2 bg-light mb-3 mt-5 pt-4">
            <p className="fw-bold m-0 p-0">1(SIE) + 1(IHR REISEPARTNER)</p>
            <p className="mb-3 ps-2">Wollen Sie nicht alleine verreisen? Bringen Sie Ihren Freund,
              Ihr Familienmitglied, Ihr Ehepaar für gleichen Preis mit.
            </p>
          </div>
          <div className="p-2 bg-light mb-3">
            <p className="fw-bold m-0 p-0">1(SIE) + 1(IHR REISEPARTNER)</p>
            <p className="mb-3 ps-2">Wollen Sie nicht alleine verreisen? Bringen Sie Ihren Freund,
              Ihr Familienmitglied, Ihr Ehepaar für gleichen Preis mit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

        </div>
    );
}

export default Main;
