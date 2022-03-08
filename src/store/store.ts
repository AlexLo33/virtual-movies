import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './movies';
import searchReducer from './search';
import movieReducer from './movie';

export interface AppState {
  moviesStore: MoviesState
  searchStore: SearchState
  movieStore: MovieState
}

const store = combineReducers<AppState>({
  moviesStore: moviesReducer,
  searchStore: searchReducer,
  movieStore: movieReducer,
});

export default store;
