// Components
import MainTitle from '../containers/MainTitle';
import Movies from '../containers/Movies';
import MovieSynopsis from '../containers/MovieSynopsis';

// Styles
import './styles/Main.scss';

const Main: React.FC = () => (
  <div className="Main">
    <MainTitle />
    <div className="content">
      <Movies />
      <MovieSynopsis />
    </div>
  </div>
);

export default Main;
