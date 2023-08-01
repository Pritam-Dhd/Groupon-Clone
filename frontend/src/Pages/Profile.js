import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg")`, 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-7">
              <div className="text-center">
                {selectedImage ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    width="300"
                    className="rounded-circle mt-3"
                    alt="profileImage"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="300"
                    fill="currentColor"
                    className="bi bi-person-circle mt-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                )}
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ marginTop: "10px" }}
                  />
                </div>
              </div>

              <div className="text-center mt-3">
                <h5 className="mt-2 mb-0">
                  Name: {localStorage.getItem("name")}
                </h5>
                <h5 className="mt-2 mb-0">
                  Email: {localStorage.getItem("email")}
                </h5>
                <button
                  type="button"
                  className="btn btn-primary m-4"
                  onClick={() => navigate(`/change-password`)}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
