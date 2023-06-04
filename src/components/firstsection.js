import "bootstrap/dist/css/bootstrap.css";
import "./firstsection.css";
import rightimg from "./images/19362653-removebg-preview.png";
function Firstsection() {
  return (
    <section class="firstsection">
      <div class="container">
        <div class="row">
          <div class="col-6 d-flex justify-content-center align-items-center">
            <div class="leftsection justify-content-end">
              Welcome to my portfolio website
              <div>
                I'm{" "}
                <span class="text-yellow">
                  <i>Tarun Sabharwal</i>
                </span>{" "}
                a skilled,
              </div>
              <div>Full Stack Developer</div>
              <div className="button">
                <button
                  className="btn btn-primary m-2 p-2"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1o8R429ll3JRNxm2FzZkyH7rFLx8Le5JO/view",
                      "_blank"
                    )
                  }
                >
                  Download Resume
                </button>
                <button
                  className="btn btn-primary m-2 p-2"
                  onClick={() =>
                    window.open("https://github.com/Tarunsbh", "_blank")
                  }
                >
                  Visit GitHub
                </button>
              </div>
            </div>
          </div>
          <div class="col-6 d-block">
            <div class="leftsection justify-content-end">
              <img src={rightimg} alt="rightimg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Firstsection;
