import React from "react";
import "../../assets/scss/Contact.scss";
import { FiMessageCircle } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import swal from "sweetalert";
import "../../assets/scss/Contact.scss";

function Contactus() {
  const Alert = () => {
    swal({
      title: "Təşəkkürlər!",
      text: "Fikirləriniz bizim üçün önəmlidir!",
      icon: "success",
    });
  };

  return (
    <div>
      <div className="container d-flex justify-content-between contactContainer">
        <div className="left">
          <div className="up">
            <h1>Baş ofis</h1>
            <div className="d-flex ">
              <div className="icon d-flex flex-column">
                <GoLocation className="icons" />
                <MdLocalPhone className="icons" />
                <FiMessageCircle className="icons" />
              </div>
              <div className="d-flex flex-column">
                <p>Binəqədi rayon, 8 mkr, İbrahimpaşa Dadaşov küçəsi 91</p>
                <p>Telefon: 055-515-85-01</p>
                <p>Email: info@arazmarket.az</p>
              </div>
            </div>
          </div>
          <div className="down">
            <h3>Hörmətli müştərilərimiz,</h3>
            <p>
              Araz Market olaraq sizə daha yaxşı xidmət göstərmək üçün
              tələb, təklif və şikayətləriniz bizim üçün önəmlidir.
            </p>
            <p>
              Əlaqə telefonu: <span> (012) 924</span>
            </p>
          </div>
        </div>
        <div className="right">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12149.095148055123!2d49.824108451664785!3d40.4249360329706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d37134d600b%3A0x7f44c8aac6ade78c!2sAraz%20Supermarket%20%7C%20Azadl%C4%B1q!5e0!3m2!1str!2saz!4v1696941607698!5m2!1str!2saz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div className="container d-flex justify-content-between">
        <div className="rating">
          <h1>Bizi dəyərləndirin!</h1>
          <div className="inputContainer">
            <button onClick={Alert}>Ok</button>
            <input type="radio" name="clr1" />
            <input type="radio" name="clr1" />
            <input type="radio" name="clr1" />
            <input type="radio" name="clr1" />
            <input type="radio" name="clr1" />
            <input type="radio" name="clr1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
