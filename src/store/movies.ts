import { AnyAction } from "@reduxjs/toolkit";
import * as ActionTypes from '../actions/types';

const initialState: MoviesState = {
  loading: false,
  movies: [],
  error: '',
};

const moviesReducer = (
  state = initialState, action: AnyAction
): MoviesState => {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIES__START:
      return { ...state, loading: true };
    case ActionTypes.FETCH_MOVIES__SUCCESS:
      return { ...state, loading: false, movies: [...action.movies] };
    case ActionTypes.FETCH_MOVIES__FAILURE:
      return { ...state, loading: false, error: action.error };
  }
  return state;
};

export default moviesReducer;