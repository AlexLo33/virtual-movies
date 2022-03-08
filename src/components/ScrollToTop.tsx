import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../store/store";

const mapStateToProps = (state: AppState) => {
  return {
    query: state.searchStore.query,
    movie: state.movieStore.movie,
  }
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface StateProps extends PropsFromRedux {
  children: JSX.Element
};

const ScrollToTop: React.FC<StateProps> = ({ query, movie, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query, movie]);

  return children;
}

export default connector(ScrollToTop);
