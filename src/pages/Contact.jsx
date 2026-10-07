import React, { useState } from "react";
import PageTitle from "../components/pagetitle";
import * as emailjs from "emailjs-com";

import { contactConfig } from "../assets/fake-data/dataContact";
import { Helmet } from "react-helmet";

function Contact(props) {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    phone: "",
    alertmessage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thankyou for your message",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          setFormdata({
            alertmessage: `Failed to send!`,
            variant: "danger",
            show: true,
          });
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <PageTitle title="Contact Uss" />

      <section className="tf-section tf-contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-md-12">
              <div
                className="content-about m-b50 mobie-40"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="tf-title st2 m-b17">
                  <h4 className="title">Have a question </h4>
                </div>
                <p className="m-r-40">
                  Fill up the Form and ou team will get back to within 24 hrs
                </p>
              </div>
              <form
                action="contact/contact-process.php"
                className="form-contact"
                id="contactform"
                data-aos="fade-right"
                data-aos-duration="800"
                onSubmit={handleSubmit}
              >
                <fieldset>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset>
                  <textarea
                    placeholder="Type your Messege"
                    rows="5"
                    tabIndex="4"
                    name="message"
                    className="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </fieldset>
                <button className="tf-button btn-effect" type="submit">
                  <span className="boder-fade"></span>
                  <span className="effect">Send Message</span>
                </button>
                <p className={`alert-subscribe ${formData.variant}`}>{formData.alertmessage}</p>
              </form>
            </div>
            <div className="col-xl-7  col-md-12">
              <div
                className="contact-details"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="adress wrap-fx">
                  <div className="location">
                    <h6>Location</h6>
                    <ul>
                      <li>2163 Phillips Gap Rd West Jefferson,NC, 28694</li>
                    </ul>
                  </div>
                  <div className="mail">
                    <h6>Contact Us</h6>
                    <ul>
                      <li>+1 666 8888</li>
                      <li>Info.avitex@gmail.com</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="flat-map wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <iframe
                    title="map"
                    className="map-content"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4457.30210514409!2d144.9550716623184!3d-37.818421643591336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20%C3%9Ac!5e0!3m2!1svi!2s!4v1631871760998!5m2!1svi!2s"
                    width="1720"
                    height="655"
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
