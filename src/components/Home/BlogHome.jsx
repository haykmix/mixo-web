import React from "react";
import newsOne from "../../assets/images/blog/news-1.jpg";
import newsTwo from "../../assets/images/blog/news-2.jpg";
import newsThree from "../../assets/images/blog/news-3.jpg";

function BlogHomeOne({ className, text }) {
  let data = [
    {
      title: text.homeNews.posts[0].title,
      image: newsOne,
      date: text.homeNews.posts[0].date,
      text: text.homeNews.posts[0].text,
      publisher: text.homeNews.posts[0].publisher,
    },
    {
      title: text.homeNews.posts[1].title,
      image: newsThree,
      date: text.homeNews.posts[1].date,
      text: text.homeNews.posts[1].text,
      publisher: text.homeNews.posts[1].publisher,
    },
    {
      title: text.homeNews.posts[2].title,
      image: newsTwo,
      date: text.homeNews.posts[2].date,
      text: text.homeNews.posts[2].text,
      publisher: text.homeNews.posts[2].publisher,
    },
  ];
  return (
    <>
      <section className={`appie-blog-area pt-90 pb-95 ${className || ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">{text.homeNews.title}</h3>
                <p>Different layouts and styles for team sections.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {data.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div
                    className="appie-blog-item mt-30 wow animated fadeInUp"
                    data-wow-duration="3000ms"
                    data-wow-delay="200ms"
                  >
                  <div className="blog-meta">
                        <ul>
                          <li>{item.date}</li>
                          {item.publisher}
                        </ul>
                      </div>
                    <div className="thumb">
                      <img
                        src={item.image}
                        alt=""
                        width={"200px"}
                        height={"270px"}
                      />
                    </div>
                    <div className="content">
                      <h3 className="title">
                        <a href={"/news/single-news-" + index}>{item.title}</a>
                      </h3>
                      <a href="/news/single-news">
                        Learn More <i className="fal fa-arrow-right" />
                      </a>
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

export default BlogHomeOne;
