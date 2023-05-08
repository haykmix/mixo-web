import React from "react";

function Blog({ text }) {
  const handleShowBlogText = (text) => {
    let path = window.location.pathname;
    let number = path.substr(-1, path.indexOf("-"));

    return (
      <>
        <h1>{text.homeNews.posts[number].title}</h1>
        <br></br>
        {text.homeNews.posts[number].text.map((item, index) => {
          if (typeof item === "string" || item instanceof String) {
            return <p key={index}>{item}</p>;
          } else {
            return (
              <div key={index}>
                <h3>{item.title}</h3>
                <br></br>
                <p>{item.text}</p>
              </div>
            );
          }
        })}
      </>
    );
  };
  return (
    <>
      <div className="single-post-area">
        {handleShowBlogText(text)}
      </div>
    </>
  );
}

export default Blog;
