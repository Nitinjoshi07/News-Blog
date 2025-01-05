import React, { useState, useEffect } from "react";

function NewsAnalytics() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=bitcoin&apiKey=02281c15ae6c464aa2d7194938139e40"
        );
        const data = await response.json();
        setNews(data.articles.slice(0, 32)); // Fetch up to 32 articles for a large grid
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Latest News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {isLoading ? (
          Array(8) // Skeleton loaders
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="rounded overflow-hidden shadow-lg p-4 animate-pulse bg-gray-100"
              >
                <div className="h-48 bg-gray-300 rounded mb-4"></div>
                <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
              </div>
            ))
        ) : news.length > 0 ? (
          news.map((article, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-full h-48 object-cover"
                src={article.urlToImage || "/img/default-news.jpg"}
                alt={article.title || "News Image"}
              />
              <div className="px-4 py-4">
                <h3 className="font-bold text-md mb-2">
                  {article.title?.slice(0, 60) || "Untitled News"}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {article.description?.slice(0, 100) || "No description available."}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm font-semibold"
                >
                  Read more
                </a>
              </div>
              <div className="px-4 py-2">
                {article.source?.name && (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
                    #{article.source.name}
                  </span>
                )}
                {article.publishedAt && (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-700 text-base col-span-full">
            No news available.
          </p>
        )}
      </div>
    </div>
  );
}

export default NewsAnalytics;
