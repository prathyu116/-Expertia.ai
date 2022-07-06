import React from "react";
import { FaMoneyBillAlt, FaSuitcaseRolling } from "react-icons/fa";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Job = ({ itm }) => {
  const navigate = useNavigate()
  console.log(itm);
  return (
    <div className="col-lg-6 col-sm-12 mb-3 ">
      <div className="card shadow-sm" style={{ cursor: "pointer" }} onClick={() => navigate(`/job/${itm._id}`)}>
        <div className="card-body">
          <h5 className="card-title">{itm.role}</h5>
          <p className="card-text">{itm.companyname}</p>
          <p className="card-text">{itm.location}</p>
          <div className="container  d-flex  justify-content-start gap-5 align-items-center ">
            <span className="card-text d-flex justify-content-center align-items-center border border-success bg-secondary text-light p-1">
              {" "}
              <FaMoneyBillAlt />
              {itm.salary}
            </span>
            <span className="card-text d-flex justify-content-center align-items-center border border-success bg-secondary text-light p-1">
              {" "}
              <FaSuitcaseRolling />
              {itm.contract}
            </span>
          </div>
          <p className="col-200 text-truncate">{itm.Description}</p>
        </div>
        <div class="card-footer"> {moment(itm.createdAt).fromNow()}</div>
      </div>
    </div>
  );
};

export default Job;
// ,
