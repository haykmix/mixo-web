import { Formik } from "formik";
import React from "react";

function Forms({ innerRef, text }) {
  const { title, subtitle, items, form } = text.homeContact;
  const data = [
    {
      icon: <i className="fal fa-home"></i>,
    },
    {
      icon: <i className="fal fa-phone"></i>,
    },
    {
      icon: <i className="fal fa-envelope"></i>,
    },
    {
      icon: [
        <a className="fac" href="/">
          <i className="fab fa-instagram"></i>
        </a>,
        <a className="lin" href="/">
          <i className="fab fa-linkedin-in"></i>
        </a>,
      ],
    },
  ];
  const renderItems = (items) => {
    return items.map((item, index) => {
      if (item.data) {
        return (
          <div className="single-info">
            <h5>{item.title}</h5>
            <p>
              {!Array.isArray(data[index].icon) ? data[index].icon : null}
              {item.data}
            </p>
          </div>
        );
      } else {
        return (
          <div className="ab-social">
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
    subject: "",
    message: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) errors.firstName = form.errors[0];
    if (!values.lastName) errors.lastName = form.errors[0];
    if (!values.subject) errors.subject = form.errors[0];
    if (!values.message) errors.message = form.errors[0];

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = form.errors[1];
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.phone)) {
      errors.phone = form.errors[2];
    }

    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <section className="contact-section">
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
                      /* and other goodies */
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div
                          className="col-md-12 d-flex"
                          style={{ gap: "10px" }}
                        >
                          <label htmlFor="" className="input-label">
                            <input
                              type="text"
                              name="firstName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstName}
                              placeholder="First Name"
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
                              placeholder="Last Name"
                            />
                            <span>
                              {errors.lastName &&
                                touched.lastName &&
                                errors.lastName}
                            </span>
                          </label>
                        </div>
                        <div
                          className="col-md-12 d-flex"
                          style={{ gap: "10px" }}
                        >
                          <label htmlFor="" className="input-label">
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              placeholder="Email Address"
                            />
                            <span>
                              {errors.email && touched.email && errors.email}
                            </span>
                          </label>
                          <label htmlFor="" className="input-label">
                            <input
                              type="number"
                              name="phone"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                              placeholder="Phone Number"
                            />
                            <span>
                              {errors.phone && touched.phone && errors.phone}
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
                              placeholder="Subject"
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
                              placeholder="How can we help?"
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
                            <input id="terms-conditions" type="checkbox" />
                            <label htmlFor="terms-conditions">
                              I agree to the <a href="/">Terms & Conditions</a>
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12 text-right">
                          <button type="submit" disabled={isSubmitting}>
                            Submit
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
