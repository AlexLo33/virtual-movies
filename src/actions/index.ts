import { AnyAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import * as ActionTypes from './types';
import { imdbApi, apiKey } from '../constants';

const startSearchMovie = (query: string) => ({
  type: ActionTypes.SEARCH_MOVIE,
  query,
});

const startFetchMovie = () => ({
  type: ActionTypes.FETCH_MOVIES__START,
});

const successFetchMovies = (movies: IMovie[]) => ({
  type: ActionTypes.FETCH_MOVIES__SUCCESS,
  movies,
});

const errorFetchMovies = (err: string) => ({
  type: ActionTypes.FETCH_MOVIES__FAILURE,
  err,
});

export const fetchMovies = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      dispatch(startFetchMovie());
      dispatch(clearSelectedMovie());
      const result = await axios({
        method: 'get',
        url: `${imdbApi}/discover/tv`,
        params: {
          api_key: apiKey,
        },
      });
      dispatch(successFetchMovies(result.data.results));
    } catch (err: any) {
      dispatch(errorFetchMovies(err.message));
    }
  };
};

export const searchMovie = (query: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(startSearchMovie(query));
    if (query.length === 0) {
      // Input is cleaned
      await dispatch(fetchMovies());
    } else {
      try {
        const result = await axios({
          method: 'get',
          url: `${imdbApi}/search/movie`,
          params: {
            api_key: apiKey,
            query
          },
        });
        dispatch(successFetchMovies(result.data.results));
        dispatch(clearSelectedMovie());
      } catch (err: any) {
        dispatch(errorFetchMovies(err.message));
      }
    }
  };
};

export const onSelectMovie = (movie: IMovie) => ({
  type: ActionTypes.SELECT_MOVIE,
  movie,
});

export const clearSelectedMovie = () => ({
  type: ActionTypes.CLEAR_SELECT_MOVIE,
});
