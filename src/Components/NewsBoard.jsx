import NewsItem from "./NewsItem";
import usefetch from '../Hooks/usefetch'
import Loading from "./Loading";

// eslint-disable-next-line react/prop-types
const NewsBoard = ({ category }) => {

  const data = usefetch(category)

  //Early return
  if(data === null){return <Loading/>}
 
  return (
    <div>
      <h2 className="text-center mt-3">
        Latest <span className="text-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {data.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      }).reverse()} 
      </div>
    </div>
  );
};

export default NewsBoard;