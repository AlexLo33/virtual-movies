import { connect, ConnectedProps } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import { Avatar } from '@mui/material';
import SearchRounded from '@mui/icons-material/SearchRounded';
import { Link } from "react-router-dom";

import { AppState } from '../store/store';

// Style
import './styles/Header.scss';

const mapStateToProps = (state: AppState) => {
  return {
    query: state.searchStore.query,
  }
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface StateProps extends PropsFromRedux {
  query: string;
};

type Props = StateProps

const Header: React.FC<Props> = ({ query }) => {
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
      <div className="title">
        <Link to="/">Virtual Movies</Link>
      </div>
      <div className="search">
        <SearchRounded sx={{ color: '#929292', mr: 1, my: 0.5 }} />
        <input type="text" placeholder="Search a movie..." value={query} onChange={handleSearch} />
      </div>
      <Avatar alt="Remy Sharp" src="images/avatar.png" sx={{ width: 60, height: 60 }} />
    </div>
  );
}

export default connector(Header);