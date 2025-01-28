import React from "react";
import { Link } from "react-router";

function HomePage() {
  return <div className="px-10 py-10">
    <Link to="/admin/dashboard">
      <button className="text-4xl font-bold px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg duration-300 hover:duration-300 hover:scale-110">Visit Admin dashboard</button>
    </Link>
  </div>


}

export default HomePage;
