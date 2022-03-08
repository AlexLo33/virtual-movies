import { AnyAction } from "@reduxjs/toolkit";
import * as ActionTypes from '../actions/types';

const initialState: MovieState = {
  movie: null
};

const movieReducer = (
  state = initialState, action: AnyAction
): MovieState => {
  switch (action.type) {
    case ActionTypes.SELECT_MOVIE:
      return { movie: { ...action.movie } };
    case ActionTypes.CLEAR_SELECT_MOVIE:
      return { ...initialState };
  }
  return state;
};

export default movieReducer;