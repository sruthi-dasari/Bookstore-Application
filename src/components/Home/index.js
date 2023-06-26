import { Link } from "react-router-dom";
import Header from "../Header";

import "./index.css";

const Home = () => {
  console.log("In Homepage");
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Don't judge a book by its cover</h1>
          <img
            src=""
            alt="don't judge a book by its cover"
            className="home-mobile-img"
          />
          <p className="home-description">
            A book is a medium for recording information in the form of writing
            or images, typically composed of many pages (made of papyrus,
            parchment, vellum, or paper) bound together and protected by a
            cover.
          </p>
          <Link to="/products">
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src=""
          alt="don't judge a book by its cover"
          className="home-desktop-img"
        />
      </div>
    </>
  );
};

export default Home;
