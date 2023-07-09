import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import Header from "../Components/Header";
import Loading from "../Components/Loading";
import Footer from "../Components/Footer";
import axios from "axios";

const CategoryDeal = () => {
  const { CategoryId } = useParams();
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const currentDate = new Date();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/deals/${CategoryId}`);
        const { data } = response;
        setDeals(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [CategoryId]);

  const activeDeals = deals.filter((deal) => {
    const expiryDate = new Date(deal.deal_expiry_date);
    return currentDate <= expiryDate;
  });

  return (
    <>
    <div className="d-flex flex-column min-vh-100">
    <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mt-5 mb-5 flex-grow-1">
          <div className="row justify-content-center">
            {activeDeals.length === 0 ? (
              <div className="col-12 text-center">
                <h2>No deals</h2>
              </div>
            ) : (
              activeDeals.map((deal, index) => {
                  return (
                    <div className="col-lg-3 col-sm-7 col-md-3 m-2" key={index}>
                      <Card deal={deal} />
                    </div>
                  );
                } 
              )
            )}
          </div>
        </div>
      )}
      <Footer/>
      </div>
    </>
  );
};

export default CategoryDeal;
