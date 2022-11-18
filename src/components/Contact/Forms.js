import React from "react";

function Forms() {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact--info-area">
                <h3>Get in touch</h3>
                <p>
                  Looking for help? Fill the form and start a new adventure.
                </p>
                <div className="single-info">
                  <h5>Headquaters</h5>
                  <p>
                    <i className="fal fa-home"></i>
                    744 New York Ave, Brooklyn, Kings,
                    <br /> New York 10224
                  </p>
                </div>
                <div className="single-info">
                  <h5>Phone</h5>
                  <p>
                    <i className="fal fa-phone"></i>
                    (+642) 245 356 432
                    <br />
                    (+420) 336 476 328
                  </p>
                </div>
                <div className="single-info">
                  <h5>Support</h5>
                  <p>
                    <i className="fal fa-envelope"></i>
                    bisy@support.com
                    <br />
                    help@education.com
                  </p>
                </div>
                <div className="ab-social">
                  <h5>Follow Us</h5>
                  <a className="fac" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="lin" href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <h4>Let’s Connect</h4>
                <p>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
                <form action="#" method="post" className="row">
                  <div className="col-md-6">
                    <input type="text" name="f-name" placeholder="First Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="l-name" placeholder="Last Name" />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-md-12">
                    <input type="text" name="subject" placeholder="Subject" />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <div className="condition-check">
                      <input id="terms-conditions" type="checkbox" />
                      <label htmlFor="terms-conditions">
                        I agree to the <a href="/">Terms & Conditions</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <input type="submit" name="submit" value="Send Message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bisylms-map">
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
      </div>
    </>
  );
}

export default Forms;
