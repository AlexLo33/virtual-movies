import { AnyAction } from "@reduxjs/toolkit";
import * as ActionTypes from '../actions/types';

const initialState: SearchState = {
  query: '',
};

const searchReducer = (
  state = initialState, action: AnyAction
): SearchState => {
  switch (action.type) {
    case ActionTypes.SEARCH_MOVIE:
      return { query: action.query };
    case ActionTypes.CLEAN_SEARCH_MOVIE:
      return {...initialState };
  }
  return state;
};

export default searchReducer;