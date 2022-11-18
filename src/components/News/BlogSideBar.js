import React from "react";
import BlogImg1 from "../../assets/images/blog/p1.jpg";
import BlogImg2 from "../../assets/images/blog/p2.jpg";
import BlogImg3 from "../../assets/images/blog/p3.jpg";
import BlogImg4 from "../../assets/images/blog/p4.jpg";

function BlogSideBar() {
  return (
    <div className="blog-sidebar">
      <aside className="widget widget-trend-post">
        <h3 className="widget-title">Popular Posts</h3>
        <div className="popular-post">
          <a href="single-post.html">
            <img src={BlogImg1} alt="" />
          </a>
          <h5>
            <a href="single-post.html">Using creative problem Solving</a>
          </h5>
          <span>March 10, 2020</span>
        </div>
        <div className="popular-post">
          <a href="single-post.html">
            <img src={BlogImg2} alt="" />
          </a>
          <h5>
            <a href="single-post.html">Fundamentals of UI Design</a>
          </h5>
          <span>Jan 14, 2020</span>
        </div>
        <div className="popular-post">
          <a href="single-post.html">
            <img src={BlogImg3} alt="" />
          </a>
          <h5>
            <a href="single-post.html">Making music with Other people</a>
          </h5>
          <span>April 12, 2020</span>
        </div>
        <div className="popular-post">
          <a href="single-post.html">
            <img src={BlogImg4} alt="" />
          </a>
          <h5>
            <a href="single-post.html">
              Brush strokes energize Trees in paintings
            </a>
          </h5>
          <span>July 4, 2020</span>
        </div>
      </aside>
    </div>
  );
}

export default BlogSideBar;
