import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import axios from "axios";
import Card from "../Components/Card";
import Loading from "../Components/Loading";
import Footer from "../Components/Footer";

const Home = () => {
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const currentDate = new Date();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/get-deals");
        const { data } = response;
        setDeals(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <div className="d-flex flex-column min-vh-100">
    <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mt-5 mb-5 flex-grow-1">
          <div className="row justify-content-evenly">
            {deals.map((deal, index) => {
              const expiryDate = new Date(deal.deal_expiry_date);
              if (currentDate <= expiryDate) {
                return (
                  <div className="col-lg-3 col-sm-7 col-md-3 m-2" key={index}>
                    <Card deal={deal} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      )}
      <Footer />
      </div>
      
    </>
  );
};

export default Home;
