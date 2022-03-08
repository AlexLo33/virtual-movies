import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useSearchParams } from "react-router-dom";
import { Avatar } from '@mui/material';
import SearchRounded from '@mui/icons-material/SearchRounded';
import { AppState } from '../store/store';

// Actions
import { searchMovie } from '../actions';

// Style
import './styles/Header.scss';

const mapStateToProps = (state: AppState) => {
  return {
    query: state.searchStore.query,
  }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    searchMovie: async (query) => {
      await dispatch(searchMovie(query));
    }
  }
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface StateProps extends PropsFromRedux {
  query: string;
};

interface DispatchProps {
  searchMovie: (query: string) => void
};

type Props = StateProps & DispatchProps

const Header: React.FC<Props> = ({ query, searchMovie }) => {
  let [, setSearchParams] = useSearchParams();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    if (searchValue.length === 0) {
      setSearchParams({});
    } else {
      setSearchParams({ query: searchValue });
    }
  };

  return (
    <div className="Header">
      <div className="title">Virtual Movies</div>
      <div className="search">
        <SearchRounded sx={{ color: '#929292', mr: 1, my: 0.5 }} />
        <input type="text" placeholder="Search a movie..." defaultValue={query} onChange={handleSearch} />
      </div>
      <Avatar alt="Remy Sharp" src="images/avatar.png" sx={{ width: 60, height: 60 }} />
    </div>
  );
}

export default connector(Header);