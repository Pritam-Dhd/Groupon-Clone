import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";

const Categoties = () => {
  const [category, setCategory] = useState([]);
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/get-categories`);
        const { data } = response;
        setCategory(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <li className="nav-item dropdown ">
      <a
        className="nav-link dropdown-toggle"
        href="/"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categories
      </a>
      <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
        
        {isLoading ? <Loading /> : 
        category.map((category, index) => (
          <li key={index}>
            <button
              className="dropdown-item text-dark"
              onClick={() => {
                navigate(`/${category.id}`);
              }}
            >
              {category.category_name}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Categoties;
