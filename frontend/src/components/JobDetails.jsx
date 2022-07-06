import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaMoneyBillAlt, FaSuitcaseRolling } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentJobData } from "../Redux/Job/Action";
import moment from "moment";

const JobDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((store) => store.AllJoobs.currJob);
  const error = useSelector((store) => store.AllJoobs.error);
  const loading = useSelector((store) => store.AllJoobs.loading);

  useEffect(() => {
    if (id) {
      dispatch(getCurrentJobData(id));
    }
  }, [id, dispatch]);
  if (loading) {
    return (
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  if (error) {
    return <h1>Something went wrong...</h1>;
  }
  if (Object.keys(state).length === 0) {
    return <h2>Job {id} not found</h2>;
  }
  return (
    <div className="container">
      <div className="card shadow-sm mt-5" style={{ cursor: "pointer" }}>
        <div className="card-body">
          <h5 className="card-title">{state.role}</h5>
          <p style={{ color: "gray", fontSize: "10px" }}>
            {" "}
            <i>posted {moment(state.createdAt).fromNow()}</i>
          </p>
          <Link to={"/"} className="card-text">
            {state.companyname}
          </Link>
          <p className="card-text">{state.location}</p>

          <div className="">
            <h3>Job Details</h3>
            <li>{state.salary}</li>
            <li>{state.contract}</li>
            <li>{state.level}</li>
          </div>
          <div className="">
            <h3>Qualification</h3>
            {state &&
              state.Qualifications.map((quali) => {
                return <li>{quali}</li>;
              })}
          </div>
          <div className="">
            <h3>Full Job Description</h3>
            <p className="">{state.Description}</p>
          </div>
        </div>
        <div class="card-footer text-center">
          {" "}
          <button type="button" className="btn btn-primary w-50 ">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
