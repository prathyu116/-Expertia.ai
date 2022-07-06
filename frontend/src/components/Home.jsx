import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getData } from "../Redux/Job/Action";
import Job from "./Job";

export const Home = () => {
  const [searchPrams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(Number(searchPrams.get("page") || 1));
  const [query, setQuery] = useState(searchPrams.get("query") || "");

  const dispatch = useDispatch();
  const state = useSelector((store) => store.AllJoobs.jobs);
  const error = useSelector((store) => store.AllJoobs.error);
  const loading = useSelector((store) => store.AllJoobs.loading);

  useEffect(() => {
    setSearchParams({ page, query });
    dispatch(getData(page, query));
  }, [page, query, setSearchParams]);
  return (
    <div className="container mt-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <input
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                type="text"
                className="form-control"
                style={{ height: "50px" }}
                placeholder="Search job By Role...Eg:React "
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <h2>Something Went Wrong</h2>
        ) : (
          <div className="row ">
            {state.map((itm) => {
              return <Job itm={itm} />;
            })}
          </div>
        )}
      </div>
      <p className="text-center h6 my-3">Page: {page} </p>

      <div className="d-flex justify-content-center">
        <button disabled={page === 1 ? true : false} onClick={() => setPage(page - 1)} className="btn btn-outline-success mx-2">
          Prev
        </button>
        <button onClick={() => setPage(page + 1)} className="btn btn-outline-success mx-2 ">
          Next
        </button>
      </div>
    </div>
  );
};
