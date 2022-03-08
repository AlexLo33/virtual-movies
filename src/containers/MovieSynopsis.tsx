import { ThunkDispatch } from "@reduxjs/toolkit";
import moment from "moment";
import { connect, ConnectedProps } from "react-redux";
import MovieFilterRoundedIcon from '@mui/icons-material/MovieFilterRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// Misc
import { AppState } from "../store/store";
import { clearSelectedMovie } from "../actions";
import { imageUrl } from "../constants";

// Styles
import './styles/MovieSynopsis.scss';

const mapStateToProps = (state: AppState) => {
  return {
    movie: state.movieStore.movie,
  }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    clearSelectedMovie: async () => {
      await dispatch(clearSelectedMovie());
    }
  }
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface StateProps extends PropsFromRedux {
  movie: IMovie | null;
};

interface DispatchProps {
  clearSelectedMovie: () => void
};

type Props = StateProps & DispatchProps

const EmptyMovie: React.FC = () => (
  <div className="MovieSynopsis empty">
    Please a choose a movie from the list...
  </div>
);

const MovieSynopsis: React.FC<Props> = ({ movie, clearSelectedMovie }) => {
  if (!movie) return (<EmptyMovie />);

  const posterUrl = movie.backdrop_path ? `${imageUrl}${movie.backdrop_path}` : 'images/default_poster.jpg';
  const movieName = movie.title || movie.name;
  const releaseDate = moment(movie.first_air_date || movie.release_date).format('YYYY');

  return (
    <div className="MovieSynopsis">
      <div className="close-synopsis" onClick={() => clearSelectedMovie()}>
        <CloseRoundedIcon fontSize="large" sx={{ color: '#c7c7c7', ml: '25px', mt: '-25px' }} />
      </div>
      <img className="poster" src={posterUrl} alt={movieName} />
      <div className="content">
        <div className="title">{movieName}</div>
        <div className="infos">
          <span>{releaseDate}</span>
          &#x25cf;
          <span className="rating">
            <MovieFilterRoundedIcon fontSize="small" sx={{ mx: .5 }} />
            {movie.vote_average}
          </span>
        </div>
        <div className="description">{movie.overview}</div>
      </div>
    </div>
  );
}

export default connector(MovieSynopsis);
