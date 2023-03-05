import React from "react";
import "./article.css";

const Article = ({ imgurl, Date, title }) => {
  return (
    <div className="anyworka__blog-container_article">
      <div className="anyworka__blog-container_article-image">
        <img src={imgurl} alt="blog" />
      </div>
      <div className="anyworka__blog-container_article-content">
        <div>
          <p> {Date} </p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
