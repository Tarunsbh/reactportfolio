import "./certificatesection.css";
import iitrcer from "./images/certificates/IITR-GL-FSD-F2F-22-93.jpg";
import bs4 from "./images/certificates/1674991353066-certificate.png";
import bs5 from "./images/certificates/1685877487535-certificate.png";
import js from "./images/certificates/1675114487920-certificate.png";

function Certificatesection() {
  return (
    <>
      <section class="certificatesection">
        <hr />
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2>CERTIFICATES</h2>
            </div>
          </div>
          <div class="container d-flex justify-content-around pt-5">
            <div class="card">
              <img class="card-img-top" src={iitrcer} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Full Stack Development</h5>
                <button
                  className="btn btn-primary m-2 p-2"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1_c9VTxtz4VFRJYP3EEoRyJcamOL80Vqg/view?usp=drive_link",
                      "_blank"
                    )
                  }
                >
                  View Certificate
                </button>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={bs4} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">BootStrap4 </h5>
                <button
                  className="btn btn-primary m-2 p-2"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1Gsc9XhYsCCeDw_PCZqKjGG-tOAAVkxdb/view?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  View Certificate
                </button>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={bs5} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">BootStrap5 </h5>
                <button
                  className="btn btn-primary m-2 p-2"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/16faZTQX54kxu5Y5VCAwhl3q4s_Kogk_W/view?usp=drive_link",
                      "_blank"
                    )
                  }
                >
                  View Certificate
                </button>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={js} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">JavaScript </h5>
                <button
                  className="btn btn-primary m-2 p-2"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1du5K0k1vz7S5WUSOzTP1tkpYvOP9gHRV/view?usp=drive_link",
                      "_blank"
                    )
                  }
                >
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificatesection;
