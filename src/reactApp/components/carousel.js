import React from "react";
import img1 from "../img/2(1).webp";
import img2 from "../img/user3.webp";
import img3 from "../img/user6.webp";
import img4 from "../img/user4.webp";
import img5 from "../img/user5.webp";
import img6 from "../img/user.webp";

const Carousel = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="fw-bold mb-4">
              WAS DIE TEILNEHMER DER FAM-TOUR SAGEN?
            </h2>
          </div>
          <div className="col-md-12">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="swiper-slide">
                    <div className="text-center">
                      <img src={img1} alt="img" className="img-fluid" />
                    </div>
                    <p>
                      Besonders schön war für mich der herzliche Empfang und die
                      Freundlichkeit, mit der Ihr Euch alle um uns gekümmert
                      habt. Ich hatte sofort das Gefühl, wirklich willkommen zu
                      sein in Usbekistan!
                    </p>
                    <p>
                      Der Aufenthalt in Buxoro und Samarkand war wirklich sehr,
                      sehr eindrucksvoll. Das war schon lange Zeit ein grosser
                      Traum von mir, um so glücklicher war ich, als ich die
                      Einladung von Euch bekommen habe. Und selbst, wenn man
                      vorher viel über die Seidenstrasse, Ihre Geschichte und
                      Ihre Kulturdenkmäler gelesen hat, verschlägt es einem
                      förmlich die Sprache, wenn man dann selbst vor diesen
                      grossartigen Schätzen der Weltgeschichte steht!
                    </p>
                    <p>
                      Ich möchte mich wirklich noch einmal ganz herzlich für die
                      wunderbare, wirklich rührende Betreuung bedanken, die wir
                      bei Euch erleben durften. Von Dir, von Mischa (ich weiss
                      gar nicht, wie man seinen richtigen Namen richtig
                      schreibt…), von Volodja und all den anderen. Raxmat!!!
                    </p>
                    <hr />
                    <p className="text-danger">— Frank</p>
                    <p>Geschäftsführer, Rosenheimer Reiseservice - November</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="swiper-slide">
                    <img src={img2} alt="img2" />
                    <p className="text">
                      Unsere Idee war, unser Programm zu erweitern und nach
                      Usbekistan zu kommen.
                      <br />
                      <br />
                      Unseren Touristen würden wir sagen, dass sie alles, was
                      sie vorher über das Land dachten, vergessen sollten. Sie
                      sollten sich mit der langen Geschichte beschäftigen, mit
                      den Besonderheiten des Landes und beruhigt reisen, denn es
                      ist ein sicheres Land, es ist ein schönes Land.
                      <br />
                      <br />
                      Bevor wir hierher kommen, hatten wir sicher nicht die
                      richtigen Vorstellungen. Man denkt ja bei einem
                      islamischen Land, es ist nicht sicher, man muss die
                      Einschränkungen erleben. Aber, das ist nicht der Fall und
                      wir haben das Glück, mit Silk Road Destinations zu
                      arbeiten. Sie haben diese Reise für uns organisiert.
                    </p>
                    <hr />
                    <p>— Klaus Weiss</p>
                    <p>Gründer, AlbaTours – Juni 2018.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="swiper-slide">
                    <img src={img3} alt="img3" />
                    <p className="text">
                      Ich wollte immer mal, auf die Spuren der alten
                      Seidenstraße. Ich habe mich jetzt für Usbekistan
                      entschieden, mit Silk Road Destinations. Wir sehen
                      unglaublich viel. Ich fühle mich sehr sehr sicher. Ich
                      fühle mich sehr gut aufgehoben, begleitet von
                      Dolmetschern, die jeweils unsere Sprache sprechen.
                      <br />
                      <br />
                      Das war sehr gute Idee und ich kann das jedem nur
                      empfehlen.
                    </p>
                    <hr />
                    <p>— Rana Meske</p>
                    <p>
                      Geschäftsführerin, Seniorenausflüge und Kurzreisen –
                      November 2017.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="swiper-slide">
                    <img src={img4} alt="img4" />
                    <p className="text">
                      Ich bin auf Einladung von Silk Road Destinations hier und
                      bedanke mich ganz herzlich für die Einladung. Es gefällt
                      mir sehr gut hier in Usbekistan. Ich bin überrascht von
                      der Freundlichkeit der Menschen, von dem guten Essen.
                    </p>
                    <hr />
                    <p>— Harald Müller</p>
                    <p>Geschäftsführer, Dinos Reisen – März 2017.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="swiper-slide">
                    <img src={img5} alt="img5" />
                    <p className="text">
                      Ich bin total überrascht, über die Freundlichkeit, die
                      Gastfreundlichkeit, die wirklich auch gute Küche, die man
                      ohne weiteres hier genießen kann und eben auch über die
                      Agentur. Es klappt alles wunderbar. Es ist gut organisiert
                      und ich bin sehr zufrieden.
                    </p>
                    <hr />
                    <p>— Theodor Valerius</p>
                    <p>Geschäftsführer, Reisebüro Valerius – August 2017.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="swiper-slide">
                    <img src={img6} alt="img6" />
                    <p className="text">
                      Es war wirklich alles gut organisiert und die Gruppe war
                      klasse. Der Verlauf war gut geplant, die Hotels alle sehr
                      gut. Die Zugfahrt eine super Idee! Die Besichtigungen der
                      Hotels haben einen guten Eindruck vermittelt.
                    </p>
                    <hr />
                    <p>— Claudia Busch</p>
                    <p>
                      Geschäftsführer, Rosenheimer Reiseservice - November,
                      2015.
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

export default Carousel;
