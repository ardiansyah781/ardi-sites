import React from "react";
import "./work.css";
import picture from "../../assets/product.png";

const Work = () => {
  return (
    <section id="work">
      <div className="workDesign">
        <div className="workTypo">
          <span>work</span>
          <span>work</span>
          <span>work</span>
        </div>
        <span className="workOpening">Featured Projects</span>
      </div>
      <div className="workContainerMain">
        <div className="workMain">
          <img src={picture} alt="" className="workImage" />
          <div className="workText">
            <span className="workNumber">01.</span>
            <div className="workTitle">
              <span>Contoh Produk 1</span>
              <span>Tagline Produk 1</span>
            </div>
          </div>
        </div>
        <div className="workLink">
          <a href="#" className="workLinked">
            <i class="uil uil-arrow-up-left"></i>
            Online Preview
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
