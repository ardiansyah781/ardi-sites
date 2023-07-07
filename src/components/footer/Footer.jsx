import React from "react";
import picture from "../../assets/ceb.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footerText">
        <img src={picture} alt="" />
        <span>Come & Join Us!</span>
      </div>
      <div className="footerLink">
        <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=ardia6916@gmail.com">
          ardia6916@gmail.com
        </a>
        <a href="https://wa.me/085159766623">+62 851 5976 6623</a>
      </div>
      <div className="footerSosmed">
        <a href="https://instagram.com/ansyh14_?igshid=MzNlNGNkZWQ4Mg==">Instagram</a>
        <a href="https://www.tiktok.com/@nothingtosay613?_t=8djfcyEZKxW&_r=1">Tiktok</a>
        <a href="https://youtube.com/@ArdiAnsyah-qu6cs">Youtube</a>
        <a href="http://line.me/ti/p/~idli_ne">Line</a>
      </div>
    </section>
  );
};

export default Footer;