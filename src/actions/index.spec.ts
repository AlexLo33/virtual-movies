import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from "axios-mock-adapter";
import { ThunkDispatch } from 'redux-thunk';

import {
  fetchMovies,
  searchMovie,
  onSelectMovie,
} from './index';
import * as ActionTypes from './types';
import { imdbApi } from '../constants';
import { AnyAction } from '@reduxjs/toolkit';

const mockStore = configureMockStore([thunk]);

describe('Actions', () => {
  let mock: any;
  const reduxStore= mockStore();

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  beforeEach(() => {
    reduxStore.clearActions();
  });

  afterEach(() => {
    mock.reset();
  });

  test('Action "onSelectMovie"', () => {
    const movie = { id: 1234, title: 'Movie test' } as IMovie;
    const expectedActions = [
      { type: ActionTypes.SELECT_MOVIE, movie },
    ];

    reduxStore.dispatch(onSelectMovie(movie));

    expect(reduxStore.getActions()).toEqual(expectedActions);
  });

  test('Action fetchMovies', async () => {
    const movies = [{ id: 1234, title: 'Movie test' } as IMovie];
    const expectedActions = [
      { type: ActionTypes.FETCH_MOVIES__START },
      { type: ActionTypes.CLEAR_SELECT_MOVIE },
      { type: ActionTypes.FETCH_MOVIES__SUCCESS, movies },
    ];
    mock.onGet(`${imdbApi}/discover/tv`).reply(200, { results: movies });

    await (reduxStore.dispatch as ThunkDispatch<{}, {}, AnyAction>)(fetchMovies());

    expect(reduxStore.getActions()).toEqual(expectedActions);
  });

  test.only('Action searchMovie - with an empty query', async () => {
    const movies = [{ id: 1234, title: 'Movie test' } as IMovie];
    const expectedActions = [
      { type: ActionTypes.SEARCH_MOVIE, query: '' },
      { type: ActionTypes.CLEAN_SEARCH_MOVIE },
      { type: ActionTypes.FETCH_MOVIES__START },
      { type: ActionTypes.CLEAR_SELECT_MOVIE },
      { type: ActionTypes.FETCH_MOVIES__SUCCESS, movies },
    ];
    mock.onGet(`${imdbApi}/discover/tv`).reply(200, { results: movies });

    await (reduxStore.dispatch as ThunkDispatch<{}, {}, AnyAction>)(searchMovie(''));
    expect(reduxStore.getActions()).toEqual(expectedActions);
  });

  test('Action searchMovie - with a query', async () => {
    const movies = [{ id: 1234, title: 'Movie test' } as IMovie];
    const expectedActions = [
      { type: ActionTypes.SEARCH_MOVIE, query: 'Mov' },
      { type: ActionTypes.FETCH_MOVIES__SUCCESS, movies },
      { type: ActionTypes.CLEAR_SELECT_MOVIE },
    ];
    mock.onGet(`${imdbApi}/search/movie`).reply(200, { results: movies });

    await (reduxStore.dispatch as ThunkDispatch<{}, {}, AnyAction>)(searchMovie('Mov'));

    expect(reduxStore.getActions()).toEqual(expectedActions);
  });
});