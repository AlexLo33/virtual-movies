import { AnyAction } from '@reduxjs/toolkit';
import searchReducer from './search';
import * as ActionTypes from '../actions/types';


describe('Search Reducer', () => {
  test('Should return the initial state', () => {
    const emptyAction: AnyAction = {} as AnyAction;

    const state = searchReducer(undefined, emptyAction);

    expect(state).toEqual({
      query: '',
    });
  });

  test('When called with SEARCH_MOVIE Then it should set the query string', () => {
    const action = {
      type: ActionTypes.SEARCH_MOVIE,
      query: 'Virtual'
    } as AnyAction;

    const state = searchReducer(undefined, action);

    expect(state).toEqual({ query: action.query });
  });
});