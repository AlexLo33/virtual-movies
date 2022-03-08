import { ThunkDispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import moment from 'moment';
import MovieFilterRoundedIcon from '@mui/icons-material/MovieFilterRounded';

// Actions
import { onSelectMovie } from '../actions';

// Misc
import { imageUrl } from '../constants';

// Styles
import './styles/Movie.scss';

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    onSelectMovie: async (movie) => {
      await dispatch(onSelectMovie(movie));
    }
  }
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface StateProps extends PropsFromRedux {
  movie: IMovie
}

interface DispatchProps {
  onSelectMovie: (movie: IMovie) => void
};

type Props = StateProps & DispatchProps

const Movie: React.FC<Props> = ({ movie, onSelectMovie }) => {
  const posterUrl = movie.poster_path ? `${imageUrl}${movie.poster_path}` : 'images/default_poster.jpg';
  const movieName = movie.title || movie.name;
  const releaseDate = moment(movie.first_air_date || movie.release_date).format('DD/MM/YYYY');

  return (
    <div className="Movie" onClick={() => onSelectMovie(movie)}>
      <img className="poster" src={posterUrl} alt={movieName} />
      <div className="vote-average">
        <MovieFilterRoundedIcon fontSize="small" sx={{ mx: .5 }} />
        <span>{movie.vote_average}</span>
      </div>
      <div className="title">{movieName}</div>
      <div className="first-air">{releaseDate}</div>
    </div>
  );
}

export default connector(Movie);
