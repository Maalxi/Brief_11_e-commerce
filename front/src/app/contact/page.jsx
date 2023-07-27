import Layout from "../Layout";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

import React from "react";

import "./PageContact.css";

export default function Contact() {
  return (
    <Layout>
      <div className="formContactAll">
        <div className="formContactGauche">
          <form className="formContact">
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
            <p>Adresse : 24 Av. Daniel Rops, <br/>73000 Chambéry</p>
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
