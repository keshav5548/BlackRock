import React, { useState, useEffect } from "react";
import "./News.css";
const News = () => {
  const [value, setvalue] = useState([]);
  const api = async () => {
    let response = await fetch(
      "https://newsapi.org/v2/everything?q=finance&from=2023-07-11&sortBy=publishedAt&apiKey=2fa1039c7cbe45baa0f93b35233a6252"
    );
    let result = await response.json();
    console.log(result);
    console.log(result.articles);
    setvalue(result.articles);
  };
  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <div className="grid gap-2 lg:grid-cols-4">
        {value.map((a, key) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
            <img
              className="object-cover w-full h-48"
              src={a.urlToImage}
              alt="News"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">{a.title}</h4>
              <p className="mb-2 leading-normal">{a.content}</p>
              <a
                href={a.url}
                className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
