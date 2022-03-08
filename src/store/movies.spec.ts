import { AnyAction } from '@reduxjs/toolkit';
import moviesReducer from './movies';
import * as ActionTypes from '../actions/types';


describe('Movies Reducer', () => {
  test('Should return the initial state', () => {
    const emptyAction: AnyAction = {} as AnyAction;

    const state = moviesReducer(undefined, emptyAction);

    expect(state).toEqual({
      loading: false,
      movies: [],
      error: '',
    });
  });

  test('When called with FETCH_MOVIES__START Then it should set loading to true', () => {
    const action = {
      type: ActionTypes.FETCH_MOVIES__START,
    } as AnyAction;

    const state = moviesReducer(undefined, action);

    expect(state).toEqual(expect.objectContaining({ loading: true }));
  });

  test('When called with FETCH_MOVIES__SUCCESS Then it should set loading to false and returns a list of movies', () => {
    const currentState = {
      loading: true,
      movies: [],
      error: '',
    };

    const action = {
      type: ActionTypes.FETCH_MOVIES__SUCCESS,
      movies: [{ id: 1234, title: 'Movie test' } as IMovie],
    } as AnyAction;

    const state = moviesReducer(currentState, action);

    expect(state).toEqual(expect.objectContaining({
      loading: false,
      movies: expect.arrayContaining(action.movies),
    }));
  });

  test('When called with FETCH_MOVIES__FAILURE Then it should set the error message', () => {
    const action = {
      type: ActionTypes.FETCH_MOVIES__FAILURE,
      error: 'Error while fetching movies',
    } as AnyAction;

    const state = moviesReducer(undefined, action);

    expect(state).toEqual(expect.objectContaining({
      error: action.error,
    }));
  });
});