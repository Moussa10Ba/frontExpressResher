import React from 'react';
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column  justify-content-center mt-5 ">
      <div className="text-center mt-5">
        <h1 className="text-danger mt-5  display-2 fw-bold">404</h1>
        <h2 className="text-dark">Page Not Found</h2>
        <p className="text-secondary fw-bold mt-3">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to={"/"}
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;