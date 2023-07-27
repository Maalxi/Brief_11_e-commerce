import Image from "next/image";
import Layout from "../Layout";

import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

import React from "react";

import "./PageContact.css";
import { base_url } from "../APICalls/base_url";

export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    const response = await fetch(base_url + '127.0.0.1:8001/sendEmail', {
      method: "POST",
      body: JSON.stringify({
        email: data.get("email"),
        first: data.get("first"),
        last: data.get("last"),
        phone: data.get("phone"),
        subject: data.get("subject"),
        message: data.get("message"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Votre message a été envoyé !");
    } else {
      alert("Il y a eu une erreur lors de l'envoi de votre message.");
    }
  };
  
  return (
    <Layout>
      <div className="formContactAll">
        <div className="formContactGauche">
        <form className="formContact" onSubmit={handleSubmit}>
            <h2 className="h2Contact">Contactez nous !</h2>
            <div className="email InputFormContact">
              <label htmlFor="frm-email">Email</label>
              <input
                id="inputEmailContact"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="name InputFormContact">
              <label htmlFor="frm-first">Prénom</label>
              <input
                className="inputContact"
                id="frm-first"
                type="text"
                name="first"
                autoComplete="given-name"
                required
              />
              <div>
                <div className="InputFormContact">
                  <label htmlFor="frm-last">Nom</label>
                  <input
                    className="inputContact"
                    id="frm-last"
                    type="text"
                    name="last"
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>
              <div className="phone InputFormContact">
                <label htmlFor="frm-phone">Téléphone</label>
                <input
                  className="inputContact"
                  id="frm-phone"
                  type="text"
                  name="phone"
                  autoComplete="tel"
                  required
                />
              </div>
              <div className="subject InputFormContact">
                <label htmlFor="frm-subject">Sujet</label>
                <input
                  className="inputContact"
                  id="frm-subject"
                  type="text"
                  name="subject"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>
            <div className="message InputFormContact">
              <label htmlFor="frm-message">Message</label>
              <textarea
                className="inputContact"
                id="frm-message"
                rows="6"
                name="message"
              ></textarea>
            </div>
            <div className="buttonContact">
              <button type="submit">Envoyez</button>
            </div>
          </form>
        </div>

        <div className="formContactDroite">
          <div className="Address">
            <div className="iconContact">
              <ImLocation />
            </div>
            <p>
              Adresse : 24 Av. Daniel Rops, <br />
              73000 Chambéry
            </p>
          </div>

          <div className="Telephone">
            <div className="iconContact">
              <BsFillTelephoneFill />
            </div>
            <p>Téléphone : 07 98 03 29 44</p>
          </div>

          <div className="Mail">
            <div className="iconContact">
              <SiMinutemailer />
            </div>
            <p>Email : Simplon@simplon.com</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
