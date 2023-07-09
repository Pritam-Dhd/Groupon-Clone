import React, { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import axios from "axios";

const Reviews = ({ deal }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/reviews/${deal.id}`);
        const { data } = response;
        setReviews(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [deal]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="row">
            {reviews.map((review, index) => (
              <div className="col-12 mb-3" key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle me-2" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>

                {review.written_by}
                <div>
                  {[...Array(review.rating)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#ffc120"
                      className="bi bi-star-fill me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                </div>

                {review.comment}
                <p><span className="posted">Posted in :</span>  {review.created}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
