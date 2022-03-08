import { AnyAction } from '@reduxjs/toolkit';
import movieReducer from './movie';
import * as ActionTypes from '../actions/types';


describe('Movie Reducer', () => {
  test('Should return the initial state', () => {
    const emptyAction: AnyAction = {} as AnyAction;

    const state = movieReducer(undefined, emptyAction);

    expect(state).toEqual({ movie: null });
  });

  test('When called with SELECT_MOVIE Then it should returns a movie', () => {
    const action = {
      type: ActionTypes.SELECT_MOVIE,
      movie: { id: 1234, title: 'Movie test' } as IMovie,
    } as AnyAction;

    const state = movieReducer(undefined, action);

    expect(state).toEqual({ movie: action.movie });
  });

  test('With a defined state, When called with CLEAR_SELECT_MOVIE Then it should returns the initial state', () => {
    const currentState = {
      movie: { id: 1234, title: 'Movie test' } as IMovie,
    } as MovieState;

    const action = {
      type: ActionTypes.CLEAR_SELECT_MOVIE,
    } as AnyAction;

    const state = movieReducer(currentState, action);

    expect(state).toEqual({ movie: null });
  });
});