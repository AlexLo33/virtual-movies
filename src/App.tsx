import React, { useEffect } from 'react';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import { useSearchParams } from "react-router-dom";

// Actions
import { fetchMovies, searchMovie } from './actions';

// Components
import Header from './containers/Header';
import Main from './components/Main';
import Footer from './components/Footer';


// Connector Reduw
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    fetchMovies: async () => {
      await dispatch(fetchMovies());
    },
    searchMovie: async (query) => {
      await dispatch(searchMovie(query));
    }
  }
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface DispatchProps {
  fetchMovies: () => void
  searchMovie: (query: string) => void
}

type Props = PropsFromRedux & DispatchProps

const App: React.FC<Props> = ({ fetchMovies, searchMovie }) => {
  let [searchParams] = useSearchParams();
  const queryParams = searchParams.get('query');

  useEffect(() => {
    searchMovie(queryParams || '');
  }, [queryParams, searchMovie]);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default connector(App);
