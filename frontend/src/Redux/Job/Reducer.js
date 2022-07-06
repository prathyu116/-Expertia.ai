import {ISLOADING,IS_ERROR,ADD_DATA,CURRENT_JOB_ERROR,CURRENT_JOB_LOADING,CURRENT_JOB_SUCCESS} from "./Action";
const initState = {
  loading: false,
  error: false,
  jobs: [],
  currJob: {},
};

export const jobtReducer = (state = initState, action) => {
  switch (action.type) {
    case ISLOADING:
      return { ...state, loading: true };
    case IS_ERROR:
      return { ...state, error: true };
    case ADD_DATA:
      return { ...state, loading: false, error: false, jobs: action.payload };
    case CURRENT_JOB_LOADING:
      return { ...state, loading: true };
    case CURRENT_JOB_ERROR:
      return { ...state, error: true };
    case CURRENT_JOB_SUCCESS:
      return { ...state, loading: false, error: false, currJob: action.payload };
    default:
      return state;
  }
};
