import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="anyworka__blog section__padding" id="blog">
      <div className="anyworka__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, we are blogging about it
        </h1>
      </div>
      <div className="anyworka__blog-container">
        <div className="anyworka__blog-container_groupA">
          <Article
            imgurl={blog01}
            Date="20 sept, 2023"
            title="Anyworka is an open Ai is the future. Lets get it now"
          />
        </div>
        <div className="anyworka__blog-container_groupB">
          <Article
            imgurl={blog01}
            Date="20 sept, 2023"
            title="Join us in shaping the future of technology View careers"
          />
          <Article
            imgurl={blog02}
            Date="20 sept, 2023"
            title="Transforming work and creativity with AI Explore our products"
          />
          <Article
            imgurl={blog03}
            Date="20 sept, 2023"
            title="Pioneering research on the path to AGI Learn about our research"
          />
          <Article
            imgurl={blog04}
            Date="20 sept, 2023"
            title="Creating safe AGI that benefits all of humanity Learn about OpenAI"
          />
          <Article
            imgurl={blog05}
            Date="20 sept, 2023"
            title="Anyworka is an open Ai is the future. Lets get it now"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
