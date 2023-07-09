import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Reviews from "../Components/Reviews";
import Suggestions from "../Components/Suggestions";

const Deal = () => {
  const location = useLocation();
  const { deal } = location.state;

  const currentDate = new Date();
  const expiryDate = new Date(deal.deal_expiry_date);
  const remainingTime = expiryDate - currentDate;
  const remainingDate = new Date(remainingTime);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="container flex-grow-1 mt-3">
        <a href="/">Home</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>{" "}
        <a href={`/${deal.category_id}`}>{deal.category_name}</a>
        <div className="row">
          <div className="col-12 mt-3">
            <h1>{deal.deal_name}</h1>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>{" "}
              {deal.location}
            </p>
            <div className="row">
              <div className="col-8">
                <img
                  className="card-img-top img-fluid deal-img2"
                  src={deal.image}
                  alt={`${deal.deal_name}`}
                />
              </div>
              <div className="col-4">
                <p className="price">
                  <span className="text-decoration-line-through text-dark ">
                    ${deal.deal_price}{" "}
                  </span>
                  <span className="text-success m-2">
                    Discount Price: $
                    {deal.deal_price -
                      (deal.deal_discount / 100) * deal.deal_price}{" "}
                  </span>
                  <span className="bg-success text-light m-1 ps-2 pe-2">
                    {deal.deal_discount}% Off
                  </span>
                  <span>{/* {remainingDate} */}</span>
                </p>
                <p>
                  <button className="btn btn-outline-primary me-2">
                    Buy Now
                  </button>
                  <button className="btn btn-outline-primary me-2">
                    Add to Cart
                  </button>
                </p>
              </div>
            </div>
            `{" "}
            <div>
              <h3 className="">About the offer</h3>
              <p>{deal.deal_description}</p>
            </div>
            `
            <div>
              <h3 className="">Customer Reviews</h3>
              <Reviews deal={deal} />
            </div>
            <div>
              <h3 className="">More deals related to {deal.category_name}</h3>
              <Suggestions deal={deal} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Deal;
