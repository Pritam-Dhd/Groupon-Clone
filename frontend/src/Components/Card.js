import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ deal }) => {
  let navigate = useNavigate();
  
  return (
    <div
      className={`card mt-2 mb-4}`}
      onClick={() => {
        navigate(`/deal/${deal.deal_name}`, { state: { deal } });
      }}
    >
      <img
        className="card-img-top img-fluid deal-img"
        src={deal.image}
        alt={`deal`}
      />
      <div className="card-body">
        <p className="deal_name">{deal.deal_name}</p>
        <p className="location">{deal.location}</p>
        <p className="price">
          <span className="text-decoration-line-through text-dark ">
            ${deal.deal_price}{" "}
          </span>
          <span className="text-success m-2">
            ${(deal.deal_price - (deal.deal_discount / 100) * deal.deal_price).toFixed(2)}{" "}
          </span>
          <span className="bg-success text-light m-1 ps-2 pe-2  ">
            {deal.deal_discount}% Off
          </span>
        </p>

        <p className="deal_expiry_date text-danger">
          Offer Ends on : {deal.deal_expiry_date}
        </p>
      </div>
    </div>
  );
};

export default Card;
