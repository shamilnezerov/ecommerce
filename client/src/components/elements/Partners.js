import React from "react";
import "../../assets/scss/Araz.scss";
import 'bootstrap/dist/css/bootstrap.css';
import Image from "../../assets/image/image";

function Partners() {
  return (
    <div className="container partners ">
      <h1 className="mb-5">Partnyorlar</h1>
      <div className=" d-flex imgContainer ra ">
        <img className="rounded" src={Image.Umico}  alt=""/>
        <img className="rounded-4" src={Image.Pepco}alt="" />

        <img src={Image.Bir}alt="" />
        <img src={Image.Irsad}alt="" />
        <img src={Image.Kontakt}alt="" />
        <img src={Image.Azersun}alt="" />
      </div>
    </div>
  );
}

export default Partners;
