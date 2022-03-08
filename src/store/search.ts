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
  }
  return state;
};

export default searchReducer;