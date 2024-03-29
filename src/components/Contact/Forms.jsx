import { Field, Formik } from "formik";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import emailjs from "@emailjs/browser";

import instagram from "../../assets/images/social/instagram.png";
import linkedin from "../../assets/images/social/linkedin.png";

function Forms({ innerRef, text }) {
  const { title, subtitle, items, form } = text.homeContact;
  const data = [
    {
      icon: (
        <i
          className="fal fa-home"
          style={{
            color: "#fff",
            fontFamily: "Font Awesome 5 Pro !important",
          }}
        ></i>
      ),
    },
    {
      icon: (
        <i
          className="fal fa-phone"
          style={{
            color: "#fff",
            fontFamily: "Font Awesome 5 Pro !important",
          }}
        ></i>
      ),
    },
    {
      icon: (
        <i
          className="fal fa-envelope"
          style={{
            color: "#fff",
            fontFamily: "Font Awesome 5 Pro !important",
          }}
        ></i>
      ),
    },
    {
      icon: [
        <a
          className="fac"
          href="https://www.instagram.com/mixo.drink/"
          target="blank"
        >
          <img
            src={instagram}
            alt=""
            width={20}
            height={20}
            style={{ marginTop: -5 }}
          />
        </a>,
        <a
          className="lin"
          href="https://es.linkedin.com/company/mixodrink"
          target="blank"
        >
          <img
            src={linkedin}
            alt=""
            width={20}
            height={20}
            style={{ marginTop: -5 }}
          />
        </a>,
      ],
    },
  ];

  const renderItems = (items) => {
    return items.map((item, index) => {
      if (item.data) {
        return (
          <div className="single-info" key={index}>
            <h5>{item.title}</h5>
            <p>{item.data}</p>
          </div>
        );
      } else {
        return (
          <div className="ab-social" key={index}>
            <h5>{item.title}</h5>
            <p>
              {Array.isArray(data[index].icon)
                ? data[index].icon.map((item) => {
                    return item;
                  })
                : null}
            </p>
          </div>
        );
      }
    });
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    company: "",
    position: "",
    subject: "",
    message: "",
    checkbox: "",
  };

  const contactForm = useRef();
  const [emailSended, setEmailSended] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) errors.firstName = form.errors[0];
    if (!values.lastName) errors.lastName = form.errors[0];
    if (!values.subject) errors.subject = form.errors[0];
    if (!values.location) errors.location = form.errors[0];
    if (!values.company) errors.company = form.errors[0];
    if (!values.position) errors.position = form.errors[0];
    if (!values.message) errors.message = form.errors[0];
    if (!values.checkbox) errors.checkbox = form.errors[0];

    if (!values.email) {
      errors.email = form.errors[0];
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = form.errors[1];
    }

    if (!values.phone) {
      errors.phone = form.errors[0];
    } else if (!/^[679]{1}[0-9]{8}$/.test(values.phone.replace(/\s/g, ""))) {
      errors.phone = form.errors[2];
    }

    if (!values.checkbox) errors.checkbox = form.errors[0];

    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    emailjs
      .sendForm(
        "service_e20fvmh",
        "template_7mxez0m",
        contactForm.current,
        "JC6TfpE6R6LwzwFwc"
      )
      .then(
        function (response) {
          setEmailSended(true);
        },
        function (error) {
          setEmailSended(false);
        }
      );
  };

  return (
    <>
      <section className="contact-section" style={{ backgroundColor: "#000" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact--info-area">
                <h3>{title}</h3>
                <p>{subtitle}</p>
                {renderItems(items)}
              </div>
            </div>
            <div className="col-md-8" ref={innerRef}>
              <div className="contact-form">
                <h4>{form.title}</h4>
                <p>{form.subtitle}</p>
                <div>
                  <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={onSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit} ref={contactForm}>
                        <div
                          className="col-md-12"
                          style={{ gap: "10px" }}
                        >
                          <label htmlFor="" className="input-label">
                            <input
                              type="text"
                              name="firstName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstName}
                              placeholder={form.inputName}
                            />
                            <span>
                              {errors.firstName &&
                                touched.firstName &&
                                errors.firstName}
                            </span>
                          </label>
                          <label htmlFor="" className="input-label">
                            <input
                              type="text"
                              name="lastName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.lastName}
                              placeholder={form.inputLastname}
                            />
                            <span>
                              {errors.lastName &&
                                touched.lastName &&
                                errors.lastName}
                            </span>
                          </label>
                        </div>
                        <div
                          className="col-md-12"
                          style={{ gap: "10px" }}
                        >
                          <label htmlFor="" className="input-label">
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              placeholder={form.inputEmail}
                            />
                            <span>
                              {errors.email && touched.email && errors.email}
                            </span>
                          </label>
                          <label htmlFor="" className="input-label">
                            <input
                              type="tel"
                              name="phone"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                              placeholder={form.inputPhone}
                            />
                            <span>
                              {errors.phone && touched.phone && errors.phone}
                            </span>
                          </label>
                        </div>
                        <div
                          className="col-md-12"
                          style={{ gap: "10px" }}
                        >
                          <label htmlFor="" className="input-label">
                            <input
                              type="text"
                              name="location"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.location}
                              placeholder={form.inputLocation}
                            />
                            <span>
                              {errors.location &&
                                touched.location &&
                                errors.location}
                            </span>
                          </label>
                          <label htmlFor="" className="input-label">
                            <input
                              type="text"
                              name="company"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.company}
                              placeholder={form.inputCompany}
                            />
                            <span>
                              {errors.company &&
                                touched.company &&
                                errors.company}
                            </span>
                          </label>
                        </div>
                        <div
                          className="col-md-12"
                          style={{ gap: "10px" }}
                        >
                          <label htmlFor="" className="input-label">
                            <input
                              type="text"
                              name="position"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.position}
                              placeholder={form.inputPosition}
                            />
                            <span>
                              {errors.position &&
                                touched.position &&
                                errors.position}
                            </span>
                          </label>
                        </div>
                        <div className="col-md-12">
                          <label htmlFor="" className="input-label">
                            <input
                              type="text"
                              name="subject"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.subject}
                              placeholder={form.inputSubject}
                            />
                            <span>
                              {" "}
                              {errors.subject &&
                                touched.subject &&
                                errors.subject}
                            </span>
                          </label>
                          <label htmlFor="" className="input-label">
                            <textarea
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                              name="message"
                              placeholder={form.inputMessage}
                            ></textarea>
                            <span>
                              {errors.message &&
                                touched.message &&
                                errors.message}
                            </span>
                          </label>
                        </div>
                        <div className="col-md-6">
                          <div className="condition-check">
                            <label
                              htmlFor="terms-conditions"
                              className="input-label"
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Field
                                type="checkbox"
                                name="checkbox"
                                value="checked"
                                id="checkbox-terms"
                              />
                              <p style={{ margin: "0px 5px 0px 0px" }}>
                                {form.checkbox[0]}{" "}
                              </p>
                              <a href="/">{form.checkbox[1]}</a>
                              <span>
                                {errors.checkbox &&
                                  touched.checkbox &&
                                  errors.checkbox}
                              </span>
                            </label>
                          </div>
                        </div>
                        <div
                          className="col-md-12 text-right d-flex align-items-center justify-content-end"
                          style={{ gap: "10px" }}
                        >
                          {emailSended ? (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{ color: "green" }}
                              />
                              <h6>{form.emailSended}</h6>
                            </>
                          ) : (
                            ""
                          )}
                          <button type="submit" disabled={isSubmitting}>
                            {form.buttonSubmit}
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="bisylms-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.719249001063!2d2.1460253326436036!3d41.380184038091954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a27de6725ae5%3A0xd831c7b60f5fd4cf!2sC%2F%20d&#39;Enten%C3%A7a%2C%2094%2C%2008015%20Barcelona!5e0!3m2!1ses!2ses!4v1668012592345!5m2!1ses!2ses"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </>
  );
}

export default Forms;
