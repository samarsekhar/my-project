import React from "react";
import { useParams } from "react-router-dom";
import articles from "./articles_content";

const ArticlesPage = () => {
  //   const params = useParams();
  //   const articleId = params.articleId;
  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);

  return (
    <div>
      <h1>{article.title}</h1>
      {article.content.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
};

export default ArticlesPage;
