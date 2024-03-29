import React, { useState } from "react";

function FaqHomeOne({ className, text }) {
  const [showQues, setQues] = useState(1);
  const openQuestion = (value) => {
    setQues(value);
  };

  return (
    <>
      <section className={`appie-faq-area pb-95 pt-90 ${className || ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title" style={{ color: "#fff" }}>
                  {text.homeFaq.title}
                </h3>
                <p>{text.homeFaq.subtitle}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {text.homeFaq.items.map((item, index) => {
              return (
                <div className="col-lg-6" key={index}>
                  <div
                    className="faq-accordion wow fadeInRight mt-30"
                    data-wow-duration="1500ms"
                  >
                    <div
                      className="accrodion-grp animated fadeIn faq-accrodion wow"
                      data-wow-duration="1500ms"
                      data-grp-name="faq-accrodion"
                    >
                      <div
                        onClick={() => openQuestion(index)}
                        className={`accrodion ${
                          showQues === index ? "active" : ""
                        }`}
                      >
                        <div className="accrodion-inner">
                          <div className="accrodion-title">
                            <h4>{item.q}</h4>
                          </div>
                          <div
                            className="accrodion-content"
                            style={{
                              display: showQues === index ? "block" : "none",
                            }}
                          >
                            <div className="inner">
                              <p>{item.a}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqHomeOne;
