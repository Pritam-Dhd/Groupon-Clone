import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Components/Loading";
import Card from "./Card";

const Suggestions = ({ deal }) => {
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const currentDate = new Date();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/deals/${deal.category_id}`);
        const { data } = response;
        setDeals(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [deal.category_id]);

  const activeDeals = deals.filter((deals) => {
    const expiryDate = new Date(deals.deal_expiry_date);
    return currentDate <= expiryDate && deals.id !== deal.id;
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mt-5 mb-5 flex-grow-1">
          <div className="row justify-content-start">
            {activeDeals.length === 0 ? (
              <div className="col-12 text-center">
                <h3>No deals</h3>
              </div>
            ) : (
              activeDeals.slice(0, 5).map((deal, index) => (
                <div className="col-lg-3 col-sm-7 col-md-3 m-2" key={index}>
                  <Card deal={deal} />
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Suggestions;
