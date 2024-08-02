/* eslint-disable react/prop-types */
import { NEWS_DESC, NEWS_IMG } from "../constant/utils";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-flex flex-row flex-wrap align-content-between align-items-center justify-content-even my-3 mx-2 p-2"
      style={{ maxWidth: "345px" , minHeight: "400px"}}>
      <img
        src={src ? src : NEWS_IMG}
        style={{ maxHeight: "200px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}..</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 69)
            : NEWS_DESC}....
        </p>
        <a href={url} target="_blank" className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;