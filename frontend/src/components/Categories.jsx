import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="home">
        <div className="container">
            <div className="row gy-4 mt-2">
                <Link className="col col-md-5 mx-auto py-3 rounded shadow text-center" to="/Western">Western</Link>
                <Link className="col col-md-5 mx-auto py-3 rounded shadow text-center" to="/Asian">Asian</Link>
                <Link className="col col-md-5 mx-auto py-3 rounded shadow text-center" to="/Western">Indian</Link>
            </div>
        </div>
    </div>
  );
}