import React, { Component } from "react";
import Blog1 from "./../img/blog-1.jpg";
import Blog2 from "./../img/blog-2.jpg";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const BlogBox = (props) => {
  return (
    <div className="blog-box col-12 col-md-6 col-lg-6 col-xl-6 mb-5">
      <img src={props.bgImage} alt="" className="bg-img" />
      <Fade top>
        <div className="box-info">
          <div className="date-box">
            <p>{props.date}</p>
          </div>
          <h5>{props.head}</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            ratione.
          </p>
          <button>Read more</button>
        </div>
      </Fade>
    </div>
  );
};
export class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <div className="container mt-3 mb-3 ">
          <div className="row ">
            <div className="blog-head col-12 mb-5">
              <Fade top>
                <h5>Our events & blogs</h5>
                <h2>From the journals</h2>
              </Fade>
            </div>
          </div>

          <div className="row">
            <BlogBox
              bgImage={Blog1}
              date="22 Aug"
              head="Donec tellus Nulla lorem"
            />
            <BlogBox
              bgImage={Blog2}
              date="29 Dec"
              head="Remaining Essentially"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
