import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../store/store";

// Components
import Movie from './Movie';

// Styles
import './styles/Movies.scss';

const mapStateToProps = (state: AppState) => {
  return {
    movies: state.moviesStore.movies,
  }
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface StateProps extends PropsFromRedux {
  movies: IMovie[];
};

const Movies: React.FC<StateProps> = ({ movies }) => {
  return (
    <div className="Movies">
      {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
    </div>
  );
};

export default connector(Movies);