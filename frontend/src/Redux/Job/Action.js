import axios from "axios";

export const ADD_DATA = "ADD_DATA";
export const ISLOADING = "ISLOADING";
export const IS_ERROR = "IS_ERROR";
export const CURRENT_JOB_LOADING = "CURRENT_JOB_LOADING";
export const CURRENT_JOB_SUCCESS = "CURRENT_JOB_SUCCESS";
export const CURRENT_JOB_ERROR = "CURRENT_PRODUCT_ERROR";

export const AddJob = (payload) => {
  return {
    type: ADD_DATA,
    payload,
  };
};
export const handleLoading = () => {
  return {
    type: ISLOADING,
  };
};
export const handleError = () => {
  return {
    type: IS_ERROR,
  };
};
export const getData = (page, query) => (dispatch) => {
  console.log("sssss",query);
  dispatch(handleLoading());

  axios
    .get(`http://localhost:6001/jobs?page=${page}&query=${query}`)
    .then(function (response) {
      dispatch(AddJob(response.data.datas));
    })
    .catch(function (error) {
      dispatch(handleError);
      console.log(error);
    })
    .then(function () {});
};

export const handleCurrentJobLoading = () => ({
  type: CURRENT_JOB_LOADING,
});

export const handleCurrentJobError = () => ({
  type: CURRENT_JOB_ERROR,
});

export const handleCurrentJobSuccess = (payload) => ({
  type: CURRENT_JOB_SUCCESS,
  payload,
});

export const getCurrentJobData = (id) => (dispatch) => {
  dispatch(handleCurrentJobLoading());
  fetch(`http://localhost:6001/jobs/${id}`)
    .then((res) => res.json())
    .then((res) => dispatch(handleCurrentJobSuccess(res)))
    .catch(() => dispatch(handleCurrentJobError()));
};
