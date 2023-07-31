import React from "react";

const AccountIcon = () => {
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </button>
      <ul className="dropdown-menu dropdown-menu-lg-end">
        <li>
          <p className="ms-5 me-5">{localStorage.getItem("name")}</p>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            <a href="/profile" className="text-dark">
              Profile
            </a>
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button"  onClick={handleLogout}>
            <a href="/" className="text-danger">
              Logout
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AccountIcon;
